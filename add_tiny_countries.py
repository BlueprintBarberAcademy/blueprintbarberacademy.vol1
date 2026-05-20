import json
import math

file_path = 'public/countries_modified.geojson'

with open(file_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

def create_circle_polygon(lng, lat, radius, num_segments=16):
    coordinates = []
    for i in range(num_segments):
        angle = (i * 360) / num_segments
        rad = math.radians(angle)
        x = lng + radius * math.cos(rad)
        y = lat + radius * math.sin(rad)
        coordinates.append([x, y])
    coordinates.append(coordinates[0]) # close the polygon
    return [[coordinates]]

missing_countries = [
    {
        'name': 'Singapore',
        'iso_a3': 'SGP',
        'iso_a2': 'SG',
        'lng': 103.8198,
        'lat': 1.3521,
        'radius': 0.6
    },
    {
        'name': 'Hong Kong',
        'iso_a3': 'HKG',
        'iso_a2': 'HK',
        'lng': 114.1694,
        'lat': 22.3193,
        'radius': 0.6
    },
    {
        'name': 'Macau',
        'iso_a3': 'MAC',
        'iso_a2': 'MO',
        'lng': 113.5439,
        'lat': 22.1987,
        'radius': 0.6
    }
]

# Remove existing to prevent duplicates
iso_to_add = [c['iso_a3'] for c in missing_countries]
data['features'] = [f for f in data['features'] if f.get('properties', {}).get('ISO_A3') not in iso_to_add]

for c in missing_countries:
    feature = {
        'type': 'Feature',
        'properties': {
            'ADMIN': c['name'],
            'ISO_A3': c['iso_a3'],
            'ISO_A2': c['iso_a2'],
            'NAME': c['name']
        },
        'geometry': {
            'type': 'Polygon',
            'coordinates': create_circle_polygon(c['lng'], c['lat'], c['radius'])
        }
    }
    data['features'].append(feature)

with open(file_path, 'w', encoding='utf-8') as f:
    json.dump(data, f)

print("Added missing tiny countries.")
