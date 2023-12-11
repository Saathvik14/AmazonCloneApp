import React from 'react';
import "./AdvertisementOne.css"

function AdvertisementOne(props) {
    return (
        <div className='AdvertisemntOne_main'>
           <div className='AdvertisemntOne_header'>
            Up to 70% off | Electronics clearance store
            </div> 
           <div className='AdvertisemntOne_body'>
            <img src="https://ik.imagekit.io/amazon1420/amazon-image/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg?updatedAt=1692164144822" width="270px" />
           </div>
           <div className='AdvertisemntOne_footer'>
            See more
           </div>
        </div>
    );
}

export default AdvertisementOne;