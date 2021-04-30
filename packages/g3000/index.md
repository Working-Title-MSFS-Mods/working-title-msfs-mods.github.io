---
layout: package
permalink: /packages/g3000/
title: Intro
coverimage: g3000.jpg
---

# Working Title G3000
This is a mod for [Microsoft Flight Simulator](https://flightsimulator.com) that aims to improve the in-game G3000 and G5000. The goal is to bring functionality closer to the real-life units, with a focus on both features and layout/UI.
{% include downloadbutton.html category="g3000" %}
{% include button.html text="Changelog and Older Versions" url="/packages/g3000/releases" %}

## Usage in default aircraft
Because they use the Garmin G3000 unit, this mod will affect the following default aircraft:
- Daher TBM930
- Textron Aviation Cessna Citation Longitude

This mod was created with cross-compatibility in mind. It modifies the minimum number of base files possible to achieve its goals, so it should be compatible with most other mods, including all other WorkingTitle mods. However, because of the nature of the mod, it will conflict with other mods that make changes to the G3000.

## Installation
To install, copy the `workingtitle-g3000` folder from the zip file into your `Community` directory.

If you want to enable the road display for the navigation map, you must also download `workingtitle-g3000-roaddata-v0.1.0.zip` from the Github release page. To install the road data package, copy the `workingtitle-g3000-roaddata` folder from the zip file into your `Community` directory. Requires 1.3 GB of hard drive space.

## Configuration File
Certain mod settings can be customized via a configuration file which is located at `workingtitle-g3000\html_ui\WTg3000.cfg`. Documentation for the various settings can be found in the file itself. If you make changes to the file while the game is running, you must restart the game for the changes to take effect.

## Credits
- Custom city database is sourced from [simplemaps](https://simplemaps.com/data/world-cities) under the CC Attribution 4.0 license.
- Border data is sourced from [Natural Earth](https://naturalearthdata.com).
- Thank you to StuTozer/ElectrikKar for allowing us to integrate his Touchscreen Restyled Mod.
- This mod uses the Roboto font (designed by Christian Robertson), licensed under Apache 2.0.
- This mod uses the d3-array, d3-geo, and topojson libraries.
