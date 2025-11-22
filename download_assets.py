import os
import re
import urllib.request
import shutil

# Paths
BASE_DIR = '/Users/pradeepverkiya/portfolio'
HTML_FILE = os.path.join(BASE_DIR, 'original.html')
CSS_FILE = os.path.join(BASE_DIR, 'css/styles.css')
OUTPUT_HTML = os.path.join(BASE_DIR, 'index.html')
IMAGES_DIR = os.path.join(BASE_DIR, 'assets/images')
FONTS_DIR = os.path.join(BASE_DIR, 'assets/fonts')

# Create directories
os.makedirs(IMAGES_DIR, exist_ok=True)
os.makedirs(FONTS_DIR, exist_ok=True)

def download_file(url, dest_folder):
    if not url.startswith('http'):
        return None
    
    filename = url.split('/')[-1].split('?')[0]
    # Clean filename
    filename = re.sub(r'[^a-zA-Z0-9._-]', '_', filename)
    dest_path = os.path.join(dest_folder, filename)
    
    if os.path.exists(dest_path):
        return filename

    try:
        print(f"Downloading {url} to {dest_path}")
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response, open(dest_path, 'wb') as out_file:
            shutil.copyfileobj(response, out_file)
        return filename
    except Exception as e:
        print(f"Failed to download {url}: {e}")
        return None

def process_html():
    with open(HTML_FILE, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find images in img tags
    # Regex for src="..."
    img_srcs = re.findall(r'src=["\'](https?://[^"\']+)["\']', content)
    
    # Also look for srcset
    img_srcsets = re.findall(r'srcset=["\']([^"\']+)["\']', content)

    # Look for link hrefs (favicons, etc)
    link_hrefs = re.findall(r'<link[^>]+href=["\'](https?://[^"\']+)["\']', content)
    
    replacements = {}

    all_urls = img_srcs + link_hrefs

    for url in all_urls:
        if 'cdn.prod.website-files.com' in url or 'uploads-ssl.webflow.com' in url:
            filename = download_file(url, IMAGES_DIR)
            if filename:
                replacements[url] = f'assets/images/{filename}'

    # Handle srcset - this is trickier, usually comma separated url size
    # For now, we'll just download the URLs found in srcset but might not replace them perfectly without parsing
    # A simple approach: just replace the URLs in the content string
    for srcset in img_srcsets:
        parts = srcset.split(',')
        for part in parts:
            part = part.strip()
            if not part: continue
            url = part.split(' ')[0]
            if 'cdn.prod.website-files.com' in url or 'uploads-ssl.webflow.com' in url:
                filename = download_file(url, IMAGES_DIR)
                if filename:
                    replacements[url] = f'assets/images/{filename}'

    # Replace in content
    new_content = content
    for url, local_path in replacements.items():
        new_content = new_content.replace(url, local_path)

    # Also update CSS link
    new_content = new_content.replace('https://cdn.prod.website-files.com/622fbc5a718ac3417fcd3d75/css/developertemplate.webflow.0f18d835b.css', 'css/styles.css')
    new_content = new_content.replace('https://cdn.prod.website-files.com/622fbc5a718ac3417fcd3d75/js/webflow.8faae2f91.js', 'js/webflow.js')
    
    # Remove the integrity check for jquery if it causes issues, or just leave it. 
    # The original HTML has a jquery link: https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=622fbc5a718ac3417fcd3d75
    # We should probably download that too or leave it as CDN. I'll leave it as CDN for now unless requested.

    with open(OUTPUT_HTML, 'w', encoding='utf-8') as f:
        f.write(new_content)

def process_css():
    if not os.path.exists(CSS_FILE):
        return

    with open(CSS_FILE, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find urls in css
    urls = re.findall(r'url\((["\']?)(https?://[^"\')]+)\1\)', content)
    
    replacements = {}
    
    for quote, url in urls:
        # Determine if it's an image or font
        ext = url.split('.')[-1].lower()
        if '?' in ext: ext = ext.split('?')[0]
        
        if ext in ['jpg', 'jpeg', 'png', 'svg', 'gif', 'webp']:
            dest_dir = IMAGES_DIR
            rel_path = '../assets/images/'
        elif ext in ['ttf', 'otf', 'woff', 'woff2', 'eot']:
            dest_dir = FONTS_DIR
            rel_path = '../assets/fonts/'
        else:
            dest_dir = IMAGES_DIR # Default
            rel_path = '../assets/images/'

        filename = download_file(url, dest_dir)
        if filename:
            replacements[url] = f'{rel_path}{filename}'

    new_content = content
    for url, local_path in replacements.items():
        new_content = new_content.replace(url, local_path)

    with open(CSS_FILE, 'w', encoding='utf-8') as f:
        f.write(new_content)

if __name__ == '__main__':
    process_html()
    process_css()
