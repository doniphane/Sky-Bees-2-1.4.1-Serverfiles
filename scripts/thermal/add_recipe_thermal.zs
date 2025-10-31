// <recipetype:thermal:furnace>.addRecipe(String name, IItemStack output, IIngredient ingredient, float experience, int energy);
<recipetype:thermal:furnace>.addRecipe("seared_brick", <item:tconstruct:seared_brick>, <item:tconstruct:grout>, 0.3, 2000);
//honeycomb_block
// <recipetype:thermal:press>.addRecipe(String name, MCWeightedItemStack[] outputs, IFluidStack outputFluid, IIngredient[] ingredients, int energy);
<recipetype:thermal:press>.addRecipe("honeycomb_block", [<item:minecraft:honeycomb_block> % 100], <fluid:minecraft:empty>, [<item:minecraft:honeycomb> * 9, <item:thermal:press_packing_3x3_die>], 400);
//honeycomb
<recipetype:thermal:press>.addRecipe("honeycomb", [<item:minecraft:honeycomb> * 9 % 100], <fluid:minecraft:empty>, [<item:minecraft:honeycomb_block>, <item:thermal:press_unpacking_die>], 400);
//honey
<recipetype:thermal:crucible>.addRecipe("honey_block_to_honey", <fluid:resourcefulbees:honey> *1000, <item:minecraft:honey_block>, 2000);
<recipetype:thermal:centrifuge>.addRecipe("honeycomb_to_honey", [], <fluid:resourcefulbees:honey> *100, <item:minecraft:honeycomb>, 4000);
//honey_bottle
<recipetype:thermal:bottler>.addRecipe("bottler_honeybottle", <item:minecraft:honey_bottle>, <item:minecraft:glass_bottle>, <fluid:resourcefulbees:honey> *250, 400);
//machine_frame
// <recipetype:astralsorcery:infusion>.addRecipe(name as string, itemOutput as IItemStack, itemInput as IIngredient, liquidInput as MCFluid, craftingTickTime as int, consumptionChance as float, consumeMultipleFluids as bool, acceptChaliceInput as bool, copyNBTToOutputs as bool)
<recipetype:astralsorcery:infusion>.addRecipe("machine_frame", <item:thermal:machine_frame>, <item:industrialforegoing:machine_frame_pity>, <fluid:astralsorcery:liquid_starlight>, 200, 2, false, true, false);
