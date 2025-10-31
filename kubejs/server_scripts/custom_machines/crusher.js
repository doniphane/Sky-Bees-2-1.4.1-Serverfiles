
onEvent('recipes', e => {

//crusher

function dropcrusher(ticks, block, item) {

e.recipes.custommachinery.custom_machine("custommachinery:crusher", ticks)


.produceItem(item)
.requireItem(block).chance(1.0)
.jei()
}

dropcrusher(60, "minecraft:cobblestone", "minecraft:gravel")
dropcrusher(60, "minecraft:gravel", "minecraft:sand")
dropcrusher(60, "minecraft:stone", "minecraft:cobblestone")
dropcrusher(60, "minecraft:obsidian", "4x mekanism:dust_obsidian")

  })
