//filter_kabel
craftingTable.addShapedMirrored("filter_kabel", <item:storagenetwork:filter_kabel> * 4, [
  	[<item:minecraft:air>, <item:storagenetwork:storage_kabel>, <item:minecraft:air>],
    [<item:storagenetwork:storage_kabel>, <item:itemfilters:custom>, <item:storagenetwork:storage_kabel>],
    [<item:minecraft:air>, <item:storagenetwork:storage_kabel>, <item:minecraft:air>]
]);

//master
craftingTable.addShapedMirrored("master", <item:storagenetwork:master>, [
	[<item:minecraft:iron_block>, <item:storagenetwork:kabel>, <item:minecraft:iron_block>],
	[<item:storagenetwork:kabel>, <item:ftbjarmod:cast_iron_gear>, <item:storagenetwork:kabel>],
	[<item:minecraft:iron_block>, <item:storagenetwork:kabel>, <item:minecraft:iron_block>]
]);

//inventory
craftingTable.addShapedMirrored("inventory", <item:storagenetwork:inventory>, [
  	[<item:minecraft:iron_nugget>, <item:storagenetwork:kabel>, <item:minecraft:iron_nugget>],
    [<item:storagenetwork:kabel>, <tag:items:storagedrawers:drawers>, <item:storagenetwork:kabel>],
    [<item:minecraft:iron_nugget>, <item:storagenetwork:kabel>, <item:minecraft:iron_nugget>]
]);
