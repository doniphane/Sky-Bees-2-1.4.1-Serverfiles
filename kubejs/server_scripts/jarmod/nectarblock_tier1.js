onEvent("recipes", (event) => {
    const jar = event.recipes.ftbjarmod.jar;



        //Clay
        jar("kubejs:nectarblock_clay", [
         Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:water_honeycomb_block", "2x resourcefulbees:sand_honeycomb_block"
        ])
        .time(600)
        .lowTemp();

        //coal
        jar("kubejs:nectarblock_coal", [
          Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:lava_honeycomb_block", "2x resourcefulbees:wood_honeycomb_block"
        ])
        .time(600)
        .lowTemp();

        //fluorite
        jar("kubejs:nectarblock_fluorite", [
          Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:sand_honeycomb_block", "2x resourcefulbees:granite_honeycomb_block"
        ])
        .time(600)
        .lowTemp();

        //ice
        jar("kubejs:nectarblock_ice", [
          Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:water_honeycomb_block", "2x resourcefulbees:snowball_honeycomb_block"
        ])
        .time(600)
        .lowTemp();

        //Iron
        jar("kubejs:nectarblock_iron", [
          Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:wood_honeycomb_block", "2x resourcefulbees:cobblestone_honeycomb_block"
        ])
        .time(600)
        .lowTemp();

        //Lead
        jar("kubejs:nectarblock_lead", [
          Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:andesite_honeycomb_block", "2x resourcefulbees:cobblestone_honeycomb_block"
        ])
        .time(600)
        .lowTemp();

        //marble
        jar("kubejs:nectarblock_marble", [
          Fluid.of("resourcefulbees:honey", 1000), "2x astralsorcery:marble_raw", "2x resourcefulbees:diorite_honeycomb_block"
        ])
        .time(600)
        .lowTemp();

        //niter
        jar("kubejs:nectarblock_niter", [
          Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:sand_honeycomb_block", "2x resourcefulbees:gravel_honeycomb_block"
        ])
        .time(600)
        .lowTemp();

        //obsidian
        jar("kubejs:nectarblock_obsidian", [
          Fluid.of("resourcefulbees:honey", 1000), "2x minecraft:obsidian", "2x resourcefulbees:lava_honeycomb_block"
        ])
        .time(600)
        .lowTemp();

        //prismarine
        jar("kubejs:nectarblock_prismarine", [
          Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:fishi_honeycomb_block", "2x minecraft:prismarine"
        ])
        .time(600)
        .lowTemp();

        //rubber
        jar("kubejs:nectarblock_rubber", [
          Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:water_honeycomb_block", "2x resourcefulbees:wood_honeycomb_block"
        ])
        .time(600)
        .lowTemp();

        //salt
        jar("kubejs:nectarblock_salt", [
          Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:water_honeycomb_block", "2x resourcefulbees:sand_honeycomb_block"
        ])
        .time(600)
        .lowTemp();

        //sea
        jar("kubejs:nectarblock_sea", [
          Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:water_honeycomb_block", "2x resourcefulbees:fishi_honeycomb_block"
        ])
        .time(600)
        .lowTemp();

        //slimy
        jar("kubejs:nectarblock_slime", [
          Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:water_honeycomb_block", "2x minecraft:slime_block"
        ])
        .time(600)
        .lowTemp();

        //tin
        jar("kubejs:nectarblock_tin", [
          Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:diorite_honeycomb_block", "2x resourcefulbees:cobblestone_honeycomb_block"
        ])
        .time(600)
        .lowTemp();

    })
