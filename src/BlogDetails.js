import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";
const BlogDetails = () => {
     //can access the id param
    const {id} = useParams();   //allows to grab parameters from the Routes
    const {data: blog, loading, error} = useFetch(`http://localhost:8000/blogs/${id}`);
    const navigate = useNavigate();

    //deleting a post
    const handleClick = () => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE'
        }).then(() => {
            navigate("/")
        });
    }

 
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
                    <button onClick={handleClick}>Delete</button>
                </article>
                )}
            </div>
        </>
    );
}

export default BlogDetails;
