const fs = require('fs');

const file = 'public/countries_modified.geojson';
let data = JSON.parse(fs.readFileSync(file, 'utf8'));

// Function to generate a circle polygon
function createCirclePolygon(lng, lat, radius, numSegments = 16) {
  const coordinates = [];
  for (let i = 0; i < numSegments; i++) {
    const angle = (i * 360) / numSegments;
    const rad = (angle * Math.PI) / 180;
    const x = lng + radius * Math.cos(rad);
    const y = lat + radius * Math.sin(rad);
    coordinates.push([x, y]);
  }
  // close the polygon
  coordinates.push(coordinates[0]);
  return [[coordinates]];
}

const missingCountries = [
  {
    name: 'Singapore',
    iso_a3: 'SGP',
    iso_a2: 'SG',
    lng: 103.8198,
    lat: 1.3521,
    radius: 0.5 // artificially large so it's clickable on the globe
  },
  {
    name: 'Hong Kong',
    iso_a3: 'HKG',
    iso_a2: 'HK',
    lng: 114.1694,
    lat: 22.3193,
    radius: 0.5
  },
  {
    name: 'Macau',
    iso_a3: 'MAC',
    iso_a2: 'MO',
    lng: 113.5439,
    lat: 22.1987,
    radius: 0.3
  }
];

// Remove existing ones if they exist to avoid duplicates
data.features = data.features.filter(f => !missingCountries.some(mc => mc.iso_a3 === f.properties.ISO_A3));

missingCountries.forEach(c => {
  const feature = {
    type: 'Feature',
    properties: {
      ADMIN: c.name,
      ISO_A3: c.iso_a3,
      ISO_A2: c.iso_a2,
      NAME: c.name
    },
    geometry: {
      type: 'Polygon',
      coordinates: createCirclePolygon(c.lng, c.lat, c.radius)
    }
  };
  data.features.push(feature);
});

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('Added missing tiny countries.');
