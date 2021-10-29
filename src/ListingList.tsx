import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import ListingCard from "./ListingCard";
import SharebnbApi from "./SharebnbApi";
import AddListingForm from "./AddListingForm";
// import Error from "./Error";

/** Lists all the listings
 *
 * Props: none
 * State: listings, isLoading, searchTerm, errrors
 * Context: none
 *
 * Routes -> ListingList -> { SearchForm, AddListingForm, ListingCard }
 */
function ListingList() {
    const [listings, setListings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    //   const [errors, setErrors] = useState([]);

    useEffect(
        function fetchListingsOnLoad() {
            async function getListingsFromApi() {
                try {
                    const listings = await SharebnbApi.getListings();
                    console.log(listings, "list");
                    setListings(listings);
                    setIsLoading(false);
                } catch (err) {
                    console.error(err);
                    //   setErrors((previousErrors) => [...previousErrors, ...err]);
                }
            }
            getListingsFromApi();
        },
        [isLoading]
    );

    function searchListings(formData) {
        setSearchTerm(formData);
        // setIsLoading(true);
    }

    //   if (errors.length > 0) {
    //     return <Error errors={errors} />;
    //   }

    async function addListing(formData) {
        await SharebnbApi.createListing(formData);
        setIsLoading(true);
    }

    if (isLoading) return <h1>Loading...</h1>;

    return (
        <div className="background-theme">
            <AddListingForm AddListing={addListing} />
            <SearchForm submitSearch={searchListings} initialData={searchTerm} />
            {listings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
            ))}
        </div>
    );
}

export default ListingList;
