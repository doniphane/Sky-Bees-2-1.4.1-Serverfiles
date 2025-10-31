onEvent('recipes', event => {



//event.recipes.mekanism.metallurgic_purifying(output, inputItem, infusionInput, infusionAmount)
//event.recipes.mekanism.purifying('minecraft:obsidian', 'minecraft:lava_bucket', {gas: 'mekanism:oxygen', amount: 200})
event.recipes.mekanism.injecting('thermal:sulfur_dust', 'minecraft:gunpowder', {gas: 'mekanism:hydrogen_chloride', amount: 1})

})
