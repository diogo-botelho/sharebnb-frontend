import "./HomePage.css";
/** Renders HomePage
 *
 * Props: none
 * State: none
 *
 * Routes --> HomePage
 */

function HomePage() {
  return (
    <div className="Homepage">
      <div className="container text-center">
        <h1 className="mb-4 fw-bold">Welcome To ShareBnB!</h1>
        <p className="lead">Check out a place to visit!</p>
      </div>
    </div>
  );
}

export default HomePage;
