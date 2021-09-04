---
layout: post
title: v0.5.0
coverimage: g1000.jpg
---
# Working Title G1000 NXi v0.5.0
## New Features

- Automatic CDI switching for ILS approaches
- Automatic CDI slewing for ILS approaches
- TCAS traffic display on the MFD and PFD maps
- Completely overhauled AP guidance system including new ILS guidance and manual hold guidance, and all proper armed modes
- Revamped FMA with new FLC speed value, proper arm -> active transition green alerting, failed mode yellow alerting, and AP disconnect yellow alerting
- Ability to select map terrain modes (Absolute and Relative)
- Map waypoint display settings
- Map declutter
- NEXRAD
- Settings persistence for wind display, SVT, baro units, map terrain, NEXRAD, waypoint display options, traffic, which PFD map is displayed, and more
- Manual holds via the FPL menu
- ADF tuning and selection of an ADF bearing pointer
- Display of the approach fix type from the nav data on the flight plan and FMA (IAF, FAF, MAP)
- Overspeed caution colors on the airspeed digits
- Overspeed barber pole
- Better XPDR menu now using sim-integrated ident events and simvars
- FPL page autoscroll and cursor disable
- New additonal VNAV toggle H event for hardware users (AS1000_VNAV_TOGGLE)
- Flight plan load from world map is now skipped for bushtrips (a plan can still be entered in the avionics)

## Issues Resolved

- Fixed an issue where the PFD select airway menu would not close when the airway was loaded
- DF legs in the navdata should no longer ignore the provided turn direction
- Fixed a number of issues with incorrectly selected and/or calculated hold entries
- Corrected the mask of the attitude indicator ladder to avoid unwanted overflow
- Fixed an issue where some procedures would not load from the world map due to bad data from the sim
- Selecting an approach should no longer always cancel a DTO
- Fixed issue where vertical deviation indicator would disappear in APR unless VNV was armed
- VNAV vertical path calculator will no longer improperly consider departure constraints
- GPS bearing pointers should now show the bearing to the leg terminator
- Horizontal deviation indicator in HSI map mode should no longer show 0 deviation when in a NO DTK/NO XTK conditions
- CDI needle for GPS guidance should now properly hide where there is no lateral navigation guidance computed
- Airways should no longer be duplicated multiple times when a world map plan is imported
- On DTO and DF legs, XTK/DTK indications should immediately show the values for the final track to the fix instead of the initial turn
- Fixed an issue where the airport icon rotation on the map would rotate in the opposite direction for some icons
- Fixed some issues where approach navdata that indicated angle data was interpreted as an altitude restriction
- Fixed an issue where LNAV would sometimes immediately sequence past altitude-termination legs at the beginning of departures when they were first loaded into the flight plan
- Active VNV Profile should no longer show the wrong altitude when in a DTO
- Adjusted the artificial horizon, map, SVT topo colors even more towards the real units
- Fixed a number of SUSP issues related to procedure turns and holds
- Fixed an issue where approach altitude restrictions would sometimes fail to display when an arrival was loaded previously
- MFD page menu should now close using the CLR key
- PFD marker beacon alerts should no longer display out of sync when moving over markers rapidly
- MFD page menu now has the appropriate MFD specific styling
- Altitude restrictions should now apply to the beginning of, and not end of, a procedure turn or hold
- On the wind overlays, when wind speed is zero the direction arrows won't spazz out


## Known Issues
- Outer large COM knob only reduces frequency no matter the direction the knob is turned. This is an issue with the cockpit panel behaviors in the sim and has been logged with the MSFS team, but will not be able to be addressed in the NXi package as it is an issue with the base planes.
- Sometimes the flight plan loading from the world map screen is loaded incompletely; this can usually be solved by restarting the flight - we are working on nailing this down.
- World Map imports from Navigraph and Simbrief do not include airways, so airways will not be added to the G1000 NXi flight plan when the plan was imported to the World Map from one of these sources.
- User holds are currently not supported for the destination or for runways; this is coming in the future.

## Heads Up!
- **GPS, LOC, and VOR modes now ARM!** Be aware that you will need to be on an intercept course and within capture distance of the desired flight path before those modes will become active.
- The GPS flight plan sequencing will enter SUSP under the following conditions: when reaching a manual termination leg (holds, manual sequence) and when reaching the final leg of the plan. This is actually correct behavior. To exit out of SUSP (for example, if you got to the end of a plan and then loaded more waypoints), hit the SUSP softkey in the middle of the PFD.
- Changing the CDI source drops the autopilot into ROL mode. This is the correct behavior, intended to keep the airplane held in the same attitude until the pilot reselects appropriate guidance.
- When exiting a hold, do not delete the HOLD as it will cause flight plan issues.  Press the SUSP key to continue with the flight plan sequence or go direct to another fix.
