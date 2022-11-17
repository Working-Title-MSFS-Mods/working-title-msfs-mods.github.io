---
layout: post
title: v1.0.1
coverimage: gns.jpg
---
# Working Title GNS v1.0.1

## Additions
* Added backcourse/rev mode to autopilot.
* Added panel.xml support to disable autopilot nav mode arming `<DisableAPNavArm>`.
* Added panel.xml support to disable autopilot backcourse mode `<DisableAPBackCourse>`.
* Added panel.xml support for independent flight director `<SupportAPFlightDirector>`.

## Changes

* Removed unused wind indicator options from map setup page.
* Removed the traffic failed banner indicator from the GNS traffic map.
* Autopopulate two-character prefixes for waypoint selection outside US
* Terrain map now uses the new Garmin relative terrain colors (red at 100 feet below aircraft instead of 500 feet).
* Fixed event handling causing some buttons to be INOP on third-party aircraft.
* Fixed satellite initialization screen freeze when at a negative altitude.
* Fixed issue with the incorrect approach preview being displayed on the PROC APPROACH page.
* Fixed rounding bug with some frequencies in the com/nav frequency pane.
* Fixed issue with World Map flight plans that include airways.
* Fixed issues with LOAD and ACTIVATE options on the PROC APPROACH page.
* Fixed issue where closing Aux Setup Page 2 would result in a blank screen.
* Fixed issue where the VNAV page altitude was focused when opening the page.
* Fixed issue with the map where indicated heading/gyro drift could impact the depiction of traffic and the own ship icon.
* Fixed issue where VOR frequencies listed on Nearest VOR Page could not be selected or set to the standby NAV frequency.
* Fixed issue where the wrong leg could be selected for a direct to existing if the same fix/icao existed twice in the flight plan.
* Fixed issue where going direct to a flight plan leg that was previously active in OBS mode would cause an incorrect direct to leg to be rendered.