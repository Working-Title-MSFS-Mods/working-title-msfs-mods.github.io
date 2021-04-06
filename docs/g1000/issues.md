---
layout: main
permalink: /g1000/issues
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
</div>


## Discord
If the answers on this page can not help you solve your problem, you can always pose your questions on our Discord server below.
Please do however read the Guides extensively beforehand.
{% include button.html break=true text="Discord" url="https://discord.com/invite/Fa6w2xK" blank=true %}