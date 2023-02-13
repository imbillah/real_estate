import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import { fetchData, baseUrl } from "@/utils/fetchData";
import Carousel from "nuka-carousel/lib/carousel";
const PropertyDetails = ({ propertyDetails }) => {
  const {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  } = propertyDetails;
  return (
    <>
      <div className="container mx-auto">
        {/* property image carousel */}
        <div className="mt-5 lg:mx-auto lg:w-[700px] ">
          <h2 className="tex-2xl font-semibold my-4 text-gray-500 uppercase">
            Property Details
          </h2>
          {photos && (
            <Carousel
              autoplay="true"
              autoplayInterval={2500}
              wrapAround="true"
              pauseOnHover="true"
            >
              {photos.slice(0, 10).map((photo) => (
                <img
                  src={photo.url}
                  alt="property-image"
                  className="lg:w-[700px] rounded-md lg:h-[400px]"
                />
              ))}
            </Carousel>
          )}
          {/* details about property */}
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center">
              {isVerified && <GoVerified />}
              <p className="font-semibold text-[17px]">
                AED {price} {rentFrequency && `/${rentFrequency}`}
              </p>
            </div>
            <img
              src={agency?.logo?.url}
              alt="agency-logo"
              className="h-[50px] w-[50px] rounded-[50%]"
            />
          </div>
          <div className="flex items-center justify-between text-blue-600">
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
          <p className="mt-4 text-[19px] font-semibold">{title}</p>
          <p className="mt-2 leading-7 tracking-normal">{description}</p>
          <h2 className="my-3 text-xl font-semibold">Amenities</h2>
          <div>
            {amenities.length && (
              <div className="flex flex-wrap">
                {amenities?.map((item) =>
                  item?.amenities?.map((amenity) => (
                    <h2
                      className="m-2 bg-blue-300 p-2 rounded-md"
                      key={amenity.text}
                    >
                      {amenity.text}
                    </h2>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchData(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}
