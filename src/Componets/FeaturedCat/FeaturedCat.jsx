import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import './FeaturedCat.css'
import { useDispatch } from "react-redux";
import { produstsData } from "../../Redux/Selice/ProductSlice";
import { Link, useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';

const FeaturedCat = () => {
    const [data, setdata] = useState([])
    const dispatch = useDispatch()
    const callData = async ()=>{
        let res = await axios.get('https://fakestoreapi.in/api/products')
         res = res.data.products         
         setdata(res)   
         dispatch(produstsData(res))
    }

    const catData = [...new Map(data.map(item =>
        [item["category"], item])).values()]

    useEffect(()=>{
            callData()
    },[])

    const navigate = useNavigate()

    const rediteting = (id)=>{
        navigate(id)
    }
   

    const settings = {
         infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
        speed: 8000,
        autoplaySpeed: 1000,
        cssEase: "linear"
      };

  return (
    <div>


    <h1 className="FeCat">Featured Categories</h1>
    <div className="slider-container">
    <Slider className="car1"  {...settings}>
{
 
 

 catData.map((items,index)=>{
        const {image,category} = items

        return(
         //

         <Card onClick={()=>rediteting(`/search/${category}`)} className="col-sm-4" style={{ width: '18rem'} }>
         <Card.Img variant="top" src={image} className="col-sm-4" />
         <Card.Body>
           <Card.Title className="car1Titel">{category}</Card.Title>      
         </Card.Body>
         
       </Card>
       
        )
})
 
    

 
      
}

    
      
    </Slider>
  </div>
  <br /><br /><br /><br /><br />
  </div>
  
  )
}

export default FeaturedCat
