---
layout: post
title: v0.2.0
coverimage: g1000.jpg
---
# Working Title Garmin G1000 NXi v0.2.0

## New Features

- Added support for Activate on the Approach PROC page
- Added brightness settings page on the PFD (controls both the PFD and MFD)
- Added support for adding airways to the flightplan
- Added support for choosing map rotation mode through MFD menu
- Added support for GPS nav when using aircraft that default to LVL mode instead of ROL
- Added DME Window and DME Nav Radio Select Popup on PFD
- Added the map preview to the DirectTo page on the MFD
- Inactive Softkeys now show as dimmed
- Added selected vertical speed bug and data field to vertical speed indicator

## Note About VNAV

VNAV is still a work-in-progress. We’re in the midst of some changes on it and that work is not complete. We made the decision to not hold the entire release up for that and instead release v0.2.0 this week with the finicky VNAV capability. If you’re off-put by imperfection, we advise you to simply leave VNAV off – we’re aware of the current bugs, so don’t need bug reports related to VNAV. For the adventurous, you can work around most VNAV bugs by setting your preselected altitude to 0’.

## Issues Resolved

- Fixed issue where DTO would calculate the turn based on the previous leg instead of the current heading
- Waypoints defined more than once in the flight plan should now display their labels on the map properly
- Added support for additional procedure turn and hold cases
- Headers in FPL page now scale appropriate given the text length
- VNAV should no longer provide guidance past the FAF
- Fixed some issues encountered when DTO was one of the few legs in plan
- Fixed some cases where the GP vertical deviation indicator would show when it should not
- Added better support for Delete Flightplan
- Addressed some cases where VNAV would get stuck in altitude capture and be unable to exit
- Fixed some cases where VNAV tries to climb when it should not
- MFD FPL page active leg arrow now scrolls with the FPL page
- DTO popup should no longer appear behind the FPL page on the PFD or MFD
- Fixed some cases where departures would sequence forward as soon as they were selected
- Addressed a number of flight path calculation errors as well as added support for more intercept leg cases
- Pulsating highlight on FPL page should now be magenta when highlighted on the magenta leg
- PROC page should no longer fail to function on first open
- LPV approaches should no longer target an incorrect position on the runway and should now use GPS altitude instead of baro
- LPV vertical guidance is now calculated using the linear flight path distance and not straight-line distance
- Fixed some cases where the FMA would show the wrong leg information at the start of a flight plan
- Fixed importing flight plans from World Map that contain non-runway specific procedures
- Fixed some visual issues on EIS gauges
- Context menus now preselect the selected item
- When activating VS the current vertical speed is set as reference
- Fixed display issues with FPL Active Legs
- Fixed issue entering and modifying flight plans on the MFD
- The VNAV Profile section in the MFD FPL page now properly displays time to TOD values greater than 1 hour.

## Known Issues

- There are problems with VNAV climbing when hitting ALT mode, which we're still troubleshooting. Be prepared to disable VNAV upon reaching the Bottom of Descent, or do not use VNAV with this version.
- Outer large COM knob only reduces frequency no matter the direction the knob is turned. This is an issue with the cockpit panel behaviors in the sim and has been logged with the MSFS team, but will not be able to be addressed in the NXi package as it is an issue with the base planes.
- Sometimes the flight plan loading from the world map screen is loaded incompletely; this can usually be solved by restarting the flight - we are working on nailing this down.

## Heads Up!
- The GPS flight plan sequencing will enter SUSP under the following conditions: when reaching a manual termination leg (holds, manual sequence) and when reaching the final leg of the plan. This is actually correct behavior. To exit out of SUSP (for example, if you got to the end of a plan and then loaded more waypoints), hit the SUSP softkey in the middle of the PFD.
