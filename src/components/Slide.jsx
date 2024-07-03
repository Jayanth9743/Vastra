
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { sliderItems } from "./Data";


export default function Slide() {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2300,
    fade:false,
    
    responsive:[
      {
        breakpoint: 1536, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          fade:false
        }
      },
      {
        breakpoint: 1280, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          fade:false
        }
      },
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          fade:false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
        }
      },
      {
        breakpoint: 600, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
        }
      },

      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
        }
      }
    ]
    
  };

  return (
    <div className="w-full overflow-hidden">
        <Slider {...settings}>
            {sliderItems.map(item=>(
                <div className="flex items-center justify-center w-full mt-20 outline-none xl:mt-24" key={item.id}>
                    <img src={item.image} alt="" className="object-cover w-10/12 mx-auto h-80 xs:h-96 md:w-11/12 md:mx-auto" />
                </div>
            ))}
        </Slider>

    </div>
  );
}
