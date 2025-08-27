"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { CalendarFold, Phone, Square } from "lucide-react";
import Image from "next/image";

// Define the data interfaces
interface HeroData {
  badge: string;
  title: string;
  subtitle: string;
  cta: { text: string; link: string; type: "primary" | "secondary" }[];
  stats: { label: string; value: string }[];
  image: string;
}

interface ServiceData {
  title: string;
  desc: string;
  icon: string;
}

export default function Home() {
  const [hero, setHero] = useState<HeroData | null>(null);
  const [services, setServices] = useState<ServiceData[]>([]);

  // Use useEffect to simulate data fetching from the "APIs"
  useEffect(() => {
    // Simulate API call delay
    async function fetchData() {
      const res = await fetch("/api/hero");
      const jsonData = await res.json();
      console.log("jsonData", jsonData);

      const serviceRes = await fetch("/api/services");
      const serviceData = await serviceRes.json();
      setServices(serviceData);
      setHero(jsonData);
    }
    fetchData();
  }, []);

  if (!hero) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 to-purple-100">
        <p className="text-center p-10 text-xl font-medium text-gray-700">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-r from-yellow-100 to-purple-100 p-8 overflow-y-hidden">
      {/* HERO SECTION */}
      <section className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        <div>
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
            {hero.badge}
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">
            {hero.title.split(" ").map((word, i) =>
              word === "Cosmic" ? (
                <span key={i} className="text-purple-600">
                  {word}{" "}
                </span>
              ) : (
                word + " "
              )
            )}
          </h1>
          <p className="mt-4 text-gray-700">{hero.subtitle}</p>

          <div className="flex flex-wrap gap-4 mt-6">
            {hero.cta.map((btn, i) =>
              btn.type === "primary" ? (
                <Button
                  key={i}
                  className="bg-blue-800 px-9 py-3 md:px-12 md:py-8 text-sm md:text-lg rounded-lg"
                >
                  <CalendarFold />
                  {btn.text}
                </Button>
              ) : (
                <Button
                  key={i}
                  className="bg-transparent text-black border border-black hover:text-white px-9 py-3 md:px-10 md:py-8 text-sm md:text-lg "
                >
                  <Phone />
                  {btn.text}
                </Button>
              )
            )}
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 md:gap-8 mt-10">
            {hero.stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center w-full sm:w-auto"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Square className="w-8 h-8 md:w-10 md:h-10 text-purple-700 fill-current" />
                  <p className="text-2xl md:text-4xl font-bold text-purple-700">
                    {stat.value}
                  </p>
                </div>
                <p className="text-gray-600 text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <Image
            src="/astro.png"
            alt="Hero Image"
            className="rounded-lg"
            width={800} // replace with actual width
            height={600} // replace with actual height
            priority // optional, for LCP images
          />
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="mt-16 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-4xl">{service.icon}</div>
            <h3 className="mt-4 font-bold text-lg">{service.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{service.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
