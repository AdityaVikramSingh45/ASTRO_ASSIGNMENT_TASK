import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    sectionTitle: "What Our Clients Say About Us",
    sectionSubtitle: "Discover how our astrological guidance has transformed lives across the globe, bringing clarity, purpose, and positive change to thousands of satisfied clients.",
    clients: [
      {
        id: 1,
        name: "Samantha",
        role: "Pottery • Vases Family",
        image: "https://placehold.co/400x400/D9D9D9/A6A6A6?text=Samantha",
        testimonial: "I am amazed by the accuracy and depth of the guidance. It's truly life-changing.",
      },
      {
        id: 2,
        name: "David",
        role: "Oil Painting • Camel Portrait",
        image: "https://placehold.co/400x400/D9D9D9/A6A6A6?text=David",
        testimonial: "The insights provided were invaluable for my personal and professional growth.",
      },
      {
        id: 3,
        name: "Emily",
        role: "Abstract Painting • Euforia",
        image: "https://placehold.co/400x400/D9D9D9/A6A6A6?text=Emily",
        testimonial: "It brought a new perspective on life and helped me find my true path.",
      },
      {
        id: 4,
        name: "Alex",
        role: "Object Design • Classic Watch",
        image: "https://placehold.co/400x400/D9D9D9/A6A6A6?text=Alex",
        testimonial: "Exceptional service and profound wisdom. Highly recommended to everyone.",
      },
      {
        id: 5,
        name: "Olivia",
        role: "Sculpture • White Angel",
        image: "https://placehold.co/400x400/D9D9D9/A6A6A6?text=Olivia",
        testimonial: "The guidance was incredibly precise and helped me navigate major life decisions.",
      },
      {
        id: 6,
        name: "Olivia",
        role: "Sculpture • White Angel",
        image: "https://placehold.co/400x400/D9D9D9/A6A6A6?text=Olivia",
        testimonial: "The guidance was incredibly precise and helped me navigate major life decisions.",
      },
      {
        id: 7,
        name: "Olivia",
        role: "Sculpture • White Angel",
        image: "https://placehold.co/400x400/D9D9D9/A6A6A6?text=Olivia",
        testimonial: "The guidance was incredibly precise and helped me navigate major life decisions.",
      },
      {
        id: 8,
        name: "Olivia",
        role: "Sculpture • White Angel",
        image: "https://placehold.co/400x400/D9D9D9/A6A6A6?text=Olivia",
        testimonial: "The guidance was incredibly precise and helped me navigate major life decisions.",
      },
      {
        id: 9,
        name: "Olivia",
        role: "Sculpture • White Angel",
        image: "https://placehold.co/400x400/D9D9D9/A6A6A6?text=Olivia",
        testimonial: "The guidance was incredibly precise and helped me navigate major life decisions.",
      },

    ],
  });
}