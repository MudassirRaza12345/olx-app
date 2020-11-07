import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
} from 'reactstrap';
import BreadCrumb from '../BreadCrumbs/BreadCrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import './ProductDetails.css';
import avatar from '../images/avatar.png';


const items = [
    {
        src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
    },
    {
        src: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
    },
    {
        src: 'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
    }
];

const ProductDetails = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                className='productsCarousel'
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} width='100%' height='600px' />
            </CarouselItem>
        );
    });

    return (
        <>
            <BreadCrumb />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 col-md-12 col-12">
                        <Carousel
                            activeIndex={activeIndex}
                            next={next}
                            previous={previous}>
                            {slides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                        </Carousel>
                    </div>
                    <div className="col-lg-5 col-12 col-md-12">
                        <div className='border rounded mx-2'>
                            <div className='priceandicon'>
                                <div><h1 className='ml-3'>RS 13,170</h1></div>
                                <div className='pt-3'>
                                    <FontAwesomeIcon icon={faShareAlt} size="lg" className='mx-3' />
                                    <FontAwesomeIcon icon={faHeart} size="lg" className='mr-4' />
                                </div>
                            </div>
                            <p className='ml-3'>Samsung S7 PTA Approve</p>
                            <br />
                            <div className='priceandicon'>
                                <div><p className='ml-3'>Shah Faisal Town Karachi Sindh</p></div>
                                <div><p className='mr-4'>Today</p></div>
                            </div>
                        </div>
                        <div className='border rounded mx-2 my-3'>
                          
                                    <h4 className='ml-3'>
                                       SELLER DESCRIPTION</h4>
                                       <div className='avatarandname'>
                                    <div><img src={avatar} className='img-rounded ml-3' width='68' height='68'/></div>
                                   <div>
                                       <h4 className='ml-3'>Akram Usmani</h4>
                                     <p className='ml-3'>Member Since 5 oct 2019</p></div>  
                               </div>
                            <br />
                                <button className='text-center chatwithSeller ml-3 mr-5 btn btn-block'> Chat with Seller</button>
                        </div>
                        <div className='border rounded mx-2'>
                            <div className='priceandicon'>
                                <div><h1 className='ml-3'>RS 13,170</h1></div>
                                <div className='pt-3'>
                                    <FontAwesomeIcon icon={faShareAlt} size="lg" className='mx-3' />
                                    <FontAwesomeIcon icon={faHeart} size="lg" className='mr-4' />
                                </div>
                            </div>
                            <p className='ml-3'>Samsung S7 PTA Approve</p>
                            <br />
                            <div className='priceandicon'>
                                <div><p className='ml-3'>Shah Faisal Town Karachi Sindh</p></div>
                                <div><p className='mr-4'>Today</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetails;