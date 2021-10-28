import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 *
 */

class SharebnbApi {
  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    // const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  /** Get list of Listings
   *
   * returns [{listing}}, {listing}, {listing}]
   */

  static async getListings() {
    const res = await this.request("listings");
    return res.listings;
  }

  /** Registers a new listing*/
  //TODO: Go back to backend, for check for returning in api
  static async createListing({ name, image, price, description, location }) {
    const res = await this.request(
      "listings/add_image",
      { name, image, price, description, location },
      "post"
    );
    return res;
  }
}

export default SharebnbApi;
