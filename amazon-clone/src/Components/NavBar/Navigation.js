import React, { Component } from 'react';
import "./NavBar.css";
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';

class NavBar extends Component {

    static contextType= CartContext;

    constructor(props) {
        super(props);
        this.state={}
    }
   
    render() { 

        let {item,size,increment} =this.context;
        return ( 
           <div>
        <div className='navbar_component'> 
        
             
            <div className='navbar_logo'> </div>
            <div className='navbar_locator'>
            <div className='navbar_locatorImage'></div>
                <div className='navbar_location'>Bangalore</div>
                </div>
                <div className='navbar_searchcomponent'>
                    <div >
                        <select className='navbar_dropdown'>
                            <option value="All">All</option>
                            <option value="Alexa">Alexa</option>
                            <option value="Books">Books</option>
                            <option value="Baby">Baby</option>
                            <option value="Beauty">Beauty</option>
                            <option value="Clothes">Clothes</option>
                            <option value="Mobile">Mobile</option>


                        </select>
                    </div>
                    <div>
                        <input type="text" className='navbar_searchbox'  />
                    </div>
                    <div className='navbar_searchboxdiv'>
                        <div className='navbar_searchicon' />
                    </div>
                </div>
                <div className='navbar_text navbar_signin'>
                    <div style={{fontSize: "12px"}}>Hello, Sign In</div>
                    <div style={{fontWeight: "bold"}}>Account & List</div>
                    </div>
                <div className='navbar_text navbar_return'>
                    <div style={{fontSize: "12px"}}>Return</div>
                    <div style={{fontWeight: "bold"}}> & Order </div>
                    </div>
                <div className='navbar_text navbar_cart'>
                    <div src="" className='cart_image' />
                    <div className="cart__item"> {size} </div>
                    <div className='navbar_text_cart'>
                    <a href='/checkout' style={{color: "white", "text-decoration":"none"}}>
                        Cart
                    </a>
                        </div>

                </div>
                </div>  

                <div className='navbar_footer'>
                <div className="navbar__footer_text">Best Seller</div>
                    <div className="navbar__footer_text">
                        <a href='/display' style={{color: "white", "text-decoration":"none"}}>
                    {/* <Link to="/display"> */}
                        Mobile
                    {/* </Link> */}
                    </a>
                    </div>
                    <div className="navbar__footer_text">Amazon Pay</div>
                    <div className="navbar__footer_text">Fashion</div>
                    <div className="navbar__footer_text">Electronics</div>
                    <div className="navbar__footer_text">Prime</div>
                    <div className="navbar__footer_text">New Release</div>
                    <div className="navbar__footer_text">Customer Service</div>
                    <div className="navbar__footer_text">Computers</div>
                    <div className="navbar__footer_text">Home & Kitchen</div>
                    </div>  
           

        
        
        
        </div> );
    }
}
 
export default NavBar;
