//valdanium_ingot to valdanium_nugget
craftingTable.addShapeless("valdanium_ingot_nugget", <item:kubejs:valdanium_nugget> * 9, [<item:kubejs:valdanium_ingot>]);

//valdanium_nugget to valdanium_ingot
craftingTable.addShapedMirrored("valdanium_nugget_ingot", <item:kubejs:valdanium_ingot>, [
  	[<item:kubejs:valdanium_nugget>, <item:kubejs:valdanium_nugget>, <item:kubejs:valdanium_nugget>],
    [<item:kubejs:valdanium_nugget>, <item:kubejs:valdanium_nugget>, <item:kubejs:valdanium_nugget>],
    [<item:kubejs:valdanium_nugget>, <item:kubejs:valdanium_nugget>, <item:kubejs:valdanium_nugget>]
]);

//valdanium_block to valdanium_ingot
craftingTable.addShapeless("valdanium_block_ingot", <item:kubejs:valdanium_ingot> * 9, [<item:kubejs:valdanium_block>]);

//valdanium_ingot to valdanium_block
craftingTable.addShapedMirrored("valdanium_ingot_block", <item:kubejs:valdanium_block>, [
  	[<item:kubejs:valdanium_ingot>, <item:kubejs:valdanium_ingot>, <item:kubejs:valdanium_ingot>],
    [<item:kubejs:valdanium_ingot>, <item:kubejs:valdanium_ingot>, <item:kubejs:valdanium_ingot>],
    [<item:kubejs:valdanium_ingot>, <item:kubejs:valdanium_ingot>, <item:kubejs:valdanium_ingot>]
]);

//Salad
craftingTable.addShapedMirrored("salad", <item:kubejs:salad>, [
  	[<item:minecraft:bread>, <item:thermal:tomato>, <item:thermal:onion>],
    [<item:minecraft:kelp>, <tag:items:forge:meat_cooked>, <tag:items:forge:meat_cooked>],
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);

//crusher
craftingTable.addShapedMirrored("crusher", <item:custommachinery:custom_machine_item>.withTag({machine: "custommachinery:crusher" as string}), [
  	[<item:minecraft:smooth_stone>, <item:minecraft:stone>, <item:minecraft:smooth_stone>],
    [<item:minecraft:stone>, <item:ftbjarmod:cast_iron_gear>, <item:minecraft:stone>],
    [<item:minecraft:smooth_stone>, <item:minecraft:stone>, <item:minecraft:smooth_stone>]
]);
