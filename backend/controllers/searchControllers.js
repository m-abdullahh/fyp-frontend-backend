// const FLASK_API_BASE_URL = "http://flask-app:5000/search"; // Adjust the URL and port as needed
const FLASK_API_BASE_URL = "https://m-abdu11ah-search-api.hf.space/search";
const axios = require("axios");

exports.genericsearch = async (req, res) => {
  console.log("GENERIC SEARCH: ", req.query);
  const { text } = req.query;
  if (!text) {
    return res.status(400).json({ error: "No text query provided" });
  }

  try {
    const response = await axios.get(`${FLASK_API_BASE_URL}/genericsearch`, {
      params: { text }, // Forward the query parameter
    });
    console.log("No of result I got: ",response.data.length);
    return res.json(response.data); // Return the response data from Flask
  } catch (error) {
    return res.status(error.response?.status || 500).json({ error: error.message });
  }
};

exports.trademarksearch = async (req, res) => {
  const { text, section_no, query_type } = req.query;
  console.log("Trademark SEARCH: ", req.query);

  //   return res.status(400).json(req.query);
  try {
    const response = await axios.get(`${FLASK_API_BASE_URL}/trademarksearch`, {
      params: { text, section_no, query_type }, // Forward parameters
    });
    console.log("No of result I got: ",response.data.length);
    return res.json(response.data);
  } catch (error) {
    return res.status(error.response?.status || 500).json({ error: error.message });
  }
};

exports.judgementclassification = async (req, res) => {
  const { text } = req.query;
  if (!text) {
    return res.status(400).json({ error: "No text query provided" });
  }

  try {
    const response = await axios.get(`${FLASK_API_BASE_URL}/judgementclassification`, {
      params: { text },
    });
    return res.json(response.data);
  } catch (error) {
    return res.status(error.response?.status || 500).json({ error: error.message });
  }
};

exports.chatbot = async (req, res) => {
  console.log("CHATBOT: ", req.query);
  const { text } = req.query;
  if (!text) {
    return res.status(400).json({ error: "No text query provided" });
  }

  try {
    const response = await axios.get(`${FLASK_API_BASE_URL}/chatbot`, {
      params: { text },
    });
    return res.json(response.data);
  } catch (error) {
    return res.status(error.response?.status || 500).json({ error: error.message });
  }
};
