onEvent('recipes', event => {


//event.recipes.mekanism.smelting(output, input)
//copper
event.recipes.mekanism.smelting('thermal:copper_ingot', 'thermal:copper_dust')
event.recipes.mekanism.smelting('thermal:copper_ingot', 'thermal:copper_ore')
//tin
event.recipes.mekanism.smelting('thermal:tin_ingot', 'thermal:tin_dust')
event.recipes.mekanism.smelting('thermal:tin_ingot', 'thermal:tin_ore')
//lead
event.recipes.mekanism.smelting('thermal:lead_ingot', 'thermal:lead_dust')
event.recipes.mekanism.smelting('thermal:lead_ingot', 'thermal:lead_ore')
//seared_brick
event.recipes.mekanism.smelting('tconstruct:seared_brick', 'tconstruct:grout')


})
