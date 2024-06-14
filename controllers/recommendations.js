const Product = require('../modals/products');
const fetchProductDetails = require('../utils/getProductDetails');

const getProductDetails = async (req, res, next) => {
  try {
    const productIds = req.params.id; // Assuming product IDs are sent in the request body
     const result = await fetchProductDetails(productIds);

    res.status(200).json({
      success: true,
      message: "Product details fetched successfully",
      data: result,
    });

  } catch (error) {
    next(error);
  }
};
const exchangeReason = async (req, res, next) => {
    const {issues,productId}=req.body;
//   let issues=['quality',"fabric"]
  const productDetail=await fetchProductDetails(productId);
  
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
        query: "yellow shoes",
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
        query: "yellow shoes",
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
      message: "Choice sent successfully",
      result,
    });

  } catch (error) {
    next(error);
  }
};

module.exports = { exchangeReason, getProducts, getProductDetails };