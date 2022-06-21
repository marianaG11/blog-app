import Navbar from "./Navbar";
import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState(''); //when user types in, setTitle gets called and updates
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mariana');
    
    //the value being typed in
    //e.target is the input element; can access the value with e.target.value

    return (
        <>
        <Navbar />
        <div className="create">
            <h2>Add a new blog</h2>
            <form>
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
                <button>Add Blog</button>
               <p>{title}</p>
               <p>{body}</p>
               <p>{author}</p>
            </form>
        </div>
        </>
    )

}

export default Create;