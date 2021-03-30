---
layout: cj4
permalink: /cj4/issues
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
## My **cockpit is invisible**.
{% endcapture %}
{% capture answer %}
{% for post in site.categories["cj4"] limit:1 %}
{% assign latest = post.title %}
{% endfor %}
Check that you are using the latest version ({{latest}}) of the mod.<br>
v0.8.2 or earlier are no longer compatible with the current version of [Microsoft Flight Simulator](https://flightsimulator.com).
{% endcapture %}
{% include accordionitem.html id="invisiblecockpit" h=issue c=answer %}

{% capture issue %}
## I **can't open then door**.
{% endcapture %}
{% capture answer %}
This is a limitation of this simulator's CJ4 model. While the necessary animations were present in some planes (e.g. TBM), allowing for doors to be modded open, the same is not possible for the CJ4 right now.
{% endcapture %}
{% include accordionitem.html id="nodoors" h=issue c=answer %}

{% capture issue %}
## I get **unexpected behaviour after loading/saving flight**.
{% endcapture %}
{% capture answer %}
There are a lot of variables the Working Title CJ4 mod relies on that are not saved or loaded during the normal sim flight management. Because of this there is no workaround other than avoiding to load/save flights with the sim interface.
{% endcapture %}
{% include accordionitem.html id="loadingflights" h=issue c=answer %}



<h3>Flight Controls</h3>

{% capture issue %}
## My **throttles do not move**.
{% endcapture %}
{% capture answer %}
This issue can be caused by two different things.<br>
a) You are using an incompatible livery. Use the grey [Microsoft Flight Simulator](https://flightsimulator.com) default livery or one of those listed [here](/cj4/repaints). For more details on why some liveries are incompatible, you can visit the [Repainter's Guide](/cj4/guides/repainter)<br>
b) Check the `Documents` folder on your PC for a file called `SimConnect.cfg` and delete it.
{% endcapture %}
{% include accordionitem.html id="throttlestuck" h=issue c=answer %}

{% capture issue %}
## My **engines do not start or randomly shut down**.
{% endcapture %}
{% capture answer %}
This is an issue in the sim where jet aircraft have the propeller aircraft mixture setting assigned to it. Most likely scenario is your hardware was auto-assigned mixture to an axis or button. Unbind the mixture and you should be good to go.
{% endcapture %}
{% include accordionitem.html id="enginecutoff" h=issue c=answer %}

{% capture issue %}
## I'm climbing at full power but my  **plane does not accelerate** once I level off in cruise.
{% endcapture %}
{% capture answer %}
The likely scenario is that you were climbing at too low an airspeed. Once you reach high altitudes, the low airspeed brings you onto the backside of the power curve and the only way to gain airspeed would be to descend. To prevent this, the recommended climb profile is 240kts/Mach .64. The aircraft will currently automatically switch to Mach climb hold when 240kts = Mach .64 (This typically occurs around 29-30,000ft)*
{% endcapture %}
{% include accordionitem.html id="noacceleration" h=issue c=answer %}



<h3>Autopilot</h3>

{% capture issue %}
## My **plane constantly banks to one side**.
{% endcapture %}
{% capture answer %}
This issue can be caused by two different things.<br>
a) Make sure your flight model is set to  *Modern*.<br>
b) Check the deadzone on your controller.
{% endcapture %}
{% include accordionitem.html id="constantbank" h=issue c=answer %}


{% capture issue %}
## My **plane overshoots tight turns in RNP approaches**.
{% endcapture %}
{% capture answer %}
These overshoots are caused by the current autopilot bank rate limitations in the simulator and occur mostly in tight turns.<br>
If you encounter this issue, we recommend hand flying the approach with the given lateral and vertical guidance.
{% endcapture %}
{% include accordionitem.html id="rnpovershoot" h=issue c=answer %}



<h3>Avionics</h3>

{% capture issue %}
## My **PFD is broken and/or MFD shows empty CHART MAIN INDEX** window.
{% endcapture %}
{% capture answer %}
This is an issue introduced by one of the last Sim Updates. There is no way to fix this from our position, but luckily the issue usually resolves itself when restarting the flight. Occasionally, a sim restart is necessary.
{% endcapture %}
{% include accordionitem.html id="brokenpfd" h=issue c=answer %}

{% capture issue %}
## My MFD is red and says **LIVERY INCOMPATIBLE**.
{% endcapture %}
{% capture answer %}
This might come as a surprise, but you are using an incompatible livery. Use the grey [Microsoft Flight Simulator](https://flightsimulator.com) default livery or one of those listed [here](/cj4/repaints). For more details on why some liveries are incompatible, you can visit the [Repainter's Guide](/cj4/guides/repainter)
{% endcapture %}
{% include accordionitem.html id="badlivery" h=issue c=answer %}

{% capture issue %}
## The **map is not centered on plane in PLAN view**.
{% endcapture %}
{% capture answer %}
This is not an issue but intended behaviour. In real life, you would only use PLAN view for an overview of procedures and, as the name suggests, to plan your route. For keeping the map centered on your aircraft, please select PPOS mode.
{% endcapture %}
{% include accordionitem.html id="plannotcentered" h=issue c=answer %}

{% capture issue %}
## I **can't retrieve weather for non-US airports** via the Datalink function.
{% endcapture %}
{% capture answer %}
If the non-US airport you are requesting weather for has a published METAR in real life, then it is very likely, that your weather source is set to FAA (Aviation administration limited to the US).
1) Go to IDX -> PAGE 2 -> MOD SET -> PAGE 2 -> METAR SOURCE and toggle the setting from *FAA* to *VATSIM*
{% endcapture %}
{% include accordionitem.html id="faaweather" h=issue c=answer %}

{% capture issue %}
## I **can't set up MFDs seperately**.
{% endcapture %}
{% capture answer %}
At the moment, it is not possible to have the MFDs at different settings, because the FPS drop would be too big. We are continuously looking for ways to improve performance, though.
{% endcapture %}
{% include accordionitem.html id="mfdsmirrored" h=issue c=answer %}



<h3>Navdata</h3>

{% capture issue %}
## I'm departing but a **"Heading to Altitude" fix doesn't switch after reaching the altitude**.
{% endcapture %}
{% capture answer %}
Sometimes a heading to altitude instruction on takeoff will display further than the first RNAV fix on an RNAV departure procedure; in these cases the workaround is to cross-check the DP chart and remove the erroneous waypoint either by deleting the heading to altitude fix or dropping the first RNAV fix onto the magenta line in the LEGS page.
{% endcapture %}
{% include accordionitem.html id="hdgtoalt" h=issue c=answer %}

{% capture issue %}
## I'm planning an approach but the **airport doesn't have any approaches** in the FMS.
{% endcapture %}
{% capture answer %}
This is a Navdata issue of the Base Simulator and can't be fixed by us.
{% endcapture %}
{% include accordionitem.html id="noapproaches" h=issue c=answer %}

{% capture issue %}
## I'm planning an approach but the **RF and DME ARC legs don't render correctly**.
{% endcapture %}
{% capture answer %}
RF and DME ARC legs are not yet supported in the Working Title CJ4, but we are looking to introduce them in a future update.
{% endcapture %}
{% include accordionitem.html id="dmearcs" h=issue c=answer %}



<h3>External Connections</h3>

{% capture issue %}
## I have linked my Navigraph account but it still says **NO CHARTS AVAILABLE** when I press the `CHARTS` button.
{% endcapture %}
{% capture answer %}
When you hit `CHART`, which will always show NO CHART AVAILABLE, because you haven't selected a chart yet. Once you hit `LWR MENU` after hitting `CHART`, then you'll see the chart menu where you can select a chart.
{% endcapture %}
{% include accordionitem.html id="nocharts" h=issue c=answer %}

{% capture issue %}
## I can't connect to **SimBrief**, because I always get the message **WRONG PILOTID**.
{% endcapture %}
{% capture answer %}
1) When creating a Simbrief flight, you can get your PILOT ID in the Optional Entries section.  Your SimBrief username is not the same as your PILOT ID.  

![](https://media.discordapp.net/attachments/767173307681341464/767333228528271400/unknown.png)

2) Once you have your ID, you will need to enter it into the FMC.  Press IDX -> Page 2 -> MOD SET -> Enter PILOT ID into scratchpad and drop on L2 Line select key (LSK).

3) Now you must recall your flightplan.  Go to IDX -> Page 2 -> ROUTE MENU -> FPLN RECALL.  Once the flight plan has been imported, you'll be sent to the FPLN page to execute the changes. 
{% endcapture %}
{% include accordionitem.html id="wrongpilotid" h=issue c=answer %}

{% capture issue %}
## My **external application can't load the Flightplan from the simulator**.
{% endcapture %}
{% capture answer %}
Some external applications that use the GPS/Flight plan SimVars may indeed not function correctly or as expected when FP SYNC is off.<br>
To turn FP SYNC on, Press IDX -> Page 2 -> MOD SET -> FP SYNC.
{% endcapture %}
{% include accordionitem.html id="fpsync" h=issue c=answer %}



<h3>Hardware / Buttons</h3>

{% capture issue %}
## I **can only increment HDG/ALT/SPD in multiples of 10s/100s**.
{% endcapture %}
{% capture answer %}
This behaviour is the result of a logical flaw in the way [Microsoft Flight Simulator](https://flightsimulator.com) handles buttons. You can find a [Workaround on the official forums](https://forums.flightsimulator.com/t/heading-increment-bug-10-degree-instead-of-1-explained/290173).
{% endcapture %}
{% include accordionitem.html id="bigincrements" h=issue c=answer %}

{% capture issue %}
## I **can't control AP with hardware buttons**.
{% endcapture %}
{% capture answer %}
Autopilot modes cannot be triggered via keybindings or controllers and must currently be triggered in the cockpit with the mouse. External binding applications are adding support for LVars and HEvents. Used SimVars are documented in our [Guide on SimVars](/cj4/guides/simvars).
{% endcapture %}
{% include accordionitem.html id="simvars" h=issue c=answer %}
</div>


## Discord
If the answers on this page can not help you solve your problem, you can always pose your questions on our Discord server below.
Please do however read the Guides extensively beforehand.
{% include button.html break=true text="Discord" url="https://discord.com/invite/Fa6w2xK" blank=true %}