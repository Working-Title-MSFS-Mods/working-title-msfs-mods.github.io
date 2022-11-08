---
layout: package
permalink: /packages/nxi/issues
title: Known Issues
coverimage: nxi.jpg
---

# Known Issues

<div class="accordion accordion-flush mb-4" id="accordion">

<h3>Hardware Compatibility</h3>
{% capture issue %}
Selected Altitude in SteamDeck is showing the wrong value.
{% endcapture %}
{% capture answer %}
If you are using Flight Tracker StreamDeck from Github (https://github.com/nguyenquyhy/Flight-Tracker-StreamDeck) for your Autopilot Panel, make sure that the Display value for Selected Altitude is using 'AUTOPILOT_ALTITUDE_LOCK_VAR__1' instead of 'AUTOPILOT_ALTITUDE_LOCK_VAR'.
{% endcapture %}
{% include accordionitem.html id="steamdeck" h=issue c=answer %}
{% capture issue %}
Selected Altitude in Saitek/Logitech AP Multipanel is showing the wrong value.
{% endcapture %}
{% capture answer %}
We are researching this issue, but right now it appears that without using a third party software to configure this correctly, there is not an immediate solution to this. The core of the problem is that the sim (as did P3D and FSX) uses multiple altitude slots for different modes - alt slot 1 is typically used for the pilot Selected Altitude, while slot 2 and 3 are used usually by vnav and alt hold. In order to set and read the pilot selected altitude, hardware needs to read/write from slot 1. However, the Logitech Multipanel does not do this - instead, it reads/writes from/to the default value, or slot 0. Reading the altitude from slot 0 is incorrect for any aircraft with VNAV. If you use third party software to control your panel, you can specify to read from AUTOPILOT_ALTITUDE_LOCK_VAR_1 instead of from AUTOPILOT_ALTITUDE_LOCK_VAR; but without added software, there does not appear to be a way to fix this error. Users can, and should, ask Logitech to update their software to either provide configuration options or change their default settings to use the correct slot for selected altitude.

The good news is that we have added a feature to the sim for SU6 that will allow us to get users around this bug, so after the next sim update, this should not be an issue anymore.
{% endcapture %}
{% include accordionitem.html id="saitekmultipanel" h=issue c=answer %}

<h3>Flight Planning</h3>
{% capture issue %}
Using the scroll knobs to enter waypoints is hard. Can I use my keyboard?
{% endcapture %}
{% capture answer %}
Yes, there's a keyboard input option on the waypoint info page. Click on the input field, or the little keyboard image to activate keyboard entry. Remember to disable that because it captures all inputs and you won't be able press any buttons while keyboard entry is active.
{% endcapture %}
{% include accordionitem.html id="keyboardentry" h=issue c=answer %}

{% capture issue %}
Why does my world map plan not show up in the GPS?
{% endcapture %}
{% capture answer %}
Sometimes the flight plan loading from the world map screen is loaded incompletely; this can usually be solved by restarting the flight - we are working on nailing this down.
{% endcapture %}
{% include accordionitem.html id="worldmap" h=issue c=answer %}
  
{% capture issue %}
I made a plan with Navigraph or Simbrief, but I don't see my airways.
{% endcapture %}
{% capture answer %}
World Map imports from Navigraph and Simbrief do not include airways, so airways will not be added to the G1000NXi flight plan when the plan was imported to the World Map from one of these sources.
{% endcapture %}
{% include accordionitem.html id="airways" h=issue c=answer %}

<h3>COM Tuning</h3>
{% capture issue %}
The outer large COM knob only decreases my frequency.
{% endcapture %}
{% capture answer %}
Outer large COM knob only reduces frequency no matter the direction the knob is turned. This is an issue with the cockpit panel behaviors in the sim and has been logged with the MSFS team, but will not be able to be addressed in the NXi package as it is an issue with the base planes.
{% endcapture %}
{% include accordionitem.html id="comtuning" h=issue c=answer %}
  
<h3>External View HUD</h3>
{% capture issue %}
Why does the external view HUD HSI not follow the GPS plan?
{% endcapture %}
{% capture answer %}
The NXi uses a brand new flight plan and navigation system that are currently external to the simulator. In time, APIs will be added to the simulator that will allow us to synchronize the HSI with the new flight plan system.
{% endcapture %}
{% include accordionitem.html id="externalhud" h=issue c=answer %}

</div>


## Discord
If the answers on this page can not help you solve your problem, you can always pose your questions on our Discord server below.
{% include button.html break=true text="Discord" url="https://discord.com/invite/Fa6w2xK" blank=true %}
