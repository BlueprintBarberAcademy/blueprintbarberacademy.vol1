'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import BlockedCountryModal from './ambassador/BlockedCountryModal';
import ApplicationFormModal from './ambassador/ApplicationFormModal';
import AmbassadorInfoModal, { AmbassadorData } from './ambassador/AmbassadorInfoModal';

// Dynamically import Globe to avoid SSR issues with Three.js
const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

// ── Blocked countries (ISO A3) ──
const BLOCKED_COUNTRIES = new Set([
  'RUS', // Russia
  'PRK', // North Korea
  'IRN', // Iran
  'SYR', // Syria
  'AFG', // Afghanistan
  'SOM', // Somalia
  'YEM', // Yemen
  'LBY', // Libya
  'SDN', // Sudan
  'CUB', // Cuba
  'VEN', // Venezuela
  'MMR', // Myanmar
  'ERI', // Eritrea
  'BLR', // Belarus
]);

// Helper to parse CSV properly (RFC 4180 compliant)
function parseCSV(text: string): string[][] {
  const result: string[][] = [];
  let row: string[] = [];
  let cell = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (inQuotes) {
      if (char === '"') {
        if (nextChar === '"') {
          cell += '"';
          i++; // Skip the next quote
        } else {
          inQuotes = false;
        }
      } else {
        cell += char;
      }
    } else {
      if (char === '"') {
        inQuotes = true;
      } else if (char === ',') {
        row.push(cell);
        cell = '';
      } else if (char === '\r' || char === '\n') {
        row.push(cell);
        cell = '';
        if (row.length > 0 && row.some(c => c.trim() !== '')) {
          result.push(row);
        }
        row = [];
        if (char === '\r' && nextChar === '\n') {
          i++; // Skip \n if CRLF
        }
      } else {
        cell += char;
      }
    }
  }
  if (cell || row.length > 0) {
    row.push(cell);
    if (row.some(c => c.trim() !== '')) {
      result.push(row);
    }
  }
  return result;
}

// ── Demo ambassadors ──
const DEMO_AMBASSADORS: Record<string, AmbassadorData> = {
  POL: {
    name: 'Mikolaj M.',
    country: 'Poland',
    countryCode: 'POL',
    photo: '/ambassadors/poland.png',
    shopName: 'Szamotuly',
    experience: 9,
    instagram: 'https://www.instagram.com/podciety',
    location: 'Szamotuly, Poland',
    bio: 'Owner of Podsiety bbs',
  },
  MEX: {
    name: 'Jordi',
    country: 'Mexico',
    countryCode: 'MEX',
    photo: '/ambassadors/mexico.png',
    shopName: 'Merida',
    experience: 9,
    instagram: 'https://www.instagram.com/jordir108',
    location: 'Merida, Mexico',
    bio: 'Head barber in 108 Rabels bbs.',
  },
  NLD: {
    name: 'Duncan B.',
    country: 'Netherlands',
    countryCode: 'NLD',
    photo: '/ambassadors/netherlands.png',
    shopName: 'Utrecht',
    experience: 9,
    instagram: 'https://www.instagram.com/the.debonhair',
    website: 'https://duncankennethbailey.com',
    location: 'Utrecht, Netherlands',
    bio: `Duncan Bailey, the owner of Duncan Kenneth Bailey barbershop in Utrecht.
After working at the Old School Barber Academy in Rotterdam for 8 years, the time had come to open my own doors.
Through my large interest in art deco to mid century styles and clothing without the politics and I have come to embrace the quality and calm of timelessness.
I love using this mentality as I’m cutting hair, beards or doing hot towel shaves.
Quality over quantity means everything to me.`,
  },

  IDN: {
    name: 'Andi F.',
    country: 'Indonesia',
    countryCode: 'IDN',
    photo: '/ambassadors/indonesia.png',
    shopName: 'Sulawesi Selatan',
    experience: 9,
    instagram: 'https://www.instagram.com/fauzanandi',
    location: 'Sulawesi Selatan, Indonesia',
    bio: 'Barber at Stay Hair Indonesia',
  },
  USA: {
    name: 'Mauricio M.',
    country: 'United States',
    countryCode: 'USA',
    photo: '/ambassadors/usa.png',
    shopName: 'FL',
    experience: 9,
    instagram: 'https://www.instagram.com/mauricioms',
    location: 'FL, United States',
    bio: 'Barber in Dads Cave bbs.',
  },
  AUS: {
    name: 'Vladyslav S.',
    country: 'Australia',
    countryCode: 'AUS',
    photo: '/ambassadors/australia.png',
    shopName: 'Sydney',
    experience: 9,
    instagram: 'https://www.instagram.com/slobisback',
    location: 'Sydney, Australia',
    bio: 'Works at Grand Royal bbs.',
  },
  KOR: {
    name: 'Zay',
    country: 'South Korea',
    countryCode: 'KOR',
    photo: '/ambassadors/south korea.png',
    shopName: 'Daegu',
    experience: 9,
    instagram: 'https://instagram.com/cleverebel',
    location: 'Daegu, South Korea',
    bio: 'Barber in 49ers bbs.',
  },
  SGP: {
    name: 'Dr.Faz',
    country: 'Singapore',
    countryCode: 'SGP',
    photo: '/ambassadors/singapore.png',
    shopName: 'Singapore',
    experience: 9,
    instagram: 'https://www.instagram.com/fazisml',
    location: 'Singapore',
    bio: 'Owner of Deepcuts bbs.',
  },

  ARG: {
    name: 'Ivan-David G.',
    country: 'Argentina',
    countryCode: 'ARG',
    photo: '/ambassadors/argentina.png',
    shopName: 'casa Olivo',
    experience: 9,
    instagram: 'https://www.instagram.com/godoyivandavid',
    location: 'casa Olivo, Argentina',
    bio: 'Barber in Alcatraz Barberia Clasica',
  },
  BRA: {
    name: 'Juliano N.',
    country: 'Brazil',
    countryCode: 'BRA',
    photo: '/ambassadors/brasil.png',
    shopName: 'RS',
    experience: 9,
    instagram: 'https://www.instagram.com/jjulianonunes',
    location: 'RS, Brazil',
    bio: 'Works at Barberis Galo Veio',
  },
  GRC: {
    name: 'Outsiders Bbs.',
    country: 'Greece',
    countryCode: 'GRC',
    photo: '/ambassadors/greece.png',
    shopName: 'Athens',
    experience: 9,
    instagram: 'https://www.instagram.com/outsidersbarbershop',
    location: 'Athens, Greece',
    bio: 'Twins brothers makig style',
  },
};

const TAKEN_COUNTRIES = new Set(Object.keys(DEMO_AMBASSADORS));

// ── Modal state ──
type ModalState =
  | { type: 'none' }
  | { type: 'blocked'; countryName: string }
  | { type: 'application'; countryName: string }
  | { type: 'ambassador'; data: AmbassadorData };

export default function AmbassadorGlobe() {
  const globeRef = useRef<any>(null);
  const [countries, setCountries] = useState<any>({ features: [] });
  const [modal, setModal] = useState<ModalState>({ type: 'none' });
  const [hoverD, setHoverD] = useState<any>(null);
  const [globeReady, setGlobeReady] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const [ambassadorsData, setAmbassadorsData] = useState<Record<string, AmbassadorData>>(DEMO_AMBASSADORS);
  const [takenCountries, setTakenCountries] = useState<Set<string>>(TAKEN_COUNTRIES);
  
  // Fetch from Google Sheets on mount
  useEffect(() => {
    fetch('https://docs.google.com/spreadsheets/d/1zqybQqkll3624NKxaUIuc7dGk5nLzYUtzVhcftzoFFg/export?format=csv&gid=0')
      .then(res => res.text())
      .then(csv => {
        const rows = parseCSV(csv);
        if (rows.length < 2) return;
        
        const newAmbassadors: Record<string, AmbassadorData> = {};
        const newTaken = new Set<string>();
        
        for (let i = 1; i < rows.length; i++) {
          const values = rows[i];
          if (values.length < 6) continue;
          
          const country = values[0]?.trim();
          if (!country) continue;
          
          const name = values[1]?.trim();
          let insta = values[2]?.trim().replace('@', '');
          if (insta && !insta.startsWith('http')) {
            insta = `https://www.instagram.com/${insta}`;
          }
          const yearsStr = values[3]?.trim();
          const experience = parseInt(yearsStr) || 0;
          const city = values[4]?.trim() || '';
          const bio = values[5]?.trim() || '';
          
          // Map to ISO_A3
          let isoCode = '';
          const cLow = country.toLowerCase();
          if (cLow.includes('poland')) isoCode = 'POL';
          else if (cLow.includes('mexico')) isoCode = 'MEX';
          else if (cLow.includes('usa') || cLow.includes('states') || cLow.includes('america')) isoCode = 'USA';
          else if (cLow.includes('korea')) isoCode = 'KOR';
          else if (cLow.includes('netherlands')) isoCode = 'NLD';
          else if (cLow.includes('indonesia')) isoCode = 'IDN';
          else if (cLow.includes('singapore')) isoCode = 'SGP';
          else if (cLow.includes('brasil') || cLow.includes('brazil')) isoCode = 'BRA';
          else if (cLow.includes('australia')) isoCode = 'AUS';
          else if (cLow.includes('greece')) isoCode = 'GRC';
          else if (cLow.includes('argentina')) isoCode = 'ARG';
          
          if (!isoCode) continue;
          
          let photoCountry = cLow.replace('brasil', 'brasil').replace('brazil', 'brasil');
          if (photoCountry === 'usa') photoCountry = 'usa';
          
          newAmbassadors[isoCode] = {
            name,
            country,
            countryCode: isoCode,
            photo: `/ambassadors/${photoCountry}.png`,
            shopName: city,
            experience,
            instagram: insta,
            location: `${city ? city + ', ' : ''}${country}`,
            bio,
          };
          newTaken.add(isoCode);
        }
        
        if (Object.keys(newAmbassadors).length > 0) {
          setAmbassadorsData(newAmbassadors);
          setTakenCountries(newTaken);
        }
      })
      .catch(err => console.error("Error fetching CSV:", err));
  }, []);

  // Filter countries for search
  const filteredCountries = countries.features?.filter((feat: any) => {
    const name = feat.properties?.NAME || feat.properties?.ADMIN || '';
    return name.toLowerCase().includes(searchQuery.toLowerCase());
  }).slice(0, 5) || [];

  // Track window size
  useEffect(() => {
    const update = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Load GeoJSON
  useEffect(() => {
    fetch('/countries_modified.geojson')
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  // Configure globe on ready
  useEffect(() => {
    if (globeRef.current && globeReady) {
      const globe = globeRef.current;
      // Set initial point of view
      globe.pointOfView({ lat: 30, lng: 10, altitude: 2.2 }, 0);
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 0.4;
      globe.controls().enableZoom = true;
      globe.controls().minDistance = 260;
      globe.controls().maxDistance = 310;
      globe.controls().enableDamping = true;
      globe.controls().dampingFactor = 0.15;
      globe.controls().zoomSpeed = 0.6;
    }
  }, [globeReady]);

  // Prevent wheel/scroll from leaking out and causing browser back/forward navigation
  useEffect(() => {
    const container = document.getElementById('globe-container');
    if (!container) return;
    const handler = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
    };
    container.addEventListener('wheel', handler, { passive: false });
    return () => container.removeEventListener('wheel', handler);
  }, []);

  // Get country color
  const getCountryColor = useCallback(
    (feat: any) => {
      const code = feat.properties?.ISO_A3;
      const isHover = hoverD === feat;

      if (BLOCKED_COUNTRIES.has(code)) {
        return isHover ? 'rgba(191, 31, 47, 0.6)' : 'rgba(80, 20, 25, 0.45)';
      }
      if (takenCountries.has(code)) {
        return isHover ? 'rgba(23, 25, 59, 0.85)' : 'rgba(23, 25, 59, 0.55)';
      }
      return isHover ? 'rgba(191, 31, 47, 0.45)' : 'rgba(253, 252, 251, 0.15)';
    },
    [hoverD, takenCountries]
  );

  // Side color
  const getSideColor = useCallback(
    (feat: any) => {
      const code = feat.properties?.ISO_A3;
      if (BLOCKED_COUNTRIES.has(code)) return 'rgba(80, 20, 25, 0.3)';
      if (takenCountries.has(code)) return 'rgba(23, 25, 59, 0.3)';
      return 'rgba(253, 252, 251, 0.08)';
    },
    [takenCountries]
  );

  // Stroke color
  const getStrokeColor = useCallback(
    (feat: any) => {
      const code = feat.properties?.ISO_A3;
      if (BLOCKED_COUNTRIES.has(code)) return 'rgba(191, 31, 47, 0.5)';
      if (takenCountries.has(code)) return 'rgba(23, 25, 59, 0.7)';
      return 'rgba(253, 252, 251, 0.25)';
    },
    [takenCountries]
  );

  // Handle country click
  const handleCountryClick = useCallback((feat: any) => {
    const code = feat.properties?.ISO_A3;
    const name = feat.properties?.NAME || feat.properties?.ADMIN || 'Unknown';

    if (BLOCKED_COUNTRIES.has(code)) {
      setModal({ type: 'blocked', countryName: name });
    } else if (takenCountries.has(code) && ambassadorsData[code]) {
      setModal({ type: 'ambassador', data: ambassadorsData[code] });
    } else {
      setModal({ type: 'application', countryName: name });
    }
  }, [takenCountries, ambassadorsData]);

  // Handle hover
  const handleHover = useCallback((feat: any) => {
    setHoverD(feat);
    document.body.style.cursor = feat ? 'pointer' : 'default';
  }, []);

  const closeModal = () => setModal({ type: 'none' });

  const globeWidth = windowSize.width;
  const globeHeight = windowSize.height;

  return (
    <div id="globe-container" className="relative w-full h-screen overflow-hidden bg-[#0a0b1a]" style={{ touchAction: 'none', overscrollBehavior: 'none' }}>
      {/* Atmosphere gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-[#17193b]/30 via-transparent to-transparent pointer-events-none z-0"></div>

      {/* Globe */}
      <div className="absolute inset-0 z-10">
        {windowSize.width > 0 && (
          <Globe
            ref={globeRef}
            width={globeWidth}
            height={globeHeight}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
            backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
            polygonsData={countries.features}
            polygonCapColor={getCountryColor}
            polygonSideColor={getSideColor}
            polygonStrokeColor={getStrokeColor}
            polygonAltitude={(d: any) => (d === hoverD ? 0.04 : 0.01)}
            polygonLabel={(feat: any) => {
              const code = feat.properties?.ISO_A3;
              const name = feat.properties?.NAME || feat.properties?.ADMIN || '';
              if (BLOCKED_COUNTRIES.has(code)) {
                return `<div style="background:#17193b;color:#bf1f2f;padding:8px 14px;border:2px solid #bf1f2f;font-family:sans-serif;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:2px;">🚫 ${name} — BLOCKED</div>`;
              }
              if (takenCountries.has(code)) {
                return `<div style="background:#17193b;color:#fdfcfb;padding:8px 14px;border:2px solid #fdfcfb;font-family:sans-serif;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:2px;">✦ ${name} — AMBASSADOR</div>`;
              }
              return `<div style="background:#17193b;color:#fdfcfb;padding:8px 14px;border:2px solid #fdfcfb50;font-family:sans-serif;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:2px;">${name}</div>`;
            }}
            onPolygonClick={handleCountryClick}
            onPolygonHover={handleHover}
            polygonsTransitionDuration={300}
            atmosphereColor="#bf1f2f"
            atmosphereAltitude={0.2}
            onGlobeReady={() => setGlobeReady(true)}
          />
        )}
      </div>

      {/* Top overlay content */}
      <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none">
        <div className="container mx-auto px-6 pt-16 md:pt-20 text-center flex flex-col items-center">
          {/* Search Bar */}
          <div className="relative z-30 w-48 md:w-64 mb-4 pointer-events-auto">
            {/* Dropdown goes below the input */}
            {showDropdown && searchQuery && filteredCountries.length > 0 && (
              <ul className="absolute top-full left-0 w-full mt-2 bg-[#17193b] border-2 border-white/20 max-h-64 overflow-y-auto shadow-[0_8px_20px_rgba(0,0,0,0.5)] z-50 text-left">
                {filteredCountries.map((feat: any, idx: number) => {
                  const name = feat.properties?.NAME || feat.properties?.ADMIN;
                  const code = feat.properties?.ISO_A3;
                  let status = 'OPEN';
                  let statusColor = 'text-white/50';
                  if (BLOCKED_COUNTRIES.has(code)) {
                     status = 'BLOCKED';
                     statusColor = 'text-accent';
                  } else if (takenCountries.has(code)) {
                     status = 'TAKEN';
                     statusColor = 'text-white';
                  }

                  return (
                    <li 
                      key={idx}
                      onClick={() => {
                        handleCountryClick(feat);
                        setSearchQuery('');
                        setShowDropdown(false);
                      }}
                      className="px-3 py-2 border-b border-white/10 hover:bg-white/10 cursor-pointer flex justify-between items-center transition-colors"
                    >
                      <span className="text-white font-bold text-xs truncate mr-2">{name}</span>
                      <span className={`text-[9px] font-black tracking-widest uppercase flex-shrink-0 ${statusColor}`}>{status}</span>
                    </li>
                  );
                })}
              </ul>
            )}

            <input
              type="text"
              placeholder="Search country..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowDropdown(true);
              }}
              onFocus={() => setShowDropdown(true)}
              className="w-full bg-background/10 backdrop-blur-md border-2 border-white/20 text-white px-3 py-2 text-xs focus:outline-none focus:border-accent transition-colors placeholder:text-white/40 uppercase tracking-widest font-bold shadow-lg"
            />
          </div>

          <div className="bg-accent text-background px-4 py-1 mb-6 border-2 border-background/30 font-bold tracking-widest uppercase text-xs inline-block transform -rotate-1 pointer-events-auto">
            Global Network • Personal Mentorship
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black text-white uppercase tracking-tighter leading-none mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
            Ambassador Program
          </h1>
          <p className="text-sm md:text-base text-white/50 font-bold uppercase tracking-[0.2em] max-w-xl mx-auto drop-shadow-lg">
            Select your country on the globe to apply
          </p>
        </div>
      </div>

      {/* Bottom legend */}
      <div className="absolute bottom-6 left-6 z-20 pointer-events-none bg-[#0a0b1a]/50 p-4 border-2 border-white/10 backdrop-blur-sm">
        <div className="flex flex-col gap-4 text-sm font-black uppercase tracking-[0.15em] text-white/80">
          <div className="flex items-center gap-4">
            <div className="w-5 h-5 bg-white/15 border-2 border-white/30"></div>
            <span>Open — Apply Now</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-5 h-5 bg-[#17193b] border-2 border-[#17193b] shadow-[0_0_10px_rgba(23,25,59,0.8)]"></div>
            <span className="text-white">Taken — Ambassador Active</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-5 h-5 bg-[#50141a] border-2 border-[#bf1f2f]/80"></div>
            <span className="text-[#bf1f2f]">Blocked — Restricted</span>
          </div>
        </div>
      </div>

      {/* Back button */}
      <a
        href="/"
        className="absolute top-6 left-6 z-30 bg-white/10 backdrop-blur-sm text-white px-4 py-2 border border-white/20 text-xs font-bold uppercase tracking-widest hover:bg-white/20 transition-colors pointer-events-auto"
      >
        ← Back
      </a>



      {/* Modals */}
      {modal.type === 'blocked' && (
        <BlockedCountryModal countryName={modal.countryName} onClose={closeModal} />
      )}
      {modal.type === 'application' && (
        <ApplicationFormModal countryName={modal.countryName} onClose={closeModal} />
      )}
      {modal.type === 'ambassador' && (
        <AmbassadorInfoModal ambassador={modal.data} onClose={closeModal} />
      )}
    </div>
  );
}
