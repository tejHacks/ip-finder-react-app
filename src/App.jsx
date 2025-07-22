import { useState, useEffect } from 'react';
import axios from 'axios';
import IPFinder from './components/IPFinder';
import MapDisplay from './components/MapDisplay';
import './index.css';

const App = () => {
  const [ipData, setIpData] = useState(null);
  const [geoData, setGeoData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchIPData = async () => {
      setLoading(true);
      try {
        const ipResponse = await axios.get('https://ip-finder-backend-phi.vercel.app/api/ip');
        const ip = ipResponse.data.ip;
        const locationResponse = await axios.get(`https://ip-finder-backend-phi.vercel.app/api/location/${ip}`);
        if (locationResponse.data.error) {
          throw new Error(locationResponse.data.details || 'Failed to fetch location');
        }
        setIpData({
          ip,
          city: locationResponse.data.city,
          country: locationResponse.data.country_name,
          latitude: locationResponse.data.latitude,
          longitude: locationResponse.data.longitude,
        });
        setError(null);
      } catch (err) {
        setError(`Failed to fetch IP or location data: ${err.message}`);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    const fetchGeoData = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setGeoData({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (err) => {
            setError('Geolocation permission denied or unavailable.');
            console.error(err);
          }
        );
      } else {
        setError('Geolocation is not supported by this browser.');
      }
    };

    fetchIPData();
    fetchGeoData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">IP Address Finder</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {loading && (
        <div className="flex items-center justify-center mb-4">
          <svg
            className="animate-spin h-8 w-8 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            ></path>
          </svg>
          <span className="ml-2 text-gray-600">Loading...</span>
        </div>
      )}
      <IPFinder ipData={ipData} setIpData={setIpData} setError={setError} />
      {ipData && (
        <MapDisplay
          ipLatitude={ipData.latitude}
          ipLongitude={ipData.longitude}
          geoLatitude={geoData?.latitude}
          geoLongitude={geoData?.longitude}
        />
      )}
    </div>
  );
};

export default App;