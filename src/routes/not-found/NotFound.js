import { Link } from "react-router-dom";
import "./NotFound.sass";

const NotFound = () => {
    return (
        <main className="not-found">
            <h2 className="blue-text">This page is not available</h2> {/* Changed to blue-text */}
            <p className="gray-text">Sorry, we couldn’t find the page you’re looking for.</p>
            <Link className="blue-text" to="/">Homepage</Link> {/* Changed to blue-text */}
        </main>
    )
}

export default NotFound;
