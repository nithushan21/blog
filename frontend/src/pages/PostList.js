import { useEffect, useState } from "react";
import Post from "../components/Post";
import axios from "axios";  
// import Header from "../components/Header";
// import Footer from "../components/Footer";

export default function PostList() {
    const [posts, setPosts] = useState([])
    const fetchPosts = async () => {
        const response = await axios.get('http://localhost:8000/api/posts')
        setPosts(response.data);
           
    }
    useEffect(() => {
        fetchPosts()     
    }, []);


    return <>
      {/* <Header/>   */}

        <main>
            <div className="container mt-4">
                <div className="row">

                    <div className="col-lg-8">
                        <h1 className="mb-4">Latest Posts</h1>
                    {
                        posts.length > 0 ? posts.map((post) => <Post post={post}/>) : <h4>No posts available.</h4>
                    }


                      

                    </div>

                    <div classNameName="col-lg-4">
                        <div classNameName="card mb-4">
                            <div classNameName="card-body">
                                <h5 classNameName="card-title">About Me</h5>
                                <p classNameName="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>

                        <div classNameName="card mb-4">
                            <div classNameName="card-body">
                                <h5 classNameName="card-title">Categories</h5>
                                <ul classNameName="list-group">
                                    <li classNameName="list-group-item"><a href="#" classNameName="text-black">Category 1</a></li>
                                    <li classNameName="list-group-item"><a href="#" classNameName="text-black">Category 2</a></li>
                                    <li classNameName="list-group-item"><a href="#" classNameName="text-black">Category 3</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        {/* <Footer/> */}
    </>
}