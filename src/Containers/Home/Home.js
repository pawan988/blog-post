import React, { useEffect, useState } from "react";
import Banner from "../../Component/Banner/Banerr";
import Blog from "../../Component/Blog/Blog";

const Home = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        const allBlogs = JSON.parse(localStorage.getItem("blogs"))
        setBlogs(allBlogs)
    }, [])
    return (
        <div className="home_page">
            <Banner />
            <div className="blogs-wrapper">
                <h3>Trending Blogs</h3>
                <div className="trending-blogs-wrapper">
                    {blogs.map(item => <Blog blog={item} />)}
                </div>
            </div>
        </div>
    )
}
export default Home;