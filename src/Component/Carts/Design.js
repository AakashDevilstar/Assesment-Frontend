import React from 'react';

const Design = ({ data,darkMode }) => {
    const { id_no, name, time, address, bt_content } = data;

    return (
        <div
        className={`border border-gray-300 rounded-md p-8 mb-4 ${darkMode ? 'border-white' : 'border-transparent'} shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-black'} bg-opacity-5`}
            style={{
                width: "238.53px",
                height: "640px",
                gap: "0px",
                opacity: "0px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center", 
                justifyContent: "center", 
                marginLeft: "180px",
                marginTop:"40px"
            }}
        >
            <div 
                className="relative overflow-hidden mb-4"  
                style={{
                    width: "220px",
                    marginTop: "-20px"
                }}
            >
                <img 
                    src={require(`../../asset/cart/Cart${id_no}.jpeg`)} 
                    alt={id_no}
                    className="object-cover"
                />
                <p>- - - - - - - - - - - - - - - - - - - - </p>
                <p className='font-bold' style={{ marginLeft: "22px", marginBottom: "5px" }}>{name}</p>
                <p className='font-semibold' style={{ marginLeft: "20px" }}>{time}</p>
                <p style={{ marginLeft: "28px", marginTop: "8px" }}>{address}</p>
                <button className='border border-black-100 text-white bg-black p-2' style={{ marginLeft: "10px", width: "90%", textAlign: "center", marginTop: "12px" }}>
                    { bt_content}
                </button>
            </div>
        </div>
    );
}

export default Design;
