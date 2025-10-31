//manainfused_coal
<recipetype:botania:runic_altar>.addRecipe("mana_infused_coal", <item:kubejs:manainfused_coal>, 15000, <item:minecraft:coal_block>, <item:minecraft:coal_block>, <item:minecraft:coal_block>, <item:minecraft:coal_block>, <item:minecraft:coal_block>, <item:minecraft:coal_block>, <item:minecraft:coal_block>, <item:minecraft:coal_block>, <item:minecraft:coal_block>);


//starlight_iron
<recipetype:astralsorcery:altar>.addRecipe("starlight_infused_iron", "CONSTELLATION", <item:kubejs:starlight_iron>, [
"ab_ba",
"baaab",
"_aba_",
"baaab",
"ab_ba"], {a: <item:astralsorcery:marble_raw>, b: <tag:items:forge:storage_blocks/iron>}, 50, 500);


//empty_dna
craftingTable.addShapedMirrored("empty_dna", <item:kubejs:empty_dna>, [
  	[<item:minecraft:air>, <item:minecraft:clay_ball>, <item:minecraft:air>],
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>],
    [<item:minecraft:air>, <item:minecraft:clay_ball>, <item:minecraft:air>]
]);

//dna_spawner
craftingTable.addShapedMirrored("dna_spawner", <item:kubejs:dna_spawner>, [
  	[<item:minecraft:oak_planks>, <item:minecraft:oak_log>, <item:minecraft:oak_planks>],
    [<item:minecraft:oak_log>, <item:kubejs:empty_dna>, <item:minecraft:oak_log>],
    [<item:minecraft:oak_planks>, <item:minecraft:oak_log>, <item:minecraft:oak_planks>]
]);
