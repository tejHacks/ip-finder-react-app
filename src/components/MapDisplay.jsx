// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// const MapDisplay = ({ latitude, longitude }) => {
//   return (
//     <div className="w-full max-w-md h-96 rounded-lg shadow-md overflow-hidden">
//       <MapContainer
//         center={[latitude, longitude]}
//         zoom={13}
//         style={{ height: '100%', width: '100%' }}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         <Marker position={[latitude, longitude]}>
//           <Popup>Your approximate location</Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//   );
// };

// export default MapDisplay;


import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapDisplay = ({ ipLatitude, ipLongitude, geoLatitude, geoLongitude }) => {
  // Use IP location as default center; fallback to a default if no data
  const center = ipLatitude && ipLongitude ? [ipLatitude, ipLongitude] : [0, 0];

  return (
    <div className="w-full max-w-md h-96 rounded-lg shadow-md overflow-hidden">
      <MapContainer center={center} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {ipLatitude && ipLongitude && (
          <Marker position={[ipLatitude, ipLongitude]}>
            <Popup>IP-based location</Popup>
          </Marker>
        )}
        {geoLatitude && geoLongitude && (
          <Marker position={[geoLatitude, geoLongitude]}>
            <Popup>Device location (Geolocation API)</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default MapDisplay;