import React, {useEffect, useState} from 'react';
import {Link, Route} from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';
import {GiHamburgerMenu} from "react-icons/gi";

const NavBar = () => {
    let [reservation, setReservation] = useState(null)
    useEffect( () => {
        fetch(`https://localhost:7013/Reservations/GetReservations`, {method: "GET",})
            .then(response => response.json())
            .then(response => setReservation(response))
            .then(() => console.log(reservation))
    },[])


    const toggleBurger = () => {
        let burger = document.getElementById("navId")
        burger.classList.toggle("displayNone")
        console.log(reservation)
    }
    return (
        <>
            <div>
                <GiHamburgerMenu className={"burgerButton"} color="white" onClick={()=> toggleBurger()}/>
                <div className={"burgerLine"}>A</div>
            </div>
        <nav className="navBar displayNone" id="navId">
            <div className="logoDiv">
                <Link className="logo" to="/" onClick={()=> toggleBurger()}>BCL Detailing Garage</Link>
            </div>
            <div className="navBarButtonsDiv">
                <Link className="navBarButton" to="/" onClick={()=> toggleBurger()}>Acasa</Link>
                <Link className="navBarButton" to="/desprenoi" onClick={()=> toggleBurger()}>Despre Noi</Link>
                <Link className="navBarButton" to="/galerie" onClick={()=> toggleBurger()}>Galerie</Link>
                <div className="navBarButton dropdownButton">Servicii</div>
                    <div className="dropdown-content">
                        <Link className="navBarButton" to="/detailinginterior" onClick={()=> toggleBurger()}><FaArrowRight /><span style={{verticalAlign: "3px"}}> Detailing Interior</span></Link>
                        <Link className="navBarButton" to="/detailingexterior" onClick={()=> toggleBurger()}><FaArrowRight /><span style={{verticalAlign: "3px"}}> Detailing Exterior </span></Link>
                        <Link className="navBarButton" to="/detailingmotor" onClick={()=> toggleBurger()}><FaArrowRight /><span style={{verticalAlign: "3px"}}> Detailing Motor </span></Link>
                        <Link className="navBarButton" to="/vopsireetriere" onClick={()=> toggleBurger()}><FaArrowRight /><span style={{verticalAlign: "3px"}}> Vopsire Etriere </span></Link>
                    </div>
                <Link className="navBarButton" to="/contact" onClick={()=> toggleBurger()}>Contact</Link>
            </div>
        </nav>
        </>
    );
};

export default NavBar;

//
// <Route path="/" element={<App />} />
// <Route path="/desprenoi" element={<About />} />
// <Route path="/galerie" element={<Galery />} />
// <Route path="/servicii" element={<Services />} />
// <Route path="/contact" element={<Contact />} />