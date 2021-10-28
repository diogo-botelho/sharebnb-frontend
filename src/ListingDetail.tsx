import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SharebnbApi from "./SharebnbApi";
// import Error from "./Error";

/** Renders detail of one Listing
 * 
 * Props: none
 * State: none 
 * 
 * Routes --> ListingDetail
 */

function ListingDetail() {
  const [currentListing, setCurrentListing] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  //   const [errors, setErrors] = useState(null);

  const { id } = useParams();

  useEffect(
    function getListing() {
      async function fetchListing() {
        try {
          const response = await SharebnbApi.getListing(id);
          setCurrentListing(response);
          setIsLoading(false);
        } catch (err) {
          console.error(err);
          //   setErrors(err);
        }
      }
      fetchListing();
    },
    [id]
  );

  //   if (errors.length < 1) return <Error errors={errors} />;
  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h2>{currentListing.name}</h2>
      <p>{currentListing.description}</p>
      <p>{currentListing.price} </p>
      <p>{currentListing.location}</p>
      <div>
        <img src={currentListing.image} alt="listing_image" />
      </div>
    </div>
  );
}

export default ListingDetail;
