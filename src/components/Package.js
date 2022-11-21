import React from 'react';

const Package = (props) => {
    return (
        <div className="Pack">
            <h1 className="PackageName">Preturi:</h1>
            {props.pack.services.map(service =>
            <p>{service.service} - {service.price} lei</p>
            )}
            <h1 className="PackageName">{props.pack.packageName}</h1>
            {/*{props.pack.packageBullets.map(bullet =>*/}
            {/*<p> - {bullet}</p>*/}
            {/*)}*/}
            {props.pack.packagePrices.map(price =>
                <p>{price.carType} - {price.price} lei</p>
            )}
        </div>
    );
};

export default Package;