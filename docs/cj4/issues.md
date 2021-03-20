---
layout: cj4
permalink: /cj4/issues
title: Known Issues
coverimage: masterwarn.jpg
coverposition: left bottom
---

# Known Issues

<div class="accordion accordion-flush" id="accordion">

{% capture issue %}
## I have linked my Navigraph account but it still says **NO CHARTS AVAILABLE** when I press the `CHARTS` button.
{% endcapture %}
{% capture answer %}
When you hit `CHART`, which will always show NO CHART AVAILABLE, because you haven't selected a chart yet. Once you hit `LWR MENU` after hitting CHART, then you'll see the chart menu where you can select a chart.
{% endcapture %}
{% include question.html id="nocharts" q=issue a=answer %}


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
## My **throttles do not move**.
{% endcapture %}
{% capture answer %}
This issue can ben cause by two different things.<br>
a) You are using an incompatible livery. Use default livery or one from the known list of working ones in #media discord channel.<br>
b) Check the `Documents` folder on your PC for a file called `SimConnect.cfg` and delete it.
{% endcapture %}
{% include question.html id="throttlestuck" q=issue a=answer %}
</div>