import React from 'react';

const Design1 = ({ data, darkMode }) => {
    const { name, id_no, total_events, sports } = data;
    
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
                    height: "350px",
                    marginTop: "-18px"
                }}
            >
                <img 
                    src={require(`../../asset/player/Player${id_no}.jpeg`)} 
                    alt={name} 
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    style={{ transform: "scale(1.2)" }}
                />
            </div>
            <div className="text-xl font-semibold mb-2" style={{ marginLeft: "-60px", color: darkMode ? '#fff' : '#000' }}>
                {name}
            </div>
            <div 
               className={`border-transparent shadow-sm p-2.5 ${darkMode ? 'bg-gray-700' : 'bg-black'} bg-opacity-5`}
               style={{
                display: "flex",
                width: "200px",
                marginTop: "2px",
                marginBottom: "-30px",
               }}
            >
                <div>
                    <p style={{ fontSize: "12px", color: darkMode ? '#fff' : '#000' }}>Total Events</p> 
                    <p className='font-bold' style={{ color: darkMode ? '#fff' : '#000' }}>{total_events}</p>
                </div>
                <div style={{ marginLeft: "22px" }}>
                    <p style={{ fontSize: "12px", color: darkMode ? '#fff' : '#000' }}>Sports</p>
                    <p className='font-bold' style={{ color: darkMode ? '#fff' : '#000' }}>{sports}</p>
                </div>
            </div>  
        </div>
    );
};

export default Design1;
