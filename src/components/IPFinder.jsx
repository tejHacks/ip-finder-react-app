// // const IPFinder = ({ ipData }) => {
// //   return (
// //     <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mb-6">
// //       {ipData ? (
// //         <div className="text-gray-700">
// //           <h2 className="text-xl font-semibold mb-4">Your IP Information</h2>
// //           <p className="mb-2"><strong>IP Address:</strong> {ipData.ip}</p>
// //           <p className="mb-2"><strong>City:</strong> {ipData.city}</p>
// //           <p className="mb-2"><strong>Country:</strong> {ipData.country}</p>
// //         </div>
// //       ) : (
// //         <p className="text-gray-500">Loading IP information...</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default IPFinder;


// import { useState } from 'react';
// import axios from 'axios';

// const IPFinder = ({ ipData, setIpData, setError }) => {
//   const [inputIP, setInputIP] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!inputIP) return;

//     try {
//       const locationResponse = await axios.get(`https://ipapi.co/${inputIP}/json/`);
//       if (locationResponse.data.error) {
//         setError('Invalid IP address.');
//         return;
//       }
//       setIpData({
//         ip: inputIP,
//         city: locationResponse.data.city,
//         country: locationResponse.data.country_name,
//         latitude: locationResponse.data.latitude,
//         longitude: locationResponse.data.longitude,
//       });
//       setError(null);
//     } catch (err) {
//       setError('Failed to fetch location for this IP.');
//       console.error(err);
//     }
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mb-6">
//       <h2 className="text-xl font-semibold mb-4">IP Address Finder</h2>
//       <form onSubmit={handleSubmit} className="mb-4">
//         <input
//           type="text"
//           value={inputIP}
//           onChange={(e) => setInputIP(e.target.value)}
//           placeholder="Enter IP address (e.g., 8.8.8.8)"
//           className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
//         >
//           Find Location
//         </button>
//       </form>
//       {ipData ? (
//         <div className="text-gray-700">
//           <p className="mb-2"><strong>IP Address:</strong> {ipData.ip}</p>
//           <p className="mb-2"><strong>City:</strong> {ipData.city}</p>
//           <p className="mb-2"><strong>Country:</strong> {ipData.country}</p>
//         </div>
//       ) : (
//         <p className="text-gray-500">Enter an IP address to see details.</p>
//       )}
//     </div>
//   );
// };

// export default IPFinder;



import { useState } from 'react';
import axios from 'axios';

const IPFinder = ({ ipData, setIpData, setError }) => {
  const [inputIP, setInputIP] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputIP) return;

    try {
      // const locationResponse = await axios.get(`http://localhost:5000/api/location/${inputIP}`); used this locally
  
const locationResponse = await axios.get(`https://ip-finder-backend.vercel.app/api/location/${inputIP}`); //usng this after deploying the node backend to vercel
      if (locationResponse.data.error) {
        setError('Invalid IP address.');
        return;
      }
      setIpData({
        ip: inputIP,
        city: locationResponse.data.city,
        country: locationResponse.data.country_name,
        latitude: locationResponse.data.latitude,
        longitude: locationResponse.data.longitude,
      });
      setError(null);
    } catch (err) {
      setError('Failed to fetch location for this IP.');
      console.error(err);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mb-6">
      <h2 className="text-xl font-semibold mb-4">IP Address Finder</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={inputIP}
          onChange={(e) => setInputIP(e.target.value)}
          placeholder="Enter IP address (e.g., 8.8.8.8)"
          className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Find Location
        </button>
      </form>
      {ipData ? (
        <div className="text-gray-700">
          <p className="mb-2"><strong>IP Address:</strong> {ipData.ip}</p>
          <p className="mb-2"><strong>City:</strong> {ipData.city}</p>
          <p className="mb-2"><strong>Country:</strong> {ipData.country}</p>
        </div>
      ) : (
        <p className="text-gray-500">Enter an IP address to see details.</p>
      )}
    </div>
  );
};

export default IPFinder;