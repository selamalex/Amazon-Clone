import React from 'react';
import './Home.css';
import Product from './Product';

function Home(){
    return (
        <div>
            <div className='home-container'>
                <img className='home-image' src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg" alt=''/>
                <div className='home-row'>
                     <Product
                     id="firstRowFColumn"
                     title="OXO Good Grips Kitchen Drawer, Expandable Utensil Organizer, White"
                     price="11.96"
                     rating={5}
                     image="https://m.media-amazon.com/images/I/71HfAcG8RoL._AC_UL480_FMwebp_QL65_.jpg"/>
                     <Product
                     id="firstRowSColumn"
                     title="More Garlic Grinding Machine Originality Garlic Cutter Kitchen Garlic Stirring Device Mashed Organ Small Tool"
                     price="19"
                     rating={2}
                     image="https://m.media-amazon.com/images/I/5119-WJ04aL._AC_UL480_QL65_.jpg"
                     />
                </div>
                <div className='home-row'>
                     <Product
                     id="secondRowFColumn"
                     title="OXO Good Grips 5-lb Food Scale with Pull-Out Display,Black"
                     price="23.99"
                     rating={3}
                     image="https://m.media-amazon.com/images/I/81RuhfaLExL._AC_UL480_QL65_.jpg"
                     />
                     <Product
                     id="secondRowSColumn"
                     title="Lux Minder Timer Mechanical"
                     price="98.99"
                     rating={5}
                     image="https://m.media-amazon.com/images/I/41j6lLkhZOL._AC_UL480_QL65_.jpg"
                     />
                     <Product
                     id="secondRowTColumn"
                     title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                     price="598.99"
                     rating={4}
                     image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"/>
                </div>
                <div className='home-row'>
                     <Product
                     id="firstRowSColumn"
                     title="Crosley Furniture Tara 3-Piece Sideboard and Pantry Set, Distressed Gray"
                     price="190.7"
                     rating={4}
                     image="https://m.media-amazon.com/images/I/71sqHCf2w2L.__AC_SY300_SX300_QL70_FMwebp_.jpg"
                     />
                </div>
            </div>
        </div>
    );
}

export default Home;
