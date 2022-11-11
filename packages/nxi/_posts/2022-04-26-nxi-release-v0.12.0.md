---
layout: post
title: v0.12.0
coverimage: nxi.jpg
---

# Working Title Garmin G1000 NXi v0.12.0

## Changes

### Flight Planning

* Fixed a bug that caused excessively shallow FPA on RNAV VTF and visual vector approaches.
* Fixed an issue where ILS/LOC horizontal guidance could position you too far left or right of the runway.
* Fixed a bug that would sometimes cause legs attempting to intercept a DME arc or RF leg to intercept the wrong part of the arc.
* Fixed a bug that caused RNAV glidepath guidance to direct the plane too low when crossing the runway threshold. RNAV glidepaths should now place the plane at 50 feet AGL while crossing the threshold.
* Fixed a bug that prevented a Direct-To from being activated to a non-flight plan waypoint if an existing Direct-To to a non-flight plan waypoint was already active.
* OBS fixes:
  * Switching from NAV to another lateral autopilot mode or switching the CDI source to NAV1/NAV2 no longer turns OBS mode off.
  * Deactivating OBS now correctly inserts a Direct-To to the OBS waypoint with an intercept course equal to the OBS course.
  * Turning the course knob while in green needles no longer adjusts the GPS OBS course.
  * Activating OBS now initializes the OBS course such that it is coincident with the course of the flight plan leg to the OBS waypoint as the leg joins the waypoint.

### Display

* Fixed a regression that caused the bottom bar timer display to stay at 00:00:00.
* Fixed a bug where the FMA would sometimes not update the display of autopilot modes when toggling the flight director on.
* Fixed a bug with the display backup button causing the EIS to become stuck on the PFD.
* The HSI now properly updates all data when source is changed from NAV1 to NAV2.
* The GPS XTK display on the HSI is now hidden when the CDI source is NAV1/2.
* The GPS XTK display on the HSI no longer shows negative numbers.
* Further improved map system performance.

### Miscellaneous

* Map initialization delayed until after briefing to help prevent occasional CTDs on flight load.
* Added support for changing nearest airport search criteria in the MFD System Setup page.
* MFD nearest airport page now filters airports correctly and no longer ignores runway length.
* Nearest airport search will now automatically optimize the number of results requested to improve performance.
* The PFD and MFD map range settings are now saved between power cycles/flights.

## Known Issues
* There is a text overflow on the PFD's bearing info boxes when showing a fix with a five-character name.

## Heads Up!
* World Map imports from some third party flight planning tools may sometimes not load correctly into the NXi. When this occurs, no legs/waypoints are lost, however they may not show as legs within airways on the FPL view, and instead show as standard enroute legs.
* GPS, LOC, and VOR modes now _arm_! Be aware that you will need to be on an intercept course and within capture distance of the desired flight path before those modes will become active.  If you are not on an intercept course, you can, _eg_, enable HDG mode to bring you onto an intercept course and the armed mode will activate when ready.
* The fuel quantity information on the MFD's sytem page simulates an authentic totalizer. This means it does not actually track the fuel in your tanks, it simply counts how much has been burned and relies on you to tell it what the original quantity was. This means if you add or remove fuel in flight you'll need to manually adjust the starting quantity in the tanks with the buttons on the GAL REM submenu.
* The displayed METAR information on the MFD FPL page reflects real-world weather from the sim live weather METARs, so they may not always match in-game conditions, especially if using a weather preset or custom weather.