import { useState } from "react";

/** Renders a Form for new listing
 *
 * Props: AddListing fn
 * State: formData
 */

const INITIAL_DATA = {
  name: "",
  price: 0,
  image: "",
  description: "",
  location: "",
};

function AddListingForm() {
  const [formData, setFormData] = useState(INITIAL_DATA);
  return null;
}

export default AddListingForm;
