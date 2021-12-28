import React from 'react';

const Commentdetails = (props) => {
    const {name, email, body} = props.details;
    return (
        <div>
            <div style={{border : '2px solid lightblue', margin : '10px', padding : '10px'}}>
                <h4> Comemnts : {body} </h4>
                <p> Name : {name} </p>
                <p> Email : {email} </p>
            </div>
        </div>
        
    );
};

export default Commentdetails;