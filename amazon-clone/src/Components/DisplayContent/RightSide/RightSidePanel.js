import React from 'react';
import './RightSide.css';
import Product from './Product';
import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function RightSidePanel(props) {
    const [listOfProduct,setListOfProducts] = useState([]);

    useEffect(()=>{
        //api call
        let list =[
            { id:13345, name : "Iphone X (128gb)", rating: "34,565", price: "50,999", image:"https://ik.imagekit.io/amazon1420/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65_%20(1).webp?updatedAt=1692164137249"},
            { id:13346, name : "Iphone 11 (256gb)", rating: "6,568", price:"70,999", image:"https://ik.imagekit.io/amazon1420/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1692164138859"},
            {id:13347,  name : "Samsung S21 Galaxy", rating: "8,754", price:"76,543", image:"https://ik.imagekit.io/amazon1420/amazon-image/mobiles/91dLTREdG1L._AC_UL640_FMwebp_QL65_.webp?updatedAt=1692164139325"},
            { id:13348, name : "Iphone 13", rating: "34,457", price:"63,757", image:"https://ik.imagekit.io/amazon1420/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1692164138859"},
            { id:133499 ,name : "Iphone 12 Pro Max", rating: "8,754", price:"76,543", image:"https://ik.imagekit.io/amazon1420/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1692164137671"},
            { id:133414, name : "One plus 6T", rating: "34,459", price:"55,999", image:"https://ik.imagekit.io/amazon1420/amazon-image/mobiles/61PDbUd1VaL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1692164137529"},
            { id:133415, name : "One plus 6T", rating: "34,459", price:"55,999", image:"https://ik.imagekit.io/amazon1420/amazon-image/mobiles/61PDbUd1VaL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1692164137529"},
            { id:133416 ,name : "Iphone 12 Pro Max", rating: "8,754", price:"76,543", image:"https://ik.imagekit.io/amazon1420/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1692164137671"}
    
        ]
        
        setListOfProducts(list);
    },[]);

    return (
        <div className='RightSide_main' >
            {/* <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product /> */}
            {
                listOfProduct.map ((item)=>(
                    <Link to={`/order/`+item.id } >
                    <Product definition={item} />
                    </Link>
                ))
            }
         
            
        </div>
    );
}

export default RightSidePanel;