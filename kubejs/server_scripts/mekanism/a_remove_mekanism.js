onEvent('recipes', event => {


//iron
event.remove({output: 'mekanism:dust_iron', type: 'mekanism:enriching'})
event.remove({output: 'mekanism:dust_iron', type: 'mekanism:crushing'})
//gold
event.remove({output: 'mekanism:dust_gold', type: 'mekanism:enriching'})
event.remove({output: 'mekanism:dust_gold', type: 'mekanism:crushing'})
event.remove({output: 'minecraft:nether_gold_ore', type: 'mekanism:combining'})
//copper
event.remove({output: 'mekanism:dust_copper', type: 'mekanism:crushing'})
event.remove({output: 'mekanism:dust_copper', type: 'mekanism:enriching'})
event.remove({output: 'mekanism:ingot_copper', type: 'mekanism:smelting'})
event.remove({output: 'mekanism:copper_ore', type: 'mekanism:combining'})
//tin
event.remove({output: 'mekanism:dust_tin', type: 'mekanism:crushing'})
event.remove({output: 'mekanism:dust_tin', type: 'mekanism:enriching'})
event.remove({output: 'mekanism:ingot_tin', type: 'mekanism:smelting'})
event.remove({output: 'mekanism:tin_ore', type: 'mekanism:combining'})
//lead
event.remove({output: 'mekanism:dust_lead', type: 'mekanism:crushing'})
event.remove({output: 'mekanism:dust_lead', type: 'mekanism:enriching'})
event.remove({output: 'mekanism:ingot_lead', type: 'mekanism:smelting'})
event.remove({output: 'mekanism:lead_ore', type: 'mekanism:combining'})
//bronze
event.remove({output: 'mekanism:dust_bronze', type: 'mekanism:crushing'})
event.remove({output: 'mekanism:dust_bronze', type: 'mekanism:enriching'})
event.remove({output: 'mekanism:ingot_bronze', type: 'mekanism:smelting'})
event.remove({output: 'mekanism:ingot_bronze', type: 'mekanism:metallurgic_infusing'})
event.remove({output: 'mekanism:dust_bronze', type: 'mekanism:metallurgic_infusing'})
//diamond
event.remove({output: 'mekanism:dust_diamond', type: 'mekanism:crushing'})
//ender_dust
event.remove({output: 'appliedenergistics2:ender_dust', type: 'mekanism:crushing'})
//emerald
event.remove({output: 'mekanism:dust_emerald', type: 'mekanism:crushing'})
//quartz
event.remove({output: 'mekanism:dust_quartz', type: 'mekanism:crushing'})
//lapis
event.remove({output: 'mekanism:dust_lapis_lazuli', type: 'mekanism:crushing'})
//sulfur
event.remove({output: 'mekanism:dust_sulfur', type: 'mekanism:reaction'})
event.remove({output: 'mekanism:dust_sulfur', type: 'mekanism:injecting'})



})
