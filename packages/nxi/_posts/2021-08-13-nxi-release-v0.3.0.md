# Working Title Garmin G1000 NXi v0.3.0

## New Features

- Added support for user waypoints, custom arrival and departure waypoints and POIs in the world map flight plan import (foundation for user/pilot waypoints is now in place, but interface for adding/removing is not yet complete).
- Implemented persistent settings for map settings and backlight settings.
- Implemented auto brightness based on time-of-day.
- SynVis and Map colors Improved.
- Implemented better airway management and display on the FPL pages.
- Hold entries have been added (for holds in procedures).
- Implemented altitude alerter on the PFD.
- Softkey Menu indicators Improved
- The active flight plan information section no longer hides part of the map.
- The PFD range knob no longer changes map range when neither the PFD inset map nor the HSI map are open.
- The maps in MFD Waypoint Info and MFD Direct To can now be zoomed.
- Adds world map airway import (note that Navigraph and Simbrief exports do not have airways when loaded into the world map), so if airways are included in the routing on the world map, they will be imported.
- Adds DME window to PFD.

## Issues Resolved
- Implemented fixes and precautions against possible CTD scenarios.
- Fixes for flight path calculation and most cases of incorrect IAF legs, direct to and others.
- Fixed some issues with VNAV, including vnav climbing at the end of the path.
- Wind overlay now shows NO WIND DATA when on the ground < 30kts.
- Many flight plan leg arrow issues fixed.
- Fixed issues with lnav sequencing after direct to
- Fixed issues with activate leg menu item on certain segments
- Fixed issue with displaying proper vnav altitudes for the plan while on a direct to existing
- Fixed issue with horizontal deviation indicator not displaying correctly after NO LOC was displayed
- Fixed issue with DTO existing initial heading sometimes causing DTO to be drawn incorrectly on the map
- Fixed soft menu indications where the selected item should be annunciated with a green bar
- Fixed speed trend vector showing early
- Fixed possible issue with nav mode in APPR/GP
- Fixed bug where GPS needles would show DTK 0 instead of current heading with no plan
- Changed default CDI to GPS
- Fixed bugs with activate approach, particularly when activating against a DTO airport
- Fixed ground track bug on CDI Rose view to stick to heading when on ground
- Fixes incorrect behavior where after entering a Direct To, the Flight Plan page would re-open. It will remain open on the MFD if it was open, otherwise it will not open. It will always close the Flight Plan pop-out on the PFD (correct behavior).
- Addressed potential cases of lack of ILS lateral guidance
- Fixed issue where VNAV TOD calculation would end in infinite loop in certain situations
- Fixed issue where map Track Up mode would not properly engage.
- Fixed issue where the PFD marker beacon indicator was not displaying.

## Known Issues
- Outer large COM knob only reduces frequency no matter the direction the knob is turned. This is an issue with the cockpit panel behaviors in the sim and has been logged with the MSFS team, but will not be able to be addressed in the NXi package as it is an issue with the base planes.
- Sometimes the flight plan loading from the world map screen is loaded incompletely; this can usually be solved by restarting the flight - we are working on nailing this down.
- World Map imports from Navigraph and Simbrief do not include airways, so airways will not be added to the G1000NXi flight plan when the plan was imported to the World Map from one of these sources.

## Heads Up!
- The GPS flight plan sequencing will enter SUSP under the following conditions: when reaching a manual termination leg (holds, manual sequence) and when reaching the final leg of the plan. This is actually correct behavior. To exit out of SUSP (for example, if you got to the end of a plan and then loaded more waypoints), hit the SUSP softkey in the middle of the PFD.
