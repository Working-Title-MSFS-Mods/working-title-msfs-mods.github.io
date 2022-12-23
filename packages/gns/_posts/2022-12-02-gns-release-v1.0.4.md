---
layout: post
title: v1.0.4
coverimage: gns.jpg
---
# Working Title GNS v1.0.4

## Changes

* No longer toggle CDI source when nav1/nav2 select is pressed.
* Improved handling of CDI source select commands.
* Added support for pitch hold key events for DC-6 compatibility.
* Improved VNAV message inhibit logic.
* Fixed VNAV distance calculations.
* Fixed display of procedure turns in flight plan and arc map modes.
* Fixed DTO cancel being inoperative on an empty flight plan.
* Fixed broken display of long airport names in DTO dialog.
* Fixed bugs related to disabling of keyboard mode.
* Fixed occasional issue where COM1 frequencies would display as 0.0.

## For Cockpit Developers

* Properly unset AP avionics managed mode and various simvars when GPS is disabled.
* Set instrument to non-interactive when GPS is disabled.