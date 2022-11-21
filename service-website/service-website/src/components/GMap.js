// import React from 'react';
// import {useMemo} from "react"
// import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"
//
// export default function GMap() {
//     const {isLoaded} = useLoadScript({
//         googleMapsApiKey: "AIzaSyC7Yh3Z7tTS_VGsUiqQpV5OFxTX1sa6eAQ"
//     });
//     if (isLoaded) return <div>Loading...</div>;
//     return <Map />;
// }
//
// function Map() {
//     return (
//         <GoogleMap
//             zoom={10}
//             center={{lat: 44.49053022787022, lng: 26.023057799296133}}
//             mapContainerClassName="map"
//         ></GoogleMap>
//     );
// }
//



import React from 'react'
import {GoogleMap, Marker, useJsApiLoader} from '@react-google-maps/api';

const containerStyle = {
    width: '50%',
    height: '35vw'
};

const center = {
    lat: 44.49053022787022,
    lng: 26.023057799296133
};

function GMap() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCE47xBUKnz559xYwyzUpjis0QUyMpsSYw"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <Marker position={center} />
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
        </GoogleMap>
    ) : <></>
}

export default React.memo(GMap)




// import React from 'react';
//
//
// const GMap = () => {
//     const ref = React.useRef(null);
//     const [map, setMap] = React.useState();
//
//     React.useEffect(() => {
//         if (ref.current && !map) {
//             setMap(new window.google.maps.Map(ref.current, {}));
//         }
//     }, [ref, map]);
//     return (
//         <div ref={ref} style="map" />
//     );
// };
//
// export default GMap;