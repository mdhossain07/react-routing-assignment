import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import Postdetails from '../Postdetails.js/Postdetails';

const Home = () => {
    const[posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))

    }, [])

    const fakedata = posts.slice(0,10);
    return (
        <div>
            <h2> This is HomePage </h2>
            {
                fakedata.map(post=> <Post info = {post}></Post>)
            }
        </div>
    );
};

export default Home;