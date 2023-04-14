import React, { useState } from "react";
// import Calendar from 'react-calendar';
import "mapbox-gl/dist/mapbox-gl.css";

import './Map.css';
import Map, {
    Marker,
    NavigationControl,
    Popup,
    FullscreenControl,
    GeolocateControl,
} from "react-map-gl";

const Maps = () => {
    const [lng, setLng] = useState(54.37585762735543);
    const [lat, setLat] = useState(24.45677614934833);
    return (
        <div style={{ margin: "1rem" }}>
            <div>
                {/* <Calendar onChange={onChange} value={value} /> */}
                <Map id="map"
                    mapboxAccessToken="pk.eyJ1IjoiZmllbGRzaGFya2NvIiwiYSI6ImNsYzI1ZG92cjE1emszcG16aXJsenQ2ajEifQ.lZy8NYlRgK9zqkm41rCmbg"
                    style={{
                        width: "500px",
                        height: "500px",
                        borderRadius: "15px",
                        border: "2px solid red"
                    }}
                    initialViewState={{
                        longitude: lng,
                        latitude: lat,
                    }}
                    mapStyle="mapbox://styles/mapbox/outdoors-v12"

                >
                    <Marker longitude={lng} latitude={lat} />
                    <NavigationControl position="bottom-right" />
                    <FullscreenControl />
                    <GeolocateControl />
                </Map>
            </div>
        </div>
    );
};

export default Maps;
