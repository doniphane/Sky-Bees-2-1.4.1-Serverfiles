onEvent("recipes", (event) => {
    const jar = event.recipes.ftbjarmod.jar;



        //apatite
        jar("kubejs:nectarblock_apatite", [
         Fluid.of("resourcefulbees:honey", 1000), "2x thermal:tin_block", "2x resourcefulbees:diorite_honeycomb_block"
        ])
        .time(600)
        .lowTemp();

        //astral
        jar("kubejs:nectarblock_astral", [
         Fluid.of("resourcefulbees:honey", 1000),Fluid.of("astralsorcery:liquid_starlight", 1000), "2x resourcefulbees:marble_honeycomb_block"
        ])
        .time(600)
        .lowTemp();

        //bituminous_sand
        jar("kubejs:nectarblock_bituminous_sand", [
         Fluid.of("resourcefulbees:honey", 1000),"2x resourcefulbees:sand_honeycomb_block", "2x resourcefulbees:coal_honeycomb_block"
        ])
        .time(600)
        .lowTemp();

        //black_iron
        jar("kubejs:nectarblock_black_iron", [
         Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:iron_honeycomb_block", "2x resourcefulbees:rgbee_honeycomb_block"
        ])
        .time(600)
        .lowTemp();

        //compressed_iron
        jar("kubejs:nectarblock_compressed_iron", [
         Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:iron_honeycomb_block", "2x minecraft:tnt"
        ])
        .time(600)
        .lowTemp();

        //creeper
        jar("kubejs:nectarblock_creeper", [
         Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:slimy_honeycomb_block", "2x thermal:gunpowder_block"
        ])
        .time(600)
        .lowTemp();

        //dielectric paste
        jar("kubejs:nectarblock_dielectric_paste", [
         Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:coal_honeycomb_block", "2x powah:dielectric_paste"
        ])
        .time(600)
        .lowTemp();

        //manasteel
        jar("kubejs:nectarblock_manasteel", [
         Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:iron_honeycomb_block", "2x botania:manasteel_block"
        ])
        .time(600)
        .lowTemp();

        //nether
        jar("kubejs:nectarblock_nether", [
         Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:obsidian_honeycomb_block", "2x compressium:netherrack_1"
        ])
        .time(600)
        .lowTemp();

        //nickel
        jar("kubejs:nectarblock_nickel", [
         Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:iron_honeycomb_block", "2x resourcefulbees:cobblestone_honeycomb_block"
        ])
        .time(600)
        .lowTemp();

        //seared
        jar("kubejs:nectarblock_seared", [
         Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:clay_honeycomb_block", "2x #tconstruct:seared_blocks"
        ])
        .time(600)
        .lowTemp();

        //silver
        jar("kubejs:nectarblock_silver", [
         Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:lead_honeycomb_block", "2x resourcefulbees:andesite_honeycomb_block"
        ])
        .time(600)
        .lowTemp();

        //skeleton
        jar("kubejs:nectarblock_skeleton", [
         Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:slimy_honeycomb_block", "2x minecraft:bone_block"
        ])
        .time(600)
        .lowTemp();

        //steel
        jar("kubejs:nectarblock_steel", [
         Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:iron_honeycomb_block", "2x mekanism:block_steel"
        ])
        .time(600)
        .lowTemp();

        //zombie
        jar("kubejs:nectarblock_zombie", [
         Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:slimy_honeycomb_block", "32x minecraft:rotten_flesh"
        ])
        .time(600)
        .lowTemp();


    })
