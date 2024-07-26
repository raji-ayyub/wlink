// src/app/preview/page.tsx

"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type Link = {
  platform: string;
  url: string;
};

export default function PreviewPage() {
  const [links, setLinks] = useState<Link[]>([]);
  const [profileDetails, setProfileDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    image: "/default-profile.png",
  });

  useEffect(() => {
    // Fetch saved profile details and links
    // Example static data, replace with your own logic
    const savedLinks: Link[] = [
      { platform: "GitHub", url: "https://github.com/username" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/username" },
    ];

    const savedProfileDetails = {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      image: "/profile.jpg", // Use the actual image path here
    };

    setLinks(savedLinks);
    setProfileDetails(savedProfileDetails);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center  pt-0">

      <div className="w-full  rounded-xl bg-defaultp h-48">
        <div className="navbar rounded-xl mt-4 flex items-center justify-between px-3 w-wxx mx-auto py-2 bg-white">
          <button className="border px-8  border-defaultp px-4 py-2 text-defaultp rounded-lg">Back to Editor</button>
          <button className="border bg-defaultp text-white px-4 py-2 rounded-lg">Share link</button>
        </div>
      </div>



      <div className="bg-white absolute top-36 mx-auto p-8 rounded-lg shadow-lg max-w-lg ">
        <div className="flex items-center justify-center mb-6">
          <Image
            src={profileDetails.image}
            alt="Profile"
            width={96}
            height={96}
            className="rounded-full"
          />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold">{profileDetails.firstName} {profileDetails.lastName}</h2>
          <p className="text-gray-500 mb-4">{profileDetails.email}</p>
        </div>
        <div className="space-y-2">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 bg-indigo-600 text-white font-medium rounded-md text-center shadow-sm hover:bg-indigo-700"
            >
              {link.platform}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
