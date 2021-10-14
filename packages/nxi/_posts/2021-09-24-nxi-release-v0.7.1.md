---
layout: post
title: v0.7.1
coverimage: g1000.jpg
---
# Working Title G1000 NXi v0.7.1

## Issues Resolved
* Fixes bug with APR button press not sending the correct input value to the approachPressed method in AP with certain key events.
* Fixes bug where in a climb the current altitude, and not the selected altitude, was displayed in the MFD FPL page for cruise advisory altitudes.
* Fixes bug with GS/GP activation causing VNAV to set alt hold when VNAV remained on or armed.
* Fixes bug with Vertical Deviation Indicator showing VNAV deviation even when GP is active.
* Fixes bug where VNAV would not descend to a constraint if the next constraint was only 100 feet below the current constraint.
* Fixes bug where VNAV would remain armed after the LOC autoswitch.
* Fixes bug with Altitude Capture when capture is actived when level or near level
* Fixes bug where after a missed approach from an ILS/LOC approach and resequencing to an RNAV approach for the same runway would incorrectly switch to LOC again.
* Fixes calculation and display of vertical direct FPA and advisory altitudes when constraint is not the direct-to target, but is in the current constraint segment.
* DA40NG system page now shows engine load gauge instead of manifold pressure.
* Adjusted display of EGT gauge on DA40NG, SR22, G36 to show the EGT range better since these 3 aircraft strangely max out at 1200F compared to the normal 1600 of the other piston aircraft.
* Fix DA62 aux tank display to show the level instead of the capacity.

## Heads Up!
* VNAV now deactivates upon reaching the last constraint (cyan altitude in FPL) prior to a VNAV ineligible leg, such as a MANSEQ, Procedure Turn or Hold. Be aware that if you have a MANSEQ leg at the end of your arrival procedure, without manual intervention, you can (and likely will) end up too high to reasonable descend for the approach. You have three options to navigate this: (1) Manually descend as is reasonable at your discretion; (2) delete the MANSEQ leg to allow VNAV to recalculate by directly connecting the end of the arrival with the beginning of the approach or (3) activate the approach (or proceed direct to the IAF) and VNAV will attempt to calculate a path up to 6 degrees from your current position to the next constraint.
* GPS, LOC, and VOR modes now ARM! Be aware that you will need to be on an intercept course and within capture distance of the desired flight path before those modes will become active.
* The GPS flight plan sequencing will enter SUSP under the following conditions: when reaching a manual termination leg (holds, manual sequence) and when reaching the final leg of the plan. This is actually correct behavior. To exit out of SUSP (for example, if you got to the end of a plan and then loaded more waypoints), hit the SUSP softkey in the middle of the PFD.
* Changing the CDI source drops the autopilot into ROL mode. This is the correct behavior, intended to keep the airplane held in the same attitude until the pilot reselects appropriate guidance.
* When exiting a hold, do not delete the HOLD as it will cause flight plan issues. Press the SUSP key to continue with the flight plan sequence or go direct to another fix.
* The NXi’s traffic advisory system (TAS) will now start in STANDBY mode by default. While in this mode it will not issue any advisories nor will traffic be displayed on any maps. The system will automatically switch from STANDBY to OPERATING mode after takeoff (and back to STANDBY after landing). You can also manually switch TAS to OPERATING mode through the MFD Traffic Map page (use the MFD FMS knobs to change the open MFD page).
* The fuel quantity information on the MFD's sytem page simulates an authentic totalizer.  This means it does not actually track the fuel in your tanks, it simply counts how much has been burned and relies on you to tell it what the original quantity was.   This means if you add or remove fuel in flight you'll need to manually adjust the starting quantity in the tanks with the buttons on the GAL REM submenu.

## Known Issues
* Outer large COM knob only reduces frequency no matter the direction the knob is turned. This is an issue with the cockpit panel behaviors in the sim and has been logged with the MSFS team, but will not be able to be addressed in the NXi package as it is an issue with the base planes.
* Sometimes the flight plan loading from the world map screen is loaded incompletely; this can usually be solved by restarting the flight - we are working on nailing this down.
* World Map imports from Navigraph and Simbrief do not include airways, so airways will not be added to the G1000 NXi flight plan when the plan was imported to the World Map from one of these sources.
* External camera view HUD does not sync properly with the NXi and may show strange or incorrect data. We expect to be able to resolve this after Sim Update 6.
* Hardware autopilot peripherals may display the selected altitude as 99000. If you can configure it, you must set the altitude to read from index/slot 1 instead of index/slot 0. If it is not possible to configure using the manufacturer software, you may be able to configure it using third party software such as AxisAndOhs, Mobiflight, or spad.next. We expect to be able to remove this workaround after Sim Update 6.