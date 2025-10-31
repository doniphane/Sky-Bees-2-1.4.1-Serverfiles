
onEvent('recipes', event => {


//event.recipes.mekanism.combining(output, input1, input2)
//copper
event.recipes.mekanism.combining('thermal:copper_ore', '8x thermal:copper_dust', '#forge:cobblestone')
//tin
event.recipes.mekanism.combining('thermal:tin_ore', '8x thermal:tin_dust', '#forge:cobblestone')
//lead
event.recipes.mekanism.combining('thermal:lead_ore', '8x thermal:lead_dust', '#forge:cobblestone')
//gold
event.recipes.mekanism.combining('minecraft:nether_gold_ore', '8x thermal:gold_dust', '#forge:netherrack')
//dimensionalshard
event.recipes.mekanism.combining('rftoolsbase:dimensionalshard_nether', '8x rftoolsbase:dimensionalshard', '#forge:netherrack')
//uraninite
event.recipes.mekanism.combining('powah:uraninite_ore', '8x powah:uraninite', '#forge:cobblestone')
//seed_ore
event.recipes.mekanism.combining('kubejs:seed_ore', '8x minecraft:wheat_seeds', '#forge:cobblestone')
//charged_quartz_ore
event.recipes.mekanism.combining('appliedenergistics2:charged_quartz_ore', '5x appliedenergistics2:charged_certus_quartz_crystal', '#forge:cobblestone')


})
