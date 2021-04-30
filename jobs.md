---
layout: main
permalink: /jobs/
title: Jobs
coverimage: colddeparture.jpg
coverposition: 30% 45%
---

# Jobs
<div class="accordion accordion-flush mb-4" id="accordion">
<h3>Development (group of jobs)</h3>

{% capture jobtitle %}
## Software Developer.
{% endcapture %}
{% capture jobdetails %}
Job description.
{% include button.html break=true text="View position on LinkedIn" url="https://discord.com/invite/Fa6w2xK" blank=true %}
{% endcapture %}
{% include accordionitem.html id="dev1" h=jobtitle c=jobdetails %}


<h3>Accounting</h3>

{% capture jobtitle %}
## Just another Accounting Job.
{% endcapture %}
{% capture jobdetails %}
Job description.
{% include button.html break=true text="View position on LinkedIn" url="https://discord.com/invite/Fa6w2xK" blank=true %}
{% endcapture %}
{% include accordionitem.html id="acc1" h=jobtitle c=jobdetails %}

<h3>HR</h3>

{% capture jobtitle %}
## Some HR Job.
{% endcapture %}
{% capture jobdetails %}
Job description.
{% include button.html break=true text="View position on LinkedIn" url="https://discord.com/invite/Fa6w2xK" blank=true %}
{% endcapture %}
{% include accordionitem.html id="hr1" h=jobtitle c=jobdetails %}
</div>
