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

// ── Demo ambassadors ──
const DEMO_AMBASSADORS: Record<string, AmbassadorData> = {
  POL: {
    name: 'Podciety',
    country: 'Poland',
    countryCode: 'POL',
    photo: '/Ambassadors/poland.png',
    shopName: 'Podciety Barbershop',
    experience: 8,
    instagram: 'https://instagram.com/podciety',
    location: 'Poland',
    bio: 'Podciety brings the Blueprint methodology to the Polish barbering community. Training the next generation with real-world techniques.',
  },
  MEX: {
    name: 'Jordi',
    country: 'Mexico',
    countryCode: 'MEX',
    photo: '/Ambassadors/mexico.png',
    shopName: 'Rebels 108',
    experience: 10,
    instagram: 'https://instagram.com/jordir108',
    website: 'https://rebels108.com',
    location: 'Mexico',
    bio: 'Jordi Abascal specializes in classic haircuts and hot towel shaves. As Blueprint Ambassador and King Brown Pomade representative, he brings old-school craft to Mexico.',
  },
  NLD: {
    name: 'Dunkan',
    country: 'Netherlands',
    countryCode: 'NLD',
    photo: '/Ambassadors/netherlands.png',
    shopName: 'A slice of vintage paradise',
    experience: 10,
    instagram: 'https://instagram.com/the.debonhair',
    website: 'https://duncankennethbailey.com',
    location: 'Utrecht, Netherlands',
    bio: 'Duncan Kenneth Bailey brings timeless barbering and classic style to Utrecht, Netherlands.',
  },
  PRT: {
    name: 'Rufino',
    country: 'Portugal',
    countryCode: 'PRT',
    photo: '/Ambassadors/portugal.png',
    shopName: 'Rufino Cuts',
    experience: 12,
    instagram: 'https://instagram.com/r.u.f.i.n.o',
    location: 'Portugal',
    bio: 'João Rufino represents the Blueprint standard in Portugal, combining classic techniques with modern precision.',
  },
  IDN: {
    name: 'Andi',
    country: 'Indonesia',
    countryCode: 'IDN',
    photo: '/Ambassadors/indonesia.png',
    shopName: 'Hairdesign Barber',
    experience: 9,
    instagram: 'https://instagram.com/fauzanandi',
    location: 'Indonesia',
    bio: 'Andi Achmad Fauzan brings passion with pride to the barbering community in Indonesia.',
  },
  USA: {
    name: 'Mauricio',
    country: 'United States',
    countryCode: 'USA',
    photo: '/Ambassadors/usa.png',
    shopName: 'Mauricio\'s Classic Cuts',
    experience: 15,
    instagram: 'https://instagram.com/mauricio',
    location: 'United States',
    bio: 'Mauricio is a veteran of the trade in the US. As the US Blueprint Ambassador, he personally mentors barbers using our proven methodology.',
  },
  AUS: {
    name: 'Vladyslav',
    country: 'Australia',
    countryCode: 'AUS',
    photo: '/Ambassadors/australia.png',
    shopName: 'Vladyslav Grooming',
    experience: 7,
    instagram: 'https://instagram.com/vladyslav',
    location: 'Australia',
    bio: 'Bringing European precision to Australia, Vladyslav is dedicated to educating barbers on the Blueprint foundation.',
  },
  KOR: {
    name: 'Zay',
    country: 'South Korea',
    countryCode: 'KOR',
    photo: '/Ambassadors/south korea.png',
    shopName: 'Zay\'s Barbershop',
    experience: 9,
    instagram: 'https://instagram.com/zay',
    location: 'South Korea',
    bio: 'Zay is elevating the barbering craft in South Korea by implementing the strict standards of Blueprint Academy.',
  },
  SGP: {
    name: 'Dr. Faz',
    country: 'Singapore',
    countryCode: 'SGP',
    photo: '/Ambassadors/singaore.png',
    shopName: 'Faz Barber Studio',
    experience: 14,
    instagram: 'https://instagram.com/drfaz',
    location: 'Singapore',
    bio: 'Dr. Faz is the pioneer of traditional barbering education in Singapore, leading the movement with unparalleled passion.',
  },
  SWE: {
    name: 'Helena',
    country: 'Sweden',
    countryCode: 'SWE',
    photo: '/Ambassadors/sweden.png',
    shopName: 'Helena\'s Classic Barber',
    experience: 11,
    instagram: 'https://instagram.com/helena',
    location: 'Sweden',
    bio: 'Helena is a master barber representing Blueprint in Sweden, setting the benchmark for quality and service.',
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
      if (TAKEN_COUNTRIES.has(code)) {
        return isHover ? 'rgba(23, 25, 59, 0.85)' : 'rgba(23, 25, 59, 0.55)';
      }
      return isHover ? 'rgba(191, 31, 47, 0.45)' : 'rgba(253, 252, 251, 0.15)';
    },
    [hoverD]
  );

  // Side color
  const getSideColor = useCallback(
    (feat: any) => {
      const code = feat.properties?.ISO_A3;
      if (BLOCKED_COUNTRIES.has(code)) return 'rgba(80, 20, 25, 0.3)';
      if (TAKEN_COUNTRIES.has(code)) return 'rgba(23, 25, 59, 0.3)';
      return 'rgba(253, 252, 251, 0.08)';
    },
    []
  );

  // Stroke color
  const getStrokeColor = useCallback(
    (feat: any) => {
      const code = feat.properties?.ISO_A3;
      if (BLOCKED_COUNTRIES.has(code)) return 'rgba(191, 31, 47, 0.5)';
      if (TAKEN_COUNTRIES.has(code)) return 'rgba(23, 25, 59, 0.7)';
      return 'rgba(253, 252, 251, 0.25)';
    },
    []
  );

  // Handle country click
  const handleCountryClick = useCallback((feat: any) => {
    const code = feat.properties?.ISO_A3;
    const name = feat.properties?.NAME || feat.properties?.ADMIN || 'Unknown';

    if (BLOCKED_COUNTRIES.has(code)) {
      setModal({ type: 'blocked', countryName: name });
    } else if (TAKEN_COUNTRIES.has(code) && DEMO_AMBASSADORS[code]) {
      setModal({ type: 'ambassador', data: DEMO_AMBASSADORS[code] });
    } else {
      setModal({ type: 'application', countryName: name });
    }
  }, []);

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
              if (TAKEN_COUNTRIES.has(code)) {
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
        <div className="container mx-auto px-6 pt-24 md:pt-32 text-center">
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

      {/* Search Bar */}
      <div className="absolute bottom-6 right-6 md:left-1/2 md:-translate-x-1/2 md:bottom-10 z-30 w-64 md:w-80 pointer-events-auto">
        <div className="relative">
          {/* Dropdown goes above the input so it doesn't get cut off at bottom */}
          {showDropdown && searchQuery && filteredCountries.length > 0 && (
            <ul className="absolute bottom-full left-0 w-full mb-2 bg-[#17193b] border-2 border-white/20 max-h-64 overflow-y-auto shadow-[0_-8px_20px_rgba(0,0,0,0.5)]">
              {filteredCountries.map((feat: any, idx: number) => {
                const name = feat.properties?.NAME || feat.properties?.ADMIN;
                const code = feat.properties?.ISO_A3;
                let status = 'OPEN';
                let statusColor = 'text-white/50';
                if (BLOCKED_COUNTRIES.has(code)) {
                   status = 'BLOCKED';
                   statusColor = 'text-accent';
                } else if (TAKEN_COUNTRIES.has(code)) {
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
                    className="px-4 py-3 border-b border-white/10 hover:bg-white/10 cursor-pointer flex justify-between items-center transition-colors"
                  >
                    <span className="text-white font-bold text-sm truncate mr-2">{name}</span>
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
            className="w-full bg-background/10 backdrop-blur-md border-2 border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-white/40 uppercase tracking-widest font-bold shadow-lg"
          />
        </div>
      </div>

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
