import axios from "axios";

const BASE_URL = "http://localhost:5000";
// process.env.REACT_APP_BASE_URL ||
/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 *
 */

// interface AxiosParameters {
//   url: string;
//   method: string;
//   data: object | null;
//   params: object | null;
//   headers: object;
// }

class SharebnbApi {
  static async request(endpoint, data = {}, method = "get", typeFile = false) {
    console.debug("API Call:", endpoint, data, method);

    const content = typeFile ? "multipart/form-data" : "application/json";
    const url = `${BASE_URL}/${endpoint}`;
    const headers = {
      "Content-Type": content,
      // Authorization: `Bearer ${JoblyApi.token}`
    };
    const params = method === "get" ? data : {};
    // const axiosParams = { url, method, data, params, headers };

    try {
      return (await axios({ url, method, data, params, headers } as any)).data;
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
    console.log(`${BASE_URL}/listings`, "url response");
    const res = await axios({ url: `${BASE_URL}/listings`, method: "GET" });

    return res.data.listings;
    // const res = await this.request("listings");
    // console.log(res, "response from listings");
    // return res.listings;
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
      "listings",
      { name, image, price, description, location },
      "post",
      true
    );
    return res;
  }

  /** Function that updates a listing's information,
   * takes an object { listingId, image, price, description }
   * returns listing: { listingId, name, image, price, description, location }
   */
  static async updateListing({ listingId, image, price, description }) {
    const patchData = { image, price, description };

    const res = await this.request(
      `listings/${listingId}`,
      patchData,
      "patch",
      true
    );

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
