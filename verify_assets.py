import urllib.request
import re

base = 'http://localhost:4321'
pages = [
    '/',
    '/about-us/',
    '/tours/',
    '/tours/8-day-historic-north-lalibela-unesco-circuit/',
    '/destinations/',
    '/travel-guide/',
    '/b2b/',
    '/contact-us/',
    '/image-attributions/'
]

all_images = set()

for p in pages:
    with urllib.request.urlopen(base + p) as resp:
        content = resp.read().decode('utf-8')
        found = re.findall(r'src=["\'](/images/[^"\']+)["\']', content)
        for f in found:
            all_images.add(f)

print(f"Scanned {len(pages)} pages. Total unique image assets found: {len(all_images)}")

broken = 0
for img in sorted(all_images):
    try:
        req = urllib.request.urlopen(base + img)
        if req.status != 200:
            print(f"FAILED ({req.status}): {img}")
            broken += 1
    except Exception as e:
        print(f"ERROR: {img} -> {e}")
        broken += 1

if broken == 0:
    print("ALL 100% OF REFERENCED IMAGES LOADED SUCCESSFULLY WITH HTTP 200 OK!")
else:
    print(f"Total broken images: {broken}")

