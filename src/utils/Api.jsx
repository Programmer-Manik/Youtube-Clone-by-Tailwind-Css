import axios from "axios";

const BASE_URL = "https://youtube-search-api.p.rapidapi.com";
const options = {
  params: {
    hl: "en",
    gl: "in",
  },
  headers: {
    "X-RapidAPI-Key": "ce381befacmsh973133e6a86b57ap17dc8ejsnac583eae9c3d",
    "X-RapidAPI-Host": "youtube-search-api.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
