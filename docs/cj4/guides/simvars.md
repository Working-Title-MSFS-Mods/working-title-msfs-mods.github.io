---
layout: main
permalink: /cj4/guides/simvars
title: Guides
coverimage: cj4_fms.jpg
coverposition: 38% 48%
---

# Sim Variables
_This list is always subject to change_

Since our AP runs independent from the sim AP you can no longer use the default K Events to trigger AP modes.<br>Our AP mode indicators are L-Vars while their triggers for AP modes and other peripheral buttons are H-Events, both of which the stock SimConnect has no access to.<br> External apps seem to be adding modules which would support LVars and HEvents. So ask the developer of your external binding application to add this feature.


**For the AP variables like HDG, Alt preselect, VS you must use the K events with indexes. These should usually go to index "1".**


<div class="accordion accordion-flush mb-4" id="accordion">
<h3>L-Vars (read-only)</h3>

{% capture group %}
## AP Mode indicators
{% endcapture %}
{% capture details %}

* HDG - `L:WT_CJ4_HDG_ON`
* LNAV - `L:WT_CJ4_NAV_ON`
* APPR - n/a
* VNAV - `L:WT_CJ4_VNAV_ON`
* VS - `L:WT_CJ4_VS_ON`
* FLC - `L:WT_CJ4_FLC_ON`
{% endcapture %}
{% include accordionitem.html id="apmodes" h=group c=details %}

<h3>H-Events</h3>

{% capture group %}
## AP Mode triggers
{% endcapture %}
{% capture details %}

* HDG - `H:WT_CJ4_AP_HDG_PRESSED`
* LNAV - `H:WT_CJ4_AP_NAV_PRESSED`
* APPR - `H:WT_CJ4_AP_APPR_PRESSED`
* VNAV - `H:WT_CJ4_AP_VNAV_PRESSED`
* VS - `H:WT_CJ4_AP_VS_PRESSED`
* FLC - `H:WT_CJ4_AP_FLC_PRESSED`
{% endcapture %}
{% include accordionitem.html id="aptriggers" h=group c=details %}

{% capture group %}
## Upper panel (above PFD)
{% endcapture %}
{% capture details %}
* `H:Generic_Upr_Push_NAV`
* `H:Generic_Upr_Push_PFD_MENU`
* `H:Generic_Upr_RANGE_INC` (Map Zoom)
* `H:Generic_Upr_RANGE_DEC` (Map Zoom)
* `H:Generic_Upr_MENU_ADV_DEC`
* `H:Generic_Upr_MENU_ADV_INC`
* `H:Generic_Upr_Data_DEC`
* `H:Generic_Upr_Data_INC`
* `H:Generic_Upr_Data_PUSH`
* `H:Generic_Upr_Push_ESC`
* `H:Generic_Upr_Push_ET`
* `H:Generic_Upr_Push_FRMT`
* `H:Generic_Upr_Push_TERR_WX`
* `H:Generic_Upr_Push_TFC`
* `H:Generic_Upr_Push_REFS_MENU`
{% endcapture %}
{% include accordionitem.html id="upperbuttons" h=group c=details %}


{% capture group %}
## Lower panel (below MFD)
{% endcapture %}
{% capture details %}
* `H:Generic_Lwr_Push_MEM1_1`
* `H:Generic_Lwr_Push_MEM2_1`
* `H:Generic_Lwr_Push_MEM3_1`
* `H:Generic_Lwr_Push_CKLST_1`
* `H:Generic_Lwr_Push_PASSBRIEF_1`
* `H:Generic_Lwr_Push_ESC`
* `H:Generic_Lwr_Push_UPR_MENU`
* `H:Generic_Lwr_Push_LWR_MENU`
* `H:Generic_Lwr_Push_TERR_WX`
* `H:Generic_Lwr_Push_TFC`
* `H:Generic_Lwr_Push_SYS`
* `H:Generic_Lwr_Push_ENG`
* `H:Generic_Lwr_JOYSTICK_UP`
* `H:Generic_Lwr_JOYSTICK_DOWN`
* `H:Generic_Lwr_JOYSTICK_LEFT`
* `H:Generic_Lwr_JOYSTICK_RIGHT`
* `H:Generic_Lwr_Push_ZOOM_INC`
* `H:Generic_Lwr_Push_ZOOM_DEC`
* `H:Generic_Lwr_Push_Chart_1`
* `H:Generic_Lwr_Data_DEC`
* `H:Generic_Lwr_Data_INC`
* `H:Generic_Lwr_DATA_PUSH`
* `H:Generic_Lwr_DATA_PUSH_LONG`
* `H:Generic_Lwr_MENU_ADV_DEC`
* `H:Generic_Lwr_MENU_ADV_INC`
{% endcapture %}
{% include accordionitem.html id="lowerbuttons" h=group c=details %}

{% capture group %}
## FMC Buttons
{% endcapture %}
{% capture details %}
* `H:CJ4_FMC_1_BTN_IDX`
* `H:CJ4_FMC_1_BTN_MSG`
* `H:CJ4_FMC_1_BTN_DIR`
* `H:CJ4_FMC_1_BTN_TUN`
* `H:CJ4_FMC_1_BTN_FPLN`
* `H:CJ4_FMC_1_BTN_LEGS`
* `H:CJ4_FMC_1_BTN_DEPARR`
* `H:CJ4_FMC_1_BTN_PERF`
* `H:CJ4_FMC_1_BTN_DSPL_MENU`
* `H:CJ4_FMC_1_BTN_MFD_ADV`
* `H:CJ4_FMC_1_BTN_MFD_DATA`
* `H:CJ4_FMC_1_BTN_PREVPAGE`
* `H:CJ4_FMC_1_BTN_NEXTPAGE`
* `H:CJ4_FMC_1_BTN_EXEC`
* `H:CJ4_FMC_1_BTN_CLR`
* `H:CJ4_FMC_1_BTN_CLR_Long`
* `H:CJ4_FMC_1_BTN_L1`
* `H:CJ4_FMC_1_BTN_L2`
* `H:CJ4_FMC_1_BTN_L3`
* `H:CJ4_FMC_1_BTN_L4`
* `H:CJ4_FMC_1_BTN_L5`
* `H:CJ4_FMC_1_BTN_L6`
* `H:CJ4_FMC_1_BTN_R1`
* `H:CJ4_FMC_1_BTN_R2`
* `H:CJ4_FMC_1_BTN_R3`
* `H:CJ4_FMC_1_BTN_R4`
* `H:CJ4_FMC_1_BTN_R5`
* `H:CJ4_FMC_1_BTN_R6`
* `H:CJ4_FMC_1_BTN_A`
* `H:CJ4_FMC_1_BTN_B`
* `H:CJ4_FMC_1_BTN_C`
* `H:CJ4_FMC_1_BTN_D`
* `H:CJ4_FMC_1_BTN_E`
* `H:CJ4_FMC_1_BTN_F`
* `H:CJ4_FMC_1_BTN_G`
* `H:CJ4_FMC_1_BTN_H`
* `H:CJ4_FMC_1_BTN_I`
* `H:CJ4_FMC_1_BTN_J`
* `H:CJ4_FMC_1_BTN_K`
* `H:CJ4_FMC_1_BTN_L`
* `H:CJ4_FMC_1_BTN_M`
* `H:CJ4_FMC_1_BTN_N`
* `H:CJ4_FMC_1_BTN_O`
* `H:CJ4_FMC_1_BTN_P`
* `H:CJ4_FMC_1_BTN_Q`
* `H:CJ4_FMC_1_BTN_R`
* `H:CJ4_FMC_1_BTN_S`
* `H:CJ4_FMC_1_BTN_T`
* `H:CJ4_FMC_1_BTN_U`
* `H:CJ4_FMC_1_BTN_V`
* `H:CJ4_FMC_1_BTN_W`
* `H:CJ4_FMC_1_BTN_X`
* `H:CJ4_FMC_1_BTN_Y`
* `H:CJ4_FMC_1_BTN_Z`
* `H:CJ4_FMC_1_BTN_0`
* `H:CJ4_FMC_1_BTN_1`
* `H:CJ4_FMC_1_BTN_2`
* `H:CJ4_FMC_1_BTN_3`
* `H:CJ4_FMC_1_BTN_4`
* `H:CJ4_FMC_1_BTN_5`
* `H:CJ4_FMC_1_BTN_6`
* `H:CJ4_FMC_1_BTN_7`
* `H:CJ4_FMC_1_BTN_8`
* `H:CJ4_FMC_1_BTN_9`
* `H:CJ4_FMC_1_BTN_DOT`
* `H:CJ4_FMC_1_BTN_PLUSMINUS`
* `H:CJ4_FMC_1_BTN_DIV`
{% endcapture %}
{% include accordionitem.html id="fmcbuttons" h=group c=details %}
</div>

_Thanks to Reongard for providing the PFD and FMC events_