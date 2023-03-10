import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";
export const fetchData = async (url, hits) => {
  const { data } = await axios.get(url, {
    params: {
      query: "abu dhabi",
      hitsPerPage: hits,
      page: "0",
      lang: "en",
    },
    headers: {
      "X-RapidAPI-Key": `${process.env.RAPID_API_KEY}`,
      "X-RapidAPI-Host": `${process.env.RAPID_API_HOST}`,
    },
  });
  return data;
};
