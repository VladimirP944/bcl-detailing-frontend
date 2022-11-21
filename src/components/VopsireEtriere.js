import React from 'react';
import ServiceInfo from "./ServiceInfo";

const VopsireEtriere = () => {
    const title = "Vopsire Etriere"
    const description = "Etrierele se vopsesc fara demontarea lor de pe masina, intregul proces implica mai multi pasi pentru un rezultat satisfacator. Etrierele se slefuiesc si se degreseaza de orice impuritate, se izoleaza si se aplica 3 straturi de vopsea speciala in culoarea vopsita. Durata intregului proces este de 12 ore."
    const beforeList = ""
    const list = []
    const packs = [
        {
            packageName: "",
            packageBullets: ["Linia 1", "Linia 2", "Linia 3", "Linia 4", "Linia 5"],
            packagePrices: [],
            services: [
                {
                    service: "Vopsire Etriere",
                    price: "500",
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

export default VopsireEtriere;