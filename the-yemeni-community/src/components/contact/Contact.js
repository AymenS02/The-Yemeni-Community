import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: '100%',
    height: '30vh',
};

const center = {
    lat: 43.2347412109375,
    lng: -79.75782775878906
};

const mapStyles = [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -50
            },
            {
                "lightness": 0
            }
        ]
    }
];

function Contact() {
    return (
        <div className="flex flex-col items-center h-full pb-6">
            <div className="w-full ">
                <div className="mb-6 w-full border-b-2 border-black">
                    <LoadScript googleMapsApiKey="AIzaSyBkGH9jpsQLIXt56SEBP2iUWFgEgipRP_Y">
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={14}
                            options={{ styles: mapStyles }}
                        >
                            <Marker
                                position={center}
                                title="Yemeni Community Centre"
                            />
                        </GoogleMap>
                    </LoadScript>
                </div>
                <div className="flex flex-col items-center justify-center text-start p-6 mx-[25vh] rounded-lg ">
                    <h2 className="text-2xl font-bold mb-4">Head Office</h2>
                    <p className="mb-2"><strong>Address:</strong> 45 Barlake Ave, Hamilton, ON, L8E 3R6</p>
                    <p className="mb-4">
                        <a href="https://www.google.com/maps/place/45+Barlake+Ave,+Hamilton,+ON+L8E+3R6/@43.2347149,-79.7603942,17z/data=!3m1!4b1!4m6!3m5!1s0x882c9895ef3e2f97:0x916d19a24419d07d!8m2!3d43.234711!4d-79.7578139!16s%2Fg%2F11cncgbrcw?hl=en&entry=ttu" className="text-blue-500 underline">
                            <img className="inline w-5 h-5 mr-2" src="./pin.png" alt="pin icon" />
                            Click here for directions
                        </a>
                    </p>
                    <p className="mb-2"><strong>Email:</strong> <a href="mailto:southyemenSYC@gmail.com" className="text-blue-500 underline">southyemenSYC@gmail.com</a></p>
                    <p className="mb-2"><strong>Phone:</strong> 905-920-5590</p>
                    <p><strong>Alternate Phone:</strong> 289-700-2689</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;

