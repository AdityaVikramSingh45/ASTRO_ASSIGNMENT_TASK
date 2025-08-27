"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Client {
  id: number;
  name: string;
  role: string;
  image: string;
  testimonial: string;
}

interface TestimonialsData {
  sectionTitle: string;
  sectionSubtitle: string;
  clients: Client[];
}

function Testimonials() {
  const [data, setData] = useState<TestimonialsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const API_URL = "/api/client-testimonials";

    async function fetchTestimonials() {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch testimonials data.");
        const fetchedData: TestimonialsData = await res.json();
        setData(fetchedData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTestimonials();
  }, []);

  if (loading)
    return <div className="text-center py-16">Loading testimonials...</div>;
  if (error)
    return <div className="text-center py-16 text-red-500">Error: {error}</div>;
  if (!data) return null;

  return (
    <div className="flex flex-col w-full">
      <div className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-4 py-1 text-sm font-semibold rounded-full text-purple-600 bg-purple-100 mb-4">
            Client Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            <span className="text-gray-900 dark:text-white">What Our Clients</span>{" "}
            <span className="text-purple-600">Say About Us</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8">
            {data.sectionSubtitle}
          </p>
          <div className="flex justify-end mb-8">
            <a
              href="#"
              className="flex items-center text-purple-600 font-semibold text-lg hover:underline"
            >
              View All
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {data.clients.map((client) => (
            <div
              key={client.id}
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer h-72 sm:h-64 md:h-72"
            >
              {/* Image */}
              <img
                src={"guyImage.jpg"}
                alt={client.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Text at top-left */}
              <div className="absolute top-0 left-0 p-4">
                <div className="text-white text-left">
                  <p className="font-semibold text-sm sm:text-lg">
                    {client.role.split(" • ")[0]}
                  </p>
                  <p className="text-lg sm:text-xl font-bold">
                    {client.role.split(" • ")[1]}
                  </p>
                </div>
              </div>

              {/* Gradient at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

              {/* Testimonial overlay */}
              <div className="absolute inset-x-0 top-1/2 flex items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-4">
                <p className="text-xs sm:text-sm font-light text-center">
                  {client.testimonial}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Webinar Offer Section */}
      <div className="bg-gradient-to-br from-[#ffdfd6] via-[#d6e2ff] to-[#fff8d6] p-6 sm:p-10 rounded-xl text-center shadow-lg max-w-full my-10">
        <div className="text-gray-600 text-base sm:text-lg mb-1">Join Our Webinar</div>
        <div className="text-2xl sm:text-4xl font-extrabold text-gray-800 mb-4 leading-tight">
          Limited-Time Offer!
        </div>
        <div className="text-gray-700 text-sm sm:text-base mb-8 px-2 sm:px-4 flex flex-col text-center">
          <span>Get 'The Guide' now and enjoy a special one-month free access to our</span>
          <span>upcoming AI-scoring platform with over 5000 test questions. Act fast - this</span>
          <span>offer expires in [Countdown Timer]</span>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {["Days", "Hour", "Minute", "Second"].map((label, idx) => (
            <div key={idx} className="bg-white p-3 sm:p-4 rounded-lg shadow-md w-20 sm:w-24">
              <div className="text-3xl sm:text-4xl font-bold text-blue-500">
                {["24", "06", "22", "59"][idx]}
              </div>
              <div className="text-gray-500 text-xs sm:text-xs uppercase mt-1">{label}</div>
            </div>
          ))}
        </div>

        <button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 px-4 sm:py-3 sm:px-6 rounded-lg transition-colors flex items-center justify-center mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v2.293l1.854-1.854a1 1 0 011.414 1.414l-2.5 2.5a1 1 0 01-1.414 0l-2.5-2.5a1 1 0 011.414-1.414L9 5.293V3a1 1 0 011-1zM5 10a1 1 0 011 1v5a1 1 0 001 1h6a1 1 0 001-1v-5a1 1 0 112 0v5a3 3 0 01-3 3H7a3 3 0 01-3-3v-5a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Visit Now
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
