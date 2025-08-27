import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    badge: "Certified Vedic Astrologer",
    title: "Unlock Your Cosmic Destiny",
    subtitle:
      "Discover the ancient wisdom of Vedic astrology through personalized readings, cosmic guidance, and spiritual insights that illuminate your life's journey.",
    cta: [
      { text: "book now", link: "/book", type: "primary" },
      { text: "Call now", link: "tel:+123456789", type: "secondary" },
    ],
    stats: [
      { label: "Followers social media", value: "1B+" },
      { label: "Registration booked", value: "800k" },
      { label: "Year of experience", value: "25y" },
    ],
    image: "/astro.png", // put astrologer image inside /public
  });
}
