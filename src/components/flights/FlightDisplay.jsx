import Marquee from "react-fast-marquee";
import './flight_display.css';
import c1 from '../../flights-images/c1.jpg';
import c2 from '../../flights-images/cc1.jpg';
import c3 from '../../flights-images/cc2.jpg';
import c4 from '../../flights-images/cc3.jpg';
import c5 from '../../flights-images/cc4.jpg';
import c6 from '../../flights-images/cc5.jpg';
import c7 from '../../flights-images/cc6.jpg';
import c8 from '../../flights-images/cc7.jpg';
import c9 from '../../flights-images/cc8.jpg';
import c10 from '../../flights-images/cc9.jpg';

const FlightDisplay = () => {
  

  return (
    <div>
        <Marquee speed={250} pauseOnHover="true">
            <img src={c1} alt="" className="card_images" />
            <img src={c2} alt="" className="card_images" />
            <img src={c3} alt="" className="card_images" />
            <img src={c4} alt="" className="card_images" />
            <img src={c5} alt="" className="card_images" />
            <img src={c6} alt="" className="card_images" />
            <img src={c7} alt="" className="card_images" />
            <img src={c8} alt="" className="card_images" />
            <img src={c9} alt="" className="card_images" />
            <img src={c10} alt="" className="card_images" />
      </Marquee>
    </div>
  );
};

export default FlightDisplay;
