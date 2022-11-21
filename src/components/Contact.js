import React from 'react';
import NavBar from "./NavBar";
import Home from "./Home";
import Footer from "./Footer";
import ServiceTitle from "./ServiceTitle";
import Map from "./GMap";
import GMap from "./GMap";

import { Wrapper, Status } from "@googlemaps/react-wrapper";

const render = (Status) => {
    return <h1>{Status}</h1>;
};

const Contact = () => {
    return (
        <div className="Contact">
            <div className="ContactTitle">
                <h1>Contact</h1>
            </div>
            <div className="ContactDiv">
                <div className="ContactDetails">
                    <h4 className="ContactHeading">E-MAIL</h4>
                    {/*<p className="ContactText">bcldetailing@gmail.com</p>*/}
                    <a className="ContactText" href = "mailto: bcldetailing@gmail.com">bcldetailing@gmail.com</a>
                    <h4 className="ContactHeading">TELEFON</h4>
                    <p className="ContactText">(+40) 725 187 393</p>
                    <h4 className="ContactHeading">ADRESĂ</h4>
                    <p className="ContactText">Bucuresti, Sector 1,  str. Mihai Viteazul 30</p>
                </div>
                <GMap/>
            </div>
        </div>
    );
};

export default Contact;