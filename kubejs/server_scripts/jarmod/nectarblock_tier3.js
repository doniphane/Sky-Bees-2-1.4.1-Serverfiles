onEvent("recipes", (event) => {
    const jar = event.recipes.ftbjarmod.jar;



        //ancient
        jar("kubejs:nectarblock_ancient", [
         Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:nether_honeycomb_block", "2x resourcefulbees:obsidian_honeycomb_block"
        ])
        .time(600)
        .lowTemp();

        //copper
        jar("kubejs:nectarblock_copper", [
         Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:nickel_honeycomb_block", "2x resourcefulbees:cobblestone_honeycomb_block"
        ])
        .time(600)
        .lowTemp();

        //elementium
        jar("kubejs:nectarblock_elementium", [
         Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:manasteel_honeycomb_block", "2x botania:elementium_block"
        ])
        .time(600)
        .lowTemp();

        //ender
        jar("kubejs:nectarblock_ender", [
         Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:skeleton_honeycomb_block", "2x resourcefulbees:zombie_honeycomb_block"
        ])
        .time(600)
        .lowTemp();

        //invar
        jar("kubejs:nectarblock_invar", [
         Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:iron_honeycomb_block", "2x resourcefulbees:nickel_honeycomb_block"
        ])
        .time(600)
        .lowTemp();

        //nether_quartz
        jar("kubejs:nectarblock_quartz", [
         Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:nether_honeycomb_block", "2x minecraft:quartz_block"
        ])
        .time(600)
        .lowTemp();

        //osmium
        jar("kubejs:nectarblock_osmium", [
         Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:silver_honeycomb_block", "2x resourcefulbees:lead_honeycomb_block"
        ])
        .time(600)
        .lowTemp();

        //radioactive
        jar("kubejs:nectarblock_radioactive", [
         Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:steel_honeycomb_block", "2x mekanism:radioactive_waste_barrel"
        ])
        .time(600)
        .lowTemp();

        //sheep
        jar("kubejs:nectarblock_sheep", [
         Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:zombie_honeycomb_block", "2x minecraft:white_wool"
        ])
        .time(600)
        .lowTemp();

        //slimesteel
        jar("kubejs:nectarblock_slimesteel", [
         Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:slimy_honeycomb_block", "2x tconstruct:slimesteel_block"
        ])
        .time(600)
        .lowTemp();

        //sulfur
        jar("kubejs:nectarblock_sulfur", [
         Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:creeper_honeycomb_block", "2x resourcefulbees:salt_honeycomb_block"
        ])
        .time(600)
        .lowTemp();

        //wither_skeleton
        jar("kubejs:nectarblock_wither_skeleton", [
         Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:skeleton_honeycomb_block", "2x minecraft:wither_skeleton_skull"
        ])
        .time(600)
        .lowTemp();

    })
