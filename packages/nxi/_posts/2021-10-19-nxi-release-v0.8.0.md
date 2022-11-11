---
layout: post
title: v0.8.0
coverimage: nxi.jpg
---
# Working Title Garmin G1000 NXi v0.8.0

## New Features
* The missed approach segment will now be added to the flightplan when an approach is selected.
* Missed approach segments are now properly displayed on the moving maps.
* The missed approach segment can now be flown with the AP by exiting SUSP, activating a missed approach leg, or going direct to a missed approach leg.
* Support for LNAV, LNAV+V, LNAV/VNAV, LP, and LP+V RNAV approach type guidance has been added.
* RNAV approach names and flight plan headers have been updated to reflect available RNAV guidance.
* Maps can now be panned using the bezel RANGE joystick.
* MFD flight plan map now automatically pans and zooms to focus on the selected flight plan leg.
* Station METAR information is now displayed on the MFD flight plan page when a valid airfield waypoint or origin/destination header is selected.
* Barometer keybindings such as the 'B' key now react appropriately within the avionics themselves.
* Support for the existing ScaleFactor, RedBlink, and CursorStyle tags in the EIS has been added.
* A new EIS tag, Margins, has been added to give discrete control of individual EIS gauge margins.
* Sim GPS simvar synchronization has been added (such as GPS WP DESIRED TRACK, GPS WP CROSS TRACK, NAV HSI, etc).
* Sim external camera view instruments are now supported.
* Support for the NXi when paired with the KAP140 autopilot has been added (including on the MilViz Porter).
* The autopilot mode annunciator is now properly disabled when paired with a KAP140 autopilot.
* Support for wing leveler mode has been added to the NXi autopilot.
* Altitude capture preselector behavior when using exernal hardware or binding software has now been restored and no longer requires specific indexing/slots.
* SVT mode on the PFD now includes support for the Flight Path Marker and Horizon Compass.

## Issues Resolved
* Exernal camera view instruments and hardware such as the Logitech Autopilot Panel will no longer display 99000 ft as the selected altitude.
* Improved handling of events switchign between GPS and NAV1.
* Fixed computation of LPV distances after adding a missed approach or with a destination that's not a runway.
* Fixed incorrect scaling of font size in approach headers.
* Removed potential infinite looping conditions in map projection calculations that could cause the sim to freeze.
* Nav autotune when selecting an approach should appropriately set the standby frequency, and swap standby/active if necessary.
* Fixed incorrect display of primary frequency in approach selection menu.
* Fixed use of incorrect units in in several distance calculations.
* Improved turn anticipation in various edge cases.
* Fixed some incorrect indications in vertical speed and deviation indicators.
* Fixed display of names for circling approaches.
* Fixed issue with gyro drift causing heading select to not work correctly.
* Fixed loading of frequencies for GPS or NDB approaches.
* Fixed issue where inverting a flight plan could result in an empty plan.
* Fixed an issue where the flight plan would be corrupted when attempting to load an airway from an entry already inside an airway segment.
* Fixed an issue where some airway loading operations could result in duplicated legs.
* Pressing CLR when adjusting the timer in the PFD Timer/Ref menu should now undo the current edit and show the current timer value.
* Pressing CLR now closes the PFD Timer/Ref menu when not adjusting any of the inputs.
* Improved the projection of the attitude indicator and artificial horizon line when SVT is active.
* Direct-to menu should now properly auto-populate with the current direct-to target, the active plan leg, or the next plan leg that is a valid direct-to target.
* PROC arrival and approach pages should now auto-populate in all cases where the direct-to target is a valid airport.
* The user should no longer incorrectly be presented with the course reversal confirmation if the approach starts with a genuine procedure turn leg (and not a hold-to-fix leg).
* NEXRAD should now properly read the previously saved state on startup.

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
