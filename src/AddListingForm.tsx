import { useState } from "react";

/** Renders a Form for new listing
 *
 * Props: AddListing fn
 * State: formData, selectedFile
 * 
 * ListingList -> AddListingForm
 */

const INITIAL_DATA = {
  name: "",
  price: 0,
  image: "", //React might shout for trying to change the type
  description: "",
  location: "",
};

function AddListingForm({ AddListing }) {
  const [formData, setFormData] = useState(INITIAL_DATA);
  const [selectedFile, setSelectedFile] = useState();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((previousData) => ({ ...previousData, [name]: value }));
  }

  function handleFile(evt) {
    setSelectedFile(evt.target.files[0]);
    setFormData((previousData) => ({ ...previousData, "image": selectedFile }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    AddListing(formData);
    setFormData(INITIAL_DATA);
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
        // enctype="multipart/form-data"
        name="image"
        id="image"
        value={formData.image}
        placeholder="Image of your listing..."
        onChange={handleFile}
      ></input>
      <button className="AddListingForm-Button"> Add your listing </button>
    </form>
  );
}

export default AddListingForm;
