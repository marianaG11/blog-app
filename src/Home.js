
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import Navbar from "./Navbar";

const Home = () => {
    const {data: blogs, loading, error} = useFetch("http://localhost:8000/blogs");


    // //can then pass this as a prop
    // const handleDelete = (id) => {
    //     //use setBlogs to update the state
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }




    //map through the array of objects
    //need the key attribute to keep track of each item in the dom as React outputs it
        //the id prop; must be unique
    return (
        <>
        <Navbar />
        <div className="home">
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
        </>
     );
}
 
export default Home; 