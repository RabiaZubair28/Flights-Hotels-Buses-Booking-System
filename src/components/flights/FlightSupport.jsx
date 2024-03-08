import React from "react";
import cs from '../../flights-images/customer-support.svg';
import rf from '../../flights-images/refunds-within.svg';
import st from '../../flights-images/secure-transaction.svg';
export default function FlightSupport() {
    return (
        <div style={{backgroundColor:"rgba(245, 179, 66, 0.2)",paddingBottom:"10px",paddingTop:"10px"}}>
            <h1 className="text-center mb-5">Our Customer Support</h1>
            <div className="d-flex justify-content-around align-items-center flex-wrap">
                <div>
                    <img className="d-inline-block" src={cs} alt="" />
                    <br />
                    <br />
                    <h4 className="text-center">24/7 Customer Support</h4>
                </div>
                <div>
                    <img className="d-inline-block" src={rf} alt="" />
                    <br />
                    <br />
                    <h4 className="text-center">Refunds within 48 hours</h4>
                </div>
                <div>
                    <img className="d-inline-block" src={st} alt="" />
                    <br />
                    <br />
                    <h4 className="text-center">Secure Transaction Guaranteed</h4>
                </div>
            </div>
        </div>
    );
} 