import { Link } from "react-router-dom";
import "./ListingCard.css";

/** Renders an individual listing item
 *
 * Props: listing (obj of a listing: {name, descriptiong, location, img})
 * State: none
 *
 * ListingList --> ListingCard
 */

function ListingCard({ listing }) {
  return (
    <div className="ListingCard container">
      <Link className="ListingCard card" to={`listings/${listing.id}`}>
        <div className="card-body">
          <h2 className="card-title">{listing.name}</h2>
          <p className="card-text">{listing.price.toLocaleString()}</p>
          <p className="card-text mb-2 ">{listing.location}</p>
          <div className="ListingCard-image-container">
            {listing.image && (
              <img className="float-end ms-5" src={listing.image} alt="logo" />
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ListingCard;
