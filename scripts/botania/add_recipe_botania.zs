//glowstone_dust
<recipetype:botania:mana_infusion>.addRecipe("mana_infusion_glowstone", <item:minecraft:glowstone_dust>, <item:minecraft:gunpowder>, 200);
//blaze_powder
<recipetype:botania:mana_infusion>.addRecipe("mana_infusion_blaze_powder", <item:minecraft:blaze_powder>, <item:botania:mana_powder>, 200);
//uraninite_raw_poor
<recipetype:botania:mana_infusion>.addRecipe("mana_infusion_uraninite", <item:powah:uraninite_raw_poor>, <item:mekanism:dust_uranium>, 200);
//blackstone
<recipetype:botania:pure_daisy>.addRecipe("pure_daisy_blackstone", <blockstate:minecraft:blackstone>, <blockstate:minecraft:black_concrete>, 60);
//sky_stone_block
<recipetype:botania:pure_daisy>.addRecipe("pure_daisy_sky_stone", <blockstate:appliedenergistics2:sky_stone_block>, <blockstate:minecraft:polished_blackstone>, 60);
//orechid_ignem
<recipetype:botania:petal_apothecary>.addRecipe("orechid_ignem", <item:botania:orechid_ignem>, <tag:items:botania:petals/red>, <tag:items:botania:petals/red>, <tag:items:botania:petals/white>, <tag:items:botania:petals/white>, <tag:items:botania:petals/pink>, <tag:items:botania:runes/pride>, <tag:items:botania:runes/greed>, <item:botania:redstone_root>);
//orechid
<recipetype:botania:petal_apothecary>.addRecipe("orechid", <item:botania:orechid>, <tag:items:botania:petals/red>, <tag:items:botania:petals/red>, <tag:items:botania:petals/white>, <tag:items:botania:petals/green>, <tag:items:botania:petals/green>, <tag:items:botania:petals/yellow>, <tag:items:botania:petals/yellow>, <tag:items:botania:petals/gray>, <tag:items:botania:petals/gray>);
//brown_mushroom
<recipetype:botania:mana_infusion>.addRecipe("mana_infusion_brown_mushroom", <item:minecraft:brown_mushroom>, <item:minecraft:poppy>, 200);
//brown_mushroom2
<recipetype:botania:mana_infusion>.addRecipe("mana_infusion_brown_mushroom2", <item:minecraft:brown_mushroom>, <item:minecraft:dandelion>, 200);
//red_mushroom
<recipetype:botania:mana_infusion>.addRecipe("mana_infusion_red_mushroom", <item:minecraft:red_mushroom>, <item:minecraft:brown_mushroom>, 200, <block:botania:alchemy_catalyst>);
//brown_mushroom3
<recipetype:botania:mana_infusion>.addRecipe("mana_infusion_red_mushroom3", <item:minecraft:brown_mushroom>, <item:minecraft:red_mushroom>, 200, <block:botania:alchemy_catalyst>);

//mana_spreader
craftingTable.addShapedMirrored("mana_spreader", <item:botania:mana_spreader>, [
  	[<item:botania:livingwood>, <item:botania:livingwood>, <item:botania:livingwood>],
  	[<item:minecraft:iron_ingot>, <tag:items:botania:petals>, <item:minecraft:air>],
  	[<item:botania:livingwood>, <item:botania:livingwood>, <item:botania:livingwood>]
]);

//ghast tear
<recipetype:botania:mana_infusion>.addRecipe("ghast_tear", <item:minecraft:ghast_tear>, <item:minecraft:ender_pearl>, 25000, <block:botania:alchemy_catalyst>);
