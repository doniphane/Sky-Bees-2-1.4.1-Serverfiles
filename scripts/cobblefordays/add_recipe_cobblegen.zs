//cobble generator tier 1 clay
craftingTable.addShapedMirrored("cobblegenerator", <item:cobblefordays:tier_2>, [
  	[<tag:items:forge:cobblestone>, <tag:items:forge:cobblestone>, <tag:items:forge:cobblestone>],
  	[<item:ceramicbucket:filled_ceramic_bucket>.withTag({Fluid: {FluidName: "minecraft:water" as string, Amount: 1000 as int}}), <item:minecraft:glass>, <item:ceramicbucket:filled_ceramic_bucket>.withTag({Fluid: {FluidName: "minecraft:lava" as string, Amount: 1000 as int}})],
  	[<tag:items:forge:cobblestone>, <tag:items:forge:cobblestone>, <tag:items:forge:cobblestone>]
]);

//iron generator
craftingTable.addShapedMirrored("cobblegen_tier_2", <item:cobblefordays:tier_3>, [
  	[<item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>],
  	[<item:minecraft:iron_ingot>, <item:cobblefordays:tier_2>, <item:minecraft:iron_ingot>],
  	[<item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>]
]);

//gold generator
craftingTable.addShapedMirrored("cobblegen_tier_3", <item:cobblefordays:tier_4>, [
  	[<item:minecraft:gold_ingot>, <item:minecraft:gold_ingot>, <item:minecraft:gold_ingot>],
  	[<item:minecraft:gold_ingot>, <item:cobblefordays:tier_3>, <item:minecraft:gold_ingot>],
  	[<item:minecraft:gold_ingot>, <item:minecraft:gold_ingot>, <item:minecraft:gold_ingot>]
]);

//dia generator
craftingTable.addShapedMirrored("cobblegen_tier_4", <item:cobblefordays:tier_5>, [
  	[<item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>],
  	[<item:minecraft:diamond>, <item:cobblefordays:tier_4>, <item:minecraft:diamond>],
  	[<item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>]
]);
