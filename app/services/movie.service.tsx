import axios from "axios";

const API_KEY = "c2e1234d0f64d81849ce68afd31ecb31";
const API_BASE_URL = "https://api.themoviedb.org/3";

const client = axios.create({
  baseURL: API_BASE_URL,
  params: { api_key: API_KEY },
});

export const searcMovies = async (query: string) => {
  try {
    const response = await client.get("/search/movie", {
      params: { query },
    });

    if (response.data && response.data.results) {
      console.log(response.data.results);
      return response.data.results;
    } else {
      console.error("Couldn't get the data");
    }
  } catch (err) {
    console.error(err);
    return [];
  }
};
