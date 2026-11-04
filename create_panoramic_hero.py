import os
from PIL import Image, ImageFilter, ImageEnhance

# Load high-res images
lali_p = 'public/images/destinations/lalibela-st-george.jpg'
omo_p = 'public/images/destinations/omo-valley-hamer.jpg'
volc_p = 'public/images/destinations/erta-ale-volcano.jpg'

if os.path.exists(lali_p) and os.path.exists(volc_p):
    lali = Image.open(lali_p).convert('RGB')
    volc = Image.open(volc_p).convert('RGB')
    
    # Target canvas size: 2400 x 1000
    canvas_w = 2400
    canvas_h = 1000
    
    hero_canvas = Image.new('RGB', (canvas_w, canvas_h), (20, 16, 12))
    
    # Left: Lalibela scaled to fit height
    lali_w = int(canvas_w * 0.45)
    lali_crop = lali.resize((lali_w, canvas_h), Image.Resampling.LANCZOS)
    
    # Right: Volcano scaled to fit height
    volc_w = int(canvas_w * 0.45)
    volc_crop = volc.resize((volc_w, canvas_h), Image.Resampling.LANCZOS)
    
    # Center: Omo or Simien
    center_img = Image.open(omo_p).convert('RGB') if os.path.exists(omo_p) else lali
    center_w = int(canvas_w * 0.40)
    center_crop = center_img.resize((center_w, canvas_h), Image.Resampling.LANCZOS)
    
    # Paste with soft gradient blending
    hero_canvas.paste(lali_crop, (0, 0))
    hero_canvas.paste(center_crop, (int(canvas_w * 0.35), 0))
    hero_canvas.paste(volc_crop, (canvas_w - volc_w, 0))
    
    # Enhance warmth and contrast slightly for dramatic travel hero impact
    enhancer = ImageEnhance.Contrast(hero_canvas)
    hero_canvas = enhancer.enhance(1.1)
    color_enhancer = ImageEnhance.Color(hero_canvas)
    hero_canvas = color_enhancer.enhance(1.15)
    
    os.makedirs('public/images/home', exist_ok=True)
    hero_canvas.save('public/images/home/hero-panorama.jpg', quality=95)
    hero_canvas.save('public/images/home/hero-lalibela.jpg', quality=95)
    print("Created high-res vibrant panoramic hero image: 2400x1000")

