---
layout: post
title: v0.5.1
coverimage: g1000.jpg
---
# Working Title G1000 NXi v0.5.1

## Issues Resolved

- Fixed a large number of missing key bindings in the autopilot binding system
- Fixed an issue where FLC speed on the FMA would show too much decimal precision

## Known Issues
- Outer large COM knob only reduces frequency no matter the direction the knob is turned. This is an issue with the cockpit panel behaviors in the sim and has been logged with the MSFS team, but will not be able to be addressed in the NXi package as it is an issue with the base planes.
- Sometimes the flight plan loading from the world map screen is loaded incompletely; this can usually be solved by restarting the flight - we are working on nailing this down.
- World Map imports from Navigraph and Simbrief do not include airways, so airways will not be added to the G1000 NXi flight plan when the plan was imported to the World Map from one of these sources.
- User holds are currently not supported for the destination or for runways; this is coming in the future.
- External camera view HUD does not sync properly with the NXi and may show strange or incorrect data. We expect to be able to resolve this after Sim Update 6.

## Heads Up!
- **GPS, LOC, and VOR modes now ARM!** Be aware that you will need to be on an intercept course and within capture distance of the desired flight path before those modes will become active.
- The GPS flight plan sequencing will enter SUSP under the following conditions: when reaching a manual termination leg (holds, manual sequence) and when reaching the final leg of the plan. This is actually correct behavior. To exit out of SUSP (for example, if you got to the end of a plan and then loaded more waypoints), hit the SUSP softkey in the middle of the PFD.
- Changing the CDI source drops the autopilot into ROL mode. This is the correct behavior, intended to keep the airplane held in the same attitude until the pilot reselects appropriate guidance.
- When exiting a hold, do not delete the HOLD as it will cause flight plan issues.  Press the SUSP key to continue with the flight plan sequence or go direct to another fix.
