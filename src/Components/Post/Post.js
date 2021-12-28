import React from 'react';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

const Post = (props) => {
    // console.log(props);
    const {id, title} = props.info;

    const postStyle = {
        margin : '10px',
        border : '5px solid tomato',
        padding : '20px',
        borderRadius : '30px',
        height : '150px',
        width : '500px'
    }
    const history = useHistory();

    const handleButton = () => {
        history.push(`post/${id}`);
    }
        
    
    return (
        <div style={postStyle}>
            <h3> Title : {title} </h3>
            <Button onClick={handleButton} variant="contained">See Details</Button>
        </div>
    );
};

export default Post;