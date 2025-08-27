import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    title: "Master Rajesh Sharma - Vedic Astrologer & Spiritual Guide",
    mainTitle: "Meet Your Cosmic Guide",
    description:
      "With over 15 years of experience in Vedic Astrology, I have dedicated my life to helping individuals discover their true potential through the ancient wisdom of the stars. My journey began in the sacred temples of India, where I studied under renowned masters of astrological sciences.",
    tags: [
      { text: "15+ Years Experience" },
      { text: "Certified Astrologer" },
      { text: "Vedic Expert" },
    ],
    stats: [
      {
        value: "2000+",
        label: "Happy Clients Guided",
      },
      {
        value: "4.9⭐",
        label: "Average Rating",
      },
      {
        value: "25+",
        label: "Countries Served",
      },
    ],
  });
}
