"use client";

import { Star, Users, Globe, LucideIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// Define the types for the data fetched from the API
interface Stat {
  value: string;
  label: string;
  icon: string;
}

interface Tag {
  text: string;
}

interface CosmicGuideData {
  title: string;
  mainTitle: string;
  description: string;
  tags: Tag[];
  stats: Stat[];
}

// A mapping of icon names from the API to Lucide components
const iconMap: { [key: string]: LucideIcon } = {
  users: Users,
  star: Star,
  globe: Globe,
};

const Stats = () => {
  const [data, setData] = useState<CosmicGuideData | null>(null);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("/api/cosmic-guide");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const json: CosmicGuideData = await res.json();
        setData(json);
        console.log("data yaha hai", json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getData();
  }, []);

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  // Define background and text colors for each stat card to match the design
  const statColors = [
    {
      iconBg: "bg-purple-200",
      iconText: "text-purple-600",
      valueText: "text-purple-600",
    },
    {
      iconBg: "bg-blue-100",
      iconText: "text-blue-600",
      valueText: "text-blue-600",
    },
    {
      iconBg: "bg-orange-100",
      iconText: "text-orange-600",
      valueText: "text-orange-600",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 p-8 md:p-16 rounded-xl text-gray-800 dark:text-gray-200">
      <div className="flex flex-col items-center justify-center text-center">
        {/* Title Section */}
        <div className="flex items-center space-x-2 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full px-4 py-1 mb-4">
          <Star className="w-4 h-4" />
          <p className="text-sm font-semibold">{data.title}</p>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          {data.mainTitle}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed mb-8">
          {data.description}
        </p>

        {/* Tags Section */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {data.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm rounded-full bg-purple-100 text-purple-800 font-medium dark:bg-purple-900 dark:text-purple-200"
            >
              {tag.text}
            </span>
          ))}
          
        </div>
        {/* Stats Section */}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl mx-auto">
          {data.stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="p-3 rounded-full mb-4 bg-purple-100 dark:bg-purple-700">
                <Image
                  src={`/img${index + 1}.png`}
                  height={40}
                  width={40}
                  alt={stat.label}
                />
              </div>
              {/* Value */}
              <div className="text-3xl font-bold mb-1 text-purple-600 dark:text-purple-300">
                {stat.value}
              </div>
              {/* Label */}
              <div className="text-sm text-gray-500 dark:text-gray-300 text-center">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
