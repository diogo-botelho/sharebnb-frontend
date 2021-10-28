import { useState } from "react";

/** Renders search bar
 *
 * Props: submitSearch (fn), initialData (str)
 * State: formData of initialData: str
 *
 * ListingList --> SearchForm
 *
 */

function SearchForm({ submitSearch, initialData }) {
  const [formData, setFormData] = useState(initialData);

  function handleChange(evt) {
    setFormData(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    submitSearch(formData);
  }

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData}
        placeholder="Enter search term ..."
        onChange={handleChange}
      ></input>
      <button className="SearchForm-Button"> Search!!! </button>
    </form>
  );
}

export default SearchForm;
