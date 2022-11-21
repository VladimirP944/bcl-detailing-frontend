import React from 'react';

const ServiceTitleSmall = (props) => {
    return (
        <div className="serviceTitleSmall">
            <h1 className={"serviceTitleHeading"}>{props.title}</h1>
        </div>
    );
};

export default ServiceTitleSmall;