
// Travel page JS: Leaflet map and cards
// Example places array
const places = [
    // Europe
  {
    name: "Bruxelles, Belgium",
    lat: 50.85045,
    lng: 4.34878 ,
    img: "https://cdn.pixabay.com/photo/2021/08/28/18/35/square-6581649_1280.jpg",
    desc: ""
  },
  {
    name: "Brugelette, Belgium",
    lat: 50.5951273,
    lng: 3.8518611,
    img: "https://cdn.pixabay.com/photo/2016/04/03/22/54/pairi-daiza-1305844_1280.jpg",
    desc: ""
  },
  {
    name: "Limassol, Cyprus",
    lat: 34.707130,
    lng: 33.022617,
    img: "https://cdn.pixabay.com/photo/2017/08/13/11/36/cyprus-2636914_1280.jpg",
    desc: ""
  },
  {
    name: "Paris, France",
    lat: 48.866667,
    lng: 2.333333,
    img: "https://cdn.pixabay.com/photo/2017/01/03/22/00/tower-1950742_1280.jpg",
    desc: ""
  },
  {
    name: "Munich, Germany",
    lat: 48.13743,
    lng: 11.57549,
    img: "https://cdn.pixabay.com/photo/2015/06/05/16/47/munich-798652_1280.jpg",
    desc: ""
  },
  {
    name: "London, United Kingdom",
    lat: 51.5074,
    lng: 0.1278,
    img: "https://cdn.pixabay.com/photo/2017/04/12/00/51/tower-2223305_1280.jpg",
    desc: ""
  },
  {
    name: "Catania, Italy",
    lat: 37.507877 ,
    lng: 15.083030,
    img: "https://cdn.pixabay.com/photo/2014/01/15/18/47/catania-246007_1280.jpg",
    desc: ""
  },
  {
    name: "Marostica, Italy",
    lat: 45.744499,
    lng: 11.655650,
    img: "https://cdn.pixabay.com/photo/2016/11/18/16/32/marostica-1835685_1280.jpg",
    desc: ""
  },
  {
    name: "Padova, Italy",
    lat: 45.406433,
    lng: 11.876761,
    img: "https://cdn.pixabay.com/photo/2018/09/01/15/03/padova-3646983_1280.jpg",
    desc: ""
  },
  {
    name: "Venezia, Italy",
    lat: 45.43713,
    lng: 12.33265,
    img: "https://cdn.pixabay.com/photo/2016/10/17/15/11/italy-1747913_1280.jpg",
    desc: ""
  },
  {
    name: "Roma, Italy",
    lat: 41.902782,
    lng: 12.496366,
    img: "https://cdn.pixabay.com/photo/2017/07/27/13/51/rome-2545381_1280.jpg",
    desc: ""
  },
  {
    name: "Correggio, Italy",
    lat: 44.76737,
    lng: 10.78345,
    img: "https://media.voloscontato.it/images/2021/06/correggio.jpg",
    desc: ""
  },
  {
    name: "Varsavia, Poland",
    lat: 40.620140,
    lng: 14.979810,
    img: "https://cdn.pixabay.com/photo/2013/10/18/23/37/poland-197670_1280.jpg",
    desc: ""
  },
  {
    name: "Porto, Portugal",
    lat: 41.157944,
    lng: -8.629105,
    img: "https://cdn.pixabay.com/photo/2017/02/08/12/45/porto-2048723_1280.jpg",
    desc: ""
  },
  {
    name: "Guimarães, Portugal",
    lat: 41.441952,
    lng: -8.295610,
    img: "https://cdn.pixabay.com/photo/2013/11/25/18/40/castle-218288_1280.jpg",
    desc: ""
  },
  {
    name: "Cagliari, Sardinia",
    lat: 39.23054,
    lng: 9.11917,
    img: "https://www.rossocorallo.info/wp-content/uploads/2019/09/hotel-panorama-cagliari-centro-in-sardegna11.jpg",
    desc: ""
  },
  {
    name: "Barcelona, Spain",
    lat: 41.3888,
    lng: 2.1590,
    img: "https://cdn.pixabay.com/photo/2019/12/28/11/40/barcelona-4724397_960_720.jpg",
    desc: ""
  },
  {
    name: "Edinburgh, Scotland",
    lat: 55.95206,
    lng: -3.19648,
    img: "https://cdn.pixabay.com/photo/2015/07/25/07/24/castle-859331_1280.jpg",
    desc: ""
  },
  {
    name: "Aberdeen, Scotland",
    lat: 57.149717,
    lng: -2.094278,
    img: "https://cdn.pixabay.com/photo/2017/09/06/11/14/aberdeen-2721029_1280.jpg",
    desc: ""
  },
  {
    name: "Inverness, Scotland",
    lat: 57.47908,
    lng: -4.22398,
    img: "https://cdn.pixabay.com/photo/2016/08/20/15/49/bridge-1607823_1280.jpg",
    desc: ""
  },
  {
    name: "Portree, Scotland",
    lat: 57.412474,
    lng: -6.196023,
    img: "https://cdn.pixabay.com/photo/2022/05/21/16/53/skye-7211927_1280.jpg",
    desc: ""
  },
  {
    name: "Fort William, Scotland",
    lat: 56.819817,
    lng: -5.105218,
    img: "https://cdn.pixabay.com/photo/2014/01/19/15/50/scotland-248114_1280.jpg",
    desc: ""
  },
  {
    name: "Glasgow, Scotland",
    lat: 55.86515,
    lng: -4.25763,
    img: "https://cdn.pixabay.com/photo/2023/01/19/00/35/glasgow-7728118_1280.jpg",
    desc: ""
  },
    // Africa

    // Asia
  {
    name: "Tokyo, Japan",
    lat: 35.6895,
    lng: 139.6917,
    img: "https://www.shutterstock.com/image-photo/shibuya-crossing-twilight-tokyo-japan-600nw-1608796999.jpg",
    desc: "Skyscrapers, crossing, and nightlife."
  },
  {
    name: "Nikkō, Japan",
    lat: 36.750,
    lng: 139.617,
    img: "https://cdn.pixabay.com/photo/2022/01/01/22/29/bridge-6909089_1280.jpg",
    desc: ""
  },
  {
    name: "Enoshima, Japan",
    lat: 35.29953582542545,
    lng: 139.47838848268546,
    img: "https://cdn.pixabay.com/photo/2015/01/01/10/45/mt-fuji-585530_960_720.jpg",
    desc: ""
  },
  {
    name: "Matsumoto, Japan",
    lat: 36.2381,
    lng: 137.9717,
    img: "https://www.shutterstock.com/shutterstock/videos/1110383129/thumb/1.jpg",
    desc: "Castle, history, and mountains."
  },
  {
    name: "Shirakawa-go, Japan",
    lat: 36.2608,
    lng: 136.8996,
    img: "https://www.shutterstock.com/shutterstock/videos/3653593975/thumb/1.jpg",
    desc: "Farmhouses, heritage, and snow."
  },
  {
    name: "Takayama, Japan",
    lat: 36.1467,
    lng: 137.2517,
    img: "https://media.istockphoto.com/id/521890621/photo/takayama.jpg?s=612x612&w=0&k=20&c=x0Q6bwEHGEdt8cUjXx8E03GwWWN5wF4yOK-f-O3x_XU=",
    desc: "Old town, tradition, and charm."
  },
  {
    name: "Kanazawa, Japan",
    lat: 36.5613,
    lng: 136.6562,
    img: "https://www.shutterstock.com/shutterstock/videos/3709168243/thumb/1.jpg",
    desc: "Garden, samurai, and culture."
  },
  {
    name: "Kyoto, Japan",
    lat: 35.0116,
    lng: 135.7681,
    img: "https://www.shutterstock.com/shutterstock/videos/3826478109/thumb/1.jpg",
    desc: "Temples, gardens, and traditions."
  },
  {
    name: "Nara, Japan",
    lat: 34.6851,
    lng: 135.8048,
    img: "https://media.gettyimages.com/id/675938976/video/asian-deer-during-cherry-blossom-season-japan.jpg?s=640x640&k=20&c=Xw9hS13lAslOkt5NoZI52cQgepiP0xZtccqYOi90vNU=",
    desc: "Deer, temples, and parks."
  },

  // North/South America
  {
    name: "Los Angeles, United States",
    lat: 34.052235,
    lng: -118.243683,
    img: "https://cdn.pixabay.com/photo/2017/06/29/19/57/beverly-hills-hotel-2455977_1280.jpg",
    desc: ""
  },

    // Oceania
];

let mapInstance = null;
function initMap() {
  const mapDiv = document.getElementById('map');
  if (!mapDiv) return;
  // Remove any previous map instance
  if (mapDiv._leaflet_id) {
    mapDiv._leaflet_id = null;
    mapDiv.innerHTML = '';
  }
  // Default: show the world (from North America to New Zealand)
  mapInstance = L.map('map');
  mapInstance.fitBounds([
    [70, -130],   // Alaska/Canada (northwest)
    [-50, 180]    // New Zealand (southeast)
  ]);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mapInstance);
  places.forEach((p, i) => {
    const marker = L.marker([p.lat, p.lng]).addTo(mapInstance);
    marker.on('click', () => showPlaceCard(i));
    marker.bindPopup(`<b>${p.name}</b>`);
  });
}

function setupMapButtons() {
  const btnEurope = document.getElementById('btn-europe');
  const btnJapan = document.getElementById('btn-japan');
  const btnAustralia = document.getElementById('btn-australia');
  const btnWorld = document.getElementById('btn-world');
  if (btnEurope) {
    btnEurope.onclick = () => {
      if (mapInstance) {
        // Fit from Iceland to Baghdad
        mapInstance.fitBounds([
          [66, -25],   // Iceland (northwest)
          [33, 45]     // Baghdad (southeast)
        ]);
      }
    };
  }
  if (btnJapan) {
    btnJapan.onclick = () => {
      if (mapInstance) mapInstance.setView([36.2, 138.2], 5); // Japan
    };
  }
  if (btnAustralia) {
    btnAustralia.onclick = () => {
      if (mapInstance) mapInstance.setView([-25, 134], 4); // Australia
    };
  }
  if (btnWorld) {
    btnWorld.onclick = () => {
      if (mapInstance) {
        // Fit from North America to New Zealand
        mapInstance.fitBounds([
          [70, -130],   // Alaska/Canada (northwest)
          [-50, 180]    // New Zealand (southeast)
        ]);
      }
    };
  }
}

function showPlaceCard(idx) {
  // Do nothing: keep all place cards visible
}

document.addEventListener('DOMContentLoaded', () => {
  initMap();
  setupMapButtons();
  // Show all places as cards by default
  const cards = document.querySelector('.places-cards');
  if (cards) {
    cards.innerHTML = places.map(p => `
      <div class="place-card">
        <img src="${p.img}" alt="${p.name}">
        <h4>${p.name}</h4>
        <p>${p.desc}</p>
      </div>
    `).join('');
  }
});
