import axios from "axios";

export const getLatestPosts = async () => {
  const response = await axios.get(
    "https://dev.to/api/articles?username=marcossnikel"
  );
  return response;
};
