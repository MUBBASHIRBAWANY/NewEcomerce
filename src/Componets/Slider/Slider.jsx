import { useState } from 'react';
import './Slider.css';
import Carousel from 'react-bootstrap/Carousel';


const Slider1 = () => {
   
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className=''>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
       <img className='' src="/assets/1.jpg" alt="" />
         </Carousel.Item>
      <Carousel.Item>
      <img src="/assets/2.jpg" className='' alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <img src="/assets/3.jpg" className=' ' alt="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );

    }

export default Slider1
