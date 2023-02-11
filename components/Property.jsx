import React from "react";
import Link from "next/link";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
const Property = ({ property }) => {
  const {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  } = property;
  return (
    <>
      <div className="rounded overflow-hidden shadow-lg bg-gray-100 p-2">
        <img
          src={coverPhoto.url}
          alt="property image"
          className="w-full h-[300px]
        rounded-sm"
        />
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center">
            {isVerified && <GoVerified />}
            <p>
              AED {price} {rentFrequency && `/${rentFrequency}`}
            </p>
          </div>
          <img
            src={agency?.logo?.url}
            alt="agency-logo"
            className="h-[50px] w-[50px] rounded-[50%]"
          />
        </div>
        <div className="flex items-center justify-between text-blue-600 mt-3">
          <p>
            {rooms} <FaBed />
          </p>
          <p>
            {baths} <FaBath />
          </p>
          <p>
            {millify(area)} sqft <BsGridFill />
          </p>
        </div>
        <p className="my-3 text-[17px]">{title}</p>
      </div>
    </>
  );
};

export default Property;
