
import React from 'react';

const Card = ( {name, email, id} ) => {
    return (

        
        <div className="bg-light-green dib br3 pa3 grow  bw2 shadow5">
            <img src={`https://robohash.org/${ id }/200x200`} alt="robots"/>
            <div>
                <h2 style= {{color: "#50DF90"}}>{ name }</h2>
                <p style= {{color: "blue; font-weight: 18px;"}}>  { email } </p>
            </div>
        </div>

    );
};



export default Card;