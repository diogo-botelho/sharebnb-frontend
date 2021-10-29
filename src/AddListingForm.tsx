import { useEffect, useState } from "react";

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
 * State: formData, selectedFile
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
    setFormData(previousData => ({ ...previousData, "image": image }));
  }

  /**Handles form submission. Builds instance of FormData class
   * and calls addListing fn
   */
  async function handleSubmit(evt) {

    evt.preventDefault();
    const sendData = new FormData();

    for (let key in formData) {
      sendData.append(key, formData[key])
    }
    await AddListing(sendData);
  }

  return (
    <form className="AddListingForm" onSubmit={handleSubmit}>
      <input
        required
        type="text"
        name="name"
        id="name"
        value={formData.name}
        placeholder="Name of your listing..."
        onChange={handleChange}
      ></input>
      <input
        required
        type="text"
        name="description"
        id="description"
        value={formData.description}
        placeholder="Description of your listing..."
        onChange={handleChange}
      ></input>
      <input
        required
        type="number"
        name="price"
        id="price"
        value={formData.price}
        placeholder="Price of your listing..."
        onChange={handleChange}
      ></input>
      <input
        required
        type="text"
        name="location"
        id="location"
        value={formData.location}
        placeholder="Location of your listing..."
        onChange={handleChange}
      ></input>
      <input
        required
        type="file"
        name="image"
        id="image"
        placeholder="Image of your listing..."
        onChange={handleFile}
      ></input>
      <button className="AddListingForm-Button"> Add your listing </button>
    </form>
  );
}

export default AddListingForm;
