---
layout: package
permalink: /packages/g1000/
title: Intro
coverimage: g1000.jpg
---

# Working Title G1000
Welcome to the latest version of the Working Title G1000 for [Microsoft Flight Simulator](https://flightsimulator.com). This mod provides a raft of bug-fixes and enhancements to the stock G1000 used in many of the sim's general aviation planes.

<div class="alert alert-warning">
    <div class="row">
        <div class="col">
            <h4>Attention!</h4>
            <b>THIS IS NOT THE NXi!</b><br>
            This is a mod to the default G1000 that adds only our legacy engine management pages. This should only be used if you <b>ARE NOT</b> using the G1000NXi from the Marketplace. Neither this package, nor the G1000NXi will work correctly if installed at the same time.
        </div>
        <div class="col-auto text-end d-flex align-items-center">
            <a href="/packages/nxi" class="btn btn-slanted btn-sliding"><span>To the G1000 NXi</span></a>
        </div>
    </div>
</div>

{% include downloadbutton.html category="g1000" %}
{% include button.html text="Changelog and Older Versions" url="/packages/g1000/releases" %}

## Usage in default aircraft
Because they use the Garmin G1000 unit, this mod will affect the following default aircraft:
- Cirrus SR22
- Diamond Aircraft DA40NG
- Diamond Aircraft DA62
- Pilatus PC-6
- Textron Aviation Beechcraft Baron G58
- Textron Aviation Beechcraft Bonanza G36
- Textron Aviation Cessna 172 Skyhawk (G1000)
- Textron Aviation Cessna 208B Grand Caravan EX

## Installation
This mod can be installed just like any other MSFS mod:  simply drag the `workingtitle-g1000` folder from the zip file into your flight simulator's `Community` directory.<br>
**Note:  Due to some changes in file structure it is important that you do not install v0.3.0 of this mod over an earlier version.**  If you had v0.2.0 or v0.2.1 installed please delete them completely before installing this version to avoid any potential problems.

## Key Changes

There are a lot of changes in this version.  For a full list check out the [change log](CHANGES.md).  This section summarizes some of the ones we think you'll be most excited about.

### Track-up mode

Everyone's long-awaited favorite, the track-up map mode, has arrived.  For simplicity's sake we have not implemented the full drill-down into the configuration menu that you normally need to make to toggle map orientation.  Instead, just hit the MAP soft key on the MFD and you'll find a toggle for it next up to the NEXRAD button.

### Better brightness control

The previous version of the mod offered software brightness control but ran into some issues with planes which had hardware knobs for controlling avionics brightness.  Those required, in some cases, modifying the plane's `panel.xml`, which was both annoying and posed problems for the premium and third-party planes.

That is no longer an issue.  This version of the mod has new logic to read the configuration of the plane's interior model and use that to automatically determine which knob to listen to for control of avionics brightness.  Since this is done within the sim itself it works even with encrypted planes.

### Autopilot fixes!

This version fixes what was perhaps the single most loathed behavior of the stock MSFS G1000:  its tendency to flip an unwanted U-turn back to the previous waypoint when activating an approach.  By careful application of our patented Unsuckotron(tm) we have managed to fix that.  You should no longer find yourself doing a Crazy Ivan when you activate an approach.  We also fixed a bug in which reversed the NOSE UP/DN buttons worked in FLC mode; they'll now behave as a sensible person would expect.

### Persistent settings

We had a breakthrough during the development of this version when [@tavip](https://github.com/tavip) sent us a PR which demonstrated how to use a new in-sim data store that we had not yet had time to play with.  By using this we have been able to finally answer peoples' wish for a way to save their G1000 settings.  With this version numerous settings, including map orientation and brightness, will be saved between sessions.  No more changing the same thing every time you load a plane.   Amazing.

### Extensible engine pages

We have enhanced the logic that drives the engine pages on the left side of the MFD.   No longer are you stuck with one simple page that is the same across all planes.  Now each plane is able to define its own set of pages and use an expanded selection of XML logic to enable it to better model real-world systems.  On top of that, we have taken the same functionality we added to allow us to detect hardware avionics knobs and applied it to loading these configurations from a standalone XML file.  This means it will be extremely simple to add custom panels to any plane without having to touch stock files -- even the commercial ones.

This is a somewhat complicated feature.  If you want to read more about it, checkout the accompanying [EnginePanels.md](EnginePanels.md).  If you don't feel up to reading that, don't worry:   we have already configured the G36 Bonanza with a custom panel so you can try out the functionality right away.

### Graphical updates

Our UI experts have put a lot of effort into redoing a large chunk of the interface to bring it closer to reality.  You will find colors that are much more authentic along with adjustments to fonts and layout in a number of places that make your G1000 feel a little bit more like a real one.

## What's next?

This release hits most of the things what we have wanted to do to the G1000 *right this moment*.  From here we are going to take a little time to dig deeper into the dirty guts of the MSFS flight plan and FMC logic and see if we can fix some more of the issues that people have found really troubling in flight.

We are also already underway with a revamp of the entire G1000 UI which will allow us to more rapidly develop additional panels, pages, and menus to continue to bring the in-game interface closer to reality.   Could the next version utilize that, along with the persistent data storage introduced in this version, to give you a realistic settings page with lots of knobs to tweak?  We'll see!


## Comments, issues, bug reports

If you run any any trouble, want to make suggestions for further improvements, or just have something to say about this mod, you can reach the creators via our [Github](https://github.com/Working-Title-MSFS-Mods).  Bug reports or feature requests should go to the [Github Issue Board](https://github.com/Working-Title-MSFS-Mods/fspackages/issues). We also generally hang out on Avsim and the official MSFS forum.

## Credits

We have received help from many people in the community, in the form of bug reports, information on real-word behavior, or actual contributions of code. Of particular help have been [@tavip](https://github.com/tavip) (Octavian Purdila) and [@jonasbeaver](https://github.com/jonasbeaver) -- the former for numerous contributions of code, the latter for being a font of wisdom and offering to help tame our backlog of issues.  Great thanks goes to them, and to everyone else who has helped the Working Title team with this and our other projects.
