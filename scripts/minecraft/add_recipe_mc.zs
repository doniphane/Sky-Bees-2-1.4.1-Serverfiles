//furnace
craftingTable.addShapedMirrored("furnace", <item:minecraft:furnace>, [
  	[<item:compressium:cobblestone_1>, <item:compressium:cobblestone_1>, <item:compressium:cobblestone_1>],
    [<item:compressium:cobblestone_1>, <item:minecraft:air>, <item:compressium:cobblestone_1>],
    [<item:compressium:cobblestone_1>, <item:compressium:cobblestone_1>, <item:compressium:cobblestone_1>]
]);

//honeycomb_block
craftingTable.addShapedMirrored("honeycomb_block", <item:minecraft:honeycomb_block>, [
    [<item:minecraft:honeycomb>, <item:minecraft:honeycomb>, <item:minecraft:honeycomb>],
    [<item:minecraft:honeycomb>, <item:minecraft:honeycomb>, <item:minecraft:honeycomb>],
    [<item:minecraft:honeycomb>,<item:minecraft:honeycomb>,<item:minecraft:honeycomb>]
]);

//honeycomb_block_to_honeycomb
craftingTable.addShapeless("honeycomb_block_to_honeycomb", <item:minecraft:honeycomb> * 9,
    [<item:minecraft:honeycomb_block>]
);

//campfire
craftingTable.addShaped("campfire", <item:minecraft:campfire>, [
    [<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>],
    [<item:minecraft:stick>, <item:minecraft:torch>, <item:minecraft:stick>],
    [<tag:items:minecraft:logs>, <tag:items:minecraft:logs>, <tag:items:minecraft:logs>]
]);

//clay to clay_ball
craftingTable.addShapeless("clay_ball", <item:minecraft:clay_ball> * 4,
    [<item:minecraft:clay>]
);

//elytra
mods.extendedcrafting.TableCrafting.addShaped("elytra", <item:minecraft:elytra>, [
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
	[<item:minecraft:air>, <item:resourcefulbees:wax>, <item:botania:terrasteel_chestplate>, <item:resourcefulbees:wax>, <item:minecraft:air>],
	[<item:minecraft:air>, <item:minecraft:phantom_membrane>, <item:botania:pixie_dust>, <item:minecraft:phantom_membrane>, <item:minecraft:air>],
	[<item:minecraft:phantom_membrane>, <item:minecraft:phantom_membrane>, <item:botania:pixie_dust>, <item:minecraft:phantom_membrane>, <item:minecraft:phantom_membrane>],
	[<item:minecraft:phantom_membrane>, <item:minecraft:phantom_membrane>, <item:minecraft:air>, <item:minecraft:phantom_membrane>, <item:minecraft:phantom_membrane>]
]);

//string
craftingTable.addShaped("string", <item:minecraft:string>, [
    [<tag:items:minecraft:leaves>, <tag:items:minecraft:leaves>, <tag:items:minecraft:leaves>]
]);

//hive
craftingTable.addShaped("beehive", <item:minecraft:beehive>, [
    [<tag:items:minecraft:planks>, <tag:items:minecraft:planks>, <tag:items:minecraft:planks>],
    [<item:minecraft:string>, <item:minecraft:string>, <item:minecraft:string>],
    [<tag:items:minecraft:planks>, <tag:items:minecraft:planks>, <tag:items:minecraft:planks>]
]);

//chest
craftingTable.addShaped("chestx4", <item:minecraft:chest> * 4, [
    [<tag:items:minecraft:logs>, <tag:items:minecraft:logs>, <tag:items:minecraft:logs>],
    [<tag:items:minecraft:logs>, <item:minecraft:air>, <tag:items:minecraft:logs>],
    [<tag:items:minecraft:logs>, <tag:items:minecraft:logs>, <tag:items:minecraft:logs>]
]);
