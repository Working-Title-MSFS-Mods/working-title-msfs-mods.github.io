---
layout: post
title: v0.11.0
coverimage: nxi.jpg
---

# Working Title Garmin G1000 NXi v0.11.0

## Changes

### Autopilot
* Roll mode now respects a minimum bank angle of 6 degrees and a maximum bank angle of 22 degrees.
    * If bank angle is below the minimum, roll mode will level the wings.
    * If bank angle is above the maximum, roll mode will reduce bank angle to the maximum.

### Flight Planning
* Improved behavior around loading an approach while on a Direct-To (DTO) toward an existing runway fix:
    * If an arrival is not loaded and the loaded approach is assigned to the same runway, then the DTO is preserved (except now the runway leg is in the approach).
    * If an arrival is not loaded and the loaded approach is assigned to a different runway, then a DTO random is created to the old runway.
    * If an arrival is loaded, the runway leg in the arrival is not removed and the DTO is preserved. This happens regardless of whether the loaded approach is assigned to the same runway.
* Improved calculation of flight paths for legs that involve intercepting a course, radial, or DME. The calculated flight path is now allowed to deviate from the prescribed intercept course or heading if doing so is required to achieve the intercept or to avoid an undesirable flight path (such as navigating around the world).
* Improved turn anticipation between certain types of legs.
* Fixed a bug that prevented loading airways if no origin or departure was loaded in the flight plan.
* Fixed certain instances where TOD and BOD would be incorrectly calculated for the first altitude constraint in the flight plan or when there is an intervening VNAV-ineligible leg.
* Fixed a bug where LNAV would sometimes sequence past an altitude leg while the plane was still below the prescribed altitude.
* Fixed a regression in 0.10.x where removing a waypoint in an airway would also remove all subsequent waypoints in the airway.
* Fixed multiple scenarios where adding or removing waypoints in airways would lead to a malformed flight plan.
* Fixed a bug where LNAV would be unable to sequence normally, resulting in the plane flying in irregular circles.
* Fixed a bug where the user was unable to activate a Direct-To to a waypoint not in the flight plan from the PFD if another Direct-To to a non-flight plan waypoint had previously been activated.
* Fixed a bug where the NRST airport page load approach function would not work if the airport was already loaded into the PROC select page.
* Fixed a bug where the flight path for a Direct-To with a user-defined course would be incorrectly calculated if the plane was too far from the Direct-To waypoint.

### Map Display
* Changed the styling and positioning of map waypoint labels to better match the real unit.
* Certain portions of Hold and Procedure Turn legs are now drawn with arrows and dashed lines as is done by the real unit.
* When a Direct-To leg with a user-defined course is focused on the MFD FPL page, the map will now keep both the plane and the Direct-To waypoint in view instead of only the waypoint.
* Fixed a bug where the 1 km metric map range was replaced with a 500 meter range.
* Fixed a bug where the drawn flight path would sometimes not update immediately after deactivating OBS mode.

### PFD
* Added yaw damper indications to PFD FMA.
* The HSI will now display cross-track text when more than 2 dots off track.
* The FMA now correctly displays the Direct-To icon while navigating a Direct-To with a user-defined course.
* VOR ident, distance, and bearing information are no longer shown when not receiving a signal.
* Map options under the 'Map/HSI' softkey menu are now disabled when the PFD map layout is set to 'MAP OFF'.
* Corrected coloration of CAS advisory-class messages from green to white.
* Adjusted the background of V-speed displays.
* Fixed misformatted text in the ADF/DME settings window.
* Fixed several instances where failure boxes (red 'X') were positioned incorrectly.
* Fixed a bug where the traffic status indicator would not display on the HSI map.

### MFD
* The Navigation Data Bar 'ETA' field now displays the estimated time of arrival to the active waypoint instead of the estimated time enroute to the destination.
* Turning the inner FMS knob counter-clockwise on the MFD FPL page no longer opens the Page Select menu when the cursor is active.
* MFD FPL page now disables the cursor when it is closed.
* The Bonanza MP gauge now displays values to the tenths place.
* Fixed a bug that would cause the MFD VNAV profile to show an invalid TOD for flight path angles near 0.
* Fixed a bug where the range rings on the Traffic Map would not be visible until the user changed the map range.

### Settings
* Added adjustable date- and time-related user settings in the System Setup page.
* Bearing info boxes now respect user distance unit preference.
* OAT display now respects user temperature unit preference.
* WPT and NRST pages now respect all display units settings.
* Added user-defined units support for all Minimums displays and inputs.

### Miscellaneous
* Numerous performance optimizations.
* Minimums values are now written to the `DECISION HEIGHT` and `DECISION ALTITUDE MSL` simvars. The set/increase/decrease decision height and decision altitude key events are also supported.
* VFR transponder code is now set by world region: 1200 for North America and Australia, 7000 for everywhere else.
* Changed the behavior of the Course field in the Direct-To menus to match the real unit. Scrolling the cursor over the field no longer causes the Direct-To to load with a user-defined course. Instead, turning the inner FMS knob while the Course field is highlighted will activate editing, and pressing ENTER will accept the edit and CLR will cancel the edit. Activating editing of the Course field (even if it is subsequently canceled with the CLR button) will cause the Direct-To to load with a user-defined course. To revert to a non-user-defined course, the Direct-To menu must be closed and re-opened.
* The FPL menu cursor no longer disappears after certain flight plan modifications.
* Fixed a bug where loading or activating an approach would overwrite the standby NAV frequency field even if the active field was already tuned to the approach frequency.
* Experimental fix for occasional CTD when loading a flight.

## Known Issues
* Deactivating AP NAV mode with GPS as the nav source will turn OBS mode off if the latter is active.

## Heads Up!
* World Map imports from some third party flight planning tools may sometimes not load correctly into the NXi. When this occurs, no legs/waypoints are lost, however they may not show as legs within airways on the FPL view, and instead show as standard enroute legs.
* GPS, LOC, and VOR modes now _arm_! Be aware that you will need to be on an intercept course and within capture distance of the desired flight path before those modes will become active.  If you are not on an intercept course, you can, _eg_, enable HDG mode to bring you onto an intercept course and the armed mode will activate when ready.
* The fuel quantity information on the MFD's sytem page simulates an authentic totalizer. This means it does not actually track the fuel in your tanks, it simply counts how much has been burned and relies on you to tell it what the original quantity was. This means if you add or remove fuel in flight you'll need to manually adjust the starting quantity in the tanks with the buttons on the GAL REM submenu.
* The displayed METAR information on the MFD FPL page reflects real-world weather from the sim live weather METARs, so they may not always match in-game conditions, especially if using a weather preset or custom weather.