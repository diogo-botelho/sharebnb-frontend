import { useState } from "react";
import "./AddListingForm.css";

const INITIAL_DATA = {
  name: "",
  price: 0,
  image: "",
  description: "",
  location: "",
};

/** Renders a Form for new listing
 *
 * Props: AddListing fn
 * State: formData
 *
 * ListingList -> AddListingForm
 */

function AddListingForm({ AddListing }) {
  const [formData, setFormData] = useState(INITIAL_DATA);

  /**Handles change for name, price, description, location */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((previousData) => ({ ...previousData, [name]: value }));
  }

  /**Handles file upload.
   * Sets formData state to include selected file  */
  function handleFile(evt) {
    const image = evt.target.files[0];
    setFormData((previousData) => ({ ...previousData, image: image }));
  }

  /**Handles form submission. Builds instance of FormData class
   * and calls addListing fn
   */
  async function handleSubmit(evt) {
    evt.preventDefault();
    const sendData = new FormData();

    for (let key in formData) {
      sendData.append(key, formData[key]);
    }
    await AddListing(sendData);
  }

  return (
    <div className="AddListingForm col-md-6 col-lg-4 offset-md-3 offset-lg-4">
      <h3>Add a new listing!</h3>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name of Listing</label>
              <input
                required
                type="text"
                name="name"
                id="name"
                value={formData.name}
                placeholder="Name of your listing..."
                onChange={handleChange}
              ></input>
            </div>
            <div className="mb-3">
              {" "}
              <label className="form-label">Description</label>
              <input
                required
                type="text"
                name="description"
                id="description"
                value={formData.description}
                placeholder="Description of your listing..."
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Price</label>
              <input
                required
                type="number"
                name="price"
                id="price"
                value={formData.price}
                placeholder="Price of your listing..."
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Location</label>
              <input
                required
                type="text"
                name="location"
                id="location"
                value={formData.location}
                placeholder="Location of your listing..."
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Image of place</label>
              <input
                required
                type="file"
                name="image"
                id="image"
                placeholder="Image of your listing..."
                onChange={handleFile}
              />
            </div>
            <div className="d-grid">
              <button className="AddListingForm-btn btn btn-info">
                {" "}
                Add your listing{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddListingForm;
