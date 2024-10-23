import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";

const Blogs = ({handleAddToBookMarks, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <section className="w-2/3">
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleAddToBookMarks={handleAddToBookMarks}
                    handleMarkAsRead ={handleMarkAsRead}
                ></Blog>)
            }
        </section>
    );
};

export default Blogs;