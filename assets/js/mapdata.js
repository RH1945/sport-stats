var simplemaps_usmap_mapdata={
    main_settings: {
        //General settings
        width: "700", //'700' or 'responsive'
        background_color: "#FFFFFF",
        background_transparent: "yes",
        border_color: "#453535",
        popups: "detect",

        //State defaults
        state_description: "State Description",
        state_color: "rgba(112,133,23,0.63)",
        state_hover_color: "rgba(94,136,98,0.63)",
        state_url: "",
        border_size: "3",
        all_states_inactive: "yes",
        all_states_zoomable: "no",

        //Location defaults
        location_description: "",
        location_color: "rgb(19,42,133)",
        location_opacity: 0.8,
        location_hover_opacity: 1,
        location_url: "",
        location_size: "36",
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
        images_directory: "/static/lib/simplemaps/map_images/",
        fade_time: 0.1,
        import_labels: "no",
        link_text: "View Website",
        state_image_url: "",
        state_image_position: "",
        location_type: "",
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
            lat: 33.748,
            lng: -84.391,
            name: "Atlanta",
            type: "image",
            image_url: "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/atlanta-hawks-logo.png",
            description: "Atlanta Hawks"
        },
        "1": {
            lat: 42.359,
            lng: -71.057,
            name: "Boston",
            type: "image",
            description: "Boston Celtics",
            image_url: "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/boston-celtics-logo.png"
        },
        "2": {
            lat: 40.692,
            lng: -73.99,
            name: "Brooklyn",
            description: "Brooklyn Nets",
            type: "image",
            image_url: "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/brooklyn-nets-logo.png"
        },
        "3": {
            lat: 35.223,
            lng: -80.838,
            name: "Charlotte",
            description: "Charlotte Hornets",
            type: "image",
            image_url: "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/charlotte-hornets-logo.png"
        },
        "4": {
            lat: 41.884,
            lng: -87.632,
            name: "Chicago",
            description: "Chicago Bulls",
            type: "image",
            image_url: "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/chicago-bulls-logo.png"
        },
        "5": {
            lat: 41.505,
            lng: -81.691,
            name: "Cleveland",
            description: "Cleveland Cavaliers",
            type: "image",
            image_url: "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/cleveland-cavaliers-logo.png"
        },
        "6": {
            lat: 32.778,
            lng: -96.795,
            name: "Dallas",
            description: "Dallas Mavericks",
            type: "image",
            image_url: "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/dallas-mavericks-logo.png"
        },
        "7": {
            lat: 39.74,
            lng: -104.992,
            name: "Denver",
            description: "Denver Nuggets",
            type: "image",
            image_url: "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/denver-nuggets-logo.png"
        },
        "8": {
            lat: 42.332,
            lng: -83.048,
            name: "Detroit",
            description: "Detroit Pistons",
            type: "image",
            image_url: "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/detroit-pistons-logo.png"
        },
        "9": {
            lat: 37.777,
            lng: -122.42,
            name: "San Francisco",
            description: "Golden State Warriors",
            type: "image",
            image_url: "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/goldenstate-warriors-logo.png"
        },
        "10": {
            lat: 29.761,
            lng: -95.37,
            name: "Houston",
            description: "Houston Rockets",
            type: "image",
            image_url: "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/houston-rockets-logo.png"
        },
        "11": {
            lat: 39.767,
            lng: -86.15,
            name: "Indianapolis",
            description: "Indiana Pacers",
            type: "image",
            image_url: "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/indiana-pacers-logo.png"
        },
        "12": {
            lat: 33.962,
            lng: -117.357,
            name: "Inglewood",
            description: "Los Angeles Clippers",
            type: "image",
            image_url: "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/la-clippers-logo.png"
        },
        "13": {
            lat: 34.054,
            lng: -118.245,
            name: "Los Angeles",
            description: "Los Angeles Lakers",
            type: "image",
            image_url: "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/la-lakers-logo.png"
        },
        "14": {
            lat: 35.15,
            lng: -90.049,
            name: "Memphis",
            description: "Memphis Grizzlies",
            type: "image",
            image_url: "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/memphis-grizzlies-logo.png"
        },
        "15": {
            lat: 25.775,
            lng: -80.198,
            name: "Miami",
            description: "Miami Heat",
            type: "image",
            image_url: "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/miami-heat-logo.png"
        },
        "16": {
            lat: 43.042,
            lng: -87.907,
            name: "Milwaukee",
            description: "Milwaukee Bucks",
            type: "image",
            image_url: "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/milwaukee-bucks-logo.png"
        },
        "17": {
            lat: 44.979,
            lng: -93.265,
            name: "Minneapolis",
            description: "Minnesota Timberwolves",
            type: "image",
            image_url: "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/minnesota-timberwolves-logo.png"
        },
        "18": {
            lat: 29.954,
            lng: -90.078,
            name: "New Orleans",
            description: "New Orleans Pelicans",
            type: "image",
            image_url: "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/new-orleans-pelicans-logo.png"
        },
        "19": {
            lat: 40.715,
            lng: -74.007,
            name: "New York",
            description: "New York Knicks",
            type: "image",
            image_url: "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/ny-knicks-logo.png"
        },
        "20": {
            lat: 35.472,
            lng: -97.521,
            name: "Oklahoma City",
            description: "Oklahoma City Thunder",
            type: "image",
            image_url: "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/oklahoma-city-thunder-logo.png"
        },
        "21": {
            lat: 28.538,
            lng: -81.377,
            name: "Orlando",
            description: "Orlando Magic",
            type: "image",
            image_url: "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/orlando-magic-logo.png"
        },
        "22": {
            lat: 39.952,
            lng: -75.162,
            name: "Philadelphia",
            description: "Philadelphia 76ers",
            type: "image",
            image_url: "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/philadelphia-76ers-logo.png"
        },
        "23": {
            lat: 33.448,
            lng: -112.076,
            name: "Phoenix",
            description: "Phoenix Suns",
            type: "image",
            image_url: "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/phoenix-suns-logo.png"
        },
        "24": {
            lat: 45.512,
            lng: -122.676,
            name: "Portland",
            description: "Portland Trail Blazers",
            type: "image",
            image_url: "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/portland-trailblaizers-logo.png"
        },
        "25": {
            lat: 38.579,
            lng: -121.491,
            name: "Sacramento",
            description: "Sacramento Kings",
            type: "image",
            image_url: "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/sacramento-kings-logo.png"
        },
        "26": {
            lat: 29.425,
            lng: -98.495,
            name: "San Antonio",
            description: "San Antonio Spurs",
            type: "image",
            image_url: "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/san-antonio-spurs-logo.png"
        },
        "27": {
            lat: 40.461,
            lng: -80.606,
            name: "Toronto",
            description: "Toronto Raptors",
            type: "image",
            image_url: "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/toronto-raptors-logo.png"
        },
        "28": {
            lat: 40.76,
            lng: -111.888,
            name: "Salt Lake City",
            description: "Utah Jazz",
            type: "image",
            image_url: "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/utah-jazz-logo.png"
        },
        "29": {
            lat: 38.89,
            lng: -77.032,
            name: "Washington",
            description: "Washington Wizards",
            type: "image",
            image_url: "https://raw.githubusercontent.com/RH1945/sport-stats/refs/heads/main/assets/images/hackathon-basketball/washington-wizards-logo.png"
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