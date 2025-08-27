import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json([
        {
            title: "Birth Chart Analysis",
            desc: "Complete personality analysis and life path guidance through your cosmic blueprint",
            icon: "🔮",
          },
          {
            title: "Gemstone Therapy",
            desc: "Personalized gemstone recommendations to enhance positive energies and well-being",
            icon: "💎",
          },
          {
            title: "Vastu Consultation",
            desc: "Harmonize your living spaces with ancient principles for prosperity and peace",
            icon: "🏠",
          },
    ])
}