
val air = <item:minecraft:air>;

<recipetype:astralsorcery:altar>.addRecipe("auto_starlight_infuser", "CONSTELLATION", <item:custommachinery:custom_machine_item>.withTag({machine: "custommachinery:auto_starlight_infuser" as string}), [
[<item:mekanism:steel_casing>, <item:astralsorcery:marble_pillar>, air, <item:astralsorcery:marble_pillar>, <item:mekanism:steel_casing>],
[<item:astralsorcery:marble_pillar>, <item:rftoolsbase:machine_frame>, <item:thermal:machine_frame>, <item:rftoolsbase:machine_frame>, <item:astralsorcery:marble_pillar>],
[air, <item:thermal:machine_frame>, <item:astralsorcery:infuser>, <item:thermal:machine_frame>, air],
[<item:astralsorcery:marble_pillar>, <item:rftoolsbase:machine_frame>, <item:thermal:machine_frame>, <item:rftoolsbase:machine_frame>, <item:astralsorcery:marble_pillar>],
[<item:mekanism:steel_casing>, <item:astralsorcery:marble_pillar>, air, <item:astralsorcery:marble_pillar>, <item:mekanism:steel_casing>]
], 200, 1400);
