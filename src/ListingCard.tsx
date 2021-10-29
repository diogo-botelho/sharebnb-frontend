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
    <Link className="ListingCard card" to={`listings/${listing.id}`}>
      <div className="card-body">
        <h2 className="card-title">{listing.name}</h2>
        <p className="ListingCard-price">{listing.price.toLocaleString()}</p>
        <p className="ListingCard-location">{listing.location}</p>
        <div className="ListingCard-image-container">
          {listing.image && (
            <img className="float-end ms-5" src={listing.image} alt="logo" />
          )}
        </div>
      </div>
    </Link>
  );
}

export default ListingCard;
