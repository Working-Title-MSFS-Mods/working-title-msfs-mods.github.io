---
layout: post
title: v0.1.0
coverimage: nxi.jpg
---
# Working Title G1000 NXi v0.1.0
## Key features

### Navigation
- Completely overhauled flight plan management system supporting all 23 ARINC 424 leg types
- New flyable leg types include RF, procedure turns, DME arcs, and more
- Full real time flight path vectorization and on-map visualization matching the real unit
- Full support of direct-to with proper matching behavior and waypoint sequencing
- Automatic and authentic NAV CDI scaling depending on flight phase (Departure, Terminal, APPR, LPV, etc.)


### Accessibility
- Inputting waypoints can be done by keyboard by clicking the input field, and exited from keyboard mode by clicking anywhere else 


### Vertical Navigation:
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