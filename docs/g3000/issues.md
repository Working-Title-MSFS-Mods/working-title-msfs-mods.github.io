---
layout: main
permalink: /g3000/issues
title: Known Issues
coverimage: masterwarn.jpg
coverposition: left bottom
---

# Known Issues

<div class="accordion accordion-flush mb-4" id="accordion">
<h3>Installation</h3>

{% capture issue %}
## When I copy the mod folder to my Community folder, I get an error saying **the file path name is too long**.
{% endcapture %}
{% capture answer %}
This is a Windows issue. By default, Windows limits file paths to 260 characters. You can disable this limit by modifying the system registry (not as scary as it sounds). Tutorials for how to do so can easily be found with a Google (or Bing) search.
{% endcapture %}
{% include accordionitem.html id="longfilename" h=issue c=answer %}

{% capture issue %}
## The **mod is in my Community folder, but it does not show up in the simulator**.
{% endcapture %}
{% capture answer %}
This problem usually occurs when a subfolder was created during extraction of the archive. You can check this by opening the mod folder in your Community directory. It should contain a `layout.json` and  a `manifest.json` file. If it only contains a subfolder, copy the contents of that one level up, until the beforementioned criteria are met.
{% endcapture %}
{% include accordionitem.html id="folderstructure" h=issue c=answer %}


<h3>General</h3>

{% capture issue %}
## When I use this with the G3X mod I experience **various flight planning bugs**.
{% endcapture %}
{% capture answer %}
Bugs like blank waypoint entries in the GTC active flight plan page and avionics freeze when initiating a Direct To to an approach waypoints are a known issue at the moment.
{% endcapture %}
{% include accordionitem.html id="g3xcombo" h=issue c=answer %}

{% capture issue %}
## I sometimes get **low performance/FPS with the mod**.
{% endcapture %}
{% capture answer %}
The single largest performance sink (when it comes to avionics) is the navigational map. The mod actually uses a completely new code base for the navmap that is _more_ performant than the default. However, the mod also allows many more features to be drawn on the map than is possible with the unmodded map (as well as allowing for two independent navmaps to be displayed on the MFD), which is where performance can start to suffer. Generally, the more _waypoints_ and _text labels_ drawn on the map, the greater the impact on performance.
{% endcapture %}
{% include accordionitem.html id="lowfps" h=issue c=answer %}

{% capture issue %}
## I **can hear sound for some time after closing the simulator**.
{% endcapture %}
{% capture answer %}
[Microsoft Flight Simulator](https://flightsimulator.com) will take an increased amount of time to fully shut down (up to several minutes) when closing the game after starting a flight that uses the road data package. The game window will still close promptly, but the game process will run in the background and game audio can be heard. The process is not frozen and will eventually shut down on its own, however if you wish to speed up the process, you can manually end-task or end-process MSFS through Task Manager.
{% endcapture %}
{% include accordionitem.html id="soundaftershutdown" h=issue c=answer %}



<h3>PFD</h3>

{% capture issue %}
## My **Co-pilot PFD softkeys are nonfunctional in the TBM 930**.
{% endcapture %}
{% capture answer %}
This is not an issue of the G3000 mod but the base sim. There is currently no way for us to address that issue with this mod.
{% endcapture %}
{% include accordionitem.html id="tbmnocopilotkeys" h=issue c=answer %}

{% capture issue %}
## I **no longer have synthetic vision on the PFD** after installing the mod.
{% endcapture %}
{% capture answer %}
The mod introduces the option to toggle synthetic vision on/off and the setting defaults to off. To turn it back on, use the touchscreen controllers and navigate to PFD Home -> PFD Settings -> SVT Terrain Enable. Alternatively, *for the TBM 930 only*, use the PFD softkeys to navigate to PFD Settings -> Altitude Overlays -> Synthetic Terrain.
{% endcapture %}
{% include accordionitem.html id="syntheticvisionoff" h=issue c=answer %}

{% capture issue %}
## I **can't get any VNAV indication**.
{% endcapture %}
{% capture answer %}
VNAV is not modelled yet. Support will be coming with a future update.
{% endcapture %}
{% include accordionitem.html id="novnav" h=issue c=answer %}



<h3>NavMap</h3>

{% capture issue %}
## I **can't find airspaces on the map**.
{% endcapture %}
{% capture answer %}
Airspaces are currently not available to display. The way the game loads data for these features is unreliable at best, and more time is needed to come up with a satisfactory solution to rendering them. Expect them to be added back at a later date.
{% endcapture %}
{% include accordionitem.html id="noairspaces" h=issue c=answer %}

{% capture issue %}
## I **can't set airways in my flightplan**.
{% endcapture %}
{% capture answer %}
Airways are not modelled yet. Support will be coming with a future update.
{% endcapture %}
{% include accordionitem.html id="noairways" h=issue c=answer %}

{% capture issue %}
## I **can't get turn anticipation to show up properly**.
{% endcapture %}
{% capture answer %}
The flight plan renderer currently does not draw turn anticipation arcs or turn to intercept legs. These will be added later.
{% endcapture %}
{% include accordionitem.html id="noturnanticipation" h=issue c=answer %}

{% capture issue %}
## An **airport showed up as serviced but actually isn't**.
{% endcapture %}
{% capture answer %}
All airport waypoints are shown as if they are serviced, regardless of whether they actually are. This is because waypoint data from the game is currently missing this information.
{% endcapture %}
{% include accordionitem.html id="airportservice" h=issue c=answer %}

{% capture issue %}
## I **can't see distant airports that are not in the FPLN**.
{% endcapture %}
{% capture answer %}
Airport waypoint symbols will only show around a certain geographic distance from the center of the map (this does not apply to airports that are part of the active flight plan). This is due to the way the game searches for airports (the number of results is limited for performance reasons and there is no option to filter the search e.g. by size to reduce the performance penalty).
{% endcapture %}
{% include accordionitem.html id="distantairports" h=issue c=answer %}

{% capture issue %}
## My **weather radar shows artifacts**.
{% endcapture %}
{% capture answer %}
When NEXRAD is enabled for the navigation map in the right MFD pane, the weather radar display in the left MFD pane will have artifacts. This does not occur with the opposite arrangement (i.e. NEXRAD enabled in left MFD pane, weather radar in right MFD pane). The bug also occurs when enabling NEXRAD for the PFD inset map. A workaround for now is to simply disable NEXRAD or to enable it in the left pane instead of the right (and disable it for the PFD inset map) if you wish to use it in conjunction with the weather radar.
{% endcapture %}
{% include accordionitem.html id="wxartifacts" h=issue c=answer %}

{% capture issue %}
## The **drawn flightplan has a kink when approach the dateline**.
{% endcapture %}
{% capture answer %}
This is a known simulator issue. It does however only have an optical effect and the plane continues through that glitch without any negative effects.
{% endcapture %}
{% include accordionitem.html id="dateline" h=issue c=answer %}


<h3>Hardware / Buttons</h3>

{% capture issue %}
## I **can only increment HDG/ALT/SPD in multiples of 10s/100s**.
{% endcapture %}
{% capture answer %}
This behaviour is the result of a logical flaw in the way [Microsoft Flight Simulator](https://flightsimulator.com) handles buttons. You can find a [Workaround on the official forums](https://forums.flightsimulator.com/t/heading-increment-bug-10-degree-instead-of-1-explained/290173).
{% endcapture %}
{% include accordionitem.html id="bigincrements" h=issue c=answer %}
</div>


## Discord
If the answers on this page can not help you solve your problem, you can always pose your questions on our Discord server below.
Please do however read the Guides extensively beforehand.
{% include button.html break=true text="Discord" url="https://discord.com/invite/Fa6w2xK" blank=true %}