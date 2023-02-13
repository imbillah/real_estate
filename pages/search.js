import Property from "@/components/Property";
import SearchFilter from "@/components/SearchFilter";
import { baseUrl, fetchData } from "@/utils/fetchData";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BsFilter } from "react-icons/bs";
const search = ({ properties }) => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="container mx-auto">
        <h1
          onClick={() => setSearchFilters(!searchFilters)}
          className="my-3 cursor-pointer flex items-center justify-center text-xl font-bold bg-gray-200 rounded-md lg:w-[400px] lg:mx-auto hover:scale-90 hover:transition-all duration-300"
        >
          <span className="mr-3 my-3 text-blue-500">
            Serach properties by filters
          </span>
          <BsFilter />
        </h1>
        {searchFilters && <SearchFilter />}
        <div
          className="text-2xl font-semibold
        my-4"
        >
          <p className="text-gray-500 uppercase">
            Properties {router.query.purpose || "for-rent"}
          </p>
        </div>
        {
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
            {properties.map((property) => (
              <Property property={property} key={property.id} />
            ))}
          </div>
        }
        {/* no result found */}
        {properties.length === 0 && (
          <div className="flex items-center justify-center flex-col lg:my-10 sm:h-[80vh]">
            <img
              src="https://i.postimg.cc/28XmSfNX/original-92212c04a044acd88c69bedc56b3dda2.png"
              alt="no-result found"
              height={500}
              width={500}
              className="rounded-md "
            />
          </div>
        )}
      </div>
    </>
  );
};

// fetching data from server based on query
export async function getServerSideProps({ query }) {
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "monthly";
  const minPrice = query.minPrice || "1000";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "1";
  const bathsMin = query.bathsMin || "1";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "30000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const data = await fetchData(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`,
    "14"
  );

  return {
    props: {
      properties: data?.hits,
    },
  };
}

export default search;
