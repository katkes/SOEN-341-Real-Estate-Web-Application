import RealEstateListing from "./BuyPropertyPage"; 
import "./css/singularCard.css";
import React from 'react'
/*import { useState } from "react";*/

 


function SingularCard({name,price,country,rating,setContentText}){
    const propertyData = {
        type: 'Apartment',
        address: '123 Main St, City, State',
        price: '$500,000',
        previewPhotos: {
          big: 'https://mspublic.centris.ca/media.ashx?id=ADDD250DC71A4CCDDDDDDDDDD2&t=pi&w=640&h=480&sm=c',
          small1: 'https://mspublic.centris.ca/media.ashx?id=ADDD250DC71A4CEDDDDDDDDDDC&t=pi&w=320&h=240&sm=c',
          small2: 'https://mspublic.centris.ca/media.ashx?id=ADDD250DC71A4CEDDDDDDDDDDC&t=pi&w=320&h=240&sm=c',
        },
        broker: 'John Doe',
        favorite: false,
        features: [
          '3 Bedrooms',
          '2 Bathrooms',
          '1,200 sq. ft.',
          'Swimming Pool',
          'Garage',
          'Near Schools',
        ],
      };
    const handleClick3 = () => {
        
        setContentText(RealEstateListing(propertyData));
      };
   /* const [displayLogin,setdisplayLogin]= useState(false);*/
    return(
        <div onClick={handleClick3} className="card">
            <img src="https://i.pinimg.com/736x/a9/8a/d3/a98ad31b4947ed09d9e3e9918cf3379b.jpg" alt="fix BOZO"></img>
            <div className="cardProperties">
                <p>Name: {name}</p>
                <p>Price: ${price}</p>
                <p>Country/address: {country}</p>
                <p>Rating: {rating}☆</p>
                <div className="buttonOptions">
                <button className="buyButton" /*onClick={}*/>Buy</button>
                <button className="visitButton" /*onClick={wantLogIn}*/>visit</button>
                </div>
            </div>
        </div>
    );
}

export default SingularCard;