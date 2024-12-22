'use client';
import React, { useState } from "react";

const Portfolio = () => {
  const portfolioImages = [
    "/cross.jpg",
    "/black.jpg",
    "/flower.jpg",
    "/wed.jpg",
    "/girl.jpg",
    "/woman.jpg",
  ];

  const portfolioVideos = ["/video1.mp4", "/video1.mov", "/video.mp4"];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const openModal = (videoSrc: string) => {
    setCurrentVideo(videoSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo("");
  };

  return (
    <section id="portfolio" className="pt-10 px-6 lg:px-20 bg-gray-50">
      {/* IMAGES */}
      <h1 className="text-5xl text-center font-bold mb-10">
        My <span className="text-primary font-extrabold">Previous</span> Works
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioImages.map((src, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={src}
              alt={`Portfolio Image ${index + 1}`}
              className="transition-transform duration-300 group-hover:scale-110 w-full h-auto rounded-lg"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h2 className="text-white text-lg font-medium">View Details</h2>
            </div>
          </div>
        ))}
      </div>

      {/* VIDEOS */}
      
      <h2 className="text-4xl text-center font-semibold my-10">
        Wedding Content <span className="text-primary">Videos</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
        {portfolioVideos.map((video, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => openModal(video)}
          >
            <video
              src={video}
              muted
              loop
              autoPlay
              className="w-full h-auto transition-transform duration-300 group-hover:scale-110 rounded-lg"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h2 className="text-white text-lg font-medium">Play Video</h2>
            </div>
          </div>
        ))}
      </div>

      {/* VIDEO MODAL */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg shadow-lg p-4 w-full max-w-2xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevents closing modal on click inside modal
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 rounded-full p-2"
            >
              ✕
            </button>
            <video
              src={currentVideo}
              controls
              autoPlay
              className="w-full h-auto max-h-[80vh] rounded-md"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
