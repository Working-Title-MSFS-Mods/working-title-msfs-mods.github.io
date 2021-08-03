---
layout: package
permalink: /packages/nxi/issues
title: Known Issues
coverimage: masterwarn.jpg
coverposition: left bottom
---

# Known Issues

<div class="accordion accordion-flush mb-4" id="accordion">

<h3>Flight Planning</h3>
{% capture issue %}
Using the scroll knobs to enter waypoints is hard. Can I use my keyboard?
{% endcapture %}
{% capture answer %}
Yes, there's a keyboard input option on the waypoint info page. Click on the input field, or the little keyboard image to activate keyboard entry. Remember to disable that because it captures all inputs and you won't be able press any buttons while keyboard entry is active.
{% endcapture %}
{% include accordionitem.html id="dateline" h=issue c=answer %}

<h3>VNAV</h3>
{% capture issue %}
VNAV is climbing when it shouldn't
{% endcapture %}
{% capture answer %}
This is a known issue; for version 0.2.0 we recommend not using VNAV or setting your altitude preselector to 0 feet if you do use it.
{% endcapture %}
{% include accordionitem.html id="dateline" h=issue c=answer %}
</div>


## Discord
If the answers on this page can not help you solve your problem, you can always pose your questions on our Discord server below.
{% include button.html break=true text="Discord" url="https://discord.com/invite/Fa6w2xK" blank=true %}