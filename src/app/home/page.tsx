// src/app/home/page.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Link = {
  id: number;
  platform: string;
  url: string;
};

export default function HomePage() {


  const router = useRouter();




  const [activeTab, setActiveTab] = useState("links");
  const [links, setLinks] = useState<Link[]>([]);
  const [profileDetails, setProfileDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    image: "/default-profile.png",
  });

  const [currentId, setCurrentId] = useState(0);

  const addLink = () => {
    
    setCurrentId(prevId => {
      const newId = prevId + 1;
      setLinks([...links, { id: newId, platform: "", url: "" }]);
      return newId;
    });
    };

  const updateLink = (index: number, field: keyof Link, value: string) => {
    const updatedLinks = links.map((link, i) =>
      i === index ? { ...link, [field]: value } : link
    );
    setLinks(updatedLinks);
  };

  const removeLink = (index: number) => {
    
    setLinks(links.filter((_, i) => i !== index));
    setCurrentId(prevId => Math.max(0, prevId));
    
    
  };

  const handleProfileDetailChange = (field: string, value: string) => {
    setProfileDetails({ ...profileDetails, [field]: value });
  };

  const handleSaveLinks = () => {
    // Save links logic
    console.log("Links saved:", links);
  };

  const handleSaveProfileDetails = () => {
    // Save profile details logic
    console.log("Profile details saved:", profileDetails);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setProfileDetails({ ...profileDetails, image: event.target.result as string });
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gray">
      <header className="bg-gray shadow-sm">
        <div className="container bg-white mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="App Logo"
              width={40}
              height={40}
              className="mr-2 "
            />
            <span className="lg:text-2xl md:text-2xl text-sm font-bold">devlinks</span>
          </div>
          <nav className="flex space-x-6">
            <button
              className={`px-3 flex items-center py-2 text-sm font-medium ${
                activeTab === "links" ? "text-defaultp bg-disabledp rounded-md" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("links")}
            >
              <Image
              src="/images/link.png"
              alt="App Logo"
              width={15}
              height={15}
              className="mr-2"
              />
              <p className="hidden md:flex lg:flex">Links</p>
            </button>
            <button
              className={`px-3 flex items-center py-2 text-sm font-medium ${
                activeTab === "profile" ? "text-defaultp bg-disabledp rounded-md" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("profile")}
            >

              <Image
                src="/images/profi.png"
                alt="App Logo"
                width={15}
                height={15}
                className="mr-2"
              />

              <p className="hidden md:flex lg:flex">Profile Details</p>
            </button>
          </nav>
          <button
            className="px-2 py-2 text-sm font-medium border border-defaultp text-defaultp rounded-md shadow-sm hover:border-activep"
            onClick={() => router.push("/preview")}
          >

              <Image
                src="/images/ddash.png"
                alt="App Logo"
                width={10}
                height={15}
                className="mr-2 block lg:hidden"
              />
            <p className="hidden lg:flex">Preview</p>
          </button>
        </div>
      </header>

      <main className="container   mt-2 mx-auto py-8 pt-2 px-4 w-full flex justify-between">
        {/* Left Section: Mobile Frame */}

          <div className="w-ww hidden   bg-white rounded-lg shadow-md p-4  lg:flex flex-col items-center">
            
            <div className="mobile-device-container relative flex items-center content-center">

              <div className="frame relative flex items-center justify-center">
                <img className="w-mob-l" src="/images/fr1.png" />
                <img className="w-mob absolute" src="/images/sub.png" />

              </div>

              <div className="profile  w-full  flex flex-col items-center  absolute top-12">

                <div className="relative  w-[8rem] mx-auto mt-8 h-[8rem] flex items-center justify-center bg-gray rounded-full overflow-hidden mb-4">
                  <Image
                    src={profileDetails.image}
                    alt="Profile"
                    width={200}
                    height={200}
                    className="w-full"
                  />
                </div>

                <h3 className="text-sm text-grey-200 bg-gray  min-w-48 h-[1.5rem] text-center mt-2  rounded  font-bold">{profileDetails.lastName} {profileDetails.firstName} </h3>
                <p className="text-grey-200 text-sm bg-gray min-w-48 h-[1.5rem] overflow-x-auto  rounded my-4 mt-2">{profileDetails.email}</p>
                


                <div className="flex flex-col space-y-2  w-[80%]  h-[12rem] mt-2  relative">
                   
                   
                   <div className="w-full h-[12rem]  flex flex-col space-y-2 overflow-auto relative top-0 left-0 z-20  ">
                      {links.map((link, index) => (

                      <div key={index} className="w-full h-[2.5rem] min-h-[2.5rem] flex flex-col z-20  ">
                        <button  className="px-3 py-1 bg-blue-600 w-full h-full flex-auto   rounded-md text-white">
                          {link.platform}
                        </button>
                      </div>

                      ))}
                   </div>

                    <div  className="w-full h-[12rem]  flex flex-col space-y-2 absolute top-[-6px] left-0 z-10  ">
                      <div  className="px-3 py-1 bg-gray w-full h-[2.5rem]   rounded-md text-white">
                        
                      </div>
                      <div  className="px-3 py-1 bg-gray w-full h-[2.5rem]   rounded-md text-white">
                        
                      </div>
                      <div  className="px-3 py-1 bg-gray w-full h-[2.5rem]  rounded-md text-white">
                        
                      </div>
                      <div  className="px-3 py-1 bg-gray w-full h-[2.5rem]  rounded-md text-white">
                        
                      </div>
                      
                    </div>

                </div>
              </div>

            </div>


          </div>



        {/* Right Section: Customization Area */}
        <div className=" w-full   lg:w-wx pl-8 bg-white ">
          {activeTab === "links" && (
            <>
              <h2 className="text-xl font-bold mt-12 mb-4">Customize your links</h2>

              <p className="lg:text-md md:text-md sm:text-xs mt-2 mb-6">Add/edit/remove links below and then share all your profiles with the world!</p>
              <div className="">
              <input
                className="w-wxx py-2 text-sm font-medium text-defaultp border border-defaultp rounded-md mt-5  hover:shadow-sm hover:bg-gray"
                onClick={addLink}
                value="+ Add New Link"
                type="button"
              />
              </div>
              
              
              <div className=" w-wxx overflow-auto bg-gray mt-2 h-lhh space-y-4">
                {links.map((link, index) => (
                  <div key={index} className="flex flex-col items-center space-x-4">
                    
                    <div className="w-wxx  items-center mt-4 flex justify-between ">
                      <p>link #{ link.id }</p> <button className="text-smoked py-2" onClick={() => removeLink(index)}  >Remove</button>
                    </div>
                    
                    <label className="text-left w-wxx mt-4 text-smoked">Platform</label>
                    <select
                      className="mt-1 block w-wxx px-3 py-2 border border-disabledp bg-white rounded-md hover:border-activep shadow-sm focus:outline-none focus:ring-indigo-500 focus:outline-defaultp sm:text-sm"
                      value={link.platform}
                      onChange={(e) => updateLink(index, "platform", e.target.value)}
                    >
                      <option value="">Select Platform</option>
                      <option value="GitHub">GitHub</option>
                      <option value="YouTube">YouTube</option>
                      <option value="LinkedIn">LinkedIn</option>
                      {/* Add more platforms here */}
                    </select>

                    <label className="text-left w-wxx mt-4 text-smoked">Link</label>
                    
                    <div className="mt-1 block bg-white  w-wxx px-3 py-2 border border-disabledp rounded-md shadow-sm placeholder-gray-400 hover:border-activep focus:outline-defaultp sm:text-sm">
                      <input
                        type="url"
                        placeholder="Enter profile link"
                        className=" block w-wxx  placeholder-gray-400 "
                        value={link.url}
                        onChange={(e) => updateLink(index, "url", e.target.value)}
                        required
                      />
                    </div>
                    
                  </div>
                ))}
              </div>

              <input
                className="mt-12 px-4 float-right mr-8  py-2 text-sm font-medium text-white bg-defaultp rounded-md shadow-sm hover:bg-activep"
                onClick={handleSaveLinks}
                value="Save"
                type="button"
              />
                
              
              
            </>
          )}
          {activeTab === "profile" && (
            <>
              <h2 className="text-xl font-bold mt-10 mb-4">Profile Picture</h2>
              
              
              
              {/* images upload div */}
              <div className=" flex flex-wrap rounded-lg w-wxx py-4 bg-gray items-center justify-center mt-14 mb-10 gap-2 lg:justify-between mb-4">
                
                <label htmlFor="profileImage" className="block ml-4 text-sm font-medium text-gray-700">
                  Profile Image
                </label>

                {/* ------middle-image/icon------ */}
                <div className="mt-1 h-44 w-44 bg-disabledp rounded-xl relative flex justify-center items-center">

                  <Image
                    src={profileDetails.image}
                    alt="."
                    width={250}
                    height={200}
                    className="rounded-2xl absolute"
                  />
                  
                  <div className="file-upload relative h-full w-full items-center justify-center  flex flex-col   rounded-md  focus:outline-none focus:ring-indigo-500  sm:text-sm">
                    
                    <div className="details absolute flex flex-col gap-4">
                        <Image
                        src="/images/img2.svg"
                        alt="Profile"
                        width={96}
                        height={96}
                        className="  w-2/3 mx-auto"
                        />


                      <p className="text-defaultp ">Upload image</p>
                        
                    </div>
                    
                    <input
                      type="file"
                      id="profileImage"
                      className="ml-5 border absolute h-full w-full opacity-0 flex flex-col "
                      onChange={handleImageUpload}
                    />
                  </div>

                </div>
                {/* _______________ */}

                <p className="text-xs w-2/6 mr-4 text-smoked">Image must be below 1024x1024px. Use PNG or JPG format.</p>
              </div>

              {/* -------------------- */}


              <div className="bg-gray py-4 pl-4 w-wxx rounded-lg">
                  <div className="flex  flex-wrap items-center justify-between">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="mt-1 block w-ww px-3 mr-8 py-2 border border-disabledp rounded-md shadow-sm placeholder-gray-400 focus:outline-defaultp focus:shadow-lg sm:text-sm"
                      value={profileDetails.firstName}
                      onChange={(e) => handleProfileDetailChange("firstName", e.target.value)}
                      required
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between mt-4">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="mt-1 block w-ww px-3 mr-8 py-2 border border-disabledp rounded-md shadow-sm placeholder-gray-400 focus:outline-defaultp focus:shadow-lg sm:text-sm"
                      value={profileDetails.lastName}
                      onChange={(e) => handleProfileDetailChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex flex-wrap items-center justify-between mt-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-ww px-3 py-2 mr-8 border border-disabledp rounded-md shadow-sm placeholder-gray-400 focus:outline-defaultp focus:shadow-lg sm:text-sm"
                      value={profileDetails.email}
                      onChange={(e) => handleProfileDetailChange("email", e.target.value)}
                      required
                    />
                  </div>
                  <button
                    className="mt-20 float-right  px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700"
                    onClick={handleSaveProfileDetails}
                  >
                    Save
                  </button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
