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

/assets
├── css/styles.css
├── js/script.js
├── js/mapdata.js
├── images/
│ └── hackathon-basketball/
└── data/teams.csv
index.html
README.md


- **`index.html`** – main structure and semantic layout.
- **`mapdata.js`** – defines team coordinates and map configuration.
- **`script.js`** – handles CSV loading, map events, and card rendering.
- **`styles.css`** – responsive and accessible visual design.
- **`teams.csv`** – local dataset of NBA teams and performance metrics.

---

## 🎨 Design

### Wireframes

The first idea was to create a fantasy team builder using API stats.  
Due to limited free API access, the scope pivoted to a **visual team map** with clear data insights.  
Wireframes were iteratively adjusted as responsiveness and real-time interactivity became the main goals.

![wireframes.png](assets/images/wireframes.png)

---

### The Header

The header serves as a simple guide to using the site.  
The design intentionally mirrors the **NBA color palette**, using strong reds and blues to evoke identity and trust.  
A subtle instructional paragraph helps users understand how to explore the map and stats.

![header.png](assets/images/header.png)

---

### The Map

The map went through different version of responsiveness, the team tried to keep
it as the central idea for the website.
Integrating **Simplemaps.js** allowed flexible customization, though some z-index and event challenges required creative debugging.  
Cities were replaced with **NBA team locations**, including logos, and hover popups were simplified for clarity.



![map-area.png](assets/images/map-area.png)

---

### Card in Different Views

The card design adapts between views:
- On desktop, it anchors beside the map.
- On mobile, it transitions into view under the map.  
  This behavior ensures accessibility and readability on all devices.

![dropped-calendar.png](assets/images/dropped-calendar.png)

---

### Color Palettes

#### General Palette
The general theme adopts the official NBA colors to align the interface with its subject.

![NBA PALETTE.png](assets/images/NBA%20PALLETE.png)

#### Map Palette
For the map background and regional hues, we used **earthy and desaturated tones** to maintain contrast without visual fatigue.

![MAP PALETTE.png](assets/images/MAP%20PALLETE.png)

---

## 🤖 AI

AI was used primarily as a **development assistant** —  
to streamline debugging, structure refactors, and generate clean, maintainable code for responsiveness and DOM interactions.  
It also helped conceptualize UI transitions and clarify logic for data loading and map interactions.

---

## 👩‍💻 Team Experience

All the issues we encountered were crossed and a MVP was achieved.

---

## 🧰 Git

The project was managed entirely via **GitHub** with feature branches and pull requests.  
Each major section (map, card, responsiveness) was developed in collaboration and merged through code review.  
Commit history was kept descriptive to ensure clarity during the hackathon.

---

## 🧱 Libraries and Frameworks

- [Simplemaps.js](https://simplemaps.com/docs/) — interactive U.S. map
- [PapaParse](https://www.papaparse.com/) — CSV parsing
- [Google Fonts](https://fonts.google.com/) — typography
- Native **HTML5 / CSS3 / JS**

---

## 💻 Development

Development followed a modular approach:
1. Build the static layout (HTML + CSS).
2. Integrate and customize Simplemaps.
3. Implement CSV parsing and card generation.
4. Debug z-index and responsiveness across breakpoints.
5. Polish UX with animations and consistent branding.

---

## 🚀 Deployment

The site is hosted via **GitHub Pages** directly from the `main` branch.  
To deploy updates:
1. Commit and push to `main`.
2. Wait for GitHub Pages to rebuild.
3. Visit [rh1945.github.io/sport-stats](https://rh1945.github.io/sport-stats/).

---

## 🧪 Testing

Testing included:
- Device compatibility, Phone, laptop and large desktop physical tests.
- Responsiveness checks with Chrome DevTools.
- CSV data integrity validation.
- Manual QA for mobile UX (tap targets, modal closing).
- Lighthouse



---

### Known Bugs

- A white gap might show between map and card when resizing the window.
- Map scaling occasionally clips logos when zooming on smaller devices.

---

## 🙌 Credits

- **Code Institute Hackathon (Oct 2025)** — organization and mentoring.
- **Simplemaps.com** — for their free U.S. map implementation.
- **NBA.com**, **ESPN.com**, and **balldontlie** — for team stats and inspiration.
- Thank you, Mark Briscoe and Dillon MCcaffrey for the tutoring, and project direction.

---

*Made with code by Rafael, James and Richard*
