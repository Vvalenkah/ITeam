import React from "react";

import './products.scss';
import uniqueImg from '../../img/about-unique.jpg';
import products from '../../img/products.jpg';

const Products = () => {
    return (
        <>
            <div className="wrapper wrapper-about">
                <div className="about-container margin-add">
                    <h2>Be unique</h2>
                    <p className='heading-p'>Technology</p>
                    <div className="about-container--desc">
                        <p>
                            Nulla placerat mi vitae mauris varius consequat.
                            Aliquam libero ante, consectetur at turpis sit
                            amet, congue Suspendisse porta bibendum
                            scelerisque.
                        </p>
                        <p>
                            Suspendisse porta bibendum scelerisque. 
                            Nulla placerat
                        </p>
                    </div>
                    <a href="#" className='learn-btn'>Learn more</a>
                </div>
                <div className="img-container">
                    <img src={uniqueImg} alt="" />
                </div>
            </div>
        </>
    )
}

export default Products;