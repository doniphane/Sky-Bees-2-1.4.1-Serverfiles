onEvent('recipes', event => {


//copper
event.remove({output: 'mekanism:ingot_copper', type: 'minecraft:smelting'})
event.remove({output: 'mekanism:ingot_copper', type: 'minecraft:blasting'})
//tin
event.remove({output: 'mekanism:ingot_tin', type: 'minecraft:smelting'})
event.remove({output: 'mekanism:ingot_tin', type: 'minecraft:blasting'})
//lead
event.remove({output: 'mekanism:ingot_lead', type: 'minecraft:smelting'})
event.remove({output: 'mekanism:ingot_lead', type: 'minecraft:blasting'})
//bronze
event.remove({output: 'mekanism:ingot_bronze', type: 'minecraft:smelting'})
event.remove({output: 'mekanism:ingot_bronze', type: 'minecraft:blasting'})
event.remove({output: 'mekanism:nugget_bronze', type: 'minecraft:smelting'})
event.remove({output: 'mekanism:nugget_bronze', type: 'minecraft:blasting'})



})
