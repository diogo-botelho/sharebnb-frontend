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

  /** Get a specific listing
   *
   * Takes in handle
   *
   * Returns {listing}
   */
  static async getListing(id) {
    const res = await this.request(`listings/${id}`);
    return res.company;
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

  /** Function that updates a listing's information,
   * takes an object { listingId, image, price, description }
   * returns listing: { listingId, name, image, price, description, location }
   */
  static async updateListing({ listingId, image, price, description }) {
    const patchData = { image, price, description };

    const res = await this.request(`listings/${listingId}`, patchData, "patch");

    return res.listing;
  }

  /** Function that deletes a listing
   * takes listingId
   * returns "ListingId successfully deleted"
   */
  static async deleteListing(listingId) {
    const res = await this.request(`listings/${listingId}`, "delete");

    return res.deleted;
  }
}

export default SharebnbApi;
