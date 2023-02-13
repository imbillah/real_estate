import React, { useState } from "react";

import { filterData, getFilterValues } from "@/utils/searchFilterData";
import { fetchData, baseUrl } from "@/utils/fetchData";
import { useRouter } from "next/router";
const SearchFilter = () => {
  const [filters] = useState(filterData);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationData, setLocationData] = useState();
  const [showLocations, setShowLocations] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const searchProperty = (filterValues) => {
    const path = router.pathname;
    const { query } = router;
    const values = getFilterValues(filterValues);
    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });
    router.push({ pathname: path, query: query });
  };
  return (
    <>
      <div className="flex justify-center flex-wrap items-center">
        {filters.map((filter) => (
          <>
            <select
              onChange={(e) =>
                searchProperty({ [filter.queryName]: e.target.value })
              }
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-1"
            >
              <option selected disabled>
                {filter.queryName}
              </option>
              {filter?.items?.map((item) => (
                <option value={item.value}>{item.name}</option>
              ))}
            </select>
          </>
        ))}
      </div>
    </>
  );
};

export default SearchFilter;
