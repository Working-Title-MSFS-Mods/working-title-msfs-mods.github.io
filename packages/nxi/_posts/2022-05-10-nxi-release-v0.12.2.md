---
layout: post
title: v0.12.2
coverimage: g1000.jpg
---

# Working Title Garmin G1000 NXi v0.12.2

## Changes

* Improves autopilot handling of the vertical wind component for more accurate vertical guidance in high winds or turbulence.
* Improves handing of narrow-range EIS gauges to avoid misaligned rendering of color bands through rounding.
* Added sync of CRS to current radial when CRS knob is pressed while a VOR is the active nav source.
* Fixes bug where, if GS is intercepted while VNAV is armed, VNAV can cancel GS.
* Fixes bug that would occasionally cause an inappropriate CDI source switch when activating a visual or RNAV approach.
* Fixes bug where a world map import would try to calculate the path before the lateral plan was calculated causing constraints to be invalid on the FPL screen.
* Fixes bug where the PFD indicated altitude would initialize to zero instead of the actual indicated altitude.
* Fixes text overflow on the PFD's bearing info boxes with particularly wide fix names.

## Heads Up!
* World Map imports from some third party flight planning tools may sometimes not load correctly into the NXi. When this occurs, no legs/waypoints are lost, however they may not show as legs within airways on the FPL view, and instead show as standard enroute legs.
* GPS, LOC, and VOR modes now _arm_! Be aware that you will need to be on an intercept course and within capture distance of the desired flight path before those modes will become active.  If you are not on an intercept course, you can, _eg_, enable HDG mode to bring you onto an intercept course and the armed mode will activate when ready.
* The fuel quantity information on the MFD's sytem page simulates an authentic totalizer. This means it does not actually track the fuel in your tanks, it simply counts how much has been burned and relies on you to tell it what the original quantity was. This means if you add or remove fuel in flight you'll need to manually adjust the starting quantity in the tanks with the buttons on the GAL REM submenu.
* The displayed METAR information on the MFD FPL page reflects real-world weather from the sim live weather METARs, so they may not always match in-game conditions, especially if using a weather preset or custom weather.