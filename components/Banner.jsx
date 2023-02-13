import Link from "next/link";
import Carousel from "nuka-carousel/lib/carousel";
import React from "react";

const BannerItems = ({ title, subtitle, desc, btnText, url }) => {
  return (
    <div className="flex justify-center items-center min-h-[550px] text-center text-white ">
      <div>
        <h2 className=" text-lg mb-5">{subtitle}</h2>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-[19px] my-3 ">{desc}</p>
        <Link href={url} passHref>
          <button className="px-3 py-2 bg-blue-500 text-lg rounded-md mt-5">
            {btnText}
          </button>
        </Link>
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <>
      <Carousel
        autoplay="true"
        autoplayInterval={3500}
        wrapAround="true"
        pauseOnHover="true"
        renderCenterLeftControls={"disabled"}
        renderCenterRightControls={"disabled"}
      >
        <div className="bg-[url('https://i.postimg.cc/c1rbNZWK/renthome-overlay.png')] bg-no-repeat bg-cover">
          <BannerItems
            title="Rental Homes for Everyone"
            subtitle="RENT A HOME"
            desc="Explore from Apartments, builder floors, villas and more"
            btnText="Explore Renting"
            url="/search?purpose=for-rent"
          />
        </div>
        <div className="bg-[url('https://i.postimg.cc/YSgZPKhj/buyhome-overlay.png')] bg-no-repeat bg-cover">
          <BannerItems
            title="Find, Buy & Own Your
          Dream Home"
            subtitle="BUY A HOME"
            desc="Explore from Apartments, land, builder floors,
          villas and more"
            btnText="Explore Buying"
            url="/search?purpose=for-sale"
          />
        </div>
      </Carousel>
    </>
  );
};

export default Banner;
