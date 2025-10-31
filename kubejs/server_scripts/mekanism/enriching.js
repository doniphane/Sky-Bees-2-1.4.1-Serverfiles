onEvent('recipes', event => {


//event.recipes.mekanism.enriching(output, input)
//ore
//    iron
event.recipes.mekanism.enriching('2x thermal:iron_dust', 'minecraft:iron_ore')
//    gold
event.recipes.mekanism.enriching('2x thermal:gold_dust', 'minecraft:gold_ore')
//    copper
event.recipes.mekanism.enriching('2x thermal:copper_dust', 'thermal:copper_ore')
//    tin
event.recipes.mekanism.enriching('2x thermal:tin_dust', 'thermal:tin_ore')
//    lead
event.recipes.mekanism.enriching('2x thermal:lead_dust', 'thermal:lead_ore')
//dirty_dust
//    copper
event.recipes.mekanism.enriching('thermal:copper_dust', 'mekanism:dirty_dust_copper')
//    tin
event.recipes.mekanism.enriching('thermal:tin_dust', 'mekanism:dirty_dust_tin')
//    lead
event.recipes.mekanism.enriching('thermal:lead_dust', 'mekanism:dirty_dust_lead')


})
