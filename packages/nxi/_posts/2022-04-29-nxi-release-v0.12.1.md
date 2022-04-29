---
layout: post
title: v0.12.1
coverimage: g1000.jpg
---

# Working Title Garmin G1000 NXi v0.12.1

## Issues Fixed

* On RNAV approaches, VNAV overriding GP and preventing or canceling a GP capture.
* VNAV occasionally not switching to VPTH at TOD, especially after flat path segments.
* ILS issues:
  * Fixed failure to auto-change the CDI source when appropriate.
  * Fixed APPR failing to arm when GPS is the CDI source and FAF leg is active.
* Fixed an issue that would occasionally cause flight plan changes to not properly update the PFD.

## Known Issues
* There is a text overflow on the PFD's bearing info boxes when showing a fix with a five-character name.

## Heads Up!
* World Map imports from some third party flight planning tools may sometimes not load correctly into the NXi. When this occurs, no legs/waypoints are lost, however they may not show as legs within airways on the FPL view, and instead show as standard enroute legs.
* GPS, LOC, and VOR modes now _arm_! Be aware that you will need to be on an intercept course and within capture distance of the desired flight path before those modes will become active.  If you are not on an intercept course, you can, _eg_, enable HDG mode to bring you onto an intercept course and the armed mode will activate when ready.
* The fuel quantity information on the MFD's sytem page simulates an authentic totalizer. This means it does not actually track the fuel in your tanks, it simply counts how much has been burned and relies on you to tell it what the original quantity was. This means if you add or remove fuel in flight you'll need to manually adjust the starting quantity in the tanks with the buttons on the GAL REM submenu.
* The displayed METAR information on the MFD FPL page reflects real-world weather from the sim live weather METARs, so they may not always match in-game conditions, especially if using a weather preset or custom weather.