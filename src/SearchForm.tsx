import { useState } from "react";
import "./SearchForm.css";

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
    <div className="SearchForm mb-4">
      <form onSubmit={handleSubmit}>
        <div className="row justify-content-center justify-content-lg-start gx-0">
          <div className="col-8">
            <input
              className="form-control form-control-lg"
              type="text"
              value={formData}
              placeholder="Enter search term ..."
              onChange={handleChange}
            />
            <div className="col-auto">
              <button
                type="submit"
                className="SearchForm-btn btn btn-lg btn-info"
              >
                Search!!!
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
