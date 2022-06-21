import Navbar from "./Navbar";
import { useState } from "react";
import {useNavigate } from "react-router-dom";
const Create = () => {

    const [title, setTitle] = useState(''); //when user types in, setTitle gets called and updates
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mariana');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault(); //prevents page from refreshing
        const blog = {title, body, author};
        
        setLoading(true);
    
        //submitting a post
        fetch("http://localhost:8000/blogs", {
            method: 'POST', 
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setLoading(false);
            navigate("/");
        })

        
    }

    //the value being typed in
    //e.target is the input element; can access the value with e.target.value

    return (
        <>
        <Navbar />
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value = {title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Content:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)} 
                ></textarea>
                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                
                >
                    <option value="Mariana">Mariana</option>
                    <option value="Maggie">Maggie</option>
                </select>
                {!loading ? <button>Add Blog</button> :< button disabled>Adding blog...</button>}
               <p>{title}</p>
               <p>{body}</p>
               <p>{author}</p>
            </form>
        </div>
        </>
    )

}

export default Create;