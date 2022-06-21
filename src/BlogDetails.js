import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const {id} = useParams();   //allows to grab parameters from the Routes
    //can access the id param
    return (
        <>
        <Navbar />
        <div className="blog-details">
            <h2>Blog Details {id} </h2>
        </div>
        </>
    );
}

export default BlogDetails;
