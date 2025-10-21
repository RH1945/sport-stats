// Code to add audio functionality
// DOM variables
// const fetchButton = document.querySelector("button");
// const paragraph = document.querySelector("p");
// const clickSound = new Audio("assets/media/click-345983.mp3");
// const successSound = new Audio("assets/media/goodresult-82807.mp3");
// successSound.volume = 0.3; // Sample very loud
// clickSound.preload = "auto"; // Pre-loads the sample as it will be used alot

// // Event listeners
// fetchButton.addEventListener("click", fetchTeam);

// // Function
// function fetchTeam() {
//     // Play the click sound
//     clickSound.currentTime = 0; // This rewinds it if played before
//     clickSound.play();

//     // Delay before playing this sound
//     setTimeout(() => {
//         successSound.currentTime = 0;
//         successSound.play();
//     }, 600); // 300ms delay

//     // Change the text
//     paragraph.style.color = "blue";
//     paragraph.style.fontSize = "5rem";
// }


// assets/js/script.js

// ---------- Utilities & data mapping ----------
const TEAM_MAP = {
    // Map Simplemaps "locations" indexes (mapdata.js) to metadata we need
    // (id from balldontlie, wiki slug, and human team name)
    0: { name: "Atlanta Hawks",         bdlTeamId: 1,  wiki: "Atlanta_Hawks" },
    1: { name: "Boston Celtics",        bdlTeamId: 2,  wiki: "Boston_Celtics" },
    2: { name: "Brooklyn Nets",         bdlTeamId: 3,  wiki: "Brooklyn_Nets" },
    3: { name: "Charlotte Hornets",     bdlTeamId: 4,  wiki: "Charlotte_Hornets" },
    4: { name: "Chicago Bulls",         bdlTeamId: 6,  wiki: "Chicago_Bulls" },
    5: { name: "Cleveland Cavaliers",   bdlTeamId: 7,  wiki: "Cleveland_Cavaliers" },
    6: { name: "Dallas Mavericks",      bdlTeamId: 8,  wiki: "Dallas_Mavericks" },
    7: { name: "Denver Nuggets",        bdlTeamId: 9,  wiki: "Denver_Nuggets" },
    8: { name: "Detroit Pistons",       bdlTeamId: 10, wiki: "Detroit_Pistons" },
    9: { name: "Golden State Warriors", bdlTeamId: 11, wiki: "Golden_State_Warriors" },
    10:{ name: "Houston Rockets",       bdlTeamId: 12, wiki: "Houston_Rockets" },
    11:{ name: "Indiana Pacers",        bdlTeamId: 13, wiki: "Indiana_Pacers" },
    12:{ name: "Los Angeles Clippers",  bdlTeamId: 14, wiki: "Los_Angeles_Clippers" },
    13:{ name: "Los Angeles Lakers",    bdlTeamId: 15, wiki: "Los_Angeles_Lakers" },
    14:{ name: "Memphis Grizzlies",     bdlTeamId: 16, wiki: "Memphis_Grizzlies" },
    15:{ name: "Miami Heat",            bdlTeamId: 17, wiki: "Miami_Heat" },
    16:{ name: "Milwaukee Bucks",       bdlTeamId: 18, wiki: "Milwaukee_Bucks" },
    17:{ name: "Minnesota Timberwolves",bdlTeamId: 19, wiki: "Minnesota_Timberwolves" },
    18:{ name: "New Orleans Pelicans",  bdlTeamId: 20, wiki: "New Orleans_Pelicans" },
    19:{ name: "New York Knicks",       bdlTeamId: 21, wiki: "New York_Knicks" },
    20:{ name: "Oklahoma City Thunder", bdlTeamId: 22, wiki: "Oklahoma_City_Thunder" },
    21:{ name: "Orlando Magic",         bdlTeamId: 23, wiki: "Orlando_Magic" },
    22:{ name: "Philadelphia 76ers",    bdlTeamId: 24, wiki: "Philadelphia_76ers" },
    23:{ name: "Phoenix Suns",          bdlTeamId: 25, wiki: "Phoenix_Suns" },
    24:{ name: "Portland Trail Blazers",bdlTeamId: 26, wiki: "Portland_Trail_Blazers" },
    25:{ name: "Sacramento Kings",      bdlTeamId: 27, wiki: "Sacramento_Kings" },
    26:{ name: "San Antonio Spurs",     bdlTeamId: 28, wiki: "San Antonio_Spurs" },
    27:{ name: "Toronto Raptors",       bdlTeamId: 29, wiki: "Toronto_Raptors" },
    28:{ name: "Utah Jazz",             bdlTeamId: 30, wiki: "Utah_Jazz" },
    29:{ name: "Washington Wizards",    bdlTeamId: 31, wiki: "Washing_Wizards" }
};

// Quick helpers
const $ = (sel, root=document) => root.querySelector(sel);
const el = (tag, cls) => Object.assign(document.createElement(tag), { className: cls || "" });

function ensureCardContainers() {
    // Insert the side card and hover mini-card next to the map
    const map = document.getElementById('map');                             // from landing_page.html
    if (!map) return;

    // If not present, create them
    if (!$('#team-card')) {
        const aside = el('aside'); aside.id = 'team-card';
        // Place after map so CSS grid column puts it to the right on desktop
        map.parentElement.appendChild(aside);
    }
    if (!$('#team-mini')) {
        const mini = el('div'); mini.id = 'team-mini';
        // Simplemaps renders into a holder inside #map (we'll attach to that holder)
        // The holder is created by the library as `${div}_holder` where div=mapdata.main_settings.div
        // Your map uses main_settings.div = "map". :contentReference[oaicite:3]{index=3}
        const holder = document.getElementById('map_holder') || map;
        holder.style.position = 'relative';
        holder.appendChild(mini);
    }
}
ensureCardContainers();

// ---------- Fetchers (graceful fallbacks) ----------
// Free endpoints used at runtime in the browser:
// 1) Wikipedia Summary API (for a short description).
async function fetchWikiSummary(team) {
    try {
        const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(team.wiki)}`);
        if (!res.ok) throw new Error('wiki');
        const data = await res.json();
        return data.extract || "";
    } catch {
        return ""; // fallback to empty
    }
}

// 2) balldontlie (simple, free basketball API). We’ll compute current-season W/L by sampling games.
const CURRENT_SEASON = new Date().getMonth() >= 9 ? (new Date().getFullYear()) : (new Date().getFullYear() - 1);
// (Season flips around October; this rough cut is fine for the demo)

async function fetchTeamWL(bdlTeamId) {
    try {
        // We’ll pull recent games for the season and compute W/L.
        // API: https://www.balldontlie.io/api/v1/games?seasons[]=YYYY&team_ids[]=ID&per_page=100
        const url = `https://www.balldontlie.io/api/v1/games?seasons[]=${CURRENT_SEASON}&team_ids[]=${bdlTeamId}&per_page=100`;
        const res = await fetch(url);
        if (!res.ok) throw new Error('bdl');
        const data = await res.json();
        let wins = 0, losses = 0;
        for (const g of data.data) {
            const isHome = g.home_team.id === bdlTeamId;
            const myScore = isHome ? g.home_team_score : g.visitor_team_score;
            const oppScore = isHome ? g.visitor_team_score : g.home_team_score;
            if (myScore > oppScore) wins++; else if (myScore < oppScore) losses++;
        }
        return { wins, losses, games: data.data.length };
    } catch {
        return { wins: null, losses: null, games: null }; // fallback
    }
}

// 3) Count current roster size (approx) by querying players this season.
async function fetchRosterCount(bdlTeamId) {
    try {
        // paginated; but per_page=100 typically covers active roster
        const url = `https://www.balldontlie.io/api/v1/players?per_page=100&team_ids[]=${bdlTeamId}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error('bdl players');
        const data = await res.json();
        return data.data.length || null;
    } catch {
        return null;
    }
}

// ---------- Renderers ----------
function renderMiniCard(idx, pos /* {x, y} from mouse */) {
    const info = TEAM_MAP[idx];
    if (!info) return;
    const mini = $('#team-mini');
    mini.innerHTML = `
    <span class="name">${info.name}</span>
    <div class="row">
      <span class="pill">Hover for details</span>
      <span class="pill">Click to open card</span>
    </div>
  `;
    mini.style.display = 'block';
    // Position near cursor/marker (offset handled by CSS transform)
    mini.style.left = `${pos.x}px`;
    mini.style.top  = `${pos.y}px`;
}

function hideMiniCard() {
    const mini = $('#team-mini');
    if (mini) mini.style.display = 'none';
}

function loadingCard(name, logoUrl) {
    const card = $('#team-card');
    card.classList.add('open');
    card.innerHTML = `
    <div class="team-card__header">
      <img class="team-card__logo" src="${logoUrl || ''}" alt="${name}">
      <h3 class="team-card__title">${name}</h3>
    </div>
    <div class="team-card__meta">
      <div class="team-card__pill">Loading live data…</div>
    </div>
    <div class="team-card__desc"></div>
    <div class="team-card__stats"></div>
    <div class="team-card__actions"></div>
  `;
}

function fillCard({ name, city, wikiUrl, logoUrl, rosterCount, wins, losses, games, description }) {
    const card = $('#team-card');
    card.classList.add('open');

    card.innerHTML = `
    <div class="team-card__header">
      <img class="team-card__logo" src="${logoUrl || ''}" alt="${name}">
      <h3 class="team-card__title">${name}</h3>
    </div>

    <div class="team-card__meta">
      ${city ? `<div class="team-card__pill">City: ${city}</div>` : ""}
      ${games != null ? `<div class="team-card__pill">Games this season: ${games}</div>` : ""}
      ${rosterCount != null ? `<div class="team-card__pill">Roster: ${rosterCount} players</div>` : ""}
    </div>

    <div class="team-card__stats">
      <div class="team-card__stat">
        <div class="label">Wins</div>
        <div class="value">${wins != null ? wins : "—"}</div>
      </div>
      <div class="team-card__stat">
        <div class="label">Losses</div>
        <div class="value">${losses != null ? losses : "—"}</div>
      </div>
    </div>

    <p class="team-card__desc">${description || "No description available."}</p>

    <div class="team-card__actions">
      ${wikiUrl ? `<a class="team-card__btn" href="${wikiUrl}" target="_blank" rel="noopener">Visit Wikipedia</a>` : ""}
    </div>
  `;

    // On mobile: scroll into view & focus the card
    if (window.matchMedia("(max-width: 991.98px)").matches) {
        card.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

// ---------- Simplemaps hooks ----------
/*
  Your Simplemaps bundle exposes hook slots like:
  simplemaps_usmap.hooks.over_location / out_location / click_location
  (See the `hooks` object in usmap.js; it registers plugin hooks for *_location.) :contentReference[oaicite:4]{index=4} :contentReference[oaicite:5]{index=5}
*/
(function attachMapHooks() {
    if (!window.simplemaps_usmap || !simplemaps_usmap.hooks) {
        // If map isn’t initialized yet, retry once DOM is ready
        document.addEventListener('DOMContentLoaded', attachMapHooks, { once: true });
        return;
    }

    // Hover: show mini-card near the cursor
    simplemaps_usmap.hooks.over_location = function(id, data, ev) {
        // The map logic renders inside a holder (absolute coords available). We’ll read mouse offsets if present.
        const pos = { x: (ev?.clientX ? ev.clientX : 0), y: (ev?.clientY ? ev.clientY : 0) };
        // We’ll fallback to center of the holder if no event.
        const holder = document.getElementById('map_holder');
        if (holder && (!pos.x || !pos.y)) {
            const rect = holder.getBoundingClientRect();
            pos.x = rect.width / 2; pos.y = rect.height / 2;
        }
        renderMiniCard(id, pos);
    };

    // Leave: hide mini-card
    simplemaps_usmap.hooks.out_location = function(id) {
        hideMiniCard();
    };

    // Click: open the side card, fetch live data
    simplemaps_usmap.hooks.click_location = async function(id) {
        hideMiniCard();

        // Pull logo + city/team text from your mapdata locations.
        // Your map loads locations (logos & descriptions) via mapdata.js. :contentReference[oaicite:6]{index=6}
        const loc = (window.simplemaps_usmap_mapdata || {}).locations?.[String(id)];
        const guessLogo = loc?.image_url?.match(/src=([^ >]+)/)?.[1] || "";
        const guessCity = loc?.name || "";
        const guessTeamName = TEAM_MAP[id]?.name || loc?.description || guessCity;

        loadingCard(guessTeamName, guessLogo);

        // Live data
        const meta = TEAM_MAP[id] || {};
        const [desc, wl, roster] = await Promise.all([
            fetchWikiSummary(meta),
            meta.bdlTeamId ? fetchTeamWL(meta.bdlTeamId) : Promise.resolve({wins:null,losses:null,games:null}),
            meta.bdlTeamId ? fetchRosterCount(meta.bdlTeamId) : Promise.resolve(null)
        ]);

        const wikiUrl = meta.wiki ? `https://en.wikipedia.org/wiki/${meta.wiki}` : null;

        fillCard({
            name: guessTeamName,
            city: guessCity,
            wikiUrl,
            logoUrl: guessLogo,
            rosterCount: roster,
            wins: wl.wins, losses: wl.losses, games: wl.games,
            description: desc
        });
    };
})();



// Games calender
const apiKey = "7d6eef70-2823-4b93-b2c0-7de715a5ffc4";
const urlAdd = "https://api.balldontlie.io/v1";

async function getGames({ start_date, end_date }) {
    // This part builds the complete API url address, encodeURIComponent ensures data is safely encoded for use in url
    const url = `${urlAdd}/games?start_date=${encodeURIComponent(
        start_date
    )}&end_date=${encodeURIComponent(end_date)}`;

    // Sends an HTTP GET request to the API, await pauses execution until fetch request completes
    const res = await fetch(url, {
        headers: { Authorization: `Bearer ${apiKey}` },
    });
    // Conditional statement to check if HTTP response is not OK ie 404 and returns error code if there is one
    if (!res.ok) throw new Error(`Balldontlie HTTP ${res.status}`);
    // Converts HTTP response to a JSON
    return res.json();
}

const gamesList = document.getElementById("games-list");

// Asynchronous function to handle displaying games in the DOM
async function displayGames() {
    if (!gamesList) return;
    gamesList.innerHTML = "<p>Loading games...</p>";

    try {
        const data = await getGames({
            start_date: "2025-10-01",
            end_date: "2025-10-31",
        });
        gamesList.innerHTML = "";
        data.data.forEach((game) => {
            const gameItem = document.createElement("div");
            gameItem.classList.add("game"); // match CSS

            const gameDate = new Date(game.date).toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            });

            gameItem.innerHTML = `
                <strong>${game.home_team.full_name}</strong> vs <strong>${game.visitor_team.full_name}</strong><br>
                ${gameDate} <br>
                Status: ${game.status}
            `;
            gamesList.appendChild(gameItem);
        });
    } catch (error) {
        console.error("Error loading games:", error);
        gamesList.innerHTML =
            "<p>Failed to load games. Please try again later.</p>";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    displayGames();
});
