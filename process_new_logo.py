import os
import urllib.request
import json
from PIL import Image, ImageFilter

headers = {'User-Agent': 'AbyssinianTourBot/1.0 (info@abyssiniantouroperator.com)'}

uploaded = r'C:/Users/HP/.gemini/antigravity/brain/9d445047-c31b-4bc3-a460-0990ba3e614a/.user_uploaded'

# 1. Process Logo Full (media_1793781016378_8092b59a.jpg)
logo_img = Image.open(os.path.join(uploaded, 'media_1793781016378_8092b59a.jpg')).convert('RGBA')

# Crop to artwork bounds (30, 36, 995, 435)
crop_full = logo_img.crop((30, 36, 995, 435))

# Make white background transparent
pixels = crop_full.load()
width, height = crop_full.size
for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]
        # if near white, make transparent with smooth transition
        if r > 240 and g > 240 and b > 240:
            pixels[x, y] = (255, 255, 255, 0)
        elif r > 220 and g > 220 and b > 220:
            alpha = int(255 * (1 - (min(r, g, b) - 220) / 25.0))
            pixels[x, y] = (r, g, b, max(0, min(255, alpha)))

os.makedirs('public/images/logo', exist_ok=True)
crop_full.save('public/images/logo/abyssinian-logo-full.png', format='PNG')
crop_full.save('public/images/logo/logo.png', format='PNG')
print("Saved transparent full logo: (width, height) =", crop_full.size)

# 2. Process Logo Emblem (media_1793780111478_12327951.jpg)
emblem_img = Image.open(os.path.join(uploaded, 'media_1793780111478_12327951.jpg')).convert('RGBA')
crop_emblem = emblem_img.crop((15, 9, 560, 561))

epixels = crop_emblem.load()
ewidth, eheight = crop_emblem.size
for y in range(eheight):
    for x in range(ewidth):
        r, g, b, a = epixels[x, y]
        if r > 242 and g > 242 and b > 242:
            epixels[x, y] = (255, 255, 255, 0)
        elif r > 220 and g > 220 and b > 220:
            alpha = int(255 * (1 - (min(r, g, b) - 220) / 25.0))
            epixels[x, y] = (r, g, b, max(0, min(255, alpha)))

crop_emblem.save('public/images/logo/abyssinian-logo-emblem.png', format='PNG')
crop_emblem.resize((64, 64), Image.Resampling.LANCZOS).save('public/favicon.png', format='PNG')
print("Saved transparent emblem & favicon: (width, height) =", crop_emblem.size)

# 3. Download High-Res Dallol and Karo
wiki_downloads = [
    {
        "title": "Dallol",
        "save_path": "public/images/destinations/danakil-dallol.jpg"
    },
    {
        "title": "Karo_people",
        "save_path": "public/images/destinations/omo-valley-karo.jpg"
    }
]

for item in wiki_downloads:
    title = item["title"]
    save_path = item["save_path"]
    url = f"https://en.wikipedia.org/w/api.php?action=query&titles={title}&prop=pageimages&format=json&pithumbsize=1280"
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=12) as resp:
            data = json.loads(resp.read().decode())
            pages = data['query']['pages']
            img_url = None
            for pid in pages:
                if 'thumbnail' in pages[pid]:
                    img_url = pages[pid]['thumbnail']['source']
                    break
            if img_url:
                print(f"Downloading {title} from {img_url}...")
                img_req = urllib.request.Request(img_url, headers=headers)
                with urllib.request.urlopen(img_req, timeout=15) as img_resp:
                    img_data = img_resp.read()
                    with open(save_path, "wb") as f:
                        f.write(img_data)
                    print(f"Saved {save_path} ({len(img_data)} bytes)")
    except Exception as e:
        print(f"Error downloading {title}: {e}")

print("Logo and high-res image tasks completed.")

