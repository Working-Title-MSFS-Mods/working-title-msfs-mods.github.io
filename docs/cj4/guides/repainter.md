---
layout: main
permalink: /cj4/guides/repainter
title: Guides
coverimage: cj4_tailfin.jpg
coverposition: 10% 50%
---

# Repainter's Guide
Because of certain techniques, not all published CJ4 repaints are compatible with the Working Title CJ4 Mod. This guide gives a short outline of why that is the case and how liveries can be made compatible starting with **v0.11.0**.

## Handling of Dynamic Registrations
### Current State
At the moment, the flags `atc_id_enable` or `atc_id_color` are existing in the `aircraft.cfg` but they do **not** have any effect on the display of aircraft registrations on the exterior model. Instead, like registrations on the interior model, placeholders for registrations are included in the exterior model files. The exact positioning, size and color are then controlled by the following line defined in the `panel.cfg`.
```
painting00=Registration/Registration.html?font_color=black, 0, 0, 1024, 256
```
The five variables in the end are `font-color`, `left`, `top`, `width` and `height`.


### Implications
For any manual changes to this line, you will need to create a custom panel. However, by doing so, you cannot include the custom panel and gauges provided by the Working Title CJ4 Mod. Therefore, the livery will break the mod and a red "LIVERY INCOMPATIBLE" warning will show on the MFD.


### Workaround
We have provided three panel variations, that should cover most liveries out there. These panels can be aliased by your custom panels and are updated automatically, so that your integration won't break in the future.

##### Black Registration
This is the default. Make sure no custom panel is present in your package and the `panel=` line of the `aircraft.cfg` looks like this: `panel=""`.

#### White Registration
Users can still change the registration on your paint, but it now appears in white. Use this option if your paint features are dark tailfin.
1. Create a custom panel folder in your package.
2. Reference this custom panel in the `panel=` line of the `aircraft.cfg` in your package.
3. In the custom panel folder, create a file called `panel.cfg`.
4. Copy the following 2 lines into that file and save.
```
[fltsim]
alias=Asobo_CJ4\panel.whitereg
```

#### No Registration
Removes the dynamically set registration altogether. Use this option if you want to explicitly paint a registration onto the textures and don't want the default registration displayed.
1. Create a custom panel folder in your package.
2. Reference this custom panel in the `panel=` line of the `aircraft.cfg` in your package.
3. In the custom panel folder, create a file called `panel.cfg`.
4. Copy the following 2 lines into that file and save.
```
[fltsim]
alias=Asobo_CJ4\panel.noreg
```

{% comment %}
## Matching Cabins
With more and more great community interiors coming up, we are facing the issue of choosing only one at a time. Because of this, we have worked on a solution which allows the repainter to individually select which cabin is to be used for each of their CJ4 repaints. For that to work, compatible cabins are installed as seperate packages and your liveries will be configured to grab the texture from the desired cabin-package, while using the default cabin if none is found.

### Selecting A Compatible Cabin
Technically, it is possible to use the cabin of every repaint that comes with a custom texture folder in your own repaint. We do however not recommend doing this without the consent of the cabin's creator. Below is a list of cabins for which the creators have agreed to be used by all Working Title CJ4 repaints. Select the cabin that best suits your repaint and note down the name of its texture folder.
<div class="table-responsive">
<table class="table table-striped table-hover align-middle">
    <thead>
        <tr>
            <th>Preview</th>
            <th>Name</th>
            <th>Fallback line</th>
            <th>Creator</th>
            <th>Download</th>
        </tr>
    </thead>
    <tbody>
        {% for interior in site.data.approvedcabins %}
        <tr>
            <td></td>
            <td>{{ interior.name }}</td>
            <td><code>fallback.1=..\..\Asobo_CJ4\{{ interior.texturefolder }}</code></td>
            <td>{{ interior.creator }}</td>
            <td><a href="{{ interior.url }}" target="_blank"
                    class="btn btn-slanted btn-sliding"><span>Download</span></a></td>
        </tr>
        {% endfor %}
    </tbody>
</table>
</div>

### Adjusting Your Repaint
The `texture.cfg` file of your own repaint is where the magic happens. There should already be one within your texture folder with the following content. It is okay if there are already more fallbacks in there or if you need to add other fallbacks.
```
[fltsim]

fallback.1=..\..\..\..\texture\Lights
fallback.2=..\..\..\..\texture\DetailMap
fallback.3=..\..\..\..\texture\AudioPanel
fallback.4=..\..\..\..\texture\Glass
fallback.5=..\..\..\..\texture\Livery
fallback.6=..\..\Asobo_CJ4\texture
```
Now we need to add the fallback line of our selected cabin in the first position. For all fallbacks to still work, we need to increment all other values by one.<br>
The following is an example of how a finished `texture.cfg` file could look. Obviously, the final file depends on the cabin you have selected.
```
[fltsim]

fallback.1=..\..\Asobo_CJ4\TEXTURE.darkcabin
fallback.2=..\..\..\..\texture\Lights
fallback.3=..\..\..\..\texture\DetailMap
fallback.4=..\..\..\..\texture\AudioPanel
fallback.5=..\..\..\..\texture\Glass
fallback.6=..\..\..\..\texture\Livery
fallback.7=..\..\Asobo_CJ4\texture
```

### Test Your Repaint
Because messing with fallbacks is relatively complicated, and can break your livery if done wrong, it is important to test the livery with and without the cabin installed into your `Community` folder. If installed correctly, this solution does even work with the [MSFS Addon Linker](https://de.flightsim.to/file/1572/msfs-addons-linker).

{% endcomment %}

## Submit Your Repaint
If you have made your repaint compatible and wish to have your livery featured in our [List of Compatible Liveries](/cj4/repaints), you can fill out the following form.
{% include button.html break=true text="Submit your livery for review" url="https://forms.gle/kz9mNdQWWxCk1TvDA" blank=true %}


## ⚠️ Note
Be aware, that if you decide to use a `panel.whitereg` or `panel.noreg` fallback, your liveries will **not** work with the default CJ4 anymore.<br>
<!-- Regarding cabins: If you implement the texture fallback correctly, your livery will still work flawlessly with the default interiors even if the cabin is not installed. -->
