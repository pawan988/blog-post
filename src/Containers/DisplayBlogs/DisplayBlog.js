import React  from  "react";
import "./DisplayBlog.css";

const DisplayBlogs = (props) => {
    return(
        <div className="displayBlog_wrappee">
            <div className="blogImage_wrapper">
                <img src={props.img}  alt="blog_image" />
            </div>
            <div className="blogContent_wrapper">
                <h3>
                    {props.heading}
                </h3>
                <p>
                    {props.description}
                </p>
            </div>

        </div>
    )
}

export default DisplayBlogs;