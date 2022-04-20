export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://hyun1grepmarketserver.herokuapp.com"
    : "http://localhost:8080";
