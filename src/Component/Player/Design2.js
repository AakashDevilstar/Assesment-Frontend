import React from 'react';
import img from "../../asset/player/Ad.jpeg";

const Design2 = ({ data,darkMode }) => {
    const { title, type, content } = data;

    return (
        <div
        className={`border border-gray-300 rounded-md p-8 mb-4 ${darkMode ? 'border-white' : 'border-transparent'} shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-black'} bg-opacity-5`}
            style={{
                width: "238.53px",
                height: "511px",
                gap: "0px",
                opacity: "0px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center", 
                justifyContent: "center", 
                marginLeft: "40px"
            }}
        >
            <div 
                className="relative overflow-hidden mb-4"  
                style={{
                    width: "220px",
                    marginTop: "-5px"
                }}
            >
                <img 
                    src={require("../../asset/player/Ad.jpeg")} 
                    alt={type}
                    className="object-cover"
                />
                 <span 
                    className="absolute top-0 right-0 bg-black text-white px-2 py-1 text-xs rounded-tr-md"
                >
                    Ad
                </span>
                <p className='font-bold' style={{ fontSize: "20px", marginLeft:"12px",marginTop:"10px" }}>{title}</p>
                <p>{content}</p>
            </div>
        </div>
    );
}

export default Design2;
