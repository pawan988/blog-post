import React from "react";


const Modal = ({addBlogState, setAddBlogState, error, onSubmitBlog, showModal}) => {
   return (
       <div className="add-blog-modal" style={{transform: showModal ? 'translateY(500px)' : 0}}>
           {error && <h4 style={{color: "red",  fontSize: "16px"}}>{error}</h4>}
           <div className="add-content-wrapper">
                <label>Add Blog Title</label>
                <input name="blog-title" value={addBlogState.title} />
                <label>Add Description</label>
                <textarea name="blog-description" value={addBlogState.description} cols={5} rows={50} />
                <label>Add Image Url</label>
                <input name="blog-imageUrl" value={addBlogState.imageUrl} />
                <button onClick={onSubmitBlog}>Submit</button>
           </div>
       </div>
   )
}

export default Modal;