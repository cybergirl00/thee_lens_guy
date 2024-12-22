import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="pt-24 px-6 lg:px-20 bg-gray-50">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I&apos;m <span className="text-primary">Thee.Lens_Guy</span>
          </h1>
          <p className="text-lg text-gray-700">
            I&apos;m a mobile photographer and content creator with 1 year of
            experience and a 5-star rating, based in Kwara/Lagos State. Capturing
            moments and creating memories is my passion.
          </p>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Specialized in event photography</li>
            <li>Creative portraits and landscape shoots</li>
            <li>Customized content for social media branding</li>
          </ul>
          <div className="flex gap-4">
            <Button className="bg-primary text-white hover:bg-primary/80">
              Explore My Work
            </Button>
            <Button className="border border-primary text-white hover:bg-primary hover:text-white">
              Contact Me
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full h-[500px] lg:h-[700px]">
          <Image
            alt="Lens Guy"
            src="/jay.jpg"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg border border-gray-200"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-primary/20 rounded-lg"></div>
        </div>
      </div>

      {/* Additional Features */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          What I Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-xl font-medium text-primary">Event Photography</h3>
            <p className="text-gray-600">
              Capturing timeless moments at weddings, parties, and corporate
              events.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-xl font-medium text-primary">Portraits</h3>
            <p className="text-gray-600">
              Creating stunning portraits for personal and professional use.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-xl font-medium text-primary">Social Media Content</h3>
            <p className="text-gray-600">
              High-quality content tailored for social media branding and marketing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
