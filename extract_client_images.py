import os
from PIL import Image

output_dirs = [
    "public/images/logo",
    "public/images/home",
    "public/images/tours",
    "public/images/destinations",
    "public/images/about",
    "public/images/b2b",
    "public/images/guide",
    "public/images/fleet"
]

for d in output_dirs:
    os.makedirs(d, exist_ok=True)

uploaded = "C:/Users/HP/.gemini/antigravity/brain/9d445047-c31b-4bc3-a460-0990ba3e614a/.user_uploaded"

# 1. Image 5: About / Home (media_1793776752834_da3160a6.jpg - 616 x 1024)
img5 = Image.open(os.path.join(uploaded, "media_1793776752834_da3160a6.jpg"))

# Crop Founder Dessiew Abunie Dejenie (top right corner of hero)
founder_crop = img5.crop((520, 70, 595, 175))
founder_crop.save("public/images/about/dessiew-abunie-dejenie.jpg", quality=95)

# Crop Gelada Baboon (hero middle)
baboon_crop = img5.crop((320, 60, 455, 175))
baboon_crop.save("public/images/destinations/simien-baboons.jpg", quality=95)

# Crop Lalibela Hero (hero left)
lalibela_hero = img5.crop((20, 60, 195, 175))
lalibela_hero.save("public/images/home/hero-lalibela.jpg", quality=95)

# Crop Flagship card 1: Lalibela
card1_lalibela = img5.crop((26, 532, 190, 616))
card1_lalibela.save("public/images/tours/tour-1-lalibela-north.jpg", quality=95)
card1_lalibela.save("public/images/destinations/lalibela-st-george.jpg", quality=95)

# Crop Flagship card 2: Erta Ale Volcano
card2_volcano = img5.crop((199, 532, 363, 616))
card2_volcano.save("public/images/destinations/erta-ale-volcano.jpg", quality=95)

# Crop Flagship card 3: South Omo Valley Elder
card3_omo = img5.crop((26, 758, 190, 848))
card3_omo.save("public/images/destinations/omo-valley-hamer.jpg", quality=95)

# Crop Flagship card 4: Nature & Birdwatching
card4_nature = img5.crop((199, 758, 363, 848))
card4_nature.save("public/images/destinations/lake-ziway-birds.jpg", quality=95)

# 2. Image 4: Master Catalogue (media_1793776708848_77eca664.jpg - 1024 x 558)
img4 = Image.open(os.path.join(uploaded, "media_1793776708848_77eca664.jpg"))

# Crop Gondar Castles
gondar_crop = img4.crop((168, 290, 310, 435))
gondar_crop.save("public/images/destinations/gondar-castles.jpg", quality=95)

# Crop Danakil Dallol / Volcano
dallol_crop = img4.crop((348, 473, 420, 520))
dallol_crop.save("public/images/destinations/danakil-dallol.jpg", quality=95)

# Crop Omo Mursi Tribe
mursi_crop = img4.crop((518, 178, 595, 300))
mursi_crop.save("public/images/destinations/mursi-tribe.jpg", quality=95)

# Crop Omo Karo Tribe
karo_crop = img4.crop((600, 178, 675, 300))
karo_crop.save("public/images/destinations/omo-valley-karo.jpg", quality=95)

# Crop Lake Tana boat
lake_tana_crop = img4.crop((718, 150, 810, 228))
lake_tana_crop.save("public/images/destinations/lake-tana-monastery.jpg", quality=95)

# Crop 4x4 in Ethiopian highlands (Tour 17 & Grand Expeditions)
landcruiser_expedition = img4.crop((868, 150, 960, 228))
landcruiser_expedition.save("public/images/tours/tour-17-grand-north-south.jpg", quality=95)
landcruiser_expedition.save("public/images/tours/tour-18-complete-ethiopia.jpg", quality=95)

# 3. Image 1 & 3: Fleet specifications (media_1793776690109_82759656.jpg - 616 x 1024)
img1 = Image.open(os.path.join(uploaded, "media_1793776690109_82759656.jpg"))

# Crop Fleet 4x4 vehicles
fleet1 = img1.crop((410, 248, 498, 300))
fleet1.save("public/images/fleet/toyota-land-cruiser-76.jpg", quality=95)
fleet2 = img1.crop((510, 248, 595, 300))
fleet2.save("public/images/fleet/toyota-prado-4wd.jpg", quality=95)
fleet_combined = img1.crop((405, 240, 600, 305))
fleet_combined.save("public/images/about/fleet-4x4-landcruiser.jpg", quality=95)

# 4. Image 2: Flight & Vehicle (media_1793776701661_38d5b2c5.jpg - 616 x 1024)
img2 = Image.open(os.path.join(uploaded, "media_1793776701661_38d5b2c5.jpg"))
flight_crop = img2.crop((32, 818, 136, 868))
flight_crop.save("public/images/guide/ethiopian-airlines-flight.jpg", quality=95)

print("Extracted client reference images successfully.")

