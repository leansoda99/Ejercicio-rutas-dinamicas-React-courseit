import { useParams } from "react-router-dom";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.css'
import { useEffect, useState } from "react";

function Carousel(){
    
    const settings = {
    className: "slider-container",
    dots: false,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive:[{
      breakpoint:600,
      settings:{
        slidesToShow:3,
        slidesToScroll:3,
        arrows:false,
        dots:true
      }
    }]
    }
        
    const {site} = useParams();
    const {vaporizador} = useParams();
    //traer data
    
    const [product, setProduct]= useState ([]);
    useEffect (()=>{
        fetchData();
    } ,[]); 
    async function fetchData(){
      const getData = await fetch(`https://api.mercadolibre.com/sites/${site}/search?q=${vaporizador}`);

        const dataJson= await getData.json();
        setProduct(dataJson.results);
    }
    console.log(Array.isArray(product));
    console.log(typeof product);
    console.log(product);
    
    return(
        <>
        <Slider {...settings}>
      {product.map((products, index) => (
        <div className="targets" key={index}>
          <div className=" centrado cointainer-img ">
            <img className="images" alt="" src={products.thumbnail} />
          </div>
            <div className="description centrado">
              <h1>${((products.price).toString()).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h1>
              <p>{products.title}</p>
            </div> 
            </div>
      ))}
    </Slider>
        </>
    );
}
export default Carousel