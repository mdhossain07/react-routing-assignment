import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Commentdetails from '../Commentdetails/Commentdetails';

const Comments = (props) => {
    const {value} = props;
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments/?postId=${value}`)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [])

    // const {email} = comments;
    // // console.log(email);

    return (
        <div>
            <h2> This is Comment Section</h2>
            {
                comments.map(comment=> <Commentdetails details = {comment}> </Commentdetails>)
            }
        </div>
    );
};

export default Comments;