---
layout: post
title: v0.10.0
coverimage: g1000.jpg
---
# Working Title Garmin G1000 NXi v0.10.0

## New Features

### MFD Procedure Preview Map
* Procedure preview map pane for all procedure types
* Shows all leg types including course reversals and holds
* Softkeys for switching between procedure types

### MFD FPL Editable Altitude Constraints
* Altitudes can now be edited on the MFD FPL page
* Altitudes that break system FPA constraints now indicated by blue X
* FPA for current leg is now adjustable in the VNV Active Profile pane
* VNV Prof softkey for shortcut to FPA adjustment

### MFD System Setup Page
* Ability to adjust system display units:
  * Nav Angle, Distance/Speed, Altitude/Vertical Speed, Temp, and Weight
* Ability to customize MFD data bar fields
  * BRG, DEST, DIS, DTG, DTK, END, ETA, FOB, FOD, GS, TAS, TKE, TRK, VSR, and XTK
* COM channel spacing switch between 25kHz and 8.33kHz spacing

### PFD Alerts Window
* Allows to view alerts thrown by the system

### PFD Reversionary Mode
* Displays engine instruments when MFD screen is not booted
* Reversionary mode on/off screen blink animation

### System Simulation and Startup
* System backings for GMU, GTX, GIA, GRS, GDC, and GDU line replaceable units
* Boot and initialization times for all units, connected to correct instruments
* GPS inoperative display indications
* Instrument inoperative red X display indications
* AHRS alignment during start with correct bank limitations

### EIS Support
* Added support for end-text on horizontal EIS gauges
* Added support for SmoothFactor to EIS gauges
* Updated custom C208 panels to use newly supported tags

## Issues Fixed
* Fixed FLC activation via keyboard not syncing IAS
* Fixed incorrect magnetic variation direction in VOR info pages
* Fixed an issue where direct-to course would be synchronized to active bearing even while custom course was attempted to be entered
* Fixed an issue where the direct-to course could become desynchronized and start to always generate a custom course for all direct-tos
* Fixed cases where unit would ask if course reversal should be flown even in conditions where the real unit would not ask and the reversal would be mandatory
* PFD minimums display box no longer displays when greater than 2500 feet from minimums altitude
* Fixed issue where lateral navigation would automatically and erroneously sequence forward upon exit of SUSP
* Fixed font styling errors on MFD information page
* Fixed positioning of compass and orientation indicator on MFD information page
* Fixed issue where sometimes setting COM frequencies (especially from nearest or information pages) would result in an offset incorrect frequency set in standby
* Fixed sources of 2.5deg oscillation at cruise and improved accuracy of GPS and RNAV lateral guidance

## Known Issues
* Vectors To Final auto-switching the CDI will only work if you have not chosen VECTORS as the transition and you select 'ACTIVATE VECTORS TO FINAL' from the PFD; this will be fixed in the next release. For now, if you don't follow this flow, you will need to manually switch the CDI source for LOC/ILS approaches when VTF is activated.
* Activating VTF when you are past the FAF (as measured along the final approach course) will cause LNAV to sequence the active leg beyond the FAF. To avoid this, do not activate VTF until you are in a position to intercept the inbound course to the FAF.
* World Map imports from Navigraph and Simbrief do not include airways, so airways will not be added to the G1000 NXi flight plan when the plan was imported to the World Map from one of these sources.

## Heads Up!
* VNAV now deactivates upon reaching the last constraint (cyan altitude in FPL) prior to a VNAV ineligible leg, such as a MANSEQ, Procedure Turn or Hold. Be aware that if you have a MANSEQ leg at the end of your arrival procedure, without manual intervention, you can (and likely will) end up too high to reasonable descend for the approach. You have three options to navigate this: (1) Manually descend as is reasonable at your discretion; (2) delete the MANSEQ leg to allow VNAV to recalculate by directly connecting the end of the arrival with the beginning of the approach or (3) activate the approach (or proceed direct to the IAF) and VNAV will attempt to calculate a path up to 6 degrees from your current position to the next constraint.
* GPS, LOC, and VOR modes now ARM! Be aware that you will need to be on an intercept course and within capture distance of the desired flight path before those modes will become active.
* The GPS flight plan sequencing will enter SUSP under the following conditions: when reaching a manual termination leg (holds, manual sequence) and when reaching the final leg of the plan. This is actually correct behavior. To exit out of SUSP (for example, if you got to the end of a plan and then loaded more waypoints), hit the SUSP softkey in the middle of the PFD.
* Changing the CDI source drops the autopilot into ROL mode. This is the correct behavior, intended to keep the airplane held in the same attitude until the pilot reselects appropriate guidance.
* The NXi’s traffic advisory system (TAS) will now start in STANDBY mode by default. While in this mode it will not issue any advisories nor will traffic be displayed on any maps. The system will automatically switch from STANDBY to OPERATING mode after takeoff (and back to STANDBY after landing). You can also manually switch TAS to OPERATING mode through the MFD Traffic Map page (use the MFD FMS knobs to change the open MFD page).
* The fuel quantity information on the MFD's sytem page simulates an authentic totalizer. This means it does not actually track the fuel in your tanks, it simply counts how much has been burned and relies on you to tell it what the original quantity was. This means if you add or remove fuel in flight you'll need to manually adjust the starting quantity in the tanks with the buttons on the GAL REM submenu.
* The displayed METAR information on the MFD FPL page reflects real-world weather from the sim live weather METARs, so they may not always match in-game conditions, especially if using a weather preset or custom weather.
