import { useState } from "react"; //to create a reactive value


const Home = () => {
    const  [blogs, setBlogs] = useState([
        {title: 'blog1', body: 'lorem ipsum...', author: 'Mariana', id: 1},
        {title: 'blog2', body: 'lorem ipsum...', author: 'Mariana', id: 2},
        {title: 'blog3', body: 'lorem ipsum...', author: 'Mariana', id: 3}
    ]);




//map through the array of objects
//need the key attribute to keep track of each item in the dom as React outputs it
    //the id prop; must be unique
    return (
        <div className="home">
           {blogs.map((blog) => (
               <div className="blog-preview" key={blog.id}>
                   <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
               </div>
            ))}
        </div>
     );
}
 
export default Home;