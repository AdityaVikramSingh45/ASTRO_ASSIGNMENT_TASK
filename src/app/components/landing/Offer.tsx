"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  PlayCircle,
  Eye,
  Clock1,
  Play,
  Video,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Types
interface Video {
  title: string;
  duration: string;
  views: string;
  thumbnail: string;
  videoLink: string;
}

interface VideoData {
  title: string;
  subtitle: string;
  videos: Video[];
}

function Offer() {
  const [data, setData] = useState<VideoData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const API_URL = "/api/video-wisdom";

//     async function fetchVideos() {
//       try {
//         const res = await fetch(API_URL);
//         if (!res.ok) throw new Error("Failed to fetch video data.");
//         const fetchedData: VideoData = await res.json();
//         setData(fetchedData);
//       } catch (err: any) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchVideos();
//   }, []);

useEffect(() => {
    const API_URL = "/api/video-wisdom";
  
    async function fetchVideos() {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch video data.");
        const fetchedData: VideoData = await res.json();
        setData(fetchedData);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(String(err));
        }
      } finally {
        setLoading(false);
      }
    }
  
    fetchVideos();
  }, []);
  

  if (loading) return <div className="text-center py-16">Loading videos...</div>;
  if (error) return <div className="text-center py-16 text-red-500">Error: {error}</div>;
  if (!data) return null;

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="text-center mb-12 flex justify-center items-center flex-col">
        <Button className="flex items-center justify-center gap-2 m-3 bg-amber-300 text-red-900 hover:text-white">
          <Play className="w-5 h-5" />
          Video Content
        </Button>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-purple-400">
          {data.title}
        </h1>
        <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
          {data.subtitle}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
        <Button className="w-full sm:w-auto px-6 py-4 text-lg flex items-center gap-3 bg-blue-500 hover:bg-blue-600">
          <Video className="w-5 h-5" />
          <span>Trending Video</span>
        </Button>
        <Button className="w-full sm:w-auto px-6 py-4 text-lg flex items-center gap-3 bg-blue-500 hover:bg-blue-600">
          <Youtube className="w-5 h-5" />
          <span>Popular Video</span>
        </Button>
      </div>

      {/* Video Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {data.videos.map((video, index) => (
          <Card key={index} className="shadow-lg rounded-xl overflow-hidden flex flex-col">
            <div className="relative w-full h-48 sm:h-56 md:h-60 lg:h-64 xl:h-60">
              <video
                src={video.thumbnail}
                className="w-full h-full object-cover"
                muted
                autoPlay
                loop
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                <a
                  href={video.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PlayCircle className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                </a>
              </div>
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </div>
            </div>
            <CardContent className="p-4 flex flex-col justify-between flex-1">
              <CardTitle className="text-base font-semibold mb-2 line-clamp-2">
                {video.title}
              </CardTitle>
              <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400 mt-auto">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{video.views}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock1 className="w-4 h-4" />
                  <span>{video.duration}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Offer;
