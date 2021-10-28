import { useState, useEffect } from "react";
import SearchForm from './SearchForm';
import ListingCard from './ListingCard';
import SharebnbApi from "./SharebnbApi";
import Error from "./Error";

/** Lists all the listings
 * 
 * Props: none
 * State: listings, isLoading, searchTerm, errrors
 * Context: none
 * 
 * Routes -> ListingList -> { SearchForm, ListingCard }
 */
function ListingList() {
    const [listings, setListings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [errors, setErrors] = useState([]);

    useEffect(function fetchListingsOnLoad() {
        async function getListingsFromApi() {
            try {
                const listings = await SharebnbApi.getListings();
                setListings(listings);
                setIsLoading(false);
            }
            catch (err) {
                setErrors(previousErrors => [...previousErrors, ...err]);
            }
        }
        getListingsFromApi();
    }, [isLoading]);

    function searchListings(formData) {
        setSearchTerm(formData);
        // setIsLoading(true);
    }

    if (errors.length > 0) {
        return <Error messages={errors} />;
    }

    if (isLoading) return <h1>Loading...</h1>;

    return (
        <div className="background-theme">
            <SearchForm submitSearch={searchListings} initialData={searchTerm} />
            {listings.map(listing => <ListingCard
                key={listing.id}
                listing={listing} />
            )}
        </div>
    );
}

export default ListingList;

// (State: Listings, Loading, Errors, Props: None)
// Components
// SearchForm (State: FormData, Props:Search fn)
// ListingCard (State: None, Props: Listing info)
// Presentational
// Add button for removing card
