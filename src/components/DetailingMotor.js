import React from 'react';
import ServiceInfo from "./ServiceInfo";

const DetailingMotor = () => {
    const title = "Detailing Motor"
    const description = ""
    const beforeList = "Serviciul complet de detailing motor contine:"
    const list = ["Curatare a materialelor din plastic si cauciuc pe baza de vapori",
        "Curatare a interiorului capotei si degresarea captuselei capotei",
        "Aplicare tratament pentru materialele din plastic si cauciuc",
    ]
    const packs = [
        {
            packageName: "",
            packageBullets: ["Linia 1", "Linia 2", "Linia 3", "Linia 4", "Linia 5"],
            packagePrices: [],
            services: [
                {
                    service: "Detailing Motor ",
                    price: "de la 200"
                }
            ],
        }
    ]
    const duration = "3-5 ore"
    const pack = {} //small pack here

    return (
            <ServiceInfo title={title} duration={duration} description={description} beforeList={beforeList} list={list} packs={packs}/>
    );
};

export default DetailingMotor;