import { useState, useEffect } from "react"; //to create a reactive value
import BlogList from "./BlogList";


const Home = () => {
    const  [blogs, setBlogs] = useState([
        {title: 'blog1', body: 'lorem ipsum...', author: 'Mariana', id: 1},
        {title: 'blog2', body: 'lorem ipsum...', author: 'Maggie', id: 2},
        {title: 'blog3', body: 'lorem ipsum...', author: 'Mariana', id: 3}
    ]);


    //can then pass this as a prop
    const handleDelete = (id) => {
        //use setBlogs to update the state
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    //pass as an argument a function
    //runs on each re-render, after data changes
    //used for fetching data; use for when you want code to run on every re-render
    useEffect(() => {
        console.log('use effect ran');
        console.log(blogs);
    });





    //map through the array of objects
    //need the key attribute to keep track of each item in the dom as React outputs it
        //the id prop; must be unique
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog) => blog.author === "Mariana")} title="Mariana's Blogs"/>
        </div>
     );
}
 
export default Home; 