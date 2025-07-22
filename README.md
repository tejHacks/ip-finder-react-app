
# IP Address Finder

**A React-based web application that fetches and displays a user's IP address and approximate location on an interactive map. Users can also input custom IP addresses to retrieve location data and compare IP-based locations with their device's precise location using the Geolocation API. The app is styled with Tailwind CSS and uses Leaflet for map visualization.
Features**

* Automatic IP Detection: Retrieves the user's public IP address and location details (city, country) using the ipify and ipapi.co APIs.
* Manual IP Input: Allows users to enter a custom IP address to fetch its location data.
* Geolocation API Integration: Displays the user's device location (if permitted) alongside the IP-based location on the map.
* Interactive Map: Visualizes locations with markers for IP and device coordinates using Leaflet.
* Loading State: Shows a spinner during API calls for a better user experience.
* Responsive Design: Built with Tailwind CSS for a clean, modern, and mobile-friendly UI.

**Tech** **Stack**

* React: Functional components with Hooks (useState, useEffect) for state management and side effects.
* Axios: For making API calls to ipify and ipapi.co.
* Leaflet (react-leaflet): For rendering interactive maps.
* Tailwind CSS: For utility-first, responsive styling.
* JavaScript (ES6): Uses async/await, destructuring, arrow functions, and optional chaining.
* Vite: Fast development and build tool for modern web apps.

**Screenshots**

**Main** **Interface**
Shows the IP address, location details, and map with IP and device location markers.

 (screenshots/main-interface.png, etc.)
 

**Clone the Repository**:
```
git clone https://github.com/your-username/ip-finder.git
cd ip-finder
```

**Install Dependencies:**

```
npm install
```

Run the Development Server:
```
npm run dev
 ```

**Open http://localhost:5173 in your browser to view the app.**


**Deployment**

The app is deployed on Vercel. Visit https://your-vercel-app.vercel.app to see the live demo.


- **Frontend**: [https://ip-finder-react-app.vercel.app](https://ip-finder-react-app.vercel.app)
- **Backend**: [https://ip-finder-backend.vercel.app](https://ip-finder-backend.vercel.app)

Contributing
Contributions are welcome! Fork the repository, make changes, and submit a pull request.
License
This project is licensed under the MIT License.