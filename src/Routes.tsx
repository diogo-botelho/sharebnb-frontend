// import { useContext } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./HomePage";
import ListingList from "./ListingList";
import ListingDetail from "./ListingDetail";
// import AddListingForm from './AddListingForm'

/**Renders Routes
 *
 * Props: none
 * State: none
 * Context: none
 *
 * App -> Routes -> {
 *              HomePage,
 *              ListingList,
 *              ListingDetail,
 *              AddListingForm
 *          }
 */
function Routes() {
  // const user = useContext(CurrUserContext);
  // const token = localStorage.getItem("token");
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/listings">
        <ListingList />
      </Route>
      <Route exact path="/listings/:id">
        <ListingDetail />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
