---
layout: post
title: v0.6.0
coverimage: nxi.jpg
---
# Working Title G1000 NXi v0.6.0

## New Features

### MAP
- Adds MFD Traffic Map with user config settings.
- Adds the map declutter indicator.

### FMS
- Adds all IAFs as selectable transitions for approaches
- Added visual approaches for all runways at all airports.
- Allows the creation of holds for origin, destination, runways, visual fixes.
- Allows the creation of Direct To Existing to runways or visual approach fixes.
- Cleanup of hold depiction in the flight plan page – removes a duplicate fix after some holds when it shouldn’t appear, sets the hold (specifically HF leg only) to display grey when not active.
- Allows deleting any legs after the destination fix (airport or runway) so that holds can be deleted from the destination segment.
- Improve display of approaches in Select Approach and FPL
- Improves handling of adding approaches, including adding the destination airport to the enroute legs when appropriate.
- Improves handling of adding procedures when a direct to destination is currently active.

### PFD
- Adds OBS Feature for GPS Waypoints.
- Improved PFD NRST page: now properly hides empty lines, displays a message when no airports are within 200NM, generally improved styling and data accuracy.

### MFD
- Adds MFD Page Select infrastructure.
- Adds OBS depiction to the map.

## Issues Resolved
- Fixes issue where the FAF altitude for visual approaches was calculated incorrectly.
- Fixes bug where VOR tracking would fail near the VOR station.
- Fixes issue where VNAV would not set the captured altitude until within 20' - adjusted to set the captured altitude when within 250'.
- Fixes issue where VNAV Window on the MFD would show incorrect signs for deviation, VS Target and VS Required.
- Fixes issue where the GPS DRIVES NAV1 event was not processed and reported back to hardware correctly.
- Fixes issue where sometimes the hold menu could freeze when changing the time.
- Fixes numerous issues with K Events, including a protection for the default VS behavior on the Honeycomb Bravo.
- Fixes display issues with the procedure sequence preview.
- Fixes issue with bearing pointer overflow in cases where the target waypoint is 5 chars.
- Fixes issue where LOC tracking was oversensitive and sometimes caused more hunting than is realistic at higher speeds.
- Fixes issue with GPS bearing pointers displaying incorrect data.
- Fixes left bearing pointer fix name overflowing
- Fixes bug where the PFD inset map does not always reflect the selected orientation.
- Fixes issues where sometimes GPS or NAV would not activate when it should (eased all capture requirements to 110 degrees from DTK and 60% CDI deflection).
- Fixes issue where deleting a hold leg would incorrectly always sequence you past the hold leg
- Fixes auto-tuning so it will put the LOC freq into both actives for Nav1 and Nav2 (unless one of them is the selected CDI source). CDI source auto-switch will switch to whichever Nav source is actively tuned to the appropriate frequency, preferring Nav1 if both are tuned.

## Known Issues
- Outer large COM knob only reduces frequency no matter the direction the knob is turned. This is an issue with the cockpit panel behaviors in the sim and has been logged with the MSFS team, but will not be able to be addressed in the NXi package as it is an issue with the base planes.
- Sometimes the flight plan loading from the world map screen is loaded incompletely; this can usually be solved by restarting the flight - we are working on nailing this down.
- World Map imports from Navigraph and Simbrief do not include airways, so airways will not be added to the G1000 NXi flight plan when the plan was imported to the World Map from one of these sources.
- External camera view HUD does not sync properly with the NXi and may show strange or incorrect data. We expect to be able to resolve this after Sim Update 6.
- Hardware autopilot peripherals may display the selected altitude as 99000. If you can configure it, you must set the altitude to read from index/slot 1 instead of index/slot 0. If it is not possible to configure using the manufacturer software, you may be able to configure it using third party software such as AxisAndOhs, Mobiflight, or spad.next. We expect to be able to remove this workaround after Sim Update 6.
- Invert flight plan has been temporarily disabled and will make a return in the next version.

## Heads Up!
- **GPS, LOC, and VOR modes now ARM!** Be aware that you will need to be on an intercept course and within capture distance of the desired flight path before those modes will become active.
- The GPS flight plan sequencing will enter SUSP under the following conditions: when reaching a manual termination leg (holds, manual sequence) and when reaching the final leg of the plan. This is actually correct behavior. To exit out of SUSP (for example, if you got to the end of a plan and then loaded more waypoints), hit the SUSP softkey in the middle of the PFD.
- Changing the CDI source drops the autopilot into ROL mode. This is the correct behavior, intended to keep the airplane held in the same attitude until the pilot reselects appropriate guidance.
- When exiting a hold, do not delete the HOLD as it will cause flight plan issues.  Press the SUSP key to continue with the flight plan sequence or go direct to another fix.
- The NXi's traffic advisory system (TAS) will now start in STANDBY mode by default. While in this mode it will not issue any advisories nor will traffic be displayed on any maps. You can manually switch TAS to OPERATING mode through the MFD Traffic Map page (use the MFD FMS knobs to change the open MFD page).