// import { useEffect, useState } from 'react';
// import Slider from 'react-animated-slider';
// import 'react-animated-slider/build/horizontal.css';


// export default function Slider1() {
//     const [content, setContent] = useState([]);

//     useEffect(() => {
//         fetch("./product.json")
//             .then(res => res.json())
//             .then(data => console.log(data))
//     }, []);

//     return (
//         <div>

//             <Slider autoplay={3000}>
//                 {content.map(item => (
//                     <div
//                         key={item.id}
//                         style={{ background: `url('https://ninetheme.com/themes/venam/v3//wp-content/uploads/2021/05/f_slider_bg01.jpg') no-repeat center center` }}
//                     >
//                         <div className="center">
//                             <h1>{item.title}</h1>
//                             <p>{item.description}</p>
//                             <button>{item.button} hello bangldesh</button>
//                         </div>
//                     </div>
//                 ))}
//             </Slider>

//             {
//                 content.map(item2 => <div>
//                     <div>{item2.title}</div>
//                     <img src={item2.image} alt="" />
//                 </div>)
//             }
//         </div>
//     )
// }

import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap';

export default function Slider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://ninetheme.com/themes/venam/v3//wp-content/uploads/2021/05/f_slider_bg02.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://ninetheme.com/themes/venam/v3//wp-content/uploads/2021/05/f_slider_bg01.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://ninetheme.com/themes/venam/v2/wp-content/uploads/2021/07/s_slider_bg03.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

