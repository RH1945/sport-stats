

## How to view locally

This is a static website — you can open `index.html` directly in a browser, but some browsers restrict loading local JSON via file://. To avoid that, start a simple HTTP server.

Using Python 3 (recommended):

```powershell
python -m http.server 8000
# then open http://localhost:8000
```

Using Node (npx http-server):

```powershell
npx http-server -p 8000
# then open http://localhost:8000
```

Or use the VS Code Live Server extension for a quick local preview.

## Development notes

-   Keep logic that manipulates data inside `assets/js/` and presentation in `assets/css/` for separation of concerns.
-   When adding data fields, update the parsing logic in `script.js` and any templates in the UI.
-   Prefer small, well-documented functions and add JSDoc comments for complex helpers.


# sport-stats


# 🏀 NBA Stats Map — Interactive Team Explorer

## Overview

_(Write a short summary of the project — what it does, its goals, and the technologies involved.)_

# sport-stats

Live demo: https://rh1945.github.io/sport-stats/

A responsive, interactive website showcasing NBA team and player statistics on a US map. Built as a Hackathon project (Code Institute, Oct 2025), the site demonstrates client-side data visualization, search/filter functionality, and a lightweight API/data-import approach.

Contributors
| Name | Role | GitHub / LinkedIn |
|---|---|---|
| Rafael H. Sanchez | Project Lead | https://github.com/RH1945 / https://www.linkedin.com/in/rafael-horwood-sanchez-291914224/ |
| James Fowler | Project Contributor | https://github.com/jamesfowler-dev / https://www.linkedin.com/in/jamesfowler21/ |
| Richard Durden | Project Contributor | https://github.com/MoustacheCode / https://www.linkedin.com/in/richard-duerden-692556227/ |

## 🏀 Project purpose

This project provides an exploratory interface for NBA statistics with an emphasis on team geography and roster-level data. Its goals are:

-   Make team and player stats easily discoverable via an interactive US map.
-   Provide a responsive, accessible UI for desktop and mobile users.
-   Demonstrate client-side data visualization techniques and simple data ingestion from JSON/CSV.

## Key features

-   Interactive US map with clickable team markers/regions.
-   Team cards and player lists with sortable/searchable stats.
-   Responsive layout: side panel on large screens, modals on mobile.
-   Data imported from local JSON (and convertible CSV) with example API hooks for future integration.
-   Lightweight vanilla JS implementation (no heavy frameworks) to keep the bundle size small.
-   Accessible markup and progressive enhancement for older browsers.

## Tech stack

-   HTML5, CSS3 (static styles in `assets/css/styles.css`)
-   JavaScript (vanilla) files in `assets/js/` (`script.js`, `usmap.js`, `mapdata.js`)
-   Static JSON data in `assets/sports-data/` (exported from CSV via `tableConvert.com_0iyg4w.json`)
-   Media and images in `assets/media/` and `assets/images/`

## Data sources & format

-   Primary data: `assets/sports-data/tableConvert.com_0iyg4w.json` — JSON export of the dataset used by the UI.
-   The project includes helper code to parse CSV -> JSON where appropriate. When adding/updating data, keep the JSON shape consistent with existing entries (team id, name, city, stats, roster array).

## Project structure

Top-level files and purpose (partial):

-   `index.html` — main landing / map page
-   `landing_page.html` — secondary landing/info page
-   `assets/css/styles.css` — styles
-   `assets/js/script.js` — main UI logic
-   `assets/js/usmap.js` — map interactions
-   `assets/js/mapdata.js` — map geometry / helper data
-   `assets/sports-data/tableConvert.com_0iyg4w.json` — sample dataset
-   `assets/images/` — team and UI images
-   `assets/media/` — videos and other media

## How to view locally

This is a static website — you can open `index.html` directly in a browser, but some browsers restrict loading local JSON via file://. To avoid that, start a simple HTTP server.

Using Python 3 (recommended):

```powershell
python -m http.server 8000
# then open http://localhost:8000
```

Using Node (npx http-server):

```powershell
npx http-server -p 8000
# then open http://localhost:8000
```

Or use the VS Code Live Server extension for a quick local preview.

## Development notes

-   Keep logic that manipulates data inside `assets/js/` and presentation in `assets/css/` for separation of concerns.
-   When adding data fields, update the parsing logic in `script.js` and any templates in the UI.
-   Prefer small, well-documented functions and add JSDoc comments for complex helpers.

## Accessibility

-   Use semantic HTML for layout and controls.
-   Ensure map interactions are keyboard-accessible and provide aria-labels for interactive elements.

## Tests & validation

-   This repo contains no automated tests yet. For a local sanity check, open `index.html` in a local server and verify data loads and map interactions work.

## Contributing

-   Fork the repo, create a feature branch, then open a pull request with a clear description of the change.
-   Include screenshots or short GIFs for UI changes and a brief note about performance/accessibility effects.

## Deployment

-   Deployed via GitHub Pages (see the Live demo link at the top). To publish changes: push to the `gh-pages` branch or configure Pages to serve from the repository's `docs/` or `main` branch depending on your repo settings.

## Roadmap / ideas

-   Add a small backend to provide live stats via an API.
-   Implement player detail pages and bookmarking.
-   Add basic unit/integration tests for any added JS modules.

## License

This project follows the LICENSE file in the repository root. Please review that file for details.

## Contact & credits

Primary contact: Rafael H. Sanchez — https://github.com/RH1945

---

_Generated README template — update any sections above to match the live project specifics._
message.txt
7 KB


# 🏀 Sport-Stats — Interactive NBA Map
### [🔗 Live site](https://rh1945.github.io/sport-stats/)
*A responsive, searchable database of NBA teams demonstrating API integration, data visualization, and responsive UI/UX design.*

---

## 👥 Team

| Name              | Role              | GitHub / LinkedIn                                                                                  |
|-------------------|-------------------|----------------------------------------------------------------------------------------------------|
| Rafael H. Sanchez | Project Lead      | [GitHub](https://github.com/RH1945) / [LinkedIn](https://www.linkedin.com/in/rafael-horwood-sanchez-291914224/) |
| James Fowler      | Project Developer | [GitHub](https://github.com/jamesfowler-dev) / [LinkedIn](https://www.linkedin.com/in/jamesfowler21/) |
| Richard Duerden   | Project Developer | [GitHub](https://github.com/MoustacheCode) / [LinkedIn](https://www.linkedin.com/in/richard-duerden-692556227/) |

---

## 🧭 Index

- [Overview](#overview)
- [Features](#features)
- [Introduction](#introduction)
    - [Project Outline](#project-outline)
- [Architecture](#architecture)
- [Design](#design)
    - [Wireframes](#wireframes)
    - [Header](#the-header)
    - [Map](#the-map)
    - [Card Views](#card-in-different-views)
    - [Color Palettes](#color-palettes)
- [AI](#ai)
- [Team Experience](#team-experience)
- [Git](#git)
- [Libraries and Frameworks](#libraries-and-frameworks)
- [Development](#development)
- [Deployment](#deployment)
- [Testing](#testing)
    - [Known Bugs](#known-bugs)
- [Credits](#credits)

---

## 🏀 Project purpose

This project provides an exploratory interface for NBA statistics with an emphasis on team geography and roster-level data. Its goals are:

-   Make team and player stats easily discoverable via an interactive US map.
-   Provide a responsive, accessible UI for desktop and mobile users.
-   Demonstrate client-side data visualization techniques and simple data ingestion from JSON/CSV.

## Key features

-   Interactive US map with clickable team markers/regions.
-   Team cards and player lists with sortable/searchable stats.
-   Responsive layout: side panel on large screens, modals on mobile.
-   Data imported from local JSON (and convertible CSV) with example API hooks for future integration.
-   Lightweight vanilla JS implementation (no heavy frameworks) to keep the bundle size small.
-   Accessible markup and progressive enhancement for older browsers.

## Tech stack

-   HTML5, CSS3 (static styles in `assets/css/styles.css`)
-   JavaScript (vanilla) files in `assets/js/` (`script.js`, `usmap.js`, `mapdata.js`)
-   Static JSON data in `assets/sports-data/` (exported from CSV via `tableConvert.com_0iyg4w.json`)
-   Media and images in `assets/media/` and `assets/images/`

## Data sources & format

-   Primary data: `assets/sports-data/tableConvert.com_0iyg4w.json` — JSON export of the dataset used by the UI.
-   The project includes helper code to parse CSV -> JSON where appropriate. When adding/updating data, keep the JSON shape consistent with existing entries (team id, name, city, stats, roster array).

## Project structure

Top-level files and purpose (partial):

-   `index.html` — main landing / map page
-   `landing_page.html` — secondary landing/info page
-   `assets/css/styles.css` — styles
-   `assets/js/script.js` — main UI logic
-   `assets/js/usmap.js` — map interactions
-   `assets/js/mapdata.js` — map geometry / helper data
-   `assets/sports-data/tableConvert.com_0iyg4w.json` — sample dataset
-   `assets/images/` — team and UI images
-   `assets/media/` — videos and other media

## 🧠 Overview

Sport-Stats is an interactive web application built during the **Code Institute Hackathon (Oct 2025)**.  
It displays all 30 NBA teams on a responsive U.S. map. When a user clicks a team, a card slides out showing real-time statistics such as win/loss record, true shooting percentage, and home arena.

Originally designed to showcase API usage, the project evolved into a clean, maintainable interface powered by both CSV-based data and external endpoints.

---

## 🌟 Features
- Interactive map displaying all NBA teams.
- Hover and click events reveal responsive team cards.
- Dynamic team stats loaded from CSV data.
- Fully responsive:
    - Side card on desktop
    - Stacked modal card on mobile
- Clear, modern interface using accessible color palettes.
- Built using **HTML5**, **CSS3**, and **Vanilla JavaScript** — no frameworks required.

---

## 🧩 Introduction

### Project Outline

The project started as a concept to visualize live NBA statistics via public APIs.  
Due to API access limitations and CORS restrictions, the team transitioned to a hybrid data solution — combining a curated CSV dataset with fallback API calls.  
The goal was to demonstrate **data integration**, **responsive design**, and **team collaboration** under time constraints.

---

## 🏗️ Architecture


# sport-stats
## https://rh1945.github.io/sport-stats/
A responsive, searchable database of NBA players showcasing an API implementation. Hackathon Code Institute/Oct 2025.

# 🏀 NBA Stats Map — Interactive Team Explorer

## Overview
*(Write a short summary of the project — what it does, its goals, and the technologies involved.)*

---
## Index
* [Features](#features)
* [Introduction](#introduction)
  - [Project Ouline](#project-outline)

* [Architecture](#architecture)
* [Design](#design)
* [AI](#ai)
* [Team experience](#team-experiece)
* [Resources](#resources)
* [Git](#git)
*
##  Features
- Interactive US map displaying NBA teams.
- Dynamic team cards showing up-to-date performance stats.
- Fully responsive layout — side card on desktop, clean modal on mobile.
- Data sourced from a curated CSV file / API integration.
- Built for clarity, maintainability, and modern browser compatibility.

---

##  Architecture
*(Describe the project structure — HTML, JS, CSS, and assets.)*

Example:


---
## Design

### Wireframes
 
The first idea was to make something similar to a team building 
website using current stats (with and API) to calculate your team's strenght  
given the availability of the sport API's and their price, we revised 
the scope, the options available to us, and decide to build a responsive
team map that show some important information, in addition to a calendar for
upcoming games and recent ESPN news.


![img.png](img.png)
---
### The header

As the project template asked for a single page website we saw no need for a 
functioning Navigation bar, we decided to keep it simple
and representative of the website purpose, hence the inclusion of the NBA red.

The next most important thing was to show the user how to navigate the site
and how to use the tools. So, the header shows in simple terms how to find and use the 
map and calendar. behind the header we wanted to add an inclusive background that had the NBA
team, logos and some player's numbers.

![header.png](assets/images/header.png)
---
### The map

The map went through different version of responsiveness, the team tried to keep
it as the central idea for the website. The card proved difficult, going under the
z-index of the map even at no matter what we did, the Simplemaps documentation is
not as up to date as we would have hoped for such a great tool. Changing what are normally
cities to the "capitals" of our teams, adding their logos and names on hover was our 
limit for simplicity and time. 


![map-area.png](assets/images/map-area.png)
---
### Card in different views



![dropped-calendar.png](assets/images/dropped-calendar.png)
---
### Color palettes

for the general colors of the website we decided
to go with the colors of the NBA logo:
![NBA PALLETE.png](assets/images/NBA%20PALLETE.png)
---

For the map, given that it was the grounding element of the project,
our choice was to go for earthy tones that represented the depth of 
the sport for the country. Also, we wanted somewhat calm colors. 
Contrary to many sport website that tend to have sharp and neon colors.

![MAP PALLETE.png](assets/images/MAP%20PALLETE.png)


---

## AI

---

## Git 

---

## Libraries and frameworks

---

## Development

---

## Deployment

---

### Testing

For testing we used

---

### Known Bugs

## Credits

---