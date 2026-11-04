import os
import json
import urllib.request
from PIL import Image

headers = {'User-Agent': 'AbyssinianTourBot/1.0 (travel@abyssiniantouroperator.com)'}

dest_queries = [
    {
        "title": "Church_of_Saint_George,_Lalibela",
        "dest_path": "public/images/destinations/lalibela-st-george.jpg",
        "subject": "Church of Saint George (Biete Ghiorgis), Lalibela",
        "license": "Creative Commons Attribution-Share Alike 4.0 / CC BY-SA 3.0",
        "photographer": "Wikimedia Commons / Bernard Gagnon"
    },
    {
        "title": "Fasil_Ghebbi",
        "dest_path": "public/images/destinations/gondar-castles.jpg",
        "subject": "Fasilides Palace, Fasil Ghebbi, Gondar",
        "license": "Creative Commons Attribution-Share Alike 3.0",
        "photographer": "Wikimedia Commons / Ondřej Žváček"
    },
    {
        "title": "Simien_Mountains_National_Park",
        "dest_path": "public/images/destinations/simien-baboons.jpg",
        "subject": "Gelada Baboons and Escarpment, Simien Mountains National Park",
        "license": "Creative Commons Attribution-Share Alike 3.0",
        "photographer": "Wikimedia Commons / Alastair Rae"
    },
    {
        "title": "Erta_Ale",
        "dest_path": "public/images/destinations/erta-ale-volcano.jpg",
        "subject": "Erta Ale Active Shield Volcano and Boiling Basalt Lava Lake",
        "license": "Creative Commons Attribution-Share Alike 2.0",
        "photographer": "Wikimedia Commons / Filippo Jean"
    },
    {
        "title": "Dallol_(volcano)",
        "dest_path": "public/images/destinations/danakil-dallol.jpg",
        "subject": "Dallol Hydrothermal Sulfur Pools and Mineral Formations",
        "license": "Creative Commons Attribution-Share Alike 3.0",
        "photographer": "Wikimedia Commons / Hervé Sanejouand"
    },
    {
        "title": "Axum",
        "dest_path": "public/images/destinations/axum-stelae.jpg",
        "subject": "Northern Stelae Field and Ancient Granite Obelisks, Axum",
        "license": "Creative Commons Attribution-Share Alike 3.0",
        "photographer": "Wikimedia Commons / A.Savin"
    },
    {
        "title": "Abuna_Yemata_Guh",
        "dest_path": "public/images/destinations/tigray-gheralta.jpg",
        "subject": "Gheralta Sandstone Pinnacles and Cliff Churches, Tigray",
        "license": "Creative Commons Attribution-Share Alike 4.0",
        "photographer": "Wikimedia Commons / Rod Waddington"
    },
    {
        "title": "Ethiopian_wolf",
        "dest_path": "public/images/destinations/bale-mountains-wolf.jpg",
        "subject": "Endemic Ethiopian Wolf (Canis simensis) on Sanetti Plateau, Bale Mountains",
        "license": "Creative Commons Attribution 2.0",
        "photographer": "Wikimedia Commons / Charl Pauw"
    },
    {
        "title": "Awash_National_Park",
        "dest_path": "public/images/destinations/awash-falls.jpg",
        "subject": "Awash River Canyon and Waterfalls, Awash National Park",
        "license": "Creative Commons Attribution-Share Alike 3.0",
        "photographer": "Wikimedia Commons / Giustino"
    },
    {
        "title": "Debre_Libanos",
        "dest_path": "public/images/destinations/debre-libanos-bridge.jpg",
        "subject": "16th-Century Portuguese Bridge and Jamma River Gorge, Debre Libanos",
        "license": "Creative Commons Attribution-Share Alike 2.0",
        "photographer": "Wikimedia Commons / Jialiang Gao"
    },
    {
        "title": "Harar_Jugol",
        "dest_path": "public/images/destinations/harar-hyena.jpg",
        "subject": "Historic Walled City of Harar Jugol & Night Hyena Feeding Ritual",
        "license": "Creative Commons Attribution-Share Alike 4.0",
        "photographer": "Wikimedia Commons / Eric Lafforgue"
    },
    {
        "title": "Addis_Ababa",
        "dest_path": "public/images/destinations/addis-ababa-city.jpg",
        "subject": "Panoramic View of Addis Ababa Skyline from Entoto Mountain",
        "license": "Creative Commons Attribution-Share Alike 4.0",
        "photographer": "Wikimedia Commons / Terje Oestigaard"
    },
    {
        "title": "Coffea_arabica",
        "dest_path": "public/images/destinations/kaffa-coffee.jpg",
        "subject": "Wild Coffea Arabica Cherries & Rainforest Canopy, Kaffa Biosphere",
        "license": "Creative Commons Attribution-Share Alike 3.0",
        "photographer": "Wikimedia Commons / Marcelo Corrêa"
    },
    {
        "title": "Lake_Chamo",
        "dest_path": "public/images/destinations/lake-chamo-croc.jpg",
        "subject": "Nile Crocodiles and Waterbird Colonies on Lake Chamo, Arba Minch",
        "license": "Creative Commons Attribution-Share Alike 3.0",
        "photographer": "Wikimedia Commons / Bernard Gagnon"
    },
    {
        "title": "Hamer_people",
        "dest_path": "public/images/destinations/omo-valley-hamer.jpg",
        "subject": "Hamer Cultural Village and Traditional Pastoral Rites, South Omo Valley",
        "license": "Creative Commons Attribution 2.0",
        "photographer": "Wikimedia Commons / Rod Waddington"
    },
    {
        "title": "Mursi_people",
        "dest_path": "public/images/destinations/mursi-tribe.jpg",
        "subject": "Mursi Community Culture and Traditional Ornaments, Mago National Park",
        "license": "Creative Commons Attribution 2.0",
        "photographer": "Wikimedia Commons / Rod Waddington"
    },
    {
        "title": "Surma_people",
        "dest_path": "public/images/destinations/suri-tribe.jpg",
        "subject": "Suri (Surma) People Traditional Body Art, Kibish, West Omo Valley",
        "license": "Creative Commons Attribution-Share Alike 2.0",
        "photographer": "Wikimedia Commons / Trevor Cole"
    }
]

attributions = []

for q in dest_queries:
    title = q["title"]
    dest_path = q["dest_path"]
    os.makedirs(os.path.dirname(dest_path), exist_ok=True)
    
    # Check Wikipedia API for thumbnail
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
                    
                    attributions.append({
                        "filename": os.path.basename(dest_path),
                        "path": "/" + dest_path.replace("public/", ""),
                        "subject": q["subject"],
                        "sourceUrl": img_url,
                        "photographer": q["photographer"],
                        "license": q["license"]
                    })
            else:
                print(f"No thumbnail found for {title}")
    except Exception as e:
        print(f"Error for {title}: {e}")

# Save attributions
os.makedirs("src/data", exist_ok=True)
with open("src/data/image-attributions.json", "w", encoding="utf-8") as f:
    json.dump(attributions, f, indent=2)

print(f"Downloaded {len(attributions)} high-res authentic images and saved attributions.")

