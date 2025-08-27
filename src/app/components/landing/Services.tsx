"use client";

import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Define the types for the data fetched from the API
interface ServiceItem {
  title: string;
  description: string;
  color: string; // Tailwind color class string
}

interface ServicesData {
  title: string;
  subtitle: string;
  services: ServiceItem[];
}

/**
 * A React component that fetches and displays "Cosmic Services" using Shadcn UI Cards.
 */
function Services() {
  const [data, setData] = useState<ServicesData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const API_URL = "/api/cosmic-services";

  //   async function fetchServices() {
  //     try {
  //       const res = await fetch(API_URL);
  //       if (!res.ok) {
  //         throw new Error("Failed to fetch services data.");
  //       }
  //       const fetchedData: ServicesData = await res.json();
  //       setData(fetchedData);
  //     } catch (err: any) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   fetchServices();
  // }, []);

  useEffect(() => {
    const API_URL = "/api/cosmic-services";
  
    async function fetchServices() {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) {
          throw new Error("Failed to fetch services data.");
        }
        const fetchedData: ServicesData = await res.json();
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
  
    fetchServices();
  }, []);
  

  if (loading) {
    return <div className="text-center py-16">Loading services...</div>;
  }

  if (error) {
    return <div className="text-center py-16 text-red-500">Error: {error}</div>;
  }

  if (!data) {
    return null;
  }

  // Define the gradient colors to match the design image
  const cardGradients = [
    'from-yellow-300 to-orange-400',
    'from-pink-300 to-pink-500',
    'from-blue-300 to-blue-500',
    'from-purple-300 to-purple-500',
    'from-green-300 to-green-500',
    'from-purple-400 to-purple-600',
    'from-cyan-300 to-cyan-500',
    'from-yellow-200 to-yellow-400',
  ];

  return (
    <div 
      className="py-16 px-4" 
      style={{
        background: 'linear-gradient(129.88deg, #FFD3D3 -0.02%, rgba(242, 201, 76, 0.35) 49.99%, rgba(138, 178, 220, 0.45) 100%)'
      }}
    >
      <div className="text-center mb-12">
        <h2 className="text-purple-600 text-sm font-medium uppercase mb-2">Astrological Services</h2>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          {data.title}
        </h1>
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          {data.subtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {data.services.map((service, index) => (
          <Card key={index} className="shadow-lg rounded-xl overflow-hidden flex flex-col items-center text-center p-6">
            <div
              className={`w-16 h-16 rounded-lg bg-gradient-to-br ${cardGradients[index]} mb-4 relative flex items-center justify-center`}
            >
              <div className="absolute inset-0 m-auto w-8 h-8 rounded-full bg-white opacity-20"></div>
            </div>
            <CardTitle className="text-lg font-semibold mb-2">{service.title}</CardTitle>
            <CardDescription className="text-gray-500 text-sm">{service.description}</CardDescription>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Services;
