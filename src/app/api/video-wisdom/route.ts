import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    title: "Video Wisdom",
    subtitle: "Explore the mysteries of astrology through our comprehensive video library, featuring detailed explanations and practical guidance for your spiritual journey.",
    videos: [
      {
        title: "Understanding Your Birth Chart",
        duration: "15:32",
        views: "25K",
        thumbnail: "https://placehold.co/400x250/E9E6F5/5B36DA?text=Thumbnail_1",
        videoLink: "https://www.w3schools.com/html/mov_bbb.mp4",
      },
      {
        title: "Understanding Your Birth Chart",
        duration: "15:32",
        views: "25K",
        thumbnail: "https://placehold.co/400x250/E9E6F5/5B36DA?text=Thumbnail_2",
        videoLink: "https://www.w3schools.com/html/mov_bbb.mp4"
      },
      {
        title: "Understanding Your Birth Chart",
        duration: "15:32",
        views: "25K",
        thumbnail: "https://placehold.co/400x250/E9E6F5/5B36DA?text=Thumbnail_3",
        videoLink: "https://www.w3schools.com/html/mov_bbb.mp4"
      },
      {
        title: "Understanding Your Birth Chart",
        duration: "15:32",
        views: "25K",
        thumbnail: "https://placehold.co/400x250/E9E6F5/5B36DA?text=Thumbnail_4",
        videoLink: "https://www.w3schools.com/html/mov_bbb.mp4"
      },
      {
        title: "Understanding Your Birth Chart",
        duration: "15:32",
        views: "25K",
        thumbnail: "https://placehold.co/400x250/E9E6F5/5B36DA?text=Thumbnail_5",
        videoLink: "https://www.w3schools.com/html/mov_bbb.mp4"
      },
      {
        title: "Understanding Your Birth Chart",
        duration: "15:32",
        views: "25K",
        thumbnail: "https://placehold.co/400x250/E9E6F5/5B36DA?text=Thumbnail_6",
        videoLink: "https://www.w3schools.com/html/mov_bbb.mp4"
      }
    ]
  });
}