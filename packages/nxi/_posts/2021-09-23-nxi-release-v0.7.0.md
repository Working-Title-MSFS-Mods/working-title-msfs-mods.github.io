---
layout: post
title: v0.7.0
coverimage: g1000.jpg
---
# Working Title G1000 NXi v0.7.0

## New Features

### PFD
* VSI shows correct Required VS for the active VNAV or LPV path data source, with correct source switching based on mode.
* FMA correctly displays MANSEQ legs depicting the heading for the manual sequence.
* Vertical Deviation window is displayed starting 1 minute prior to TOD whenever VNAV path is available.
* Vertical deviation window displays whenever either a valid VNAV path or LPV GP path is available.
* Timer/Ref Page now has a contextual page menu that allows v-speed depiction on the airspeed tape to be hidden or shown in bulk, along with adding a menu item to reset all VSpeeds.
* Timer/Ref Page now correctly depicts a speed that has been changed from the airframe default with a (*).
* Altimeter now correctly depicts the current VNAV constraint, rather than the VNAV target; this includes showing the last constraint, even after passing it, when it was an end-of-path and there's not currently a valid VNAV path.

### MFD
* VNAV profile view enhancements:
    * Adds time to TOD/BOD (bod calculates against vnav target, not next constraint)
    * Displays next constraint (shows leg and altitude for next constraint, not BOD target)
    * Shows Required VS and Deviation only beginning 1 minute before TOD and thereafter.
    * Hides data when in VNAV suspended state prior to VNAV ineligible leg.
* EIS system enhancements:
    * Adds support for the definition of additional System and Lean engine pages.
    * Adds default engine page configurations for every stock plane with a G1000.
    * Adds new EGT/CHT gauge type with configurable differences in cylinder temps.
    * Adds fully functional cylinder select and lean assist mode.
    * Adds fuel totalizer with realistic manual adjustments to fuel remaining.

### FPL Pages
* Hides DTK, DIS, and ALT data on waypoints behind the aircraft.
* Properly shows heading for MANSEQ legs.
* Adds advisory (white) and target (cyan) altitudes on MFD FPL pages.
* Entire plan now drawn on MFD when FPL is selected.

### Miscellaneous
* VNAV now properly suspends when the last constraint prior to a VNAV ineligible leg. Examples include MANSEQ legs, proc turns and holds. VNAV will level at the prior constraint and deactivate until passing the ineligible leg, at which point the user may re-arm VNAV.
* VNAV now attempts to calculate a valid path, up to 6 degrees, from the present position to the direct-to target when a direct to or activate approach is executed.
* Traffic advisory mode now automatically switches with takeoff and landing.
* Corrected and restored the option to invert the loaded flight plan.

## Issues Resolved
* Fixes incorrect display of direction in hold menu.
* Fixes non-normalized bearings in the nearest airport list.
* Fixes non-normalized bearings in the direct to menu.
* Fixes problems with deletion of active leg on the ground.
* Fixes distances not counting down when OBS is active.
* Fixes disappearing cursor when deleting flight plan.
* Fixes various display issues in scrolling selectors.
* Fixes duplicate legs when selecting a different approach.
* Fixes mismatched colors on some section titles.
* Fixes a handful of EIS alignment/display issues.
* Fixes bug displaying target altitude when direct to a VNAV constraint.
* Fixes bug displaying active leg arrow when a direct to is complete.
* Fixes bug causing incorrect coloring of PFD VDEV diamond.
* Fixes bug displaying incorrect transition names in procedure selection.
* Fixes issue with ‘or’ appearing in Select Approach even when an approach can’t load
* Fixes issue with PFD FPL page showing a blank line when a DIRECT TO EXISTING was executed
* Fixes issue with VNAV DIRECT FPA being constantly incorrectly calculated.
* Fixes bugs with display of vertical deviation and required VS values.
* Fixes bug with properly capturing the selected altitude when above the vnav target altitude.
* Improves display of VSpeed values in menu and on tape.
* Improves display of softkey gradients and borders.

## Heads Up!
* VNAV now deactivates upon reaching the last constraint (cyan altitude in FPL) prior to a VNAV ineligible leg, such as a MANSEQ, Procedure Turn or Hold. Be aware that if you have a MANSEQ leg at the end of your arrival procedure, without manual intervention, you can (and likely will) end up too high to reasonable descend for the approach. You have three options to navigate this: (1) Manually descend as is reasonable at your discretion; (2) delete the MANSEQ leg to allow VNAV to recalculate by directly connecting the end of the arrival with the beginning of the approach or (3) activate the approach (or proceed direct to the IAF) and VNAV will attempt to calculate a path up to 6 degrees from your current position to the next constraint.
* GPS, LOC, and VOR modes now ARM! Be aware that you will need to be on an intercept course and within capture distance of the desired flight path before those modes will become active.
* The GPS flight plan sequencing will enter SUSP under the following conditions: when reaching a manual termination leg (holds, manual sequence) and when reaching the final leg of the plan. This is actually correct behavior. To exit out of SUSP (for example, if you got to the end of a plan and then loaded more waypoints), hit the SUSP softkey in the middle of the PFD.
* Changing the CDI source drops the autopilot into ROL mode. This is the correct behavior, intended to keep the airplane held in the same attitude until the pilot reselects appropriate guidance.
* When exiting a hold, do not delete the HOLD as it will cause flight plan issues. Press the SUSP key to continue with the flight plan sequence or go direct to another fix.
* The NXi’s traffic advisory system (TAS) will now start in STANDBY mode by default. While in this mode it will not issue any advisories nor will traffic be displayed on any maps. The system will automatically switch from STANDBY to OPERATING mode after takeoff (and back to STANDBY after landing). You can also manually switch TAS to OPERATING mode through the MFD Traffic Map page (use the MFD FMS knobs to change the open MFD page).

## Known Issues
* Outer large COM knob only reduces frequency no matter the direction the knob is turned. This is an issue with the cockpit panel behaviors in the sim and has been logged with the MSFS team, but will not be able to be addressed in the NXi package as it is an issue with the base planes.
* Sometimes the flight plan loading from the world map screen is loaded incompletely; this can usually be solved by restarting the flight - we are working on nailing this down.
* World Map imports from Navigraph and Simbrief do not include airways, so airways will not be added to the G1000 NXi flight plan when the plan was imported to the World Map from one of these sources.
* External camera view HUD does not sync properly with the NXi and may show strange or incorrect data. We expect to be able to resolve this after Sim Update 6.
* Hardware autopilot peripherals may display the selected altitude as 99000. If you can configure it, you must set the altitude to read from index/slot 1 instead of index/slot 0. If it is not possible to configure using the manufacturer software, you may be able to configure it using third party software such as AxisAndOhs, Mobiflight, or spad.next. We expect to be able to remove this workaround after Sim Update 6.