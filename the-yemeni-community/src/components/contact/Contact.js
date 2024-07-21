import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./Contact.scss";

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: 43.2347412109375,
    lng: -79.75782775878906
};

function Contact() {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <div className="contact-details">
                <div className="map-container">
                    <LoadScript googleMapsApiKey="AIzaSyBkGH9jpsQLIXt56SEBP2iUWFgEgipRP_Y">
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={14}
                        >
                            <Marker
                                position={center}
                                title="Yemeni Community Centre"
                            />
                        </GoogleMap>
                    </LoadScript>
                </div>
                <p><strong>Address:</strong> 45 Barlake Ave, Hamilton, ON, L8E 3R6</p>
                <p><strong>Email:</strong> <a href="mailto:southyemenSYC@gmail.com">southyemenSYC@gmail.com</a></p>
                <p><strong>Phone:</strong> 905-920-5590</p>
                <p><strong>Alternate Phone:</strong> 289-700-2689</p>
            </div>
        </div>
    );
}

export default Contact;
