export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  subTagline: string;
  url: string;
  logo: {
    full: string;
    emblem: string;
  };
  founder: {
    name: string;
    title: string;
    quote: string;
    bio: string;
    image: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsapp: string;
    whatsappUrl: string;
    officePhone: string;
    officePhoneDisplay: string;
    emails: {
      general: string;
      booking: string;
      b2b: string;
      gmail: string;
    };
    address: {
      street: string;
      city: string;
      country: string;
      full: string;
    };
    hours: string;
  };
  trustStats: {
    yearsExperience: string;
    masterItineraries: number;
    rating: string;
    totalExpeditions: string;
    proposalTurnaround: string;
    fleetType: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Abyssinian Tour Operator",
  legalName: "Abyssinian Tour Operator PLC",
  tagline: "White-Label Ground Handling | Wholesale NET Tariffs | Turnkey Ethiopia Operations",
  subTagline: "Direct Inbound DMC | 20+ Years Native Field Leadership | Addis Ababa, Ethiopia",
  url: "https://www.abyssiniatouroperator.com",
  logo: {
    full: "/images/logo/abyssinian-logo-full.png",
    emblem: "/images/logo/abyssinian-logo-emblem.png"
  },
  founder: {
    name: "Dessiew Abunie Dejenie",
    title: "Founder, CEO & Lead Logistician",
    quote: "True exploration in Ethiopia requires more than just a route map—it demands deep native field wisdom, seamless logistical security, and respect for our cultural heritage.",
    bio: "With over two decades of hands-on field leadership, Dessiew Abunie Dejenie built Abyssinian Tour Operator on the principle of direct, native execution. Starting his career in the field, Dessiew has personally led hundreds of expeditions across the rugged Simien escarpment, the active lava fields of the Danakil Depression, and the remote communities of the South Omo Valley. His deep-rooted relationships with local village elders, national park wardens, and heritage site guardians ensure that every Abyssinian itinerary operates with privileged access, strict safety protocols, and ethical community engagement.",
    image: "/images/about/dessiew-abunie-dejenie.jpg"
  },
  contact: {
    phone: "+251920009100",
    phoneDisplay: "+251 920 009 100",
    whatsapp: "+251920009100",
    whatsappUrl: "https://wa.me/251920009100?text=Hello%20Abyssinian%20Tour%20Operator%2C%20I%20would%20like%20to%20inquire%20about%20an%20Ethiopian%20expedition.",
    officePhone: "+251116123456",
    officePhoneDisplay: "+251 11 6 123 456",
    emails: {
      general: "info@abyssiniatouroperator.com",
      booking: "booking@abyssiniatouroperator.com",
      b2b: "b2b@abyssiniatouroperator.com",
      gmail: "abyssiniantouroperator@gmail.com"
    },
    address: {
      street: "Gerji Mebrat Tango Bldg, Office 201",
      city: "Addis Ababa",
      country: "Ethiopia",
      full: "Gerji Mebrat Tango Bldg, Office 201, Addis Ababa, Ethiopia"
    },
    hours: "Monday – Saturday: 8:00 AM – 6:00 PM (EAT) | 24/7 Ground Emergency Line Active"
  },
  trustStats: {
    yearsExperience: "20+",
    masterItineraries: 20,
    rating: "4.9 / 5.0",
    totalExpeditions: "350+",
    proposalTurnaround: "12 Hours",
    fleetType: "Toyota Land Cruiser 76/79 Series & Prado 4WDs"
  }
};
