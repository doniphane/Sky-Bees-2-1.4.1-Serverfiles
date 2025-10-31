//iron_dust
<recipetype:appliedenergistics2:grinder>.addRecipe("iron_dust", <item:thermal:iron_dust> * 2, <item:minecraft:iron_ore>, 5);
<recipetype:appliedenergistics2:grinder>.addRecipe("iron_dust2", <item:thermal:iron_dust>, <item:minecraft:iron_ingot>, 5);
//gold_dust
<recipetype:appliedenergistics2:grinder>.addRecipe("gold_dust", <item:thermal:gold_dust> * 2, <item:minecraft:gold_ore>, 5);
<recipetype:appliedenergistics2:grinder>.addRecipe("gold_dust2", <item:thermal:gold_dust>, <item:minecraft:gold_ingot>, 5);
//ender_dust
<recipetype:appliedenergistics2:grinder>.addRecipe("ender_dust", <item:thermal:ender_pearl_dust>, <item:minecraft:ender_pearl>, 5);
//quartz_dust
<recipetype:appliedenergistics2:grinder>.addRecipe("quartz_dust", <item:thermal:quartz_dust> * 2, <item:minecraft:quartz>, 5);
<recipetype:appliedenergistics2:grinder>.addRecipe("quartz_dust2", <item:thermal:quartz_dust>, <item:minecraft:nether_quartz_ore>, 5);
<recipetype:appliedenergistics2:grinder>.addRecipe("quartz_dust3", <item:minecraft:cobblestone>, <tag:items:chisel:diorite>, 5, [<item:thermal:quartz_dust> % 40]);




//1k_storage_cell
craftingTable.addShapedMirrored("1k_storage_cell", <item:appliedenergistics2:1k_storage_cell>, [
    [<item:appliedenergistics2:1k_cell_component>, <item:appliedenergistics2:empty_storage_cell>],
    [<item:minecraft:air>, <item:minecraft:air>]
]);

//1k_fluid_storage_cell
craftingTable.addShapedMirrored("1k_fluid_storage_cell", <item:appliedenergistics2:1k_fluid_storage_cell>, [
    [<item:appliedenergistics2:1k_fluid_cell_component>, <item:appliedenergistics2:empty_storage_cell>],
    [<item:minecraft:air>, <item:minecraft:air>]
]);

//4k_storage_cell
craftingTable.addShapedMirrored("4k_storage_cell", <item:appliedenergistics2:4k_storage_cell>, [
    [<item:appliedenergistics2:4k_cell_component>, <item:appliedenergistics2:empty_storage_cell>],
    [<item:minecraft:air>, <item:minecraft:air>]
]);

//4k_fluid_storage_cell
craftingTable.addShapedMirrored("4k_fluid_storage_cell", <item:appliedenergistics2:4k_fluid_storage_cell>, [
    [<item:appliedenergistics2:4k_fluid_cell_component>, <item:appliedenergistics2:empty_storage_cell>],
    [<item:minecraft:air>, <item:minecraft:air>]
]);

//16k_storage_cell
craftingTable.addShapedMirrored("16k_storage_cell", <item:appliedenergistics2:16k_storage_cell>, [
    [<item:appliedenergistics2:16k_cell_component>, <item:appliedenergistics2:empty_storage_cell>],
    [<item:minecraft:air>, <item:minecraft:air>]
]);

//16k_fluid_storage_cell
craftingTable.addShapedMirrored("16k_fluid_storage_cell", <item:appliedenergistics2:16k_fluid_storage_cell>, [
    [<item:appliedenergistics2:16k_fluid_cell_component>, <item:appliedenergistics2:empty_storage_cell>],
    [<item:minecraft:air>, <item:minecraft:air>]
]);

//64k_storage_cell
craftingTable.addShapedMirrored("64k_storage_cell", <item:appliedenergistics2:64k_storage_cell>, [
    [<item:appliedenergistics2:64k_cell_component>, <item:appliedenergistics2:empty_storage_cell>],
    [<item:minecraft:air>, <item:minecraft:air>]
]);

//64k_fluid_storage_cell
craftingTable.addShapedMirrored("64k_fluid_storage_cell", <item:appliedenergistics2:64k_fluid_storage_cell>, [
    [<item:appliedenergistics2:64k_fluid_cell_component>, <item:appliedenergistics2:empty_storage_cell>],
    [<item:minecraft:air>, <item:minecraft:air>]
]);

//Calculation Processor Press
mods.extendedcrafting.TableCrafting.addShaped("calculation_processor_press", <item:appliedenergistics2:calculation_processor_press>, [
	[<item:appliedenergistics2:charged_certus_quartz_crystal>, <item:mekanism:ingot_steel>, <item:appliedenergistics2:charged_certus_quartz_crystal>],
	[<item:mekanism:ingot_steel>, <item:appliedenergistics2:certus_quartz_dust>, <item:mekanism:ingot_steel>],
	[<item:appliedenergistics2:charged_certus_quartz_crystal>, <item:mekanism:ingot_steel>, <item:appliedenergistics2:charged_certus_quartz_crystal>]
]);

//Engineering Processor Press
mods.extendedcrafting.TableCrafting.addShaped("engineering_processor_press", <item:appliedenergistics2:engineering_processor_press>, [
	[<item:mekanism:ingot_steel>, <item:appliedenergistics2:charged_certus_quartz_crystal>, <item:mekanism:ingot_steel>],
	[<item:appliedenergistics2:charged_certus_quartz_crystal>, <item:appliedenergistics2:certus_quartz_dust>, <item:appliedenergistics2:charged_certus_quartz_crystal>],
	[<item:mekanism:ingot_steel>, <item:appliedenergistics2:charged_certus_quartz_crystal>, <item:mekanism:ingot_steel>]
]);

//Logic Processor Press
mods.extendedcrafting.TableCrafting.addShaped("logic_processor_press", <item:appliedenergistics2:logic_processor_press>, [
	[<item:mekanism:ingot_steel>, <item:appliedenergistics2:charged_certus_quartz_crystal>, <item:mekanism:ingot_steel>],
	[<item:appliedenergistics2:charged_certus_quartz_crystal>, <item:mekanism:ingot_steel>, <item:appliedenergistics2:charged_certus_quartz_crystal>],
	[<item:mekanism:ingot_steel>, <item:appliedenergistics2:charged_certus_quartz_crystal>, <item:mekanism:ingot_steel>]
]);

//Silicon Press
mods.extendedcrafting.TableCrafting.addShaped("silicon_press", <item:appliedenergistics2:silicon_press>, [
	[<item:appliedenergistics2:charged_certus_quartz_crystal>, <item:mekanism:ingot_steel>, <item:appliedenergistics2:charged_certus_quartz_crystal>],
	[<item:mekanism:ingot_steel>, <item:appliedenergistics2:charged_certus_quartz_crystal>, <item:mekanism:ingot_steel>],
	[<item:appliedenergistics2:charged_certus_quartz_crystal>, <item:mekanism:ingot_steel>, <item:appliedenergistics2:charged_certus_quartz_crystal>]
]);

//me controller
mods.extendedcrafting.TableCrafting.addShaped("controller", <item:appliedenergistics2:controller>, [
	[<item:appliedenergistics2:smooth_sky_stone_block>, <item:appliedenergistics2:smooth_sky_stone_block>, <item:appliedenergistics2:purified_fluix_crystal>, <item:appliedenergistics2:smooth_sky_stone_block>, <item:appliedenergistics2:smooth_sky_stone_block>],
	[<item:appliedenergistics2:smooth_sky_stone_block>, <item:tconstruct:large_plate>.withTag({Material: "tconstruct:steel" as string}), <item:appliedenergistics2:engineering_processor>, <item:tconstruct:large_plate>.withTag({Material: "tconstruct:steel" as string}), <item:appliedenergistics2:smooth_sky_stone_block>],
	[<item:appliedenergistics2:purified_fluix_crystal>, <item:appliedenergistics2:engineering_processor>, <item:mekanism:steel_casing>, <item:appliedenergistics2:engineering_processor>, <item:appliedenergistics2:purified_fluix_crystal>],
	[<item:appliedenergistics2:smooth_sky_stone_block>, <item:tconstruct:large_plate>.withTag({Material: "tconstruct:steel" as string}), <item:appliedenergistics2:engineering_processor>, <item:tconstruct:large_plate>.withTag({Material: "tconstruct:steel" as string}), <item:appliedenergistics2:smooth_sky_stone_block>],
	[<item:appliedenergistics2:smooth_sky_stone_block>, <item:appliedenergistics2:smooth_sky_stone_block>, <item:appliedenergistics2:purified_fluix_crystal>, <item:appliedenergistics2:smooth_sky_stone_block>, <item:appliedenergistics2:smooth_sky_stone_block>]
]);

//me drive
mods.extendedcrafting.TableCrafting.addShaped("drive", <item:appliedenergistics2:drive>, [
	[<item:tconstruct:large_plate>.withTag({Material: "tconstruct:steel" as string}), <item:appliedenergistics2:engineering_processor>, <item:tconstruct:large_plate>.withTag({Material: "tconstruct:steel" as string})],
	[<item:appliedenergistics2:fluix_glass_cable>, <item:mekanism:steel_casing>, <item:appliedenergistics2:fluix_glass_cable>],
	[<item:tconstruct:large_plate>.withTag({Material: "tconstruct:steel" as string}), <item:appliedenergistics2:engineering_processor>, <item:tconstruct:large_plate>.withTag({Material: "tconstruct:steel" as string})]
  ]);

//vibration_chamber
craftingTable.addShapedMirrored("vibration_chamber", <item:appliedenergistics2:vibration_chamber>, [
  	[<item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>],
  	[<item:minecraft:iron_ingot>, <item:minecraft:furnace>, <item:minecraft:iron_ingot>],
  	[<item:minecraft:iron_ingot>, <item:appliedenergistics2:energy_cell>, <item:minecraft:iron_ingot>]
]);

//sky_dust
<recipetype:thermal:pulverizer>.addRecipe("sky_dust", [<item:appliedenergistics2:sky_dust> % 100] , <item:appliedenergistics2:sky_stone_block>, 0, 2000);

//grindstone
craftingTable.addShapedMirrored("grindstone", <item:appliedenergistics2:grindstone>, [
	[<tag:items:forge:stone>, <item:appliedenergistics2:wooden_gear>, <tag:items:forge:stone>],
	[<tag:items:forge:ingots/iron>, <tag:items:forge:stone>, <tag:items:forge:ingots/iron>],
	[<tag:items:forge:cobblestone>, <tag:items:forge:ingots/iron>, <tag:items:forge:cobblestone>]
]);

//ender_pearl_dust1
craftingTable.addShapeless("ender_pearl_dust1", <item:thermal:ender_pearl_dust>,
      [<item:appliedenergistics2:ender_dust>]
    );

//ender_pearl_dust2
  craftingTable.addShapeless("ender_pearl_dust2", <item:appliedenergistics2:ender_dust>,
      [<item:thermal:ender_pearl_dust>]
    );
