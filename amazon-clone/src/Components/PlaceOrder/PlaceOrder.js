import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import "./PlaceOrder.css"
import Rating from '@material-ui/lab/Rating';
import Paper from '@material-ui/core/Paper';
import { Link, useParams } from 'react-router-dom';
import { useContext, useEffect }  from 'react';
import { CartContext } from '../CartContext';

function PlaceOrder(props) {

    const{item,size,increment} = useContext(CartContext);
    const [productDetails,setProductDetails]= useState([]);
    let {id} = useParams();

    const addToCart= function() {
        increment(productDetails);


    }

    useEffect(()=>{
        //api call
        let list =[
            {
                id: 13345,
                name: "New Apple iPhone X",
                rating: "34,565",
                review: "11,000",
                emi: "2401",
                delivery: "Wednesday, Aug 18",
                price: "50999",
                status: "In stock",
                soldby: "Darshita Electronics",
                image:
                    "https://ik.imagekit.io/amazon1420/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65_%20(1).webp?updatedAt=1692164137249",
                about: [
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },
            {
                id: 13346,
                name: "New Apple IPhone 11 (256GB)",
                rating: "34,565",
                review: "22,000",
                emi: "8401",
                delivery: "Wednesday, Aug 18",
                price: "70999",
                status: "In stock",
                soldby: "Darshita Electronics",
                image:
                    "https://ik.imagekit.io/amazon1420/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1692164138859",
                about: [
                    "Desription for iphone 11 -bla bla",
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },
            {
                id: 13347,
                name: "Samsung S21 Galaxy",
                rating: "60,565",
                review: "50,000",
                emi: "5,401",
                delivery: "Wednesday, Aug 18",
                price: "76543",
                status: "In stock",
                soldby: "Darshita Electronics",
                image:
                "https://ik.imagekit.io/amazon1420/amazon-image/mobiles/91dLTREdG1L._AC_UL640_FMwebp_QL65_.webp?updatedAt=1692164139325",
                about: [
                    "Desription for Samsung s21 -bla bla",
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },
            {
                id: 13348,
                name: "Iphone 13",
                rating: "20,565",
                review: "1000",
                emi: "4,601",
                delivery: "Wednesday, Aug 18",
                price: "63757",
                status: "In stock",
                soldby: "Darshita Electronics",
                image:
                    "https://ik.imagekit.io/amazon1420/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1692164138859",
                about: [
                    "Desription for Iphone 13 -bla bla",
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },
            {
                id: 133499,
                name: "Iphone 12 Pro Max",
                rating: "60,565",
                review: "1000",
                emi: "9401",
                delivery: "Wednesday, Aug 18",
                price: "76543",
                status: "In stock",
                soldby: "Darshita Electronics",
                image:
                    "https://ik.imagekit.io/amazon1420/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1692164137671",
                about: [
                    "Desription for iphone 12 pro pmax -bla bla",
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },
            {
                id: 133414,
                name: "One Plus 6T",
                rating: "63,357",
                review: "50,000",
                emi: "6,701",
                delivery: "Wednesday, Aug 18",
                price: "55999",
                status: "In stock",
                soldby: "Darshita Electronics",
                image:
                    "https://ik.imagekit.io/amazon1420/amazon-image/mobiles/61PDbUd1VaL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1692164137529",
                about: [
                    "Desription for One Plus 6T -bla mini bla",
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },
            
            {
                id: 133415,
                name: "One Plus 6T",
                rating: "63,357",
                review: "50,000",
                emi: "6,701",
                delivery: "Wednesday, Aug 18",
                price: "55999",
                status: "In stock",
                soldby: "Darshita Electronics",
                image:
                    "https://ik.imagekit.io/amazon1420/amazon-image/mobiles/61PDbUd1VaL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1692164137529",
                about: [
                    "Desription for One Plus 6T -bla mini bla",
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },
            {
                id: 133416,
                name: "Iphone 12 Pro Max",
                rating: "60,565",
                review: "1000",
                emi: "9401",
                delivery: "Wednesday, Aug 18",
                price: "76543",
                status: "In stock",
                soldby: "Darshita Electronics",
                image:
                    "https://ik.imagekit.io/amazon1420/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1692164137671",
                about: [
                    "Desription for iphone 12 pro pmax -bla bla",
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },
    
        ]
        //fake api 
        let item = list.filter (item => {
            if(item.id== id) return item;
        })
        
        console.log(item);
        setProductDetails(item[0]);
    },[]);
    return (
        <div>
            <Grid container>
                <Grid item xs={5}>
                <img className='placeorder_image' src={productDetails.image} />
                </Grid>
                <Grid item xs={4}>
                    <div className='placeholder_description'>
                        <div style={{fontSize:"24px", lineHeight:"32px", fontWeight: 500}}>{productDetails.name}</div>
                        <div>
                        <Rating name="read-only" value="3" readOnly  style={{ fontSize: "20px"}}/>
                           {productDetails.rating}
                            {productDetails.review}
                        </div>
                        <hr></hr>
                        <div>
                            <div className='textgap'>price: <span className='pricetag'>{productDetails.price}</span></div>
                            <div className='textgap'>FREE Delivery <strong className='pricetag'>{productDetails.delivery}</strong></div>
                            <div className='textgap'>EMI Starts at {productDetails.emi}. No Cost Emi available </div>
                            <div style={{ color: "#007600", fontSize: "20px"}} className="textgap">{productDetails.status}</div>
                            <div className="textgap">Sold by <strong>{productDetails.soldby}</strong> and Fulfilled by Amazon.</div>
                            </div>
                            <div>
                            <br></br>
                            <div style={{fontSize:"24px" }} className="textgap">About this item</div>
                            <div>
                                <ul>
                                {   
                                    productDetails.about!=undefined ?
                                    productDetails.about.map ( (item) =>(
                                        <li>{item}</li>
                                    )) : <span></span>
                                }
                                </ul>
                                {/* <ul>
                                <li>6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display</li>
                                <li>Water and dust resistant (2 meters for up to 30 minutes, IP68)</li>
                                <li>Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps</li>
                                <li>12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo</li>
                                <li>Face ID for secure authentication</li>
                                <li>A13 Bionic chip with third-generation Neural Engine</li>
                                <li>Fast-charge capable</li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                   
                </Grid>
                <Grid item xs={3}>
                    <Paper variant="outlined" className='placeorder_order'>
                    <div>
                            <div><strong>Without Exchange</strong></div>
                            <div>50,999</div>
                            <div style={{ marginTop: "10px"}}><strong>Add an Accessory</strong></div>
                            <div>
                                <label><input type="checkbox" ></input>Apple Airpods</label><br></br>
                                <label><input type="checkbox" ></input>Apple 20W USB Power Adapter</label>
                            </div>
                            </div>
                        <div >
                            
                        <button className='placeorder_button addtocart' onClick={addToCart}>Add to Cart</button>
                       
                        <Link to="/checkout">
                        <button className='placeorder_button buynow'>Buy Now</button>
                        </Link>
                   
                    </div>
                    </Paper>
                  
                </Grid>
            </Grid>
            
        </div>
    );
}

export default PlaceOrder;