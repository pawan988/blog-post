import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Layout from "./HOC/Layout"
import Home from './Containers/Home/Home';
import DisplayBlog from "./Containers/DisplayBlogs/DisplayBlog"
import SignIn from "./Containers/auth/signin/Signin"
import SignUp from "./Containers/auth/signup/Signup"
import UserProfile from "./Containers/auth/user/user"

const items = [{
  title: "Rahul gandhi may loose 2024 election",
  description: "Lateral entry of various professionals into political parties has not been uncommon and all political parties at one point of time or the other have co-opted many professionals, some of them at very senior levels, to help boost either the party or party’s government the way the leadership might perceive. We have many civil servants, professionals of various fields and even senior members of judiciary and defence at various layers of parties and governments and often they have performed exceedingly well at their given positions and contributed in their own unique ways for betterment of quality delivery at their respective levels.",
  authorName: "pawan patidar",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/64/Rahul_Gandhi_speaking.jpg",
}, 
{
  title: "Katrina kaif and vicky caushal get married",
  description: "Actor Katrina Kaif has changed her Instagram profile photo a week after her wedding with Vicky Kaushal. The couple tied the knot in an intimate wedding at the Six Senses Fort Barwara in Rajasthan's Sawai Madhopur on December 9. They made their first public appearance as husband and wife at the Mumbai airport earlier this week. Katrina Kaif's current Instagram profile photo is one of the candid pictures from her first post on the social media platform after their wedding. In the photo, the newlyweds gazed at each other lovingly during the ceremony. The picture was clicked against the setting sun",
  authorName: "lalit patidar",
  imageUrl: "https://images.hindustantimes.com/img/2021/12/16/550x309/Katrina_Kaif-Vicky_Kaushal_1639651770704_1639651780372.jpg",
}, 
{
  title: "India loose bipin rawat",
  description: "India has lost a capable and experienced military leader in the tragic death of the country’s first Chief of Defence Staff (CDS), General Bipin Rawat, in a helicopter crash near Coonoor in the Nilgiris on Wednesday. His wife, Madhulika, and 11 others also perished when the Indian Air Force’s Mi-17V5 helicopter came down in a heavily wooded area. Defence Minister Rajnath Singh has announced in Parliament that a tri-service inquiry, headed by Air Marshal Manvendra Singh, Air Officer Commanding-in-Chief, Training Command, of the IAF, will take place into the incident. The IAF chief, Air Chief Marshal V.R. Chaudhari, has already visited the crash site; the cockpit voice and flight data recorders have been recovered, which would give investigators insights into how the crash occurred. It is imperative that the inquiry be done both thoroughly and speedily. Without speculating on the cause, it needs to be stressed that speedy course corrections in training or hardware are imperative given that these Mi-17VF choppers are being used to ferry top military leaders across the length and breadth of the country",
  authorName: "pawan patidar",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/87/Bipin_Rawat_Chief_of_Defence_Staff_%28CDS%29.jpg",
},
{
  title: "Aamir Khan’s third wedding rumours",
  description: "Recently, rumours of Aamir Khan planning to announce his third wedding to a B-town actress started doing the rounds. A publication reported that the actor intends to announce his marriage after the release of his and Kareena Kapoor Khan’s film, Laal Singh Chaddha, as he doesn’t want to interfere with the film’s limelight. However, a source has confirmed to IndiaToday.in that the rumours of Aamir’s third wedding are fake.",
  authorName: "Lalit Paidar",
  imageUrl: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202111/964609-aamirkhan-socialmedia.jpg?sqx_s6Fzu3kV6.liN7BrYoZG5MX.At4F&size=770:433",
},
{
  title: "India  will become it hub in upcoming few years",
  description: "For instance, earlier this year, India, Australia, Japan, and US committed to stockpiling billions of surplus doses of Covid-19 vaccinations for distribution throughout Southeast Asia and beyond. This action was taken primarily to counter Beijing’s global vaccine diplomacy campaign.",
  authorName: "Sumit Dholi",
  imageUrl: "http://www.scalablesoftwarehub.com/wp-content/uploads/2018/03/scalable-software-hub-Information-System.jpg",
},
{
  title: "India  will become it hub in upcoming few years",
  description: "For instance, earlier this year, India, Australia, Japan, and US committed to stockpiling billions of surplus doses of Covid-19 vaccinations for distribution throughout Southeast Asia and beyond. This action was taken primarily to counter Beijing’s global vaccine diplomacy campaign.",
  authorName: "Sumit Dholi",
  imageUrl: "http://www.scalablesoftwarehub.com/wp-content/uploads/2018/03/scalable-software-hub-Information-System.jpg",
},]

function App() {
  useEffect(() => {
    const isBlogs = JSON.parse(localStorage.getItem("blogs"))
    
    if (!isBlogs.length) {
    const stringifyBlogs = JSON.stringify(items)
     localStorage.setItem("blogs", stringifyBlogs)
    }
  }, [])
  return (
    <div className="App">
         <Layout>
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/signIn" element={<SignIn />} />
             <Route path="/signUp"  element={<SignUp />} />
             <Route path="/profile"  element={<UserProfile />} />
             <Route path="/blog-display" element={<DisplayBlog />} />
           </Routes>
         </Layout>
    </div>
  );
}

export default App;
