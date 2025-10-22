// Code to add audio functionality

// DOM variables
const teamSelect = document.querySelector("select");
const clickSound = new Audio("assets/media/click-345983.mp3");
const successSound = new Audio("assets/media/goodresult-82807.mp3");
successSound.volume = 0.3; // Sample very loud
clickSound.preload = "auto"; // Pre-loads the sample as it will be used alot

// // Event listeners
teamSelect.addEventListener("click", fetchTeam);

// // Function
function fetchTeam() {
    // Play the click sound
    clickSound.currentTime = 0; // This rewinds it if played before
    clickSound.play();

    // Delay before playing this sound
    // setTimeout(() => {
    //     successSound.currentTime = 0;
    //     successSound.play();
    // }, 600); // 600ms delay

//     // Change the text
//     paragraph.style.color = "blue";
//     paragraph.style.fontSize = "5rem";
// }
    //     // Change the text
    //     paragraph.style.color = "blue";
    //     paragraph.style.fontSize = "5rem";


//     -----------------------CARD DISPLAY AND TEAM MAP INFO---------------------------
const TEAM_BG_BY_NAME = {
    "Atlanta Hawks":"https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/atlanta-hawks-logo.png",
    "Boston Celtics":"https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/boston-celtics-logo.png",
    "Brooklyn Nets":"https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/brooklyn-nets-logo.png",
    "Charlotte Hornets":"https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/charlotte-hornets-logo.png",
    "Chicago Bulls":"https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/chicago-bulls-logo.png",
    "Cleveland Cavaliers":"https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/cleveland-cavaliers-logo.png",
    "Dallas Mavericks":"https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/dallas-mavericks-logo.png",
    "Denver Nuggets":"https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/denver-nuggets-logo.png",
    "Detroit Pistons":"https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/detroit-pistons-logo.png",
    "Golden State Warriors":"https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/goldenstate-warriors-logo.png",
    "Houston Rockets":"https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/houston-rockets-logo.png",
    "Indiana Pacers":"https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/indiana-pacers-logo.png",
    "Los Angeles Clippers":"https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/la-clippers-logo.png",
    "Los Angeles Lakers":"https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/la-lakers-logo.png",
    "Memphis Grizzlies":"https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/memphis-grizzlies-logo.png",
    "Miami Heat":"https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/miami-heat-logo.png",
    "Milwaukee Bucks":"https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/milwaukee-bucks-logo.png",
    "Minnesota Timberwolves":"https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/minnesota-timberwolves-logo.png",
    "New Orleans Pelicans":"https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/new-orleans-pelicans-logo.png",
    "New York Knicks":"https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/ny-knicks-logo.png",
    "Oklahoma City Thunder":"https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/oklahoma-city-thunder-logo.png",
    "Orlando Magic":"https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/orlando-magic-logo.png",
    "Philadelphia 76ers":"https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/philadelphia-76ers-logo.png",
    "Phoenix Suns":"https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/phoenix-suns-logo.png",
    "Portland Trail Blazers":"https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/portland-trailblaizers-logo.png",
    "Sacramento Kings":"https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/sacramento-kings-logo.png",
    "San Antonio Spurs":"https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/san-antonio-spurs-logo.png",
    "Toronto Raptors":"https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/toronto-raptors-logo.png",
    "Utah Jazz":"https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/utah-jazz-logo.png",
    "Washington Wizards":"https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/washington-wizards-logo.png"
};

/* Simplemaps location index -> official full team name (match TEAM_BG_BY_NAME) */
const TEAM_MAP = {
    0:{name:"Atlanta Hawks"}, 1:{name:"Boston Celtics"}, 2:{name:"Brooklyn Nets"}, 3:{name:"Charlotte Hornets"},
    4:{name:"Chicago Bulls"}, 5:{name:"Cleveland Cavaliers"}, 6:{name:"Dallas Mavericks"}, 7:{name:"Denver Nuggets"},
    8:{name:"Detroit Pistons"}, 9:{name:"Golden State Warriors"}, 10:{name:"Houston Rockets"}, 11:{name:"Indiana Pacers"},
    12:{name:"Los Angeles Clippers"}, 13:{name:"Los Angeles Lakers"}, 14:{name:"Memphis Grizzlies"}, 15:{name:"Miami Heat"},
    16:{name:"Milwaukee Bucks"}, 17:{name:"Minnesota Timberwolves"}, 18:{name:"New Orleans Pelicans"}, 19:{name:"New York Knicks"},
    20:{name:"Oklahoma City Thunder"}, 21:{name:"Orlando Magic"}, 22:{name:"Philadelphia 76ers"}, 23:{name:"Phoenix Suns"},
    24:{name:"Portland Trail Blazers"}, 25:{name:"Sacramento Kings"}, 26:{name:"San Antonio Spurs"}, 27:{name:"Toronto Raptors"},
    28:{name:"Utah Jazz"}, 29:{name:"Washington Wizards"}
};

const $  = (sel, root=document)=>root.querySelector(sel);
const el = (tag, cls)=>Object.assign(document.createElement(tag),{className:cls||""});

/* ---------- Containers ---------- */
    function ensureCardContainers() {
        const map = document.getElementById("map");
        if (!map) return;

        // Wrap map and side card together
        map.parentElement.classList.add("map-shell");

        // Create the team card container if missing
        if (!document.getElementById("team-card")) {
            const aside = document.createElement("aside");
            aside.id = "team-card";
            map.parentElement.appendChild(aside);
        }
    }

    ensureCardContainers();

// ---------- Map hooks ----------
    (function attachMapHooks() {
        if (!window.simplemaps_usmap || !simplemaps_usmap.hooks) {
            document.addEventListener("DOMContentLoaded", attachMapHooks, { once: true });
            return;
        }

        // No hover mini — just click
        simplemaps_usmap.hooks.click_location = async function (id) {
            const loc = (window.simplemaps_usmap_mapdata || {}).locations?.[String(id)];
            const bgFromMap = loc?.image_url || "";
            const bgFromList =
                TEAM_BG_BY_NAME[loc?.description] || TEAM_BG_BY_NAME[loc?.name];
            const logoUrl = bgFromList || bgFromMap || "";

            const teamMeta = TEAM_MAP[id] || {};
            const teamId = teamMeta.bdlTeamId;
            const teamName = teamMeta.name || loc?.description || loc?.name || "Team";

            loadingCard(teamName, logoUrl);

            // Fetch from your CSV or any local data instead of API
            const team = TEAM_STATS.find((t) => t.Team === teamName);
            if (!team) {
                fillCard({
                    name: teamName,
                    logoUrl,
                    city: loc?.name || "",
                    wins: "—",
                    losses: "—",
                    games: "—",
                    topScorer: null,
                    info: null,
                });
                return;
            }

            fillCard({
                name: team.Team,
                city: loc?.name || "",
                logoUrl,
                rosterCount: null,
                wins: team.W,
                losses: team.L,
                games: parseInt(team.W) + parseInt(team.L),
                topScorer: null,
                info: {
                    full_name: team.Team,
                    conference: "",
                    division: "",
                    abbreviation: "",
                    city: "",
                    arena: team.Arena,
                },
            });
        };
    })();


/* ---------- CSV loader (cache + fallback) ---------- */
const CSV_URL = "assets/data/teams.csv";
const FALLBACK_CSV = `Rk,Team,W,L,3PAr,TS%,Arena
1,Oklahoma City Thunder,68,14,.419,.593,Paycom Center
2,Boston Celtics,61,21,.536,.591,TD Garden
3,Cleveland Cavaliers,64,18,.457,.607,Rocket Arena
4,Minnesota Timberwolves,49,33,.455,.588,Target Center
5,Los Angeles Clippers,50,32,.387,.589,Intuit Dome
6,Memphis Grizzlies,48,34,.406,.588,FedEx Forum
7,Houston Rockets,52,30,.384,.553,Toyota Center
8,New York Knicks,51,31,.382,.589,Madison Square Garden (IV)
9,Denver Nuggets,50,32,.356,.604,Ball Arena
10,Golden State Warriors,48,34,.469,.568,Chase Center
11,Milwaukee Bucks,48,34,.424,.598,Fiserv Forum
12,Indiana Pacers,50,32,.400,.594,Gainbridge Fieldhouse
13,Detroit Pistons,44,38,.394,.580,Little Caesars Arena
14,Los Angeles Lakers,50,32,.425,.593,Crypto.com Arena
15,Miami Heat,37,45,.429,.576,Kaseya Center
16,Sacramento Kings,40,42,.391,.582,Golden 1 Center
17,Orlando Magic,41,41,.411,.550,Kia Center
18,Atlanta Hawks,40,42,.410,.579,State Farm Arena
19,Dallas Mavericks,39,43,.389,.583,American Airlines Center
20,Chicago Bulls,39,43,.457,.585,United Center
21,San Antonio Spurs,34,48,.441,.575,Frost Bank Center
22,Portland Trail Blazers,36,46,.418,.555,Moda Center
23,Phoenix Suns,36,46,.440,.595,Footprint Center
24,Toronto Raptors,30,52,.373,.553,Scotiabank Arena
25,Philadelphia 76ers,24,58,.426,.563,Wells Fargo Center
26,Brooklyn Nets,26,56,.458,.552,Barclays Center
27,Utah Jazz,17,65,.449,.568,Delta Center
28,Charlotte Hornets,19,63,.430,.537,Spectrum Center
29,New Orleans Pelicans,21,61,.385,.552,Smoothie King Center
30,Washington Wizards,18,64,.435,.546,Capital One Arena
,League Average,,,.421,.576,`;
let __CSV_CACHE=null;

async function loadTeamsCSV(){
    if(__CSV_CACHE) return __CSV_CACHE;
    try{
        const res = await fetch(CSV_URL, {cache:"no-store"});
        if(!res.ok) throw 0;
        const text = await res.text();
        __CSV_CACHE = csvToMap(text);
    }catch{
        __CSV_CACHE = csvToMap(FALLBACK_CSV);
    }
    return __CSV_CACHE;
}

function csvToMap(text){
    const lines = text.trim().split(/\r?\n/);
    const header = lines[0].split(",").map(s=>s.trim());
    const idx = (k)=>header.indexOf(k);
    const m = new Map();
    for(let i=1;i<lines.length;i++){
        const cells = lines[i].split(",").map(s=>s.trim());
        const Team = cells[idx("Team")] || "";
        if(!Team || Team.toLowerCase()==="league average") continue;
        const row = {
            rk: cells[idx("Rk")]||"",
            team: Team,
            w:  num(cells[idx("W")]),
            l:  num(cells[idx("L")]),
            tpa:   pct(cells[idx("3PAr")]),
            ts:    pct(cells[idx("TS%")]),
            arena: cells[idx("Arena")]||""
        };
        m.set(Team, row);
    }
    return m;
}
const num = (v)=> (v===""||v==null? null : Number(v));
const pct = (v)=> (v===""||v==null? null : Number(v)*100);

/* ---------- UI helpers ---------- */

function winPct(w,l){ if(w==null||l==null) return null; const g=w+l; return g? (w/g)*100 : null; }
function openOverlay(on){
    const ov=$('#team-overlay');
    if(!ov) return;
    if(on){ ov.classList.add('open'); document.body.classList.add('no-scroll'); }
    else { ov.classList.remove('open'); document.body.classList.remove('no-scroll'); }
}
function installCloseHandler(){
    const btn=$('#team-card-close');
    if(btn) btn.onclick=()=>{ const c=$('#team-card'); if(c){ c.classList.remove('open'); c.innerHTML=''; } openOverlay(false); };
}

/* ---------- Card render ---------- */
function loadingCard(name, logoUrl){
    const card=$('#team-card'); card.classList.add('open');
    if (window.matchMedia("(max-width: 991.98px)").matches) openOverlay(true);
    card.innerHTML = `
    <div class="team-card__bg" style="background-image:url('${logoUrl||""}')"></div>
    <div class="team-card__vignette"></div>
    <div class="team-card__content">
      <div class="team-card__header">
        <h3 class="team-card__title">${name}</h3>
        <button id="team-card-close" class="team-card__close" aria-label="Close">✕</button>
      </div>
      <div class="team-card__chips"><span class="chip">Loading…</span></div>
      <div class="team-card__meta">
        <div class="team-card__pill">Fetching CSV…</div>
      </div>
      <div class="team-card__stats">
        <div class="stat"><div class="label">Wins</div><div class="value">—</div></div>
        <div class="stat"><div class="label">Losses</div><div class="value">—</div></div>
        <div class="stat"><div class="label">Win %</div><div class="value">—</div></div>
      </div>
      <p class="team-card__desc">Loading team info…</p>
    </div>`;
    installCloseHandler();
}

function fillCard({ name, city, logoUrl, rk, w, l, tpa, ts, arena }){
    const pct = winPct(w,l);
    const chipsHtml = [
        rk? `<span class="chip">Rank #${rk}</span>`:"",
        arena? `<span class="chip">${arena}</span>`:""
    ].join("");
    const metaHtml = [
        city && `<div class="team-card__pill">City: ${city}</div>`,
        Number.isFinite(tpa) && `<div class="team-card__pill">3PAr: ${(tpa).toFixed(1)}%</div>`,
        Number.isFinite(ts)  && `<div class="team-card__pill">TS%: ${(ts).toFixed(1)}%</div>`
    ].filter(Boolean).join("");

    const statsHtml = `
    <div class="stat"><div class="label">Wins</div><div class="value">${w ?? "—"}</div></div>
    <div class="stat"><div class="label">Losses</div><div class="value">${l ?? "—"}</div></div>
    <div class="stat"><div class="label">Win %</div><div class="value">${pct!=null? pct.toFixed(1) : "—"}</div></div>
  `;

    const desc = arena ? `${name} play at ${arena}.` : `${name}.`;

    const card=$('#team-card'); card.classList.add('open');
    if (window.matchMedia("(max-width: 991.98px)").matches) openOverlay(true);
    card.innerHTML = `
    <div class="team-card__bg" style="background-image:url('${logoUrl||""}')"></div>
    <div class="team-card__vignette"></div>
    <div class="team-card__content">
      <div class="team-card__header">
        <h3 class="team-card__title">${name}</h3>
        <button id="team-card-close" class="team-card__close" aria-label="Close">✕</button>
      </div>
      <div class="team-card__chips">${chipsHtml}</div>
      <div class="team-card__meta">${metaHtml}</div>
      <div class="team-card__stats">${statsHtml}</div>
      <p class="team-card__desc">${desc}</p>
    </div>`;
    if (!window.matchMedia("(max-width: 991.98px)").matches) card.scrollIntoView({behavior:"smooth",block:"start"});
    installCloseHandler();
}

/* ---------- Simplemaps hooks ---------- */
(function attachMapHooks(){
    if(!window.simplemaps_usmap || !simplemaps_usmap.hooks){
        document.addEventListener('DOMContentLoaded', attachMapHooks, {once:true});
        return;
    }

    simplemaps_usmap.hooks.click_location = async function(id){
        const loc = (window.simplemaps_usmap_mapdata||{}).locations?.[String(id)];
        const teamName = TEAM_MAP[id]?.name || loc?.description || loc?.name || "Team";
        const bgFromMap = loc?.image_url || "";
        const bgFromList = TEAM_BG_BY_NAME[teamName] || TEAM_BG_BY_NAME[loc?.description] || TEAM_BG_BY_NAME[loc?.name];
        const logoUrl = bgFromList || bgFromMap || "";
        loadingCard(teamName, logoUrl);

        const csvMap = await loadTeamsCSV();
        const row = csvMap.get(teamName);
        const city = loc?.name || "";
        if(!row){
            fillCard({ name: teamName, city, logoUrl, rk:null, w:null, l:null, tpa:null, ts:null, arena:"" });
            return;
        }
        fillCard({
            name: teamName,
            city,
            logoUrl,
            rk: row.rk, w: row.w, l: row.l, tpa: row.tpa, ts: row.ts, arena: row.arena
        });
    };
})();


// ----------------------Games calendar----------------------------------------------------
const apiKey = "7d6eef70-2823-4b93-b2c0-7de715a5ffc4";
const urlAdd = "https://api.balldontlie.io/v1";

// Function added to get Teams stats
async function getTeams() {
    const res = await fetch(`${urlAdd}/teams`, {
        headers: {Authorization: `Bearer ${apiKey}`},
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
}

async function getGames({start_date, end_date, teamId = null}) {
    // This part builds the complete API url address, encodeURIComponent ensures data is safely encoded for use in url
    let url = `${urlAdd}/games?start_date=${encodeURIComponent(
        start_date
    )}&end_date=${encodeURIComponent(end_date)}`;

    // If a team ID is provided, add it as a filter
    if (teamId) {
        url += `&team_ids[]=${encodeURIComponent(teamId)}`;
    }

    // Sends an HTTP GET request to the API, await pauses execution until fetch request completes
    const res = await fetch(url, {
        headers: {Authorization: `Bearer ${apiKey}`},
    });
    // Conditional statement to check if HTTP response is not OK ie 404 and returns error code if there is one
    if (!res.ok) throw new Error(`Balldontlie HTTP ${res.status}`);
    // Converts HTTP response to a JSON
    return res.json();
}

// Variables
const gamesList = document.getElementById("games-list");
const teamsList = document.getElementById("team-select");

// Asynchronous function to handle displaying Teams in the DOM
async function populateTeams() {
    try {
        const data = await getTeams();

        const noTeamOption = document.createElement("option");
        noTeamOption.value = "";
        noTeamOption.textContent = "No Team selected";
        // make it default
        noTeamOption.selected = true;

        data.data.forEach((team) => {
            const option = document.createElement("option");
            option.value = team.id;
            option.textContent = team.full_name;
            teamsList.appendChild(option);
        });
    } catch (error) {
        console.error("Error loading teams:", error);
    }
}

// Asynchronous function to handle displaying games in the DOM
async function displayGames(teamId = null) {
    // The conditional prevents the function running is the element is missing, avoids errors
    if (!gamesList) return;
    gamesList.innerHTML = "<p>Loading games...</p>";

    // This calls getGames and waits for a response
    try {
        const data = await getGames({
            start_date: "2025-10-01",
            end_date: "2025-10-31",
            teamId,
        });
        // Clears loading message
        gamesList.innerHTML = "";

        // Loops through each game in the data.data array (the API returns an object with a data array)
        data.data.forEach((game) => {
            const gameItem = document.createElement("div");
            gameItem.classList.add("game"); // match CSS style
            gameItem.classList.add("game-link"); // create class for additional styling

            // Converts the game's date string to a human-readable format using local time settings
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
    
            `;
            // Adds in the newly created game <div> to the gamesList container in the DOM
            gamesList.appendChild(gameItem);
        });

        // Logs any errors occuring during the fetch and updates DOM with error message
    } catch (error) {
        console.error("Error loading games:", error);
        gamesList.innerHTML =
            "<p>Failed to load games. Please try again later.</p>";
    }
}

// Event listener for dropdown change
teamsList.addEventListener("change", () => {
    const selectedTeamId = teamsList.value || null;
    displayGames(selectedTeamId);
});

// Initialise
document.addEventListener("DOMContentLoaded", async () => {
    await populateTeams();
    // // Event listener for dropdown change
    const selectedTeamId = teamsList.value;

    if (selectedTeamId === "") {
        gamesList.innerHTML = "";
        return;
    }

    displayGames(selectedTeamId);
});}