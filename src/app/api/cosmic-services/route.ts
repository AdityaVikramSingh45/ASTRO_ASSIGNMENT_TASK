import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    title: "Comprehensive Cosmic Services",
    subtitle: "Discover a wide range of astrological services designed to illuminate your path, enhance your well-being, and guide you towards your highest potential.",
    services: [
      {
        title: "Birth Chart Reading",
        description: "Complete natal chart analysis revealing your personality, strengths, and life path",
        color: "bg-orange-400"
      },
      {
        title: "Love & Relationships",
        description: "Compatibility analysis and guidance for romantic relationships and marriage",
        color: "bg-pink-400"
      },
      {
        title: "Career Guidance",
        description: "Professional path analysis and timing for career changes and opportunities",
        color: "bg-blue-400"
      },
      {
        title: "Vedic Astrology",
        description: "Traditional indian astrology with precise calculations and remedial measures",
        color: "bg-purple-400"
      },
      {
        title: "Vastu Consultation",
        description: "Harmonizing your living and working spaces with cosmic energies",
        color: "bg-green-400"
      },
      {
        title: "Gemstone Therapy",
        description: "Personalized gemstone recommendations for enhancing positive energies",
        color: "bg-purple-600"
      },
      {
        title: "Muhurat Selection",
        description: "Auspicious timing selection for important life events and ceremonies",
        color: "bg-cyan-500"
      },
      {
        title: "Spiritual Guidance",
        description: "Meditation practices and spiritual development based on your cosmic blueprint",
        color: "bg-yellow-400"
      }
    ]
  });
}