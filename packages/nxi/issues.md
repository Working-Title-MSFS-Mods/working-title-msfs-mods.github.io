---
layout: package
permalink: /packages/nxi/issues
title: Known Issues
coverimage: masterwarn.jpg
coverposition: left bottom
---

# Known Issues

<div class="accordion accordion-flush mb-4" id="accordion">

<h3>NavMap</h3>
{% capture issue %}
## The **drawn flightplan has a kink when approach the dateline**.
{% endcapture %}
{% capture answer %}
This is a known simulator issue. It does however only have an optical effect and the plane continues through that glitch without any negative effects.
{% endcapture %}
{% include accordionitem.html id="dateline" h=issue c=answer %}
</div>


## Discord
If the answers on this page can not help you solve your problem, you can always pose your questions on our Discord server below.
Please do however read the Guides extensively beforehand.
{% include button.html break=true text="Discord" url="https://discord.com/invite/Fa6w2xK" blank=true %}