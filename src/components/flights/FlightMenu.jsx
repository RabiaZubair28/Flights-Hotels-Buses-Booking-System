import React, { useEffect } from "react";
import './flightMenu.css';
import { useState } from "react";
import data from '../flights/data/flightData.js';
export const FlightMenu = ({ inpValueOne, id_one, from_value, from_value_func }) => {


    const [isFound, setIsFound] = useState("");
    const [dummyArray, setDummyArray] = useState([]);


    const toArray = ["Karachi", "Lahore", "Sukkur", "Islamabad"];

    useEffect(() => {
        const filt_data = data.filter((d) => d.toLowerCase().slice(0, inpValueOne.length) === inpValueOne.toLowerCase());
        if (filt_data.length !== 15) {
            if (filt_data.length === 0) {
                setIsFound("not found");
            }
            else {
                setDummyArray(filt_data)
                setIsFound("");
            }
        }
        else {
            setDummyArray([]);
        }
    }, [,inpValueOne,id_one, from_value])


    return (
        <div className={`menu ${from_value ? "open" : "close"}`}>
            {
                id_one === "1" ? (
                    dummyArray.length === 0 ? (
                        toArray.map((item, index) => {
                            return (
                                <button id={index} key={index} onClick={
                                    (e) => {
                                        e.preventDefault();
                                        document.getElementById("search-input_one").value = toArray[index];
                                        from_value_func(!from_value);
                                    }
                                }>{item}</button>
                            )
                        })
                    ) : (
                        isFound === "not found" ? (
                            <p> {isFound}</p>
                        ) : (
                            dummyArray.map((value, index) => {
                                return (
                                    <button id={index} key={index} onClick={
                                        (e) => {
                                            e.preventDefault();
                                            document.getElementById("search-input_one").value = dummyArray[index];
                                            from_value_func(!from_value);
                                        }
                                    }>{value}</button>
                                )
                            })
                        )
                    )
                ) : (
                    dummyArray.length === 0 ? (
                        toArray.map((item, index) => {
                            return (
                                <button id={index} key={index} onClick={
                                    (e) => {
                                        e.preventDefault();
                                        document.getElementById("search-input_two").value = toArray[index];
                                        from_value_func(!from_value);   
                                    }
                                }>{item}</button>
                            )
                        })
                    ) : (
                        isFound === "not found" ? (
                            <p> {isFound}</p>
                        ) : (
                            dummyArray.map((value, index) => {
                                return (
                                    <button id={index} key={index} onClick={
                                        (e) => {
                                            e.preventDefault();
                                            document.getElementById("search-input_two").value = dummyArray[index];
                                            from_value_func(!from_value);
                                        }
                                    }>{value}</button>
                                )
                            })
                        )
                    )
                )


            }
        </div>
    );
} 
