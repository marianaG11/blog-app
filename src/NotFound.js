import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <>
        <Navbar />
        <div className="not-found">
            <h2>page not found</h2>
            <Link to="/">Back to homepage</Link>
        </div>
        
        </>
        
     );
}
 
export default NotFound;