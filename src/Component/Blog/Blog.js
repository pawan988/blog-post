import { PinDropSharp } from "@mui/icons-material";
import React from "react";

const Blog = ({ blog }) => {
    if (!blog) return null;
    return (
        <div className="Blog-content-wrapper">
            <img src={blog.img} alt="name" />
            <div className="blog_heading">
                <h3> {blog.heading} </h3>
                <p> {blog.description} </p>
            </div>
        </div>
    )

}

export default Blog;