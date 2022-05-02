import React, { useEffect, useReducer, useState } from "react"
import { AiFillPlusCircle} from "react-icons/ai"
import AddBlogModal from "../../../Component/UI/Modal/Modal"
import Blog from "../../../Component/Blog/Blog"
import Banner from "../../../Component/Banner/Banerr"

const intialAddBlogState = {
    title: "",
    description: "",
    authorName: "",
    imageUrl: "",
}

const addBlogReducer = (state, action) => {
    switch(action.type) {
        case "title": return {...state, title: action.payload};
        case "description": return {...state, description: action.payload};
        case "authorName": return {...state, authorName: action.payload};
        case "imageUrl": return {...state, imageUrl: action.payload};
    }
}

const UserProfile = (props) => {
    const [user, setUser] = useState(props.location.state)
    const [addBlogState, setAddBlogState] = useReducer(addBlogHandler, intialAddBlogState)
    const [userBlogs, setUserblogs] = useState([])
    const [isPosted, setIsPosted] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState("")

    useEffect(() => {
        const blogs = JSON.parse(localStorage.getItem("blogs"))
        const myBlogs = blogs.filter(blog => blog.authorName === user.userName)
        setUserblogs(myBlogs)
    }, [isPosted])

    const addBlogHandler = () => {
        const isValidate = Object.values(addBlogState).every(item => item.length > 1)
        if (isValidate) {
            const blogs =  JSON.parse(localStorage.getItem("blogs"))
            blogs.push(addBlogState);
            localStorage.setItem("blog", JSON.stringify(blogs))
            setIsPosted(true)
        } else {
             setError("please fill the data!")
        }
    }
    return (
        <div className="user-profile">
            <AddBlogModal onSubmitBlog ={ addBlogHandler} 
            error={error} showModal={showModal} 
            addBlogState={addBlogState}
            setAddBlogState={setAddBlogState}
            />
            <div className="user-banner-wapper">
            <Banner />
            <div className="logout-wrapper">
                <button onClick={{}}>Logout</button>
            </div>
            </div>
            <div className="add-blog" onClick={() => setShowModal(true)}>
                   <AiFillPlusCircle size={50} color="#1aa1a5"/>
            </div>
            <div className="myBlogs">
                {
                    userBlogs.map(blog => <Blog item={blog} />)
                }
            </div>
        </div>
    )
}

export default UserProfile