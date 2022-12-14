import axios from "axios";

const BASE_URL = "http://localhost:8000";

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`);

  return data;
};

export const postToAPI = async (url, data) => {
  await axios.post(`${BASE_URL}/${url}`, data);
};
