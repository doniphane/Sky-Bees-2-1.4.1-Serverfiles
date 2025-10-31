//smoker canister
craftingTable.addShapedMirrored("smoker_can", <item:resourcefulbees:smoker_can>, [
  	[<item:ftbjarmod:cast_iron_ingot>, <item:ftbjarmod:cast_iron_ingot>, <item:minecraft:air>],
    [<item:ftbjarmod:cast_iron_ingot>, <item:minecraft:air>, <item:ftbjarmod:cast_iron_ingot>],
    [<item:ftbjarmod:cast_iron_ingot>, <item:minecraft:campfire>, <item:ftbjarmod:cast_iron_ingot>]
]);

//honeybucket
craftingTable.addShapedMirrored("honeybucket", <item:ceramicbucket:filled_ceramic_bucket>.withTag({Fluid: {FluidName: "resourcefulbees:honey" as string, Amount: 1000 as int}}), [
  	[<item:ceramicbucket:ceramic_bucket>, <item:minecraft:honey_bottle>, <item:minecraft:honey_bottle>],
    [<item:minecraft:honey_bottle>, <item:minecraft:honey_bottle>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);

//honeybottle
craftingTable.addShapedMirrored("honey_bottle", <item:minecraft:honey_bottle> * 4, [
  	[<item:ceramicbucket:filled_ceramic_bucket>.withTag({Fluid: {FluidName: "resourcefulbees:honey" as string, Amount: 1000 as int}}), <item:minecraft:glass_bottle>, <item:minecraft:glass_bottle>],
    [<item:minecraft:glass_bottle>, <item:minecraft:glass_bottle>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);

//mechanical_centrifuge
craftingTable.addShapedMirrored("mechanical_centrifuge", <item:resourcefulbees:mechanical_centrifuge>, [
  	[<item:ftbjarmod:cast_iron_ingot>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:minecraft:barrel>, <item:minecraft:lever>, <item:minecraft:air>],
    [<item:ftbjarmod:cast_iron_ingot>, <item:minecraft:air>, <item:minecraft:air>]
]);

//t1_beehive
craftingTable.addShaped("t1_beehive", <item:resourcefulbees:t1_beehive>, [
    [<item:minecraft:grass>, <item:minecraft:grass>, <item:minecraft:grass>],
    [<item:minecraft:grass>, <item:minecraft:beehive>, <item:minecraft:grass>],
    [<item:minecraft:grass>, <item:minecraft:grass>, <item:minecraft:grass>]
]);

//t2_beehive
craftingTable.addShaped("t2_beehive", <item:resourcefulbees:t2_beehive>, [
    [<tag:items:resourcefulbees:resourceful_honeycomb>, <item:resourcefulbees:wax>, <tag:items:resourcefulbees:resourceful_honeycomb>],
    [<item:resourcefulbees:wax>, <item:resourcefulbees:t1_beehive>, <item:resourcefulbees:wax>],
    [<tag:items:resourcefulbees:resourceful_honeycomb>, <item:resourcefulbees:wax>, <tag:items:resourcefulbees:resourceful_honeycomb>]
]);

//t3_beehive
craftingTable.addShaped("t3_beehive", <item:resourcefulbees:t3_beehive>, [
    [<tag:items:resourcefulbees:resourceful_honeycomb_block>, <item:resourcefulbees:wax_block>, <tag:items:resourcefulbees:resourceful_honeycomb_block>],
    [<item:resourcefulbees:wax_block>, <item:resourcefulbees:t2_beehive>, <item:resourcefulbees:wax_block>],
    [<tag:items:resourcefulbees:resourceful_honeycomb_block>, <item:resourcefulbees:wax_block>, <tag:items:resourcefulbees:resourceful_honeycomb_block>]
]);

//t4_beehive
craftingTable.addShaped("t4_beehive", <item:resourcefulbees:t4_beehive>, [
    [<tag:items:resourcefulbees:resourceful_honeycomb_block>, <tag:items:resourcefulbees:resourceful_honey_block>, <tag:items:resourcefulbees:resourceful_honeycomb_block>],
    [<tag:items:resourcefulbees:resourceful_honey_block>, <item:resourcefulbees:t3_beehive>, <tag:items:resourcefulbees:resourceful_honey_block>],
    [<tag:items:resourcefulbees:resourceful_honeycomb_block>, <tag:items:resourcefulbees:resourceful_honey_block>, <tag:items:resourcefulbees:resourceful_honeycomb_block>]
]);

//t1_apiary
craftingTable.addShaped("t1_apiary", <item:resourcefulbees:t1_apiary>, [
    [<tag:items:resourcefulbees:resourceful_honeycomb_block>, <item:resourcefulbees:t4_beehive>, <tag:items:resourcefulbees:resourceful_honeycomb_block>],
    [<item:resourcefulbees:t4_beehive>, <item:minecraft:nether_star>, <item:resourcefulbees:t4_beehive>],
    [<tag:items:resourcefulbees:resourceful_honeycomb_block>, <item:resourcefulbees:t4_beehive>, <tag:items:resourcefulbees:resourceful_honeycomb_block>]
]);

//centrifuge
craftingTable.addShaped("centrifuge", <item:resourcefulbees:centrifuge>, [
	[<item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>],
	[<item:resourcefulbees:wax>, <item:minecraft:bucket>, <item:resourcefulbees:wax>],
	[<item:minecraft:smooth_stone>, <item:resourcefulbees:mechanical_centrifuge>, <item:minecraft:smooth_stone>]
]);

//waxed_machine_block
craftingTable.addShaped("waxed_machine_block", <item:resourcefulbees:waxed_machine_block>, [
	[<item:resourcefulbees:trimmed_waxed_planks>, <item:resourcefulbees:trimmed_waxed_planks>, <item:resourcefulbees:trimmed_waxed_planks>],
	[<item:resourcefulbees:trimmed_waxed_planks>, <item:mekanism:block_steel>, <item:resourcefulbees:trimmed_waxed_planks>],
	[<item:resourcefulbees:trimmed_waxed_planks>, <item:resourcefulbees:trimmed_waxed_planks>, <item:resourcefulbees:trimmed_waxed_planks>]
]);
