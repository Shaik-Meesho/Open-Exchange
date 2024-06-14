const fetch = require('node-fetch'); // Import node-fetch

const fetchProductDetails = async (productIds) => {
  try {
    const myHeaders = new fetch.Headers();
    myHeaders.append("Authorization", "Token bYTFfK5Czo42zfhMmPQoUvXmWiSJ9fV8EbTKdQfDFL4A40tJ");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("MEESHO-ISO-COUNTRY-CODE", "IN");

    const raw = JSON.stringify({
      "product_ids": productIds
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const response = await fetch("http://taxonomy-indexer.prd.meesho.int/api/v2/product/aggregation", requestOptions);
    if (!response.ok) {
      throw new Error(`Error fetching product details: ${response.statusText}`);
    }
    const result = await response.json(); // Assuming the response is in JSON format
    return result;
  } catch (error) {
    console.error('Error:', error);
    throw error; // Rethrow the error for further handling if needed
  }
};

module.exports = fetchProductDetails;
