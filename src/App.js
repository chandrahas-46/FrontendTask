import "./App.css";
import SideBar from "./users/Users";
import Navbar from "./navbar/Navbar";

// import React from 'react';
// import { useState } from 'react';
// import { GeoProjection } from 'd3-geo';
// import { geoOrthographic } from 'd3-geo';
// import HoneycombGridOverlay from "./WorldMap";

// const data = [
//   // Sample data for honeycomb grid, replace with your own data
//   { coordinates: [-74.006, 40.7128] },
//   { coordinates: [-73.935242, 40.73061] },
//   // Add more data points as needed
// ];

function App() {
  // const [viewport, setViewport] = useState({
  //   width: '100vw',
  //   height: '100vh',
  //   latitude: 0,
  //   longitude: 0,
  //   zoom: 1,
  //   bearing: 0,
  //   pitch: 0
  // });
  return (
    <div className="app">
      <Navbar />

      {/* <HoneycombGridOverlay data={data} viewport={viewport} /> */}
      <SideBar />
    </div>
  );
}

export default App;
