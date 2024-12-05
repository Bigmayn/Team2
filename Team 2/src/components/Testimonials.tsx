import React, { useState } from 'react';
import type { TestimonialType } from '../types';

const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Lisa van der Berg",
    text: "Perfect voor mijn drukke werkdagen. Gezond en heerlijk!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    name: "Mark de Vries",
    text: "Eindelijk een foodtruck die echt verse en gezonde opties biedt.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    name: "Sophie Jansen",
    text: "De bezorging is altijd op tijd en het eten is heerlijk vers!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    name: "Olivier Kappetein",
    text: "Innovatief concept met heerlijke, gezonde maaltijden. Precies wat ik zocht!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Wat onze klanten zeggen</h2>
        
        <div className="relative">
          <div className="flex items-center">
            <button
              onClick={prev}
              className="absolute left-0 z-10 p-2 text-gray-600 hover:text-green-600"
            >
              ←
            </button>
            
            <div className="flex flex-col items-center px-12">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <p className="text-lg text-gray-700 text-center mb-4">
                "{testimonials[currentIndex].text}"
              </p>
              <p className="font-semibold">{testimonials[currentIndex].name}</p>
            </div>

            <button
              onClick={next}
              className="absolute right-0 z-10 p-2 text-gray-600 hover:text-green-600"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;