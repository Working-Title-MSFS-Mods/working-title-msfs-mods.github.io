---
layout: post
title: v0.9.0
coverimage: g1000.jpg
---
# Working Title Garmin G1000 NXi v0.9.0

## New Features

### Added MFD Pages
* Nearest
  - Airports
  - Intersections
  - VORs
  - NDBs
* WPT Information
  - Airport
  - Intersection
  - VOR
  - NDB

### VNAV
  * Added the ability to perform a vertical direct-to using the D-> MFD FPL page softkey
  * Added the VNV Cancel/Enable softkey to the PFD FPL softkey menu

### Map System
  * Added aircraft track vector (selectable in MFD MENU)
  * Added selected altitude arc (selectable in MFD MENU)
  * Added MFD MENU settings for airspace display options
  * Aligned display and data update frequencies to real-life unit
  * More accurate styling of TOD/BOD labels
  * Overhaul and optimization of the airspace display system:
    - New airspace renderer offering true circular and vector based boundary display
    - Advanced boundary LOD generation from source boundary vectors for much lighter display load
    - Advanced vector culling outside the map area to avoid drawing to very-low-performance far offscreen areas
    - Improves intermittent high-latency frame times due to huge multi-thousand vector airspaces (such as the China Class B RVSM, which covers the entire country)

### Flight Plan
  * Added ability to engage vectors-to-final from the procedures menu
  * Added the ability to create a hold directly from the direct-to page
  * Added setting of inbound course for a direct-to
  * Added MFD FPL-page-specific soft key menu

### EIS
  * Add EIS support for ColorLine and ReferenceBug
  * Add EIS support for ValuePos in horizontal gauges

### PFD
  * Added option to display metric altitudes on the altimeter

## Issues Fixed

* ETE should now be displayed properly in MM:SS and H+MM instead of HH:MM
* Fixed an issue where XPDR display would become corrupt when inputting same frequency as currently set
* Fixed an issue where pressing ENT would not advance past minimums on the PROC approach page
* Fixed FPL header names sometimes overflowing
* Dep/Arr confirmation dialog now displays full procedure name
* Fixed conditions causing MENU press to not open FPL page menu
* Disabled Activate Leg on leg types which should not be able to be manually activated
* Added proper message when the flight plan system rejects a duplicate leg input
* Fixed various incorrect ICAO region names
* Fixed an issue where visual approach waypoints would continue to display on the map even when the approach was changed
* Fixed logic around hold-at-waypoint commands.
* Fixed issue where heading bug would not be properly synced to current heading on flight restart
* Fixed issue where circling approaches would offer vertical guidance
* Fixed accuracy errors in horizontal EIS gauges
* Fixed incorrect active leg arrow style for some leg types
* Fixed NEXRAD remaning visible at low map ranges
* Fixed an issue where discrepancies in airport runway number and ILS frequency associated runway number would cause an inability to auto-tune or auto-switch for an ILS approach
* Fixed overflow of MFD FPL METAR text
* Fixed non-functional lean assist on the SR22 and Baron
* Fixed issue where the cancel button on FPL Waypoint Remove did not close the dialog
* Fixed DTO menu not automatically advancing to activate button in certain situations
* Fixed a bug with initializing DTO menu waypoint from a DTO random.
* Fixed bug where the direct-to waypoint did not have the proper altitude constraint assigned
* Fixed an issue where both the TOD and BOD markers were drawn on the map simultaneously
* Fixed bug where deleting a hold origin fix does not delete the hold for that fix
* Fixed bug where MAPR sensitivity is missing when direct-to a leg in the missed sequence
* Fixed bug where the GPS To/From flag could be erroneously set in OBS or SUSP mode
* Improved a number of course-to-fix leg calculations for better flight path vectorization
* Improved hold calculations, including erroneously chosen entry paths and display
* Fixed issue where direct-to page would not offer duplicate waypoint resolution

## Heads Up!
* VNAV now deactivates upon reaching the last constraint (cyan altitude in FPL) prior to a VNAV ineligible leg, such as a MANSEQ, Procedure Turn or Hold. Be aware that if you have a MANSEQ leg at the end of your arrival procedure, without manual intervention, you can (and likely will) end up too high to reasonable descend for the approach. You have three options to navigate this: (1) Manually descend as is reasonable at your discretion; (2) delete the MANSEQ leg to allow VNAV to recalculate by directly connecting the end of the arrival with the beginning of the approach or (3) activate the approach (or proceed direct to the IAF) and VNAV will attempt to calculate a path up to 6 degrees from your current position to the next constraint.
* GPS, LOC, and VOR modes now ARM! Be aware that you will need to be on an intercept course and within capture distance of the desired flight path before those modes will become active.
* The GPS flight plan sequencing will enter SUSP under the following conditions: when reaching a manual termination leg (holds, manual sequence) and when reaching the final leg of the plan. This is actually correct behavior. To exit out of SUSP (for example, if you got to the end of a plan and then loaded more waypoints), hit the SUSP softkey in the middle of the PFD.
* Changing the CDI source drops the autopilot into ROL mode. This is the correct behavior, intended to keep the airplane held in the same attitude until the pilot reselects appropriate guidance.
* When exiting a hold, do not delete the HOLD as it will cause flight plan issues. Press the SUSP key to continue with the flight plan sequence or go direct to another fix.
* The NXi’s traffic advisory system (TAS) will now start in STANDBY mode by default. While in this mode it will not issue any advisories nor will traffic be displayed on any maps. The system will automatically switch from STANDBY to OPERATING mode after takeoff (and back to STANDBY after landing). You can also manually switch TAS to OPERATING mode through the MFD Traffic Map page (use the MFD FMS knobs to change the open MFD page).
* The fuel quantity information on the MFD's sytem page simulates an authentic totalizer. This means it does not actually track the fuel in your tanks, it simply counts how much has been burned and relies on you to tell it what the original quantity was. This means if you add or remove fuel in flight you'll need to manually adjust the starting quantity in the tanks with the buttons on the GAL REM submenu.
* The displayed METAR information on the MFD FPL page reflects real-world weather, so they may not always match in-game conditions, especially if using a weather preset or custom weather.

## Known Issues
* Sometimes the flight plan loading from the world map screen is loaded incompletely; this can usually be solved by restarting the flight - we are working on nailing this down.
* World Map imports from Navigraph and Simbrief do not include airways, so airways will not be added to the G1000 NXi flight plan when the plan was imported to the World Map from one of these sources.
