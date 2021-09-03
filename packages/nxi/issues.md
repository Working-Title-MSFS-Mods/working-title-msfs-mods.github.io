---
layout: package
permalink: /packages/nxi/issues
title: Known Issues
coverimage: masterwarn.jpg
coverposition: left bottom
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
  
{% capture issue %}
I made a plan with Navigraph or Simbrief, but I don't see my airways.
{% endcapture %}
{% capture answer %}
World Map imports from Navigraph and Simbrief do not include airways, so airways will not be added to the G1000NXi flight plan when the plan was imported to the World Map from one of these sources.
{% endcapture %}

<h3>COM Tuning</h3>
{% capture issue %}
The outer large COM knob only decreases my frequency.
{% endcapture %}
{% capture answer %}
Outer large COM knob only reduces frequency no matter the direction the knob is turned. This is an issue with the cockpit panel behaviors in the sim and has been logged with the MSFS team, but will not be able to be addressed in the NXi package as it is an issue with the base planes.
{% endcapture %}
  
<h3>External View HUD</h3>
{% capture issue %}
Why does the external view HUD HSI not follow the GPS plan?
{% endcapture %}
{% capture answer %}
The NXi uses a brand new flight plan and navigation system that are currently external to the simulator. In time, APIs will be added to the simulator that will allow us to synchronize the HSI with the new flight plan system.
{% endcapture %}

## Discord
If the answers on this page can not help you solve your problem, you can always pose your questions on our Discord server below.
{% include button.html break=true text="Discord" url="https://discord.com/invite/Fa6w2xK" blank=true %}
