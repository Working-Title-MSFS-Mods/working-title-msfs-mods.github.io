---
layout: package
permalink: /packages/nxi/
title: Intro
coverimage: g1000.jpg
---

# Working Title G1000 NXi
Welcome to the Early Access Beta of our G1000 NXi for [Microsoft Flight Simulator](https://flightsimulator.com).<br>
This package replaces the stock G1000 in planes that use that panel package with a new G1000 NXi, written from the ground up by Working Title Simulations.

This is an early access beta and there are many features of the real-world unit that have not yet been implemented, and you will surely find more than a few bugs here and there. It is our intention to keep a cadence of weekly or bi-weekly updates for this package, so we will be quickly adding features as well as squashing bugs that our wider open-beta audience help identify.

Let’s reiterate – this is an early-access beta, released with the intent to help find bugs with the existing code as quickly as possible – if you find that it doesn’t work well for you, simply uninstall the package and use the default G1000 instrument.

<div class="alert alert-info">
    <h4>Attention!</h4>
    This package is exclusively offered via the ingame Marketplace – go there to download the latest version.<br>
    Because of the update cadence, we will maintain the dedicated changelog for each update here on the packages.workingtitle.aero site.
</div>
{% include button.html text="Changelog" url="/packages/nxi/releases" %}

## Usage in default aircraft
Because they use the Garmin G1000 unit, this package will affect the following default aircraft:
- Cirrus SR22
- Diamond Aircraft DA40NG
- Diamond Aircraft DA62
- Textron Aviation Beechcraft Baron G58
- Textron Aviation Beechcraft Bonanza G36
- Textron Aviation Cessna 172 Skyhawk (G1000)
- Textron Aviation Cessna 208B Grand Caravan EX

## Installation
This package will be installed automatically when ‘purchased’ (for free) in the ingame Marketplace.

## Key features

### Navigation
- Completely overhauled flight plan management system supporting all 23 ARINC 424 leg types
- New flyable leg types include RF, procedure turns, DME arcs, and more
- Full real time flight path vectorization and on-map visualization matching the real unit
- Full support of direct-to with proper matching behavior and waypoint sequencing
- Automatic and authentic NAV CDI scaling depending on flight phase (Departure, Terminal, APPR, LPV, etc.)


### Accessibility
- Inputting waypoints can be done by keyboard by clicking the input field, and exited from keyboard mode by clicking anywhere else 


### Vertical Navigation - WORK IN PROGRESS:
- Full VNAV path navigation simulation with correct VPTH arm and active behavior
- Correct vertical deviation indications for VNV active profile deviation, GP, and GS
- Accurate VNAV path calculation from vectorized plan includes path guidance through turns and arcs
- Provides vertical guidance from loaded procedures such as departures, arrivals, approaches  
- Full simulation of RNAV LPV approaches including angular distance CDI scaling
- Glideslope/Glidepath preview to easily transition from VNAV descent into approach.  


### PFD:
- Selectable between artificial horizon and synthetic vision
- Avilable inset or HSI map
- All wind overlay modes
- HSI may be set to layout in standard or HSI map modes
- V-speed bugs pulled from aircraft cfg data
- Timer/Ref page with count-up/countdown timer and V-Speed input
- Baro minimums
- Bearing pointers
- Nearest airports (Allows easy direct-to and radio tuning capabilities)
- Select HPA or IN for altimeter units
- Standard BARO option  


### MFD:
- Improved engine instrument displays (Still WIP)
- Active VNV Profile pane on MFD flight plan page with realtime updates
- Waypoint Info page with map layer to visualize fix before selection 

### Flight Plan Screens
- Full support for waypoint input with available waypoint details
- Procedure selection with accurate leg parsing and waypoint deduplication
- Flight plan menu with ability to activate leg, delet plan, invert plan, and remove procedures

 
### Mapping:
- Entirely revamped high performance map system
- Authentic collision based waypoint label culling system for auto-declutter
- Brand new waypoint, navigation fix, and airport icons
- Highly accurate TOD and BOD marker placement
- Airspace rendering

### Nav Radios
- Automatically identifies localizers and VORs when tuned in. 


## What's next?
We will be updating this package on a weekly/bi-weekly basis, and we will announce on our discord server, and here, when a new package version is available for download. We will be focusing on adding depth to many of the systems, as well as squashing bugs found by our open beta audience.


## Comments, issues, bug reports
We are asking everyone that downloads this package to help us make it better. You can do that by logging genuine bugs with the features we’ve implemented in our [Discord](https://discord.com/invite/Fa6w2xK) server in the dedicated #nxi-early-access channel.

But…we need your help to make this work – we do NOT need you to report missing features. We have the manual, we have the official Garmin trainer, we have real-world NXi examples, so we know what features we haven’t implemented. What we NEED is to know about bugs that you encounter with the features we HAVE implemented. Please, please, please limit your feedback to bugs, issues or problems you encounter with existing features. Thanks!
