//dielectric_paste
<recipetype:botania:mana_infusion>.addRecipe("dielectric_paste", <item:powah:dielectric_paste>, <tag:items:minecraft:coals>, 50);


//furnator - starter
craftingTable.addShaped("furnator_starter", <item:powah:furnator_starter>, [
	[<item:powah:dielectric_paste>, <item:powah:dielectric_rod_horizontal>, <item:powah:dielectric_paste>],
	[<item:powah:dielectric_rod>, <item:powah:dielectric_casing>, <item:powah:dielectric_rod>],
	[<item:powah:dielectric_paste>, <item:minecraft:furnace>, <item:powah:dielectric_paste>]
]);
