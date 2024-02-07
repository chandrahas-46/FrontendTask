// HoneycombGridOverlay.js
import React from 'react';
import { HexbinLayer } from 'deck.gl';
import { StaticMap } from 'react-map-gl';
import { geoOrthographic } from 'd3-geo';

const HoneycombGridOverlay = ({ data, viewport }) => {
  const mapStyle = 'https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json';

  const hexagonLayer = new HexbinLayer({
    id: 'honeycomb-grid',
    data,
    radius: 50000,
    pickable: true,
    extruded: true,
    getPosition: d => d.coordinates,
    getColor: [255, 140, 0],
    opacity: 0.8,
    coverage: 1,
    elevationScale: 2000
  });

  return (
    <StaticMap
      {...viewport}
      width="100%"
      height="100%"
      mapStyle={mapStyle}
      // mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
    >
      {hexagonLayer}
    </StaticMap>
  );
};

export default HoneycombGridOverlay;
