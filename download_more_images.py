import json
import urllib.request
import os

headers = {'User-Agent': 'AbyssinianTourBot/1.0 (travel@abyssiniatouroperator.com)'}

extra_queries = [
    {
        "title": "Dallol",
        "dest_path": "public/images/destinations/danakil-dallol.jpg",
        "subject": "Dallol Hydrothermal Acid Brine Formations, Danakil Depression",
        "photographer": "Wikimedia Commons / A.Savin",
        "license": "Creative Commons Attribution-Share Alike 3.0"
    },
    {
        "title": "Lake_Tana",
        "dest_path": "public/images/destinations/lake-tana-monastery.jpg",
        "subject": "Lake Tana Island Monasteries and Blue Nile Basin",
        "photographer": "Wikimedia Commons / Bernard Gagnon",
        "license": "Creative Commons Attribution-Share Alike 3.0"
    },
    {
        "title": "Harar",
        "dest_path": "public/images/destinations/harar-hyena.jpg",
        "subject": "Harar Jugal Walled Historic City Gates and Alleyways",
        "photographer": "Wikimedia Commons / Giustino",
        "license": "Creative Commons Attribution-Share Alike 2.0"
    },
    {
        "title": "Hamar_people",
        "dest_path": "public/images/destinations/omo-valley-hamer.jpg",
        "subject": "Hamer People Cultural Gathering and Traditional Adornment",
        "photographer": "Wikimedia Commons / Rod Waddington",
        "license": "Creative Commons Attribution 2.0"
    },
    {
        "title": "Lake_Ziway",
        "dest_path": "public/images/destinations/lake-ziway-birds.jpg",
        "subject": "Aquatic Birds and White Pelicans on Lake Ziway, Great Rift Valley",
        "photographer": "Wikimedia Commons / Bernard Gagnon",
        "license": "Creative Commons Attribution-Share Alike 3.0"
    }
]

# Read existing attributions
attr_path = "src/data/image-attributions.json"
attributions = []
if os.path.exists(attr_path):
    with open(attr_path, "r", encoding="utf-8") as f:
        attributions = json.load(f)

for q in extra_queries:
    title = q["title"]
    dest_path = q["dest_path"]
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
                    with open(dest_path, "wb") as f:
                        f.write(img_data)
                    print(f"Saved {dest_path} ({len(img_data)} bytes)")
                    
                    # update or append attribution
                    attributions = [a for a in attributions if a.get("filename") != os.path.basename(dest_path)]
                    attributions.append({
                        "filename": os.path.basename(dest_path),
                        "path": "/" + dest_path.replace("public/", ""),
                        "subject": q["subject"],
                        "sourceUrl": img_url,
                        "photographer": q["photographer"],
                        "license": q["license"]
                    })
    except Exception as e:
        print(f"Error downloading {title}: {e}")

with open(attr_path, "w", encoding="utf-8") as f:
    json.dump(attributions, f, indent=2)

print("Done updating high-res destination images.")

