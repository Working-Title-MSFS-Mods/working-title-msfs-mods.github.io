---
layout: cj4
permalink: /cj4/issues
title: Known Issues
coverimage: masterwarn.jpg
coverposition: left bottom
---

# Known Issues

<div class="accordion accordion-flush mb-4" id="accordion">
<h3>General</h3>

{% capture issue %}
## My **cockpit is invisible**.
{% endcapture %}
{% capture answer %}
{% for post in site.categories["cj4"] limit:1 %}
{% assign latest = post.title %}
{% endfor %}
Check that you are using the latest version ({{latest}}) of the mod.<br>
v0.8.2 or earlier are no longer compatible with the current version of [Microsoft Flight Simulator](https://flightsimulator.com).
{% endcapture %}
{% include question.html id="test" q=issue a=answer %}

{% capture issue %}
## I **can't open then door**.
{% endcapture %}
{% capture answer %}
This is a limitation of this simulator's CJ4 model. While the necessary animations were present in some planes (e.g. TBM), allowing for doors to be modded open, the same is not possible for the CJ4 right now.
{% endcapture %}
{% include question.html id="nodoors" q=issue a=answer %}



<h3>Flight Controls</h3>
{% capture issue %}
## My **throttles do not move**.
{% endcapture %}
{% capture answer %}
This issue can be caused by two different things.<br>
a) You are using an incompatible livery. Use the grey [Microsoft Flight Simulator](https://flightsimulator.com) default livery or one of those listed [here](/cj4/repaints). For more details on why some liveries are incompatible, you can visit the [Repainter's Guide](/cj4/guides/repainter)<br>
b) Check the `Documents` folder on your PC for a file called `SimConnect.cfg` and delete it.
{% endcapture %}
{% include question.html id="throttlestuck" q=issue a=answer %}

{% capture issue %}
## My **engines do not start or randomly shut down**.
{% endcapture %}
{% capture answer %}
This is an issue in the sim where jet aircraft have the propeller aircraft mixture setting assigned to it. Most likely scenario is your hardware was auto-assigned mixture to an axis or button. Unbind the mixture and you should be good to go.
{% endcapture %}
{% include question.html id="enginecutoff" q=issue a=answer %}

{% capture issue %}
## I'm climbing at full power but my  **plane does not accelerate** once I level off in cruise.
{% endcapture %}
{% capture answer %}
The likely scenario is that you were climbing at too low an airspeed. Once you reach high altitudes, the low airspeed brings you onto the backside of the power curve and the only way to gain airspeed would be to descend. To prevent this, the recommended climb profile is 240kts/Mach .64. The aircraft will currently automatically switch to Mach climb hold when 240kts = Mach .64 (This typically occurs around 29-30,000ft)*
{% endcapture %}
{% include question.html id="noacceleration" q=issue a=answer %}



<h3>Autopilot</h3>

{% capture issue %}
## My **plane constantly banks to one side**.
{% endcapture %}
{% capture answer %}
This issue can be caused by two different things.<br>
a) Make sure your flight model is set to  *Modern*.<br>
b) Check the deadzone on your controller.
{% endcapture %}
{% include question.html id="constantbank" q=issue a=answer %}



<h3>Avionics</h3>

{% capture issue %}
## My **PFD is broken and/or MFD shows empty CHART MAIN INDEX** window.
{% endcapture %}
{% capture answer %}
This is an issue introduced by one of the last Sim Updates. There is no way to fix this from our position, but luckily the issue usually resolves itself when restarting the flight. Occasionally, a sim restart is necessary.
{% endcapture %}
{% include question.html id="brokenpfd" q=issue a=answer %}

{% capture issue %}
## My MFD is red and says **LIVERY INCOMPATIBLE**.
{% endcapture %}
{% capture answer %}
This might come as a surprise, but you are using an incompatible livery. Use the grey [Microsoft Flight Simulator](https://flightsimulator.com) default livery or one of those listed [here](/cj4/repaints). For more details on why some liveries are incompatible, you can visit the [Repainter's Guide](/cj4/guides/repainter)
{% endcapture %}
{% include question.html id="badlivery" q=issue a=answer %}

{% capture issue %}
## The **map is not centered on plane in PLAN view**.
{% endcapture %}
{% capture answer %}
This is not an issue but intended behaviour. In real life, you would only use PLAN view for an overview of procedures and, as the name suggests, to plan your route. For keeping the map centered on your aircraft, please select PPOS mode.
{% endcapture %}
{% include question.html id="plannotcentered" q=issue a=answer %}

{% capture issue %}
## I **can't  I can't retrieve weather for non-US airports** via the Datalink function.
{% endcapture %}
{% capture answer %}
If the non-US airport you are requesting weather for has a published METAR in real life, then it is very likely, that your weather source is set to FAA (Aviation administration limited to the US).
1) Go to IDX > PAGE 2 > MOD SET > PAGE 2 > METAR SOURCE and toggle the setting from *FAA* to *VATSIM*
{% endcapture %}
{% include question.html id="faaweather" q=issue a=answer %}

{% capture issue %}
## I **can't set up MFDs seperately**.
{% endcapture %}
{% capture answer %}
At the moment, it is not possible to have the MFDs at different settings, because the FPS drop would be too big. We are continuously looking for ways to improve performance, though.
{% endcapture %}
{% include question.html id="mfdsmirrored" q=issue a=answer %}



<h3>External Connections</h3>

{% capture issue %}
## I have linked my Navigraph account but it still says **NO CHARTS AVAILABLE** when I press the `CHARTS` button.
{% endcapture %}
{% capture answer %}
When you hit `CHART`, which will always show NO CHART AVAILABLE, because you haven't selected a chart yet. Once you hit `LWR MENU` after hitting CHART, then you'll see the chart menu where you can select a chart.
{% endcapture %}
{% include question.html id="nocharts" q=issue a=answer %}


{% capture issue %}
## I can't connect to **SimBrief**, because I always get the message **WRONG PILOTID**.
{% endcapture %}
{% capture answer %}
1) When creating a Simbrief flight, you can get your PILOT ID in the Optional Entries section.  Your SimBrief username is not the same as your PILOT ID.  

![](https://media.discordapp.net/attachments/767173307681341464/767333228528271400/unknown.png)

2) Once you have your ID, you will need to enter it into the FMC.  Press IDX -> Page 2 -> MOD SET -> Enter PILOT ID into scratchpad and drop on L2 Line select key (LSK).

3) Now you must recall your flightplan.  Go to IDX -> Page 2 -> ROUTE MENU -> FPLN RECALL.  Once the flight plan has been imported, you'll be sent to the FPLN page to execute the changes. 
{% endcapture %}
{% include question.html id="wrongpilotid" q=issue a=answer %}



<h3>Hardware</h3>

{% capture issue %}
## I **can't control AP with hardware buttons**.
{% endcapture %}
{% capture answer %}
Autopilot modes cannot be triggered via keybindings or controllers and must currently be triggered in the cockpit with the mouse. External binding applications are adding support for LVars and HEvents. Used SimVars are documented in our [Guide on SimVars](/cj4/guides/simvars).
{% endcapture %}
{% include question.html id="simvars" q=issue a=answer %}
</div>


## Discord
If the answers on this page can not help you solve your problem, you can always pose your questions on our Discord server below.
Please do however read the Guides extensively beforehand.
{% include button.html text="Discord" url="https://discord.com/invite/Fa6w2xK" blank=true %}