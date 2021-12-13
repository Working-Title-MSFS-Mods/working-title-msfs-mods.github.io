---
layout: post
title: v0.10.1
coverimage: g1000.jpg
---
# Working Title Garmin G1000 NXi v0.10.1

## Issues Fixed

* Fixed an issue where some aircraft would get stuck in a failed startup situation
* Fixed incorrect Airspace Alerts group label on MFD setup page
* Removed erroneously added incomplete COM identifer box implementation

## Known Issues
* Vectors To Final auto-switching the CDI will only work if you have not chosen VECTORS as the transition and you select 'ACTIVATE VECTORS TO FINAL' from the PFD; this will be fixed in the next release. For now, if you don't follow this flow, you will need to manually switch the CDI source for LOC/ILS approaches when VTF is activated.
* Activating VTF when you are past the FAF (as measured along the final approach course) will cause LNAV to sequence the active leg beyond the FAF. To avoid this, do not activate VTF until you are in a position to intercept the inbound course to the FAF.
* World Map imports from some third party flight planning tools may sometimes not load correctly into the NXi. When this occurs, no legs/waypoints are lost, however they may not show as legs within airways on the FPL view, and instead show as standard enroute legs.

## Heads Up!
* VNAV now deactivates upon reaching the last constraint (cyan altitude in FPL) prior to a VNAV ineligible leg, such as a MANSEQ, Procedure Turn or Hold. Be aware that if you have a MANSEQ leg at the end of your arrival procedure, without manual intervention, you can (and likely will) end up too high to reasonable descend for the approach. You have three options to navigate this: (1) Manually descend as is reasonable at your discretion; (2) delete the MANSEQ leg to allow VNAV to recalculate by directly connecting the end of the arrival with the beginning of the approach or (3) activate the approach (or proceed direct to the IAF) and VNAV will attempt to calculate a path up to 6 degrees from your current position to the next constraint.
* GPS, LOC, and VOR modes now ARM! Be aware that you will need to be on an intercept course and within capture distance of the desired flight path before those modes will become active.
* The GPS flight plan sequencing will enter SUSP under the following conditions: when reaching a manual termination leg (holds, manual sequence) and when reaching the final leg of the plan. This is actually correct behavior. To exit out of SUSP (for example, if you got to the end of a plan and then loaded more waypoints), hit the SUSP softkey in the middle of the PFD.
* Changing the CDI source drops the autopilot into ROL mode. This is the correct behavior, intended to keep the airplane held in the same attitude until the pilot reselects appropriate guidance.
* The NXi’s traffic advisory system (TAS) will now start in STANDBY mode by default. While in this mode it will not issue any advisories nor will traffic be displayed on any maps. The system will automatically switch from STANDBY to OPERATING mode after takeoff (and back to STANDBY after landing). You can also manually switch TAS to OPERATING mode through the MFD Traffic Map page (use the MFD FMS knobs to change the open MFD page).
* The fuel quantity information on the MFD's sytem page simulates an authentic totalizer. This means it does not actually track the fuel in your tanks, it simply counts how much has been burned and relies on you to tell it what the original quantity was. This means if you add or remove fuel in flight you'll need to manually adjust the starting quantity in the tanks with the buttons on the GAL REM submenu.
* The displayed METAR information on the MFD FPL page reflects real-world weather from the sim live weather METARs, so they may not always match in-game conditions, especially if using a weather preset or custom weather.
