import React, { useEffect, useState } from 'react';
import Comments from '../Comments/Comments';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const Postdetails = () => {
    // console.log(props);
    const {id} = useParams();
    const [posts, setPosts] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

    const {title, body} = posts;

    return (    
        <div>
            <div>
                <h2> This is Post Details : {id} </h2>
                <h5> Title : {title} </h5>
                <p> Details : {body} </p>
            </div>

            <Comments value = {id}> </Comments>
            
        </div>
    );
};

export default Postdetails;