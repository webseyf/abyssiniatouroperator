# Abyssinian Tour Operator — Custom Website & Inbound DMC Platform

A complete, high-performance, custom-coded website and inbound Destination Management Company (DMC) platform for **Abyssinian Tour Operator**, headquartered in Addis Ababa, Ethiopia.

Built with **Astro (Static Site Generation)**, modern semantic HTML, custom CSS, structured TypeScript data architecture, and lightweight PHP form endpoints ready for standard cPanel shared hosting.

---

## 1. Quick Start & Local Development

### Prerequisites
- Node.js (v18 or higher recommended; tested on v24.14.1)
- npm (v9 or higher)

### Installation
```bash
# Clone or navigate to the project directory
cd "abyssinian tour"

# Install project dependencies
npm install
```

### Run Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:4321` to inspect the website with live reload.

### Build Production Package
```bash
npm run build
```
This compiles the entire website into the `dist/` directory.

---

## 2. cPanel Deployment Instructions

The production site is 100% static and requires **no running Node.js process** on your hosting account. It is fully compatible with ordinary shared cPanel hosting running Apache and PHP.

### Step-by-Step Deployment:
1. Run `npm run build` locally on your machine.
2. In your file manager, open the generated `dist/` folder.
3. Select all files and folders inside `dist/` (including `index.html`, `tours/`, `destinations/`, `about-us/`, `b2b/`, `travel-guide/`, `contact-us/`, `images/`, `api/`, `.htaccess`, `robots.txt`, and `sitemap.xml`).
4. Compress them into a `.zip` archive (e.g. `website-production.zip`).
5. Log into your **cPanel Account**.
6. Open **File Manager** and navigate into your public root directory:
   - For primary domain: `public_html/`
   - For addon or subdomain: `public_html/your-subdomain/`
7. Click **Upload**, upload `website-production.zip`, and extract all contents directly into `public_html/`.
8. Verify that `.htaccess` is present in `public_html/` (enable "Show Hidden Files (dotfiles)" in cPanel File Manager settings if needed).

---

## 3. Configuring the Production Domain

The central domain configuration is located in:
- `src/config/site.ts` (`siteConfig.url`)
- `astro.config.mjs` (`site`)

Currently set to:
```typescript
site: 'https://www.abyssiniatouroperator.com'
```
If your live domain differs, update these two lines and rebuild (`npm run build`).

---

## 4. Contact & B2B Inquiry Form Configuration

The website includes two server-side PHP endpoints located in `public/api/`:
1. `public/api/contact.php`: Handles general inquiries, quote modal popups, and the contact page form. Sends notifications to:
   - `info@abyssiniantouroperator.com`
   - `booking@abyssiniantouroperator.com`
2. `public/api/b2b-apply.php`: Handles travel agent registrations and NET tariff requests. Sends notifications to:
   - `b2b@abyssiniantouroperator.com`

### Modifying Notification Emails:
Open `public/api/contact.php` and edit line 10:
```php
$to_emails = [
    'info@abyssiniantouroperator.com',
    'booking@abyssiniantouroperator.com'
];
```

### Using cPanel SMTP / Custom Mailer (Optional):
The scripts use PHP's built-in `mail()` function configured by default on cPanel servers. If your cPanel host requires authenticated SMTP (e.g. via PHPMailer or cPanel webmail ports 465/587), you can drop `PHPMailer` into `public/api/` and configure SMTP credentials safely inside that server script without exposing passwords to the frontend.

---

## 5. Content Management & Modifications

### Updating or Adding Tours:
All 20 tours are structured in:
`src/data/tours.ts`
Each tour record includes:
- `slug`: SEO-friendly URL slug (e.g., `8-day-historic-north-lalibela-unesco-circuit`)
- `pillarId`: Pillar 1 to 5
- `title`, `seoTitle`, `metaDescription`
- `duration`, `routing`, `overview`, `highlights`
- `itinerary`: Day-by-day details
- `inclusions` and `exclusions`

### Updating Destinations:
`src/data/destinations.ts`
Stores descriptions, altitudes, key attractions, and related tour links.

### Adding Blog Posts:
`src/pages/blog/index.astro` is architected for clean client expansion. Articles can be populated into `blogArticles` or integrated with Markdown/MDX content collections.

### Sourcing & Replacing Photographs:
All local photographs reside in:
`public/images/`
- `destinations/`: Real landmarks (Lalibela, Gondar, Danakil, Omo Valley, etc.)
- `about/`: Founder portrait and 4x4 fleet
- `fleet/`: Vehicle technical specifications
- `logo/`: Vector SVG logos

Image attributions and Creative Commons records are maintained in `src/data/image-attributions.json` and rendered publicly at `/image-attributions`.

---

## 6. Project Architecture

```
abyssinian tour/
├── astro.config.mjs         # Astro site configuration
├── package.json             # Build scripts and dependencies
├── tsconfig.json            # TypeScript configuration
├── public/                  # Static assets copied directly to dist/
│   ├── .htaccess            # Apache / cPanel clean URLs & security headers
│   ├── favicon.svg          # Favicon icon
│   ├── robots.txt           # Search engine directives
│   ├── sitemap.xml          # XML sitemap with all 20 tours
│   ├── api/                 # PHP form handlers (cPanel compatible)
│   │   ├── contact.php
│   │   └── b2b-apply.php
│   └── images/              # Authentic destination photography & logos
│       ├── logo/
│       ├── home/
│       ├── destinations/
│       ├── tours/
│       ├── about/
│       ├── fleet/
│       └── guide/
├── src/
│   ├── config/              # Central site configuration & contact details
│   │   └── site.ts
│   ├── data/                # Structured data architecture
│   │   ├── tours.ts         # All 20 SEO-optimized master itineraries
│   │   ├── destinations.ts  # 12+ Ethiopian destination records
│   │   ├── reviews.ts       # Verified field reviews & B2B endorsements
│   │   └── image-attributions.json
│   ├── styles/              # Custom CSS design system
│   │   ├── variables.css    # Palette, fonts, spacing
│   │   └── global.css       # Layouts, forms, buttons, cards, typography
│   ├── components/          # Reusable Astro UI components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── TrustBar.astro
│   │   ├── TourCard.astro
│   │   ├── DestinationCard.astro
│   │   └── QuoteModal.astro
│   ├── layouts/
│   │   └── MainLayout.astro # Base layout with JSON-LD and SEO tags
│   └── pages/               # Multi-page website routing
│       ├── index.astro
│       ├── about-us.astro
│       ├── destinations.astro
│       ├── b2b.astro
│       ├── travel-guide.astro
│       ├── contact-us.astro
│       ├── image-attributions.astro
│       ├── 404.astro
│       ├── tours/
│       │   ├── index.astro
│       │   └── [slug].astro
│       └── blog/
│           └── index.astro
└── dist/                    # Compiled production build (Upload to public_html)
```

---

## 7. Company Credits & Support

- **Company Name:** Abyssinian Tour Operator
- **Founder & CEO:** Dessiew Abunie Dejenie
- **Headquarters:** Addis Ababa, Ethiopia
- **Direct Dispatch / WhatsApp:** +251 920 009 100
- **General Inquiries:** info@abyssiniantouroperator.com
- **B2B Agent Portal:** b2b@abyssiniantouroperator.com
- **Official Domain:** https://www.abyssiniatouroperator.com

