const axios = require("axios");

// Create a new Axios instance
const authorization = Buffer.from(
  `${process.env.PHYLLO_CLIENT_ID}:${process.env.PHYLLO_SECRET}`
).toString("base64");

const phylloRequest = axios.create({
  baseURL: process.env.PHYLLO_HOST,
  headers: {
    Authorization: `Basic ${authorization}`,
    "Content-Type": "application/json", // set your desired headers here
  },
});

module.exports = phylloRequest;
