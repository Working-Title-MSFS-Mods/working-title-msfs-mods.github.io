---
layout: package
permalink: /packages/cj4/
title: Intro
coverimage: colddeparture.jpg
coverposition: 30% 45%
---

# Working Title CJ4
The Working Title CJ4 is an improvement mod for the default Citation CJ4 that comes with the [Microsoft Flight Simulator](https://flightsimulator.com).

<div class="alert alert-warning">
    <div class="row">
        <div class="col">
            <h4>Attention!</h4>
            <b>DEPRECATED AS OF AAU1!</b><br>
            We have reworked and improved the default CJ4 and its Avionics in the base simulator with AAU1 in January 2023.<br />
            This mod is not compatible and should <b>not be used</b> anymore. 
        </div>
    </div>
</div>

{% include downloadbutton.html category="cj4" %}
{% include button.html text="Changelog and Older Versions" url="/packages/cj4/releases" %}


## KEY FEATURES

*   FMS - Rockwell Collins Pro Line 21 represented at over 75% accuracy
    *   Over 40 screens/pages of the FMS have been developed
    *   Route planning complete with departure and arrival procedures, airways and direct waypoints, including many procedures and procedure types missing from the default aircraft
    *   Performance init pages including complete takeoff and approach performance calculations, with field lengths and Vspeeds
    *   Custom developed and implemented a flight plan import directly from Simbrief via the FMS, allowing users to spawn without a flight plan, then load a Simbrief OFP/Flight Plan directly over the web (requires internet connection); this feature also makes it easier to fly multiple legs without exiting the simulation session
    *   Custom LNAV and VNAV capabilties reflective of the real aircraft's capabilities
    *   Improved performance of FMS by streamlining data access behind the code
    *   Added custom mechanism for saving and storing default settings to remain persistent between sim sessions
    *   Added transponder functionality and completely redesigned the TUN page for radio tuning
*   PFD/MFD - Major functional and visual enhancements
    *   Navigraph Charts integration on the MFD
    *   Custom font, sizing and coloring introduced to PFD and MFD to improve readability and accuracy of displays
    *   Customized Vspeeds and visibility behavior to reflect the real aircraft
    *   Adjusted the display of data, the visibility of the AoA and other functions to match the real world
    *   Added complete, tracked and stepable checklists to the MFD
    *   Added passenger briefing menu and announcement playing to the MFD
    *   Added capability to customize the MFD display and use the PLAN view to step through flight plan via the MFD ADV and DSPL MENU functions on the FMS
    *   Added bearing pointer functionality
    *   Rebuilt pitch trim gauge because it was reversed and mislabeled in the default model
*   Flight Model
    *   Adjusted engines to reflect real world performance, including the elimination of reverse thrust.
    *   Adjusted fuel flow with a custom fuel flow utility that accurately tracks and reports fuel usage reflective of real aircraft performance
    *   Tweaked autopilot performance, gear/flap/spoiler drag and other QoL improvements on the flight characteristics
*   Lights & Sounds
    *   Enhanced exterior lighting, including volumetric lights
    *   Enhanced interior lighting, including cabin lights with adjustable dim level (controlled through our custom MOD SETTINGS menu in the FMS)
    *   Enhanced and growing soundset, including fans and passenger briefings
*   Cockpit Model
    *   Added lighting and functionality to many buttons and knobs in the cockpit model.

## BETA
This is a beta, and as such you will surely encounter bugs and problems with the aircraft and functions. Please log these bugs under Issues at the [Working Title Github Repo](https://github.com/Working-Title-MSFS-Mods/fspackages/issues), and please **TAG THEM** as CJ4 issues.

## OTHER MODS
Because of how the Community folder works, this mod will conflict with any other mod that includes one or more of the same files in the package. We have not included aircraft.cfg or any exterior textures so that the livery mods should work along side this mod. We have incorporated mods, such as the lighting mod from Uwajimaya. You can see where we've included these in the release notes.

### INSTALLATION
Download the release zip file and extract the enclosed folder workingtitle-aircraft-cj4 into your Community folder to enable this mod. An installation of other Working Title packages is not necessary for this mod to function.

### OPERATING NOTES
Thanks to our amazing QA team, and especially to community member Slip for crafting, curating and maintaining the Working Title CJ4 User Guide:
[Operator's Guide](https://docs.google.com/document/d/1qzxPMTSQRkvau8QOi7xUqNvjx9rbww_qHlso5AT5OnI)

By popular demand, there is also a matching SimBrief profile for this mod available.
{% include button.html break=true text="Download SimBrief Profile" url="https://www.simbrief.com/system/dispatch.php?sharefleet=eyJ0cyI6IjE2MDI1MzkxMTUxODMiLCJiYXNldHlwZSI6IkMyNUMiLCJjb21tZW50cyI6IldPUktJTkcgVElUTEUgQ0o0IiwiaWNhbyI6IkMyNUMiLCJuYW1lIjoiQ0lUQVRJT04gQ0o0IiwiZW5naW5lcyI6IkZKNDQtNEEiLCJyZWciOiJONTI1V1QiLCJmaW4iOiIyNTQiLCJzZWxjYWwiOiIiLCJoZXhjb2RlIjoiIiwiY2F0IjoiTSIsInBlciI6IkIiLCJlcXVpcCI6IlNERTJFM0ZHSFJXWFlaIiwidHJhbnNwb25kZXIiOiJMQjEiLCJwYm4iOiJBMUIyQzJEMkQzTzJPM1MyIiwiZXh0cmFybWsiOiIiLCJtYXhwYXgiOiI3Iiwid2d0dW5pdHMiOiJMQlMiLCJvZXciOiIxMDI4MCIsIm16ZnciOiIxMjUwMCIsIm10b3ciOiIxNzExMCIsIm1sdyI6IjE1NjYwIiwibWF4ZnVlbCI6IjU3NjIiLCJwYXh3Z3QiOiIxNzAiLCJkZWZhdWx0Y2kiOiIiLCJmdWVsZmFjdG9yIjoiUDAwIiwiY3J1aXNlb2Zmc2V0IjoiUDAwMDAifQ--" blank=true %}

Thanks to TheFlieger we have a new guide for painters available here that helps address the panel.cfg problems with some liveries: [Repainter's Guide](/packages/cj4/guides/repainter)

### CREDITS
This list is incomplete, but thanks to everyone that contributed from inside and outside the Working Title team.
* mattnischan
* K20017
* cwburnett
* kaosfere
* dga711
* aznricepuff
* metzgergva
* TheFlieger
* musurca
* uwajimaya
* tscharlii
* knighty
* hosky
* dihedral (QA)
* Blanco (QA)
* panourgue (QA)
* SeanPai (QA)
* Slip (QA)
* Syntax (QA)
* Windhover (QA)
* Jukebox (Website pictures)
* AND others!