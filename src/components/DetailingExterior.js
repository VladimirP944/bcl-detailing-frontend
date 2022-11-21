import React from 'react';
import ServiceInfo from "./ServiceInfo";

const DetailingExterior = () => {
    const title = "Detailing Exterior Auto"
    const description = "Serviciul complet de detailing exterior contine: spalare exterioara in detaliu, decontaminare cu argila, suflare cu aer comprimat si uscare, izolarea masinii cu banda de protectie, corectie lac in 1-3 pasi, aplicare protectie vopsea, curatarea jantelor si a anvelopelor, curatarea si degresarea geamurilor."
    const beforeList = "Serviciile de detailing exterior disponibile sunt urmatoarele:"
    const list = [

                    "Aplicare tratament hidrofob pentru geamuri",

                    "Aplicare protectie ceramica jante",

                    "Polish lac",
                    "Corectie lac",
                    "Aplicare protectie vopsea (sealant/ceara)",
                    "Polish faruri si aplicare folie de protectie"
                    ]

    const packs = [
        {
            packageName: "",
            packageBullets: ["Linia 1", "Linia 2", "Linia 3", "Linia 4", "Linia 5"],
            packagePrices: [],
            services: [
                {
                    service: "Polish one-step",
                    price: "de la 800"
                },
                {
                    service: "Corectie lac (variaza in functie de gradul de corectie si dimensiunea masinii)",
                    price: "de la 1500"
                },
                {
                    service: "Aplicare protectie ceramic jante",
                    price: "de la 400"
                },
                {
                    service: "Polish faruri si aplicare folie de protectie ",
                    price: "de la 450"
                }
            ]
        }
    ]
    const duration = "variaza in functie de complexitatea serviciului"

    return (
            <ServiceInfo title={title} duration={duration} description={description} beforeList={beforeList} list={list} packs={packs}/>
    );
};

export default DetailingExterior;