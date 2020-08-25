import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Product.css';

const ProductPage = (props) => {
    const [productData, setProductData] = useState({
        Name: '',
        Description: '',
        Price:[],
        model: ''

      

    });
    useEffect(() => {
        axios.get(`https://aveosoft-react-assignment.herokuapp.com/products/${props.match.params.id}`)
            .then(response => {
                const { name, price,model, description} = response.data;
                console.log(response.data);
                setProductData({
                    Name: name,
                    Description: description,
                    Price:price,
                    model:model
                });
           
            });
     
    }, [props.match.params.id]);
    return ( 
        <div>
       
        <div className="gamePageContainer">
            <h1 style={{color:"black"}}>{productData.Name}</h1>
    <h2 style={{color:'black'}}>Price -{productData.Price}</h2>
    <h3 style={{color:'black'}}>model- {productData.model}</h3>
            <div className="game-content">
    
            <div className="text" >
            <p className="game-text">
                {productData.Description}
            </p>
            </div>
            </div>
             
        </div>

        </div>
    );
}




export default ProductPage;