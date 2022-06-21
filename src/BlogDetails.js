import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {
     //can access the id param
    const {id} = useParams();   //allows to grab parameters from the Routes
    const {data: blog, loading, error} = useFetch(`http://localhost:8000/blogs/${id}`);
    return (
        <>
            <Navbar />
            <div className="blog-details">
                {loading && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
                )}
            </div>
        </>
    );
}

export default BlogDetails;
