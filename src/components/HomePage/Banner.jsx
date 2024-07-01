import React from "react";

const Banner = () => {
  return (
    <div className="container px-3 md:px-0 mt-12 md:mx-auto ">
      <div className="carousel w-full rounded-xl">
        {banners.map((banner, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${
                index + 1
              }.jpg)`,
            }}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full  h-[80vh] bg-top bg-no-repeat bg-cover"
          >
            <div className="h-full pl-24 w-full items-center text-white flex my-auto">
            <div className="space-y-6">
            <h1 className="text-5xl font-bold w-[463px] leading-[75px]">{banner.title}</h1>
              <p>{banner.description}</p>
             <div className="flex gap-4">
             <button className="btn btn-primary text-white">Discover more</button>
             <button className="btn hover:bg-[#FF3811] btn-outline text-white">Latest Project</button>
             </div>
            </div>
            </div>
            <div className="absolute gap-5 flex bottom-12 right-12 transform justify-between">
              <a href={banner.prev} className="btn btn-circle">
                ❮
              </a>
              <a href={banner.next} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const banners = [
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide2",
    prev: "#slide4",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide3",
    prev: "#slide1",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide4",
    prev: "#slide2",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide1",
    prev: "#slide3",
  },
];

export default Banner;
