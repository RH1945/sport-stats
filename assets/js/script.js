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
}

// Map

// ---------- Utilities & team mapping ----------
const TEAM_BG_BY_NAME = {
    "Atlanta Hawks":
        "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/atlanta-hawks-logo.png",
    "Boston Celtics":
        "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/boston-celtics-logo.png",
    "Brooklyn Nets":
        "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/brooklyn-nets-logo.png",
    "Charlotte Hornets":
        "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/charlotte-hornets-logo.png",
    "Chicago Bulls":
        "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/chicago-bulls-logo.png",
    "Cleveland Cavaliers":
        "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/cleveland-cavaliers-logo.png",
    "Dallas Mavericks":
        "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/dallas-mavericks-logo.png",
    "Denver Nuggets":
        "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/denver-nuggets-logo.png",
    "Detroit Pistons":
        "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/detroit-pistons-logo.png",
    "Golden State Warriors":
        "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/goldenstate-warriors-logo.png",
    "Houston Rockets":
        "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/houston-rockets-logo.png",
    "Indiana Pacers":
        "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/indiana-pacers-logo.png",
    "Los Angeles Clippers":
        "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/la-clippers-logo.png",
    "Los Angeles Lakers":
        "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/la-lakers-logo.png",
    "Memphis Grizzlies":
        "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/memphis-grizzlies-logo.png",
    "Miami Heat":
        "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/miami-heat-logo.png",
    "Milwaukee Bucks":
        "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/milwaukee-bucks-logo.png",
    "Minnesota Timberwolves":
        "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/minnesota-timberwolves-logo.png",
    "New Orleans Pelicans":
        "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/new-orleans-pelicans-logo.png",
    "New York Knicks":
        "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/ny-knicks-logo.png",
    "Oklahoma City Thunder":
        "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/oklahoma-city-thunder-logo.png",
    "Orlando Magic":
        "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/orlando-magic-logo.png",
    "Philadelphia 76ers":
        "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/philadelphia-76ers-logo.png",
    "Phoenix Suns":
        "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/phoenix-suns-logo.png",
    "Portland Trail Blazers":
        "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/portland-trailblaizers-logo.png",
    "Sacramento Kings":
        "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/sacramento-kings-logo.png",
    "San Antonio Spurs":
        "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/san-antonio-spurs-logo.png",
    "Toronto Raptors":
        "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/toronto-raptors-logo.png",
    "Utah Jazz":
        "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/utah-jazz-logo.png",
    "Washington Wizards":
        "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/washington-wizards-logo.png",
};

const TEAM_MAP = {
    0: { name: "Atlanta Hawks", bdlTeamId: 1 },
    1: { name: "Boston Celtics", bdlTeamId: 2 },
    2: { name: "Brooklyn Nets", bdlTeamId: 3 },
    3: { name: "Charlotte Hornets", bdlTeamId: 4 },
    4: { name: "Chicago Bulls", bdlTeamId: 6 },
    5: { name: "Cleveland Cavaliers", bdlTeamId: 7 },
    6: { name: "Dallas Mavericks", bdlTeamId: 8 },
    7: { name: "Denver Nuggets", bdlTeamId: 9 },
    8: { name: "Detroit Pistons", bdlTeamId: 10 },
    9: { name: "Golden State Warriors", bdlTeamId: 11 },
    10: { name: "Houston Rockets", bdlTeamId: 12 },
    11: { name: "Indiana Pacers", bdlTeamId: 13 },
    12: { name: "Los Angeles Clippers", bdlTeamId: 14 },
    13: { name: "Los Angeles Lakers", bdlTeamId: 15 },
    14: { name: "Memphis Grizzlies", bdlTeamId: 16 },
    15: { name: "Miami Heat", bdlTeamId: 17 },
    16: { name: "Milwaukee Bucks", bdlTeamId: 18 },
    17: { name: "Minnesota Timberwolves", bdlTeamId: 19 },
    18: { name: "New Orleans Pelicans", bdlTeamId: 20 },
    19: { name: "New York Knicks", bdlTeamId: 21 },
    20: { name: "Oklahoma City Thunder", bdlTeamId: 22 },
    21: { name: "Orlando Magic", bdlTeamId: 23 },
    22: { name: "Philadelphia 76ers", bdlTeamId: 24 },
    23: { name: "Phoenix Suns", bdlTeamId: 25 },
    24: { name: "Portland Trail Blazers", bdlTeamId: 26 },
    25: { name: "Sacramento Kings", bdlTeamId: 27 },
    26: { name: "San Antonio Spurs", bdlTeamId: 28 },
    27: { name: "Toronto Raptors", bdlTeamId: 29 },
    28: { name: "Utah Jazz", bdlTeamId: 30 },
    29: { name: "Washington Wizards", bdlTeamId: 31 },
};

const $ = (sel, root = document) => root.querySelector(sel);
const el = (tag, cls) =>
    Object.assign(document.createElement(tag), { className: cls || "" });

function ensureCardContainers() {
    const map = document.getElementById("map");
    if (!map) return;

    if (!$("#team-card")) {
        const aside = el("aside");
        aside.id = "team-card";
        map.parentElement.appendChild(aside);
    }
    // Mini info bar sits ABOVE the map (not overlaying it)
    if (!$("#team-mini")) {
        const mini = el("div");
        mini.id = "team-mini";
        map.parentElement.insertBefore(mini, map);
    }
}
ensureCardContainers();

// ---------- Data (balldontlie only) ----------
// Season detection + fallback (current → -1 → -2)
const CURRENT_SEASON =
    new Date().getMonth() >= 9
        ? new Date().getFullYear()
        : new Date().getFullYear() - 1;
const SEASON_CANDIDATES = [
    CURRENT_SEASON,
    CURRENT_SEASON - 1,
    CURRENT_SEASON - 2,
];

async function fetchJSON(url) {
    const r = await fetch(url, { mode: "cors" });
    if (!r.ok) throw new Error(`${r.status} ${r.statusText}`);
    return r.json();
}

async function fetchTeamInfo(teamId) {
    try {
        return await fetchJSON(
            `https://www.balldontlie.io/api/v1/teams/${teamId}`
        );
    } catch {
        return null;
    }
}

async function withSeasonFallback(fn) {
    for (const season of SEASON_CANDIDATES) {
        try {
            const out = await fn(season);
            if (out && out._nonempty === true)
                return { ...out, _season: season };
        } catch {
            /* try next season */
        }
    }
    return null;
}

async function fetchTeamWL(teamId) {
    const res = await withSeasonFallback(async (season) => {
        const { data } = await fetchJSON(
            `https://www.balldontlie.io/api/v1/games?seasons[]=${season}&team_ids[]=${teamId}&per_page=100`
        );
        if (!data || data.length === 0) return { _nonempty: false };
        let wins = 0,
            losses = 0;
        for (const g of data) {
            const home = g.home_team.id === teamId;
            const my = home ? g.home_team_score : g.visitor_team_score;
            const opp = home ? g.visitor_team_score : g.home_team_score;
            if (my > opp) wins++;
            else if (my < opp) losses++;
        }
        return { wins, losses, games: data.length, _nonempty: true };
    });
    return res || { wins: 0, losses: 0, games: 0 };
}

async function fetchRosterCount(teamId) {
    try {
        const j = await fetchJSON(
            `https://www.balldontlie.io/api/v1/players?per_page=100&team_ids[]=${teamId}`
        );
        return j?.data?.length ?? 0;
    } catch {
        return 0;
    }
}

async function fetchTeamTopScorer(teamId) {
    const res = await withSeasonFallback(async (season) => {
        const playersData = await fetchJSON(
            `https://www.balldontlie.io/api/v1/players?per_page=100&team_ids[]=${teamId}`
        );
        const ids = (playersData?.data || []).map((p) => p.id);
        if (ids.length === 0) return { _nonempty: false };
        const params = ids.map((id) => `player_ids[]=${id}`).join("&");
        const saData = await fetchJSON(
            `https://www.balldontlie.io/api/v1/season_averages?season=${season}&${params}`
        );
        const byId = new Map((playersData?.data || []).map((p) => [p.id, p]));
        let top = null;
        for (const row of saData?.data || []) {
            if (row.pts == null) continue;
            if (!top || row.pts > top.pts) {
                const pl = byId.get(row.player_id);
                top = {
                    name: pl
                        ? `${pl.first_name} ${pl.last_name}`
                        : `#${row.player_id}`,
                    pts: row.pts,
                };
            }
        }
        if (!top) return { _nonempty: false };
        return { ...top, _nonempty: true };
    });
    return res || null;
}

// ---------- UI ----------
function renderMiniCard(idx) {
    const info = TEAM_MAP[idx];
    if (!info) return;
    const mini = $("#team-mini");
    mini.textContent = info.name;
    mini.style.display = "block";
}
function hideMiniCard() {
    const mini = $("#team-mini");
    if (mini) mini.style.display = "none";
}
function winPct(w, l) {
    if (w == null || l == null) return null;
    const g = w + l;
    return g ? (w / g) * 100 : null;
}

function installCloseHandler() {
    const btn = $("#team-card-close");
    if (btn)
        btn.onclick = () => {
            const c = $("#team-card");
            if (c) {
                c.classList.remove("open");
                c.innerHTML = "";
            }
        };
}

function loadingCard(name, logoUrl) {
    const card = $("#team-card");
    card.classList.add("open");
    card.innerHTML = `
    <div class="team-card__bg" style="background-image:url('${
        logoUrl || ""
    }')"></div>
    <div class="team-card__vignette"></div>
    <div class="team-card__content">
      <div class="team-card__header">
        <h3 class="team-card__title">${name}</h3>
        <button id="team-card-close" class="team-card__close" aria-label="Close">✕</button>
      </div>
      <div class="team-card__chips"><span class="chip">Loading…</span></div>
      <div class="team-card__meta"><div class="team-card__pill">Fetching latest stats</div></div>
      <div class="team-card__stats">
        <div class="stat"><div class="label">Wins</div><div class="value">—</div></div>
        <div class="stat"><div class="label">Losses</div><div class="value">—</div></div>
        <div class="stat"><div class="label">Win %</div><div class="value">—</div></div>
      </div>
      <p class="team-card__desc">Loading team info…</p>
    </div>`;
    installCloseHandler();
}

function fillCard({
    name,
    city,
    logoUrl,
    rosterCount,
    wins,
    losses,
    games,
    topScorer,
    info,
    wlSeason,
}) {
    const pct = winPct(wins, losses);
    const chipsHtml = [
        info?.conference && info?.division
            ? `<span class="chip">${info.conference} · ${info.division}</span>`
            : "",
        info?.abbreviation
            ? `<span class="chip">${info.abbreviation}</span>`
            : "",
        wlSeason
            ? `<span class="chip">Season ${wlSeason}-${String(
                  wlSeason + 1
              ).slice(-2)}</span>`
            : "",
    ].join("");

    const metaHtml = [
        city && `<div class="team-card__pill">City: ${city}</div>`,
        Number.isFinite(games) &&
            `<div class="team-card__pill">Games: ${games}</div>`,
        Number.isFinite(rosterCount) &&
            `<div class="team-card__pill">Roster: ${rosterCount} players</div>`,
        topScorer &&
            `<div class="team-card__pill">Top Scorer ${
                wlSeason || CURRENT_SEASON
            }-${String((wlSeason || CURRENT_SEASON) + 1).slice(-2)}: <strong>${
                topScorer.name
            }</strong> (${topScorer.pts.toFixed(1)} PPG)</div>`,
    ]
        .filter(Boolean)
        .join("");

    const desc = info
        ? `${info.full_name} play in the ${info.conference}ern Conference (${info.division} Division) and are based in ${info.city}.`
        : "No team information available.";

    const statsHtml = `
    <div class="stat"><div class="label">Wins</div><div class="value">${
        wins ?? "—"
    }</div></div>
    <div class="stat"><div class="label">Losses</div><div class="value">${
        losses ?? "—"
    }</div></div>
    <div class="stat"><div class="label">Win %</div><div class="value">${
        pct != null ? pct.toFixed(1) : "—"
    }</div></div>
  `;

    const card = $("#team-card");
    card.classList.add("open");
    card.innerHTML = `
    <div class="team-card__bg" style="background-image:url('${
        logoUrl || ""
    }')"></div>
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
    if (window.matchMedia("(max-width: 991.98px)").matches)
        card.scrollIntoView({ behavior: "smooth", block: "start" });
    installCloseHandler();
}

// ---------- Simplemaps hooks ----------
(function attachMapHooks() {
    if (!window.simplemaps_usmap || !simplemaps_usmap.hooks) {
        document.addEventListener("DOMContentLoaded", attachMapHooks, {
            once: true,
        });
        return;
    }

    simplemaps_usmap.hooks.over_location = function (id) {
        renderMiniCard(id);
    };
    simplemaps_usmap.hooks.out_location = function () {
        hideMiniCard();
    };

    simplemaps_usmap.hooks.click_location = async function (id) {
        hideMiniCard();

        const loc = (window.simplemaps_usmap_mapdata || {}).locations?.[
            String(id)
        ];
        const bgFromMap = loc?.image_url || "";
        const bgFromList =
            TEAM_BG_BY_NAME[loc?.description] || TEAM_BG_BY_NAME[loc?.name];
        const logoUrl = bgFromList || bgFromMap || "";

        const teamMeta = TEAM_MAP[id] || {};
        const teamId = teamMeta.bdlTeamId;
        const teamName =
            teamMeta.name || loc?.description || loc?.name || "Team";

        loadingCard(teamName, logoUrl);

        const [info, wl, roster, topScorer] = await Promise.all([
            fetchTeamInfo(teamId),
            fetchTeamWL(teamId),
            fetchRosterCount(teamId),
            fetchTeamTopScorer(teamId),
        ]);

        fillCard({
            name: teamName,
            city: info?.city || loc?.name || "",
            logoUrl,
            rosterCount: roster,
            wins: wl.wins,
            losses: wl.losses,
            games: wl.games,
            topScorer,
            info,
            wlSeason: wl._season || null,
        });
    };
})();

// Games calender
const apiKey = "7d6eef70-2823-4b93-b2c0-7de715a5ffc4";
const urlAdd = "https://api.balldontlie.io/v1";

// Function added to get Teams stats
async function getTeams() {
    const res = await fetch(`${urlAdd}/teams`, {
        headers: { Authorization: `Bearer ${apiKey}` },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
}

async function getGames({ start_date, end_date, teamId = null }) {
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
        headers: { Authorization: `Bearer ${apiKey}` },
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
    // Set selectedTeamId to the dropdown’s current value or undefined if value is empty
    const selectedTeamId = teamsList.value || null;
    displayGames(selectedTeamId);
});

// Initialise
document.addEventListener("DOMContentLoaded", async () => {
    await populateTeams();
    // // Event listener for dropdown change
    const selectedTeamId = teamsList.value;

    // This checks if "no team selected" is the selected option, if so it clears the text otherwise shows the games
    if (selectedTeamId === "") {
        gamesList.innerHTML = "";
        return;
    }

    displayGames(selectedTeamId);
});

// local JSON file fetch
async function loadTeams() {
    try {
        const response = await fetch(
            "assets/sports-data/tableConvert.com_0iyg4w.json"
        );
        console.log("its working");

        if (!response.ok) throw new Error(`HTTP error ${response.status}`);

        // Put JSON data into an array
        const teamData = await response.json();

        const container = document.querySelector(".value");

        container.innerHTML = "";

        teamData.forEach((team, index) => {
            const teamDiv = document.createElement("div");
            // teamDiv.classList.add("team-card");

            teamDiv.innerHTML = `
        
          <p><strong>Team ${index + 1}</strong></p>
          <p>Offense Four Factors: ${team["Offense Four Factors"]}</p>
          <p>Defense Four Factors: ${team["Defense Four Factors"]}</p>
        
            `;
            container.appendChild(teamDiv);
        });
    } catch (error) {
        // Error handling
        console.error("error loading JSON", error);
    }
}

// Runs when the page loads
document.addEventListener("DOMContentLoaded", loadTeams);
