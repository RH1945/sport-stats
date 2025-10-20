var simplemaps_usmap_mapdata={
    main_settings: {
        //General settings
        width: "responsive", //'700' or 'responsive'
        background_color: "#FFFFFF",
        background_transparent: "yes",
        border_color: "#453535",
        popups: "detect",

        //State defaults
        state_description: "State Description",
        state_color: "#88A4BC",
        state_hover_color: "#3B729F",
        state_url: "",
        border_size: "3",
        all_states_inactive: "no",
        all_states_zoomable: "yes",

        //Location defaults
        location_description: "Add location markers using latitude and longitude!",
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
        initial_zoom_solo: "yes",
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
        images_directory: "assets/images/hackathon-basketball",
        fade_time: 0.1,
        import_labels: "no",
        link_text: "View Website",
        state_image_url: "",
        state_image_position: "",
        location_image_url: ""
    },
    state_specific: {
        HI: {
            hide: "yes",
            inactive: "yes"
        },
        AK: {
            hide: "yes"
        },
        FL: {
            name: "Florida"
        },
        NH: {
            name: "New Hampshire"
        },
        VT: {
            name: "Vermont"
        },
        ME: {
            name: "Maine"
        },
        RI: {
            name: "Rhode Island"
        },
        NY: {
            name: "New York"
        },
        PA: {
            name: "Pennsylvania"
        },
        NJ: {
            name: "New Jersey"
        },
        DE: {
            name: "Delaware"
        },
        MD: {
            name: "Maryland"
        },
        VA: {
            name: "Virginia"
        },
        WV: {
            name: "West Virginia"
        },
        OH: {
            name: "Ohio"
        },
        IN: {
            name: "Indiana"
        },
        IL: {
            name: "Illinois"
        },
        CT: {
            name: "Connecticut"
        },
        WI: {
            name: "Wisconsin"
        },
        NC: {
            name: "North Carolina"
        },
        DC: {
            name: "District of Columbia"
        },
        MA: {
            name: "Massachusetts"
        },
        TN: {
            name: "Tennessee"
        },
        AR: {
            name: "Arkansas"
        },
        MO: {
            name: "Missouri"
        },
        GA: {
            name: "Georgia"
        },
        SC: {
            name: "South Carolina"
        },
        KY: {
            name: "Kentucky"
        },
        AL: {
            name: "Alabama"
        },
        LA: {
            name: "Louisiana"
        },
        MS: {
            name: "Mississippi"
        },
        IA: {
            name: "Iowa"
        },
        MN: {
            name: "Minnesota"
        },
        OK: {
            name: "Oklahoma"
        },
        TX: {
            name: "Texas"
        },
        NM: {
            name: "New Mexico"
        },
        KS: {
            name: "Kansas"
        },
        NE: {
            name: "Nebraska"
        },
        SD: {
            name: "South Dakota"
        },
        ND: {
            name: "North Dakota"
        },
        WY: {
            name: "Wyoming"
        },
        MT: {
            name: "Montana"
        },
        CO: {
            name: "Colorado"
        },
        UT: {
            name: "Utah"
        },
        AZ: {
            name: "Arizona"
        },
        NV: {
            name: "Nevada"
        },
        OR: {
            name: "Oregon"
        },
        WA: {
            name: "Washington"
        },
        CA: {
            name: "California"
        },
        MI: {
            name: "Michigan"
        },
        ID: {
            name: "Idaho"
        },
        GU: {
            name: "Guam",
            hide: "yes"
        },
        VI: {
            name: "Virgin Islands",
            hide: "yes"
        },
        PR: {
            name: "Puerto Rico",
            hide: "yes"
        },
        MP: {
            name: "Northern Mariana Islands",
            hide: "yes"
        },
        AS: {
            name: "American Samoa",
            hide: "yes"
        }
    },
    locations: {
        "0": {
            image_url: "atlanta-hawks-logo.png",
            lat: 33.748,
            lng: -84.391,
            name: "Atlanta",
            color: "#C8102E",
            description: "Atlanta Hawks <img alt=hawkslogo src=assets/images/hackathon-basketball/atlanta-hawks-logo.png style='width: 65px;' / >"
        },
        "1": {
            image_url: "assets/images/hackathon-basketball",
            lat: 42.359,
            lng: -71.057,
            name: "Boston",
            color: "#007A33",
            description: "Boston Celtics"
        },
        "2": {
            image_url: "assets/images/hackathon-basketball",
            lat: 40.692,
            lng: -73.99,
            name: "Brooklyn",
            description: "Brooklyn Nets",
            color: "#000000"
        },
        "3": {
            image_url: "assets/images/hackathon-basketball",
            lat: 35.223,
            lng: -80.838,
            name: "Charlotte",
            description: "Charlotte Hornets",
            color: "#1d1160"
        },
        "4": {
            image_url: "assets/images/hackathon-basketball",
            lat: 41.884,
            lng: -87.632,
            name: "Chicago",
            description: "Chicago Bulls",
            color: "#CE1141"
        },
        "5": {
            image_src: "assets/images/hackathon-basketball/atlanta-hawks-logo.png",
            lat: 41.505,
            lng: -81.691,
            name: "Cleveland",
            description: "Cleveland Cavaliers",
            color: "#041E42"
        },
        "6": {
            image_url: "assets/images/hackathon-basketball",
            lat: 32.778,
            lng: -96.795,
            name: "Dallas",
            description: "Dallas Mavericks",
            color: "#00538C"
        },
        "7": {
            image_url: "assets/images/hackathon-basketball",
            lat: 39.74,
            lng: -104.992,
            name: "Denver",
            description: "Denver Nuggets",
            color: "#FEC524"
        },
        "8": {
            image_url: "assets/images/hackathon-basketball",
            lat: 42.332,
            lng: -83.048,
            name: "Detroit",
            description: "Detroit Pistons",
            color: "#C8102E"
        },
        "9": {
            image_url: "assets/images/hackathon-basketball",
            lat: 37.777,
            lng: -122.42,
            name: "San Francisco",
            description: "Golden State Warriors",
            color: "#1D428A"
        },
        "10": {
            image_url: "assets/images/hackathon-basketball",
            lat: 29.761,
            lng: -95.37,
            name: "Houston",
            description: "Houston Rockets",
            color: "#CE1141"
        },
        "11": {
            image_url: "assets/images/hackathon-basketball",
            lat: 39.767,
            lng: -86.15,
            name: "Indianapolis",
            description: "Indiana Pacers",
            color: "#002D62"
        },
        "12": {
            image_url: "assets/images/hackathon-basketball",
            lat: 33.962,
            lng: -118.357,
            name: "Inglewood",
            description: "Los Angeles Clippers",
            color: "#c8102E"
        },
        "13": {
            image_url: "assets/images/hackathon-basketball",
            lat: 34.054,
            lng: -118.245,
            name: "Los Angeles",
            description: "Los Angeles Lakers",
            color: "#552583"
        },
        "14": {
            image_url: "assets/images/hackathon-basketball",
            lat: 35.15,
            lng: -90.049,
            name: "Memphis",
            description: "Memphis Grizzlies",
            color: "#5D76A9"
        },
        "15": {
            image_url: "assets/images/hackathon-basketball",
            lat: 25.775,
            lng: -80.198,
            name: "Miami",
            description: "Miami Heat",
            color: "#98002E"
        },
        "16": {
            image_url: "assets/images/hackathon-basketball",
            lat: 43.042,
            lng: -87.907,
            name: "Milwaukee",
            description: "Milwaukee Bucks",
            color: "#00471B"
        },
        "17": {
            image_url: "assets/images/hackathon-basketball",
            lat: 44.979,
            lng: -93.265,
            name: "Minneapolis",
            description: "Minnesota Timberwolves",
            color: "#0C2340"
        },
        "18": {
            image_url: "assets/images/hackathon-basketball",
            lat: 29.954,
            lng: -90.078,
            name: "New Orleans",
            description: "New Orleans Pelicans",
            color: "#0C2340"
        },
        "19": {
            image_url: "assets/images/hackathon-basketball",
            lat: 40.715,
            lng: -74.007,
            name: "New York",
            description: "New York Knicks",
            color: "#006BB6"
        },
        "20": {
            image_url: "assets/images/hackathon-basketball",
            lat: 35.472,
            lng: -97.521,
            name: "Oklahoma City",
            description: "Oklahoma City Thunder",
            color: "#007ac1"
        },
        "21": {
            image_url: "assets/images/hackathon-basketball",
            lat: 28.538,
            lng: -81.377,
            name: "Orlando",
            description: "Orlando Magic",
            color: "#0077c0"
        },
        "22": {
            image_url: "assets/images/hackathon-basketball",
            lat: 39.952,
            lng: -75.162,
            name: "Philadelphia",
            description: "Philadelphia 76ers",
            color: "#006bb6"
        },
        "23": {
            image_url: "assets/images/hackathon-basketball",
            lat: 33.448,
            lng: -112.076,
            name: "Phoenix",
            description: "Phoenix Suns",
            color: "#1d1160"
        },
        "24": {
            image_url: "assets/images/hackathon-basketball",
            lat: 45.512,
            lng: -122.676,
            name: "Portland",
            description: "Portland Trail Blazers",
            color: "#E03A3E"
        },
        "25": {
            image_url: "assets/images/hackathon-basketball",
            lat: 38.579,
            lng: -121.491,
            name: "Sacramento",
            description: "Sacramento Kings",
            color: "#5a2d81"
        },
        "26": {
            image_url: "assets/images/hackathon-basketball",
            lat: 29.425,
            lng: -98.495,
            name: "San Antonio",
            description: "San Antonio Spurs",
            color: "#c4ced4"
        },
        "27": {
            image_url: "assets/images/hackathon-basketball",
            lat: 40.461,
            lng: -80.606,
            name: "Toronto",
            description: "Toronto Raptors",
            color: "#ce1141"
        },
        "28": {
            image_url: "assets/images/hackathon-basketball",
            lat: 40.76,
            lng: -111.888,
            name: "Salt Lake City",
            description: "Utah Jazz",
            color: "#002B5C"
        },
        "29": {
            image_url: "assets/images/hackathon-basketball",
            lat: 38.89,
            lng: -77.032,
            name: "Washington",
            description: "Washington Wizards",
            color: "#002B5C"
        }
    },
    labels: {
        NH: {
            parent_id: "NH",
            x: "932",
            y: "183",
            pill: "yes",
            width: 45,
            display: "all"
        },
        VT: {
            parent_id: "VT",
            x: "883",
            y: "243",
            pill: "yes",
            width: 45,
            display: "all"
        },
        RI: {
            parent_id: "RI",
            x: "932",
            y: "273",
            pill: "yes",
            width: 45,
            display: "all"
        },
        NJ: {
            parent_id: "NJ",
            x: "883",
            y: "273",
            pill: "yes",
            width: 45,
            display: "all"
        },
        DE: {
            parent_id: "DE",
            x: "883",
            y: "303",
            pill: "yes",
            width: 45,
            display: "all"
        },
        MD: {
            parent_id: "MD",
            x: "932",
            y: "303",
            pill: "yes",
            width: 45,
            display: "all"
        },
        DC: {
            parent_id: "DC",
            x: "884",
            y: "332",
            pill: "yes",
            width: 45,
            display: "all"
        },
        MA: {
            parent_id: "MA",
            x: "932",
            y: "213",
            pill: "yes",
            width: 45,
            display: "all"
        },
        CT: {
            parent_id: "CT",
            x: "932",
            y: "243",
            pill: "yes",
            width: 45,
            display: "all"
        },
        HI: {
            parent_id: "HI",
            x: 305,
            y: 565,
            pill: "yes"
        },
        AK: {
            parent_id: "AK",
            x: "113",
            y: "495"
        },
        FL: {
            parent_id: "FL",
            x: "773",
            y: "510"
        },
        ME: {
            parent_id: "ME",
            x: "893",
            y: "85"
        },
        NY: {
            parent_id: "NY",
            x: "815",
            y: "158"
        },
        PA: {
            parent_id: "PA",
            x: "786",
            y: "210"
        },
        VA: {
            parent_id: "VA",
            x: "790",
            y: "282"
        },
        WV: {
            parent_id: "WV",
            x: "744",
            y: "270"
        },
        OH: {
            parent_id: "OH",
            x: "700",
            y: "240"
        },
        IN: {
            parent_id: "IN",
            x: "650",
            y: "250"
        },
        IL: {
            parent_id: "IL",
            x: "600",
            y: "250"
        },
        WI: {
            parent_id: "WI",
            x: "575",
            y: "155"
        },
        NC: {
            parent_id: "NC",
            x: "784",
            y: "326"
        },
        TN: {
            parent_id: "TN",
            x: "655",
            y: "340"
        },
        AR: {
            parent_id: "AR",
            x: "548",
            y: "368"
        },
        MO: {
            parent_id: "MO",
            x: "548",
            y: "293"
        },
        GA: {
            parent_id: "GA",
            x: "718",
            y: "405"
        },
        SC: {
            parent_id: "SC",
            x: "760",
            y: "371"
        },
        KY: {
            parent_id: "KY",
            x: "680",
            y: "300"
        },
        AL: {
            parent_id: "AL",
            x: "655",
            y: "405"
        },
        LA: {
            parent_id: "LA",
            x: "550",
            y: "435"
        },
        MS: {
            parent_id: "MS",
            x: "600",
            y: "405"
        },
        IA: {
            parent_id: "IA",
            x: "525",
            y: "210"
        },
        MN: {
            parent_id: "MN",
            x: "506",
            y: "124"
        },
        OK: {
            parent_id: "OK",
            x: "460",
            y: "360"
        },
        TX: {
            parent_id: "TX",
            x: "425",
            y: "435"
        },
        NM: {
            parent_id: "NM",
            x: "305",
            y: "365"
        },
        KS: {
            parent_id: "KS",
            x: "445",
            y: "290"
        },
        NE: {
            parent_id: "NE",
            x: "420",
            y: "225"
        },
        SD: {
            parent_id: "SD",
            x: "413",
            y: "160"
        },
        ND: {
            parent_id: "ND",
            x: "416",
            y: "96"
        },
        WY: {
            parent_id: "WY",
            x: "300",
            y: "180"
        },
        MT: {
            parent_id: "MT",
            x: "280",
            y: "95"
        },
        CO: {
            parent_id: "CO",
            x: "320",
            y: "275"
        },
        UT: {
            parent_id: "UT",
            x: "223",
            y: "260"
        },
        AZ: {
            parent_id: "AZ",
            x: "205",
            y: "360"
        },
        NV: {
            parent_id: "NV",
            x: "140",
            y: "235"
        },
        OR: {
            parent_id: "OR",
            x: "100",
            y: "120"
        },
        WA: {
            parent_id: "WA",
            x: "130",
            y: "55"
        },
        ID: {
            parent_id: "ID",
            x: "200",
            y: "150"
        },
        CA: {
            parent_id: "CA",
            x: "79",
            y: "285"
        },
        MI: {
            parent_id: "MI",
            x: "663",
            y: "185"
        },
        PR: {
            parent_id: "PR",
            x: "620",
            y: "545"
        },
        GU: {
            parent_id: "GU",
            x: "550",
            y: "540"
        },
        VI: {
            parent_id: "VI",
            x: "680",
            y: "519"
        },
        MP: {
            parent_id: "MP",
            x: "570",
            y: "575"
        },
        AS: {
            parent_id: "AS",
            x: "665",
            y: "580"
        }
    },
    legend: {
        entries: []
    },
    regions: {}
};