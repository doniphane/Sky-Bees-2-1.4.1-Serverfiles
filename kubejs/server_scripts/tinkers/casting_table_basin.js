//20

events.listen('recipes', event => {

//blocks
    //valdanium
event.custom({"type": "tconstruct:casting_basin","fluid": {"name": "kubejs:molten_valdanium","amount": 1296},"result": 'kubejs:valdanium_block',"cooling_time": 180})
    //compressed_iron
event.custom({"type": "tconstruct:casting_basin","fluid": {"name": "kubejs:molten_compressed_iron","amount": 1000},"result": 'compressium:iron_1',"cooling_time": 180})
    //compressed_dirt
event.custom({"type": "tconstruct:casting_basin","fluid": {"name": "kubejs:molten_compressed_coal","amount": 1000},"result": 'compressium:coal_1',"cooling_time": 180})


//ingots
  //valdanium
event.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:ingot_cast" },"cast_consumed": false,"fluid": {"name": "kubejs:molten_valdanium","amount": 144},"result": 'kubejs:valdanium_ingot',"cooling_time": 60})
event.custom({"type": "tconstruct:casting_table","cast": {"tag": "tconstruct:casts/single_use/ingot" },"cast_consumed": true,"fluid": {"name": "kubejs:molten_valdanium","amount": 144},"result": 'kubejs:valdanium_ingot',"cooling_time": 60})
  //black_iron_ingot
event.custom({"type": "tconstruct:casting_table","cast": {"item": "minecraft:black_dye" },"cast_consumed": true,"fluid": {"name": "tconstruct:molten_iron","amount": 144},"result": 'extendedcrafting:black_iron_ingot',"cooling_time": 60})
  //ender_ingot
event.custom({"type": "tconstruct:casting_table","cast": {"item": "minecraft:iron_ingot" },"cast_consumed": true,"fluid": {"name": "tconstruct:molten_ender","amount": 250},"result": 'extendedcrafting:ender_ingot',"cooling_time": 60})
  //redstone_ingot
event.custom({"type": "tconstruct:casting_table","cast": {"item": "minecraft:iron_ingot" },"cast_consumed": true,"fluid": {"name": "thermal:redstone","amount": 100},"result": 'extendedcrafting:redstone_ingot',"cooling_time": 60})
  //refined_glowstone
event.custom({"type": "tconstruct:casting_table","cast": {"item": "minecraft:glowstone_dust" },"cast_consumed": true,"fluid": {"name": "tconstruct:molten_osmium","amount": 144},"result": 'mekanism:ingot_refined_glowstone',"cooling_time": 60})
  //refined_obsidian
event.custom({"type": "tconstruct:casting_table","cast": {"item": "mekanism:dust_refined_obsidian" },"cast_consumed": true,"fluid": {"name": "tconstruct:molten_osmium","amount": 144},"result": 'mekanism:ingot_refined_obsidian',"cooling_time": 60})
  //refined_obsidian_dust
event.custom({"type": "tconstruct:casting_table","cast": {"tag": "forge:dusts/obsidian" },"cast_consumed": true,"fluid": {"name": "tconstruct:molten_diamond","amount": 144},"result": 'mekanism:dust_refined_obsidian',"cooling_time": 60})

//nuggets
event.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:nugget_cast" },"cast_consumed": false,"fluid": {"name": "kubejs:molten_valdanium","amount": 16},"result": 'kubejs:valdanium_nugget',"cooling_time": 20})
event.custom({"type": "tconstruct:casting_table","cast": {"tag": "tconstruct:casts/single_use/nugget" },"cast_consumed": true,"fluid": {"name": "kubejs:molten_valdanium","amount": 16},"result": 'kubejs:valdanium_nugget',"cooling_time": 20})

//custom
event.custom({"type": "tconstruct:casting_basin","cast": {"item": "thermal:energy_cell_frame" },"cast_consumed": true,"fluid": {"name": "thermal:redstone","amount": 5000},"result": 'thermal:energy_cell',"cooling_time": 500})
event.custom({"type": "tconstruct:casting_table","cast": {"tag": "forge:gears" },"cast_consumed": true,"fluid": {"name": "tconstruct:molten_invar","amount": 576},"result": 'thermal:press_gear_die',"cooling_time": 360})
event.custom({"type": "tconstruct:casting_table","cast": {"item": "kubejs:wooden_double_arrow" },"cast_consumed": true,"fluid": {"name": "tconstruct:molten_gold","amount": 144},"result": 'kubejs:double_arrow_cast',"cooling_time": 40})
event.custom({"type": "tconstruct:casting_table","cast": {"item": "kubejs:double_arrow_cast" },"cast_consumed": false,"fluid": {"name": "tconstruct:molten_emerald","amount": 288},"result": 'kubejs:double_arrow',"cooling_time": 80})
event.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:large_plate_cast" },"cast_consumed": false,"fluid": {"name": "tconstruct:molten_diamond","amount": 576},"result": 'kubejs:large_plate_diamond',"cooling_time": 160})
event.custom({"type": "tconstruct:casting_table","cast": {"item": "kubejs:large_plate_diamond" },"cast_consumed": true,"fluid": {"name": "tconstruct:molten_netherite","amount": 1152},"result": 'kubejs:large_plate_netherite',"cooling_time": 160})

//pipez
event.custom({"type": "tconstruct:casting_table","cast": {"item": "kubejs:double_arrow" },"cast_consumed": true,"fluid": {"name": "tconstruct:molten_iron","amount": 720},"result": 'pipez:basic_upgrade',"cooling_time": 60})
event.custom({"type": "tconstruct:casting_table","cast": {"item": "pipez:basic_upgrade" },"cast_consumed": true,"fluid": {"name": "tconstruct:molten_gold","amount": 720},"result": 'pipez:improved_upgrade',"cooling_time": 60})
event.custom({"type": "tconstruct:casting_table","cast": {"item": "pipez:improved_upgrade" },"cast_consumed": true,"fluid": {"name": "tconstruct:molten_diamond","amount": 720},"result": 'pipez:advanced_upgrade',"cooling_time": 60})
event.custom({"type": "tconstruct:casting_table","cast": {"item": "pipez:advanced_upgrade" },"cast_consumed": true,"fluid": {"name": "tconstruct:molten_netherite","amount": 720},"result": 'pipez:ultimate_upgrade',"cooling_time": 60})

//gears
event.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:gear_cast" },"cast_consumed": false,"fluid": {"name": "tconstruct:molten_diamond","amount": 576},"result": 'thermal:diamond_gear',"cooling_time": 120})
event.custom({"type": "tconstruct:casting_table","cast": {"tag": "tconstruct:casts/single_use/gear" },"cast_consumed": true,"fluid": {"name": "tconstruct:molten_diamond","amount": 576},"result": 'thermal:diamond_gear',"cooling_time": 120})
event.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:gear_cast" },"cast_consumed": false,"fluid": {"name": "tconstruct:molten_emerald","amount": 576},"result": 'thermal:emerald_gear',"cooling_time": 120})
event.custom({"type": "tconstruct:casting_table","cast": {"tag": "tconstruct:casts/single_use/gear" },"cast_consumed": true,"fluid": {"name": "tconstruct:molten_emerald","amount": 576},"result": 'thermal:emerald_gear',"cooling_time": 120})
event.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:gear_cast" },"cast_consumed": false,"fluid": {"name": "tconstruct:molten_quartz","amount": 576},"result": 'thermal:quartz_gear',"cooling_time": 120})
event.custom({"type": "tconstruct:casting_table","cast": {"tag": "tconstruct:casts/single_use/gear" },"cast_consumed": true,"fluid": {"name": "tconstruct:molten_quartz","amount": 576},"result": 'thermal:quartz_gear',"cooling_time": 120})

//copper_ingot
event.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:ingot_cast" },"cast_consumed": false,"fluid": {"name": "tconstruct:molten_copper","amount": 144},"result": 'thermal:copper_ingot',"cooling_time": 60})
event.custom({"type": "tconstruct:casting_table","cast": {"tag": "tconstruct:casts/single_use/ingot" },"cast_consumed": true,"fluid": {"name": "tconstruct:molten_copper","amount": 144},"result": 'thermal:copper_ingot',"cooling_time": 60})
event.custom({"type": "tconstruct:casting_basin","fluid": {"name": "tconstruct:molten_copper","amount": 1296},"result": 'thermal:copper_block',"cooling_time": 180})
event.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:nugget_cast" },"cast_consumed": false,"fluid": {"name": "tconstruct:molten_copper","amount": 16},"result": 'thermal:copper_nugget',"cooling_time": 30})
event.custom({"type": "tconstruct:casting_table","cast": {"tag": "tconstruct:casts/single_use/nugget" },"cast_consumed": true,"fluid": {"name": "tconstruct:molten_copper","amount": 16},"result": 'thermal:copper_nugget',"cooling_time": 30})

//tin
event.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:ingot_cast" },"cast_consumed": false,"fluid": {"name": "tconstruct:molten_tin","amount": 144},"result": 'thermal:tin_ingot',"cooling_time": 60})
event.custom({"type": "tconstruct:casting_table","cast": {"tag": "tconstruct:casts/single_use/ingot" },"cast_consumed": true,"fluid": {"name": "tconstruct:molten_tin","amount": 144},"result": 'thermal:tin_ingot',"cooling_time": 60})
event.custom({"type": "tconstruct:casting_basin","fluid": {"name": "tconstruct:molten_tin","amount": 1296},"result": 'thermal:tin_block',"cooling_time": 180})
event.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:nugget_cast" },"cast_consumed": false,"fluid": {"name": "tconstruct:molten_tin","amount": 16},"result": 'thermal:tin_nugget',"cooling_time": 30})
event.custom({"type": "tconstruct:casting_table","cast": {"tag": "tconstruct:casts/single_use/nugget" },"cast_consumed": true,"fluid": {"name": "tconstruct:molten_tin","amount": 16},"result": 'thermal:tin_nugget',"cooling_time": 30})

//bronze
event.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:ingot_cast" },"cast_consumed": false,"fluid": {"name": "tconstruct:molten_bronze","amount": 144},"result": 'thermal:bronze_ingot',"cooling_time": 60})
event.custom({"type": "tconstruct:casting_table","cast": {"tag": "tconstruct:casts/single_use/ingot" },"cast_consumed": true,"fluid": {"name": "tconstruct:molten_bronze","amount": 144},"result": 'thermal:bronze_ingot',"cooling_time": 60})
event.custom({"type": "tconstruct:casting_basin","fluid": {"name": "tconstruct:molten_bronze","amount": 1296},"result": 'thermal:bronze_block',"cooling_time": 180})
event.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:nugget_cast" },"cast_consumed": false,"fluid": {"name": "tconstruct:molten_bronze","amount": 16},"result": 'thermal:bronze_nugget',"cooling_time": 30})
event.custom({"type": "tconstruct:casting_table","cast": {"tag": "tconstruct:casts/single_use/nugget" },"cast_consumed": true,"fluid": {"name": "tconstruct:molten_bronze","amount": 16},"result": 'thermal:bronze_nugget',"cooling_time": 30})



})
