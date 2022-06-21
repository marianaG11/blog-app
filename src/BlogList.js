

const BlogList = (props) => { //with props, can now access the blog properties that were passed into the BlogList component
    //define the variables here
    //grabbing the diff properties and storing them into the variables
    //can also just destructure the props and pass in the specific properties
    const title = props.title;
    const blogs = props.blogs;
    const handleDelete = props.handleDelete;
    console.log(props, blogs);
    

    return(
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
                </div>
            ))}
        </div>
    )
}

export default BlogList;