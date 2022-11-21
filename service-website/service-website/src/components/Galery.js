import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Galery = () => {
    const images = ["car1.jpg", "car2.jpg", "car3.jpg"]
    return (
            <div className="carouselDiv">
                <Carousel showArrows={true} swipeable={true} dynamicHeight={true}>
                    {images.map(image =>
                        <div>
                            <img className={"fuuuuu"} style={{width:"85%", height:"30%", top: "0", bottom: "0"}} src={require(`../images/${image}`)} />
                        </div>
                    )}
                </Carousel>
            </div>
    );
};

export default Galery;