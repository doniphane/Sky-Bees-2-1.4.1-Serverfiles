onEvent('recipes', event => {



// In all shapeless crafting recipes, replace any planks with Gold Nugget in input items
//event.replaceInput({type: 'minecraft:crafting_shapeless'}, '#minecraft:planks', 'minecraft:gold_nugget')
event.replaceInput({type: 'minecraft:crafting_shaped'}, '#appliedenergistics2:dusts/ender', 'thermal:ender_pearl_dust')




})
