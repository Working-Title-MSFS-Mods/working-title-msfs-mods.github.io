---
layout: package
permalink: /packages/nxi/guides/eisguide
title: NXi EIS Guide
coverimage: g1000.jpg
---

# G1000 NXi EIS Enhancements

The NXi, starting with verison 0.7.0, comes with a couple of enhancements to the EIS display system.  The biggest is that it now has optional support for the "Lean" and "System" pages seen on many G1000 installations.  Additionally, a new guage type meant to represent cylinder temperatures has been added.  Finally, developers modifying the panels of stock planes have to take one extra step for now, which is detailed at the bottom.

## New Pages

The stock MSFS G1000 only supports  a single page in the EIS display.   It is configured via the `EngineDisplay` node in a plane's `panel.xml` file.  A basic stock configuration may look something like this (with individual element configurations elided):

    <EngineDisplay>
      <Gauge>...</Gauge>
      <Gauge>...</Gauge>
      <Text>...</Text>
    </EngineDisplay>

All the gauge configuration is contained directly within the `EngineDisplay` tags.

NXi v0.7.0 introduces three new tags that can go inside the `EngineDisplay` section:  `EnginePage`, `LeanPage`, and `SystemPage`.  When using these, the individual gauges are nested within the appropriate page tag.  Instead of the above example, you may end up with something shaped more like this:

    <EngineDisplay>
      <EnginePage>
        <Gauge>...</Gauge>
        <Gauge>...</Gauge>
        <Text>...</Text>
      </EnginePage>
      <LeanPage>...</LeanPage>
      <SystemPage>...</SystemPage>
    </EngineDisplay>

The new logic is triggered whenever the NXi sees the `EnginePage` tag;  if that is present in a plane's `EngineDisplay` configuration it triggers the new parsing logic, and each of the three new tags is processed for configuration information.  Note that `LeanPage` and `SystemPage` are optional, either one can be omitted if the plane in question does not have them.  However, `EnginePage` is mandatory if you want to use this sytem; you cannot have `LeanPage` or `SystemPage` without it.

If a plane creator wants to create a configration that will work with both the stock G1000 and the NXi, they can just add the new tags _in addition to_ the legacy configuration details.  This means the two examples above could be combined to look like this:

    <EngineDisplay>
      <Gauge>...</Gauge>
      <Gauge>...</Gauge>
      <Text>...</Text>
      <EnginePage>
        <Gauge>...</Gauge>
        <Gauge>...</Gauge>
        <Text>...</Text>
      </EnginePage>
      <LeanPage>...</LeanPage>
      <SystemPage>...</SystemPage>
    </EngineDisplay>

With this configuration, the NXi will see the `EnginePage` tag and ignore the legacy configuration, while, in the other direction, the stock G1000 will ignore the new tags because it does not know what they mean.

## New Gauges

### Cylinder Gauge

Version 0.7.0 also introduces a new gauge meant to display CHT and EGT information in the style of the real NXi.  This can be created by using a new gauge with `Cylinder` as the value in the `Type` tag.  In addition to the standard configuration properties, the following have been added specifically for the cylinder gauge:

| Tag      | Meaning                                                           |
|----------|-------------------------------------------------------------------|
|Columns   |The number of columns (_ie_, cylinders) to draw on the gauge.      |
|Rows      |The number of individual "boxes" that make up each cylinder column.|
|TempOrder |The order of the cylinders from hottest to coldest.                |

Additionally, the `Style` section has two new possible parameters.

| Tag        | Meaning                                                                       |
|------------|-------------------------------------------------------------------------------|
|ShowPeak    |Show a horizontal blue bar for peak temperature on a cylinder, for lean assist.|
|ShowRedline |Draw the temperature redline at the top of the gauge.                          |

#### Temperature Order

Note that this gauge will help simulate the temperature variance seen between the cylinders in a real internal combustion engine.  It does not actually change the engine modelling in any way, but will instead internally assign each cylinder in the engine a small degree of variance based on its position  in the `TempOrder` tag.  The derived temperature for each cylinder is what will be displayed on the graph, and what will be shown for the individual cylinder temp readouts when using CYL SELECT.

Also, if no `TempOrder` tag is found, cylinders will be assigned a rank in simple numerical order.  Similarly, if not enough cylinders are listed in the tag, the given order will be used, and any cylinders not accounted for will then be added in, again, numerical order.

#### Redline

At the moment, the redline cannot be configured at a value other than the `Maximum` of the gauge.  This is an additional option that will come in a future version.

## Developer Hint: Default Overrides

Finally, there is one thing for developers who are working on modifications to the stock plane to take note of.   Currently, the new panels for the default planes are shipped along with the NXi, and it uses them in place of the stock `panel.xml` that comes with the base game.   Developers who are modifying the panels of the stock planes will need to take one extra step to make their mods work with the NXi.  Specifically, they will need to add an `override` attribute to the `EngineDisplay` tag in their modded panel.   It should now look like this:

    <EngineDisplay override="true">
      <EnginePage>
      ...
      </EnginePagn>
     ...
    </EngineDisplay>

Without this, the NXi will not load the custom logic.  Please note two things:

1. This only applies to mods to the panels of the stock planes.  Developers working on completely new planes do not need to worry about this.
2. This will only be the case until the new NXi-enhanced panels are moved into the base game.  Once that's done this will no longer be needed.