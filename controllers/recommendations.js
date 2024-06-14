const { uploadFileFromUrl } = require('../services/storeImageIntoGcsService');
const fetchProductDetails = require('../utils/getProductDetails');
const fetch = require('node-fetch');

const getProductDetails = async (req, res, next) => {
  try {
    const productIds = req.params.id; // Assuming product IDs are sent in the request body
//    const result=await fetchProductDetails([productIds])
console.log("productIds",productIds)
    const myHeaders = new fetch.Headers();
    myHeaders.append("Authorization", "Token bYTFfK5Czo42zfhMmPQoUvXmWiSJ9fV8EbTKdQfDFL4A40tJ");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("MEESHO-ISO-COUNTRY-CODE", "IN");

    const raw = JSON.stringify({
      "product_ids": [productIds]
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const response = await fetch("http://taxonomy-indexer.prd.meesho.int/api/v2/product/aggregation", requestOptions);
    const result = await response.json(); // Assuming the response is in JSON format

    res.status(200).json({
      success: true,
      message: "Product details fetched successfully",
      data: result,
    });

  } catch (error) {
    next(error);
  }
};

const extractProductDetails = (result) => {
  try {
    // Parse the JSON data
    const parsedData = JSON.parse(result);

    // Check if there are any catalogs
    if (!parsedData.catalogs || parsedData.catalogs.length === 0) {
      return null;
    }

    // Extract the first catalog item
    const firstCatalog = parsedData.catalogs[0];

    // Extract the description and image
    const productDetail = {
      description: firstCatalog.description,
      image: firstCatalog.image
    };

    return productDetail;

  } catch (error) {
    console.error('Error parsing data:', error);
    return [];
  }
};

const exchangeReason = async (req, res, next) => {
  const {issues,productId } = req.body;
  console.log("issues",issues)
  try {
    const myHeaders1 = new fetch.Headers();
    myHeaders1.append("Authorization", "Token bYTFfK5Czo42zfhMmPQoUvXmWiSJ9fV8EbTKdQfDFL4A40tJ");
    myHeaders1.append("Content-Type", "application/json");
    myHeaders1.append("MEESHO-ISO-COUNTRY-CODE", "IN");

    const raw1 = JSON.stringify({
      "product_ids": [productId]
    });

    const requestOptions1 = {
      method: "POST",
      headers: myHeaders1,
      body: raw1,
      redirect: "follow"
    };

    const response1 = await fetch("http://taxonomy-indexer.prd.meesho.int/api/v2/product/aggregation", requestOptions1);
    const pDetail = await response1.json();
    console.log("pDetail",pDetail)
//     const data = extractProductDetails(pDetail);
//    console.log("data ext",data)
    // // Add timestamp to the image name
    // const timestamp = Date.now();
    // const fileExtension = data.image.split('.').pop(); // Get the file extension
    // const baseName = data.image.replace(`.${fileExtension}`, ''); // Get the base name without extension
    // const destinationFileName = `${baseName}_${timestamp}.${fileExtension}`;

    // await uploadFileFromUrl('open-exchange', imageUrl, destinationFileName);

    const myHeaders = new fetch.Headers();
    myHeaders.append("X-WISHLIST-AGGREGATION-REQUIRED", "true");
    myHeaders.append("Authorization", "32c4d8137cn9eb493a1921f203173080");
    myHeaders.append("App-Version", "18.2.1-beta-dev debug");
    myHeaders.append("App-Version-Code", "560");
    myHeaders.append("Instance-Id", "6911a8fa6f144eb393680cb328357cf1");
    myHeaders.append("Country-Iso", "in");
    myHeaders.append("Application-Id", "com.meesho.supply.debug");
    myHeaders.append("App-Session-Id", "1c7a36ac-536c-40c0-bbe9-79a5fddfdcaa");
    myHeaders.append("APP-SDK-VERSION", "33");
    myHeaders.append("APP-CLIENT-ID", "android");
    myHeaders.append("Xo", "eyJ0eXBlIjoiY29tcG9zaXRlIn0=.eyJqd3QiOiJleUpvZEhSd2N6b3ZMMjFsWlhOb2J5NWpiMjB2ZG1WeWMybHZiaUk2SWpFaUxDSm9kSFJ3Y3pvdkwyMWxaWE5vYnk1amIyMHZhWE52WDJOdmRXNTBjbmxmWTI5a1pTSTZJa2xPSWl3aVlXeG5Jam9pU0ZNeU5UWWlmUS5leUpwWVhRaU9qRTNNVGd5T0RjeE16QXNJbVY0Y0NJNk1UY3hPRFExT1Rrek1Dd2lhSFIwY0hNNkx5OXRaV1Z6YUc4dVkyOXRMMmx1YzNSaGJtTmxYMmxrSWpvaU5qa3hNV0U0Wm1FMlpqRTBOR1ZpTXprek5qZ3dZMkl6TWpnek5UZGpaakVpTENKb2RIUndjem92TDIxbFpYTm9ieTVqYjIwdmRYTmxjbDlwWkNJNklqazRPVE14T0RFNEluMC5YS0dMVGJVM1pFUmMtTHNYbGhwSUxQWjhjdkZNWnlfeXpXLWNQTVhyd3VnIiwieG8iOiJjNWE2N2NkZTM1NGE0Y2Y1YjcyZWEzZGFkNDdkOGNkZCJ9");
    myHeaders.append("APP-ISO-LANGUAGE-CODE", "en");
    myHeaders.append("APP-USER-ID", "98931818");
    myHeaders.append("U-Token", "KzkxOTY1NTY1MTg4Ng==");
    myHeaders.append("SHIELD-SESSION-ID", "cc777cc2446244e79eb3f055591c7af8");
    myHeaders.append("APP-USER-LOCATION", "eyJsYXQiOiIxMS4wMDMyIiwibG9uZyI6Ijc4LjQyNTEiLCJwaW5jb2RlIjoiNjIxMjExIiwiY2l0eSI6Ik11c2lyaSIsImFkZHJlc3NfaWQiOiI5OTQ1MTgyNSJ9");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      filter: {
        type: "text_search",
        sort_option: null,
        selected_filters: [],
        current_row_filters: [],
        session_state: null,
        selectedFilterIds: [],
        isClearFilterClicked: false,
        query: pDetail.catalogs[0].description+"better in these specification"+issues.main+" "+issues.sub,
        intent_payload: null,
        is_voice_search: false,
        is_autocorrect_reverted: false,
        enabled_mid_feed_filters: false,
        mid_feed_filter_variant: null,
        selected_mid_feed_filter_priority: null,
        hvf_ui_version: null
      },
      search_session_id: null,
      cursor: null,
      offset: 0,
      limit: 20,
      supplier_id: null,
      featured_collection_type: null,
      meta: {
        recent_searches: ["saree"]
      },
      retry_count: 0,
      product_listing_page_id: null,
      user_id: 98931818
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const response = await fetch("https://prod-app-internal.meeshoapi.com/api/3.0/catalogs", requestOptions);
    const result = await response.text();

    res.status(201).json({
      success: true,
      message: "Choice sent successfully",
      result,
    });

  } catch (error) {
    next(error);
  }
};

const getProducts = async (req, res, next) => {
    const {query}=req.body;
  try {
    const myHeaders = new Headers();
    myHeaders.append("X-WISHLIST-AGGREGATION-REQUIRED", "true");
    myHeaders.append("Authorization", "32c4d8137cn9eb493a1921f203173080");
    myHeaders.append("App-Version", "18.2.1-beta-dev debug");
    myHeaders.append("App-Version-Code", "560");
    myHeaders.append("Instance-Id", "6911a8fa6f144eb393680cb328357cf1");
    myHeaders.append("Country-Iso", "in");
    myHeaders.append("Application-Id", "com.meesho.supply.debug");
    myHeaders.append("App-Session-Id", "1c7a36ac-536c-40c0-bbe9-79a5fddfdcaa");
    myHeaders.append("APP-SDK-VERSION", "33");
    myHeaders.append("APP-CLIENT-ID", "android");
    myHeaders.append("Xo", "eyJ0eXBlIjoiY29tcG9zaXRlIn0=.eyJqd3QiOiJleUpvZEhSd2N6b3ZMMjFsWlhOb2J5NWpiMjB2ZG1WeWMybHZiaUk2SWpFaUxDSm9kSFJ3Y3pvdkwyMWxaWE5vYnk1amIyMHZhWE52WDJOdmRXNTBjbmxmWTI5a1pTSTZJa2xPSWl3aVlXeG5Jam9pU0ZNeU5UWWlmUS5leUpwWVhRaU9qRTNNVGd5T0RjeE16QXNJbVY0Y0NJNk1UY3hPRFExT1Rrek1Dd2lhSFIwY0hNNkx5OXRaV1Z6YUc4dVkyOXRMMmx1YzNSaGJtTmxYMmxrSWpvaU5qa3hNV0U0Wm1FMlpqRTBOR1ZpTXprek5qZ3dZMkl6TWpnek5UZGpaakVpTENKb2RIUndjem92TDIxbFpYTm9ieTVqYjIwdmRYTmxjbDlwWkNJNklqazRPVE14T0RFNEluMC5YS0dMVGJVM1pFUmMtTHNYbGhwSUxQWjhjdkZNWnlfeXpXLWNQTVhyd3VnIiwieG8iOiJjNWE2N2NkZTM1NGE0Y2Y1YjcyZWEzZGFkNDdkOGNkZCJ9");
    myHeaders.append("APP-ISO-LANGUAGE-CODE", "en");
    myHeaders.append("APP-USER-ID", "98931818");
    myHeaders.append("U-Token", "KzkxOTY1NTY1MTg4Ng==");
    myHeaders.append("SHIELD-SESSION-ID", "cc777cc2446244e79eb3f055591c7af8");
    myHeaders.append("APP-USER-LOCATION", "eyJsYXQiOiIxMS4wMDMyIiwibG9uZyI6Ijc4LjQyNTEiLCJwaW5jb2RlIjoiNjIxMjExIiwiY2l0eSI6Ik11c2lyaSIsImFkZHJlc3NfaWQiOiI5OTQ1MTgyNSJ9");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      filter: {
        type: "text_search",
        sort_option: null,
        selected_filters: [],
        current_row_filters: [],
        session_state: null,
        selectedFilterIds: [],
        isClearFilterClicked: false,
        query: query,
        intent_payload: null,
        is_voice_search: false,
        is_autocorrect_reverted: false,
        enabled_mid_feed_filters: false,
        mid_feed_filter_variant: null,
        selected_mid_feed_filter_priority: null,
        hvf_ui_version: null
      },
      search_session_id: null,
      cursor: null,
      offset: 0,
      limit: 20,
      supplier_id: null,
      featured_collection_type: null,
      meta: {
        recent_searches: ["saree"]
      },
      retry_count: 0,
      product_listing_page_id: null,
      user_id: 98931818
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const response = await fetch("https://prod-app-internal.meeshoapi.com/api/3.0/catalogs", requestOptions);
    const result = await response.text();

    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      result,
    });

  } catch (error) {
    next(error);
  }
};

module.exports = { exchangeReason, getProducts, getProductDetails };
