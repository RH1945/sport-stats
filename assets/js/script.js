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

//Map
var simplemaps_usmap_mapdata = {
    main_settings: {
        //General settings
        width: "responsive", //'700' or 'responsive'
        background_color: "#FFFFFF",
        background_transparent: "yes",
        border_color: "#ffffff",
        popups: "detect",

        //State defaults
        state_description: "State Description",
        state_color: "#88A4BC",
        state_hover_color: "#3B729F",
        state_url: "",
        border_size: 1.5,
        all_states_inactive: "no",
        all_states_zoomable: "yes",

        //Location defaults
        location_description:
            "Add location markers using latitude and longitude!",
        location_color: "#2041D4",
        location_opacity: 0.8,
        location_hover_opacity: 1,
        location_url: "",
        location_size: 25,
        location_type: "square",
        location_image_source: "frog.png",
        location_border_color: "#FFFFFF",
        location_border: 2,
        location_hover_border: 2.5,
        all_locations_inactive: "no",
        all_locations_hidden: "no",

        //Label defaults
        label_color: "#d5ddec",
        label_hover_color: "#d5ddec",
        label_size: 22,
        label_font: "Arial",
        hide_labels: "no",
        hide_eastern_labels: "no",
        manual_zoom: "no",
        back_image: "no",
        initial_back: "no",
        initial_zoom: -1,
        initial_zoom_solo: "no",
        region_opacity: 1,
        region_hover_opacity: 0.6,
        zoom_out_incrementally: "yes",
        zoom_percentage: 0.99,
        zoom_time: 0.5,

        //Popup settings
        popup_color: "white",
        popup_opacity: 0.9,
        popup_shadow: 1,
        popup_corners: 5,
        popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
        popup_nocss: "no",

        //Advanced settings
        div: "map",
        auto_load: "yes",
        url_new_tab: "yes",
        images_directory: "/static/lib/simplemaps/map_images/",
        fade_time: 0.1,
        import_labels: "no",
        link_text: "View Website",
        state_image_url: "",
        state_image_position: "",
        location_image_url: "",
    },
    state_specific: {
        HI: {
            name: "Hawaii",
        },
        AK: {
            name: "Alaska",
        },
        FL: {
            name: "Florida",
        },
        NH: {
            name: "New Hampshire",
        },
        VT: {
            name: "Vermont",
        },
        ME: {
            name: "Maine",
        },
        RI: {
            name: "Rhode Island",
        },
        NY: {
            name: "New York",
        },
        PA: {
            name: "Pennsylvania",
        },
        NJ: {
            name: "New Jersey",
        },
        DE: {
            name: "Delaware",
        },
        MD: {
            name: "Maryland",
        },
        VA: {
            name: "Virginia",
        },
        WV: {
            name: "West Virginia",
        },
        OH: {
            name: "Ohio",
        },
        IN: {
            name: "Indiana",
        },
        IL: {
            name: "Illinois",
        },
        CT: {
            name: "Connecticut",
        },
        WI: {
            name: "Wisconsin",
        },
        NC: {
            name: "North Carolina",
        },
        DC: {
            name: "District of Columbia",
        },
        MA: {
            name: "Massachusetts",
        },
        TN: {
            name: "Tennessee",
        },
        AR: {
            name: "Arkansas",
        },
        MO: {
            name: "Missouri",
        },
        GA: {
            name: "Georgia",
        },
        SC: {
            name: "South Carolina",
        },
        KY: {
            name: "Kentucky",
        },
        AL: {
            name: "Alabama",
        },
        LA: {
            name: "Louisiana",
        },
        MS: {
            name: "Mississippi",
        },
        IA: {
            name: "Iowa",
        },
        MN: {
            name: "Minnesota",
        },
        OK: {
            name: "Oklahoma",
        },
        TX: {
            name: "Texas",
        },
        NM: {
            name: "New Mexico",
        },
        KS: {
            name: "Kansas",
        },
        NE: {
            name: "Nebraska",
        },
        SD: {
            name: "South Dakota",
        },
        ND: {
            name: "North Dakota",
        },
        WY: {
            name: "Wyoming",
        },
        MT: {
            name: "Montana",
        },
        CO: {
            name: "Colorado",
        },
        UT: {
            name: "Utah",
        },
        AZ: {
            name: "Arizona",
        },
        NV: {
            name: "Nevada",
        },
        OR: {
            name: "Oregon",
        },
        WA: {
            name: "Washington",
        },
        CA: {
            name: "California",
        },
        MI: {
            name: "Michigan",
        },
        ID: {
            name: "Idaho",
        },
        GU: {
            name: "Guam",
            hide: "yes",
        },
        VI: {
            name: "Virgin Islands",
            hide: "yes",
        },
        PR: {
            name: "Puerto Rico",
            hide: "yes",
        },
        MP: {
            name: "Northern Mariana Islands",
            hide: "yes",
        },
        AS: {
            name: "American Samoa",
            hide: "yes",
        },
    },
    locations: {
        0: {
            name: "New York City",
            lat: 40.7143528,
            lng: -74.0059731,
        },
        1: {
            name: "Anchorage",
            lat: 61.2180556,
            lng: -149.9002778,
        },
    },
    labels: {
        NH: {
            parent_id: "NH",
            x: "932",
            y: "183",
            pill: "yes",
            width: 45,
            display: "all",
        },
        VT: {
            parent_id: "VT",
            x: "883",
            y: "243",
            pill: "yes",
            width: 45,
            display: "all",
        },
        RI: {
            parent_id: "RI",
            x: "932",
            y: "273",
            pill: "yes",
            width: 45,
            display: "all",
        },
        NJ: {
            parent_id: "NJ",
            x: "883",
            y: "273",
            pill: "yes",
            width: 45,
            display: "all",
        },
        DE: {
            parent_id: "DE",
            x: "883",
            y: "303",
            pill: "yes",
            width: 45,
            display: "all",
        },
        MD: {
            parent_id: "MD",
            x: "932",
            y: "303",
            pill: "yes",
            width: 45,
            display: "all",
        },
        DC: {
            parent_id: "DC",
            x: "884",
            y: "332",
            pill: "yes",
            width: 45,
            display: "all",
        },
        MA: {
            parent_id: "MA",
            x: "932",
            y: "213",
            pill: "yes",
            width: 45,
            display: "all",
        },
        CT: {
            parent_id: "CT",
            x: "932",
            y: "243",
            pill: "yes",
            width: 45,
            display: "all",
        },
        HI: {
            parent_id: "HI",
            x: 305,
            y: 565,
            pill: "yes",
        },
        AK: {
            parent_id: "AK",
            x: "113",
            y: "495",
        },
        FL: {
            parent_id: "FL",
            x: "773",
            y: "510",
        },
        ME: {
            parent_id: "ME",
            x: "893",
            y: "85",
        },
        NY: {
            parent_id: "NY",
            x: "815",
            y: "158",
        },
        PA: {
            parent_id: "PA",
            x: "786",
            y: "210",
        },
        VA: {
            parent_id: "VA",
            x: "790",
            y: "282",
        },
        WV: {
            parent_id: "WV",
            x: "744",
            y: "270",
        },
        OH: {
            parent_id: "OH",
            x: "700",
            y: "240",
        },
        IN: {
            parent_id: "IN",
            x: "650",
            y: "250",
        },
        IL: {
            parent_id: "IL",
            x: "600",
            y: "250",
        },
        WI: {
            parent_id: "WI",
            x: "575",
            y: "155",
        },
        NC: {
            parent_id: "NC",
            x: "784",
            y: "326",
        },
        TN: {
            parent_id: "TN",
            x: "655",
            y: "340",
        },
        AR: {
            parent_id: "AR",
            x: "548",
            y: "368",
        },
        MO: {
            parent_id: "MO",
            x: "548",
            y: "293",
        },
        GA: {
            parent_id: "GA",
            x: "718",
            y: "405",
        },
        SC: {
            parent_id: "SC",
            x: "760",
            y: "371",
        },
        KY: {
            parent_id: "KY",
            x: "680",
            y: "300",
        },
        AL: {
            parent_id: "AL",
            x: "655",
            y: "405",
        },
        LA: {
            parent_id: "LA",
            x: "550",
            y: "435",
        },
        MS: {
            parent_id: "MS",
            x: "600",
            y: "405",
        },
        IA: {
            parent_id: "IA",
            x: "525",
            y: "210",
        },
        MN: {
            parent_id: "MN",
            x: "506",
            y: "124",
        },
        OK: {
            parent_id: "OK",
            x: "460",
            y: "360",
        },
        TX: {
            parent_id: "TX",
            x: "425",
            y: "435",
        },
        NM: {
            parent_id: "NM",
            x: "305",
            y: "365",
        },
        KS: {
            parent_id: "KS",
            x: "445",
            y: "290",
        },
        NE: {
            parent_id: "NE",
            x: "420",
            y: "225",
        },
        SD: {
            parent_id: "SD",
            x: "413",
            y: "160",
        },
        ND: {
            parent_id: "ND",
            x: "416",
            y: "96",
        },
        WY: {
            parent_id: "WY",
            x: "300",
            y: "180",
        },
        MT: {
            parent_id: "MT",
            x: "280",
            y: "95",
        },
        CO: {
            parent_id: "CO",
            x: "320",
            y: "275",
        },
        UT: {
            parent_id: "UT",
            x: "223",
            y: "260",
        },
        AZ: {
            parent_id: "AZ",
            x: "205",
            y: "360",
        },
        NV: {
            parent_id: "NV",
            x: "140",
            y: "235",
        },
        OR: {
            parent_id: "OR",
            x: "100",
            y: "120",
        },
        WA: {
            parent_id: "WA",
            x: "130",
            y: "55",
        },
        ID: {
            parent_id: "ID",
            x: "200",
            y: "150",
        },
        CA: {
            parent_id: "CA",
            x: "79",
            y: "285",
        },
        MI: {
            parent_id: "MI",
            x: "663",
            y: "185",
        },
        PR: {
            parent_id: "PR",
            x: "620",
            y: "545",
        },
        GU: {
            parent_id: "GU",
            x: "550",
            y: "540",
        },
        VI: {
            parent_id: "VI",
            x: "680",
            y: "519",
        },
        MP: {
            parent_id: "MP",
            x: "570",
            y: "575",
        },
        AS: {
            parent_id: "AS",
            x: "665",
            y: "580",
        },
    },
    legend: {
        entries: [],
    },
    regions: {
        0: {
            states: ["washington", "oregon"],
            name: "pacific north west",
            hover_color: "green",
            description: "democratic cool artsy people",
            zoomable: "yes",
        },
    },
};

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

const gamesList = document.getElementById("games-list");
const teamsList = document.getElementById("team-select");

// Asynchronous function to handle displaying Teams in the DOM
async function populateTeams() {
    try {
        const data = await getTeams();

        // Default option
        const allOption = document.createElement("option");
        allOption.value = "";
        allOption.textContent = "All Teams";
        teamsList.appendChild(allOption);

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
                Status: ${game.status}
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
    displayGames(); // show all games by default
});
