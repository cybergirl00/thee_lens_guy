'use client';

import React, { useEffect, useRef, useState } from "react";

const Reviews = () => {
  const reviews = [
    "Amazing photographer! The attention to detail in every shot is incredible.",
    "Great experience working with The_Lens_Guy. Highly recommend!",
    "Superb creativity and execution. Loved every picture taken.",
    "Professional and punctual. The results were outstanding!",
    "Easily the best photographer I've ever worked with. A+ service!",
    "Fantastic service! The results exceeded expectations!",
    "Creative and passionate. Every shot tells a story.",
    "The pictures are very beautiful i adroe how you potray the colors and light"
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 2; // Adjust speed of scroll
    let scrollPosition = 0;

    const scrollReviews = () => {
      if (isPaused) return; // Pause scrolling when mouse is over
      scrollPosition += scrollSpeed;
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        scrollPosition = 0; // Reset scroll to the beginning
      }
      scrollContainer.scrollLeft = scrollPosition;
    };

    const interval = setInterval(scrollReviews, 30); // Adjust scroll interval for smoothness
    return () => clearInterval(interval); // Cleanup interval
  }, [isPaused]);

  return (
    <section id="reviews" className="py-10 bg-gray-50">
      <h1 className="text-4xl text-center font-bold mb-8">
        What <span className="text-primary">Clients</span> Say
      </h1>
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-scroll no-scrollbar space-x-6 py-8 px-6  rounded-xl "
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ scrollBehavior: "smooth" }}
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 p-6 bg-primary/10 rounded-lg text-gray-800 text-lg shadow-md hover:scale-105 transform transition-transform duration-300 border border-primary/20"
          >
            <p className="italic mb-4">&quot;{review}&quot;</p>
            <div className="text-sm text-primary font-bold">- Happy Client</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
