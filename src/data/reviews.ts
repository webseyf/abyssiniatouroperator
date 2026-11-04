export interface Review {
  id: string;
  type: 'b2c' | 'b2b';
  author: string;
  roleOrType: string;
  companyOrOrigin: string;
  location: string;
  itineraryOrScope: string;
  rating: number;
  status: string;
  quote: string;
}

export const reviewsData = {
  header: {
    badge: "VERIFIED FIELD REVIEWS",
    headline: "Trusted by Global Travelers & Wholesale Partners",
    subheadline: "Read authentic field feedback from private travelers and international travel agencies who rely on our direct ground operations across Ethiopia.",
    overallRating: "4.9 / 5.0",
    totalAudited: "350+ Private Expeditions & B2B Wholesale Operations"
  },
  b2cReviews: [
    {
      id: "b2c-1",
      type: "b2c",
      author: "Dr. Marcus & Elena Vance",
      roleOrType: "Private B2C Expedition",
      companyOrOrigin: "Private Travelers",
      location: "London, United Kingdom",
      itineraryOrScope: "14-Day Combined Historic North & Danakil Expedition",
      rating: 5.0,
      status: "Verified Private Traveler",
      quote: "Navigating the Danakil Depression and the Erta Ale active volcano requires 100% logistical confidence. Dessiew and the Abyssinian team provided flawless Toyota 4x4 Land Cruisers, expert desert drivers, and top-tier field catering. In Lalibela, our native guide’s historical insight made the rock churches come alive. Hands down the most professional operator in the Horn of Africa."
    },
    {
      id: "b2c-2",
      type: "b2c",
      author: "Sophie Lindqvist",
      roleOrType: "Cultural Photography Expedition",
      companyOrOrigin: "Professional Travel Photographer",
      location: "Stockholm, Sweden",
      itineraryOrScope: "7-Day Omo Valley Tribal Cultural Photography Safari",
      rating: 5.0,
      status: "Verified Photo Safari Guest",
      quote: "As a professional travel photographer, getting genuine, respectful access in the South Omo Valley without feeling invasive is critical. Abyssinian Tour Operator’s native connections with village elders in Hamer and Karo communities were incredible. Their drivers handled rugged terrain effortlessly, and their field security was absolute. I wouldn't run a photo tour in Ethiopia with anyone else."
    },
    {
      id: "b2c-3",
      type: "b2c",
      author: "David & Sarah Miller",
      roleOrType: "Wilderness & Nature Trek",
      companyOrOrigin: "Adventure Travelers",
      location: "Melbourne, Australia",
      itineraryOrScope: "6-Day Simien Mountains Escarpment Trek",
      rating: 5.0,
      status: "Verified Trekking Guest",
      quote: "Trekking the Simien Mountains escarpment to 4,000 meters was a bucket-list dream. Abyssinian managed every detail: high-altitude camping gear, private camp chefs preparing hot meals daily, and park scout escorts. Seeing troops of endemic Gelada baboons at Buyit Ras with our certified wildlife guide was unforgettable."
    }
  ] as Review[],
  b2bReviews: [
    {
      id: "b2b-1",
      type: "b2b",
      author: "Jean-Luc Moreaux",
      roleOrType: "Director of Africa Operations",
      companyOrOrigin: "Apex Overland Travel",
      location: "Paris, France",
      itineraryOrScope: "B2B Series Departures & Custom FIT Groups",
      rating: 5.0,
      status: "Verified B2B Partner Desk",
      quote: "Abyssinian Tour Operator has been our primary white-label ground handler in Ethiopia for over five years. Their 12-hour turnaround time on custom quotes, flawless unbranded 4x4 vehicles, and priority domestic flight ticketing allow us to offer seamless luxury itineraries to our European clientele. Dessiew’s personal oversight in Addis Ababa gives our agency complete peace of mind."
    },
    {
      id: "b2b-2",
      type: "b2b",
      author: "Claire Thompson",
      roleOrType: "Head of Product & Contracting",
      companyOrOrigin: "Horizon Expeditions",
      location: "Toronto, Canada",
      itineraryOrScope: "White-Label Inbound Ground Execution",
      rating: 5.0,
      status: "Verified B2B Wholesale Partner",
      quote: "Finding a direct inbound DMC in East Africa that operates its own heavy-duty fleet and maintains strict risk-management protocols is rare. Abyssinian's operational transparency, wholesale NET tariffs, and direct WhatsApp field dispatch make them our go-to partner across all 20 Ethiopian flagship destinations."
    }
  ] as Review[]
};

