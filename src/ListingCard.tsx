import { Link } from "react-router-dom";

/** Renders an individual listing item
 *
 * Props: listing (obj of a listing: {name, descriptiong, location, img})
 * State: none 
 * 
 * ListingList --> ListingCard
 */

function ListingCard({ listing }) {
  return (
    <div className="ListingCard">
      <Link
        to={`listings/${listing.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <h2 className="ListingCard-name">{listing.name}</h2>
        <p className="ListingCard-price">{listing.price.toLocaleString()}</p>
        <p className="ListingCard-location">{listing.location}</p>
        <div className="ListingCard-image-container">
          {listing.image && <img src={listing.image} alt="logo" />}
        </div>
      </Link>
    </div>
  );
}

export default ListingCard;
