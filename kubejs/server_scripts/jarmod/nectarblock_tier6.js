onEvent("recipes", (event) => {
    const jar = event.recipes.ftbjarmod.jar;

    //basalz
    jar("kubejs:nectarblock_basalz", [
     Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:pigman_honeycomb_block", "2x resourcefulbees:obsidian_honeycomb_block"
    ])
    .time(600)
    .lowTemp();

    //blitz
    jar("kubejs:nectarblock_blitz", [
     Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:pigman_honeycomb_block", "2x resourcefulbees:niter_honeycomb_block"
    ])
    .time(600)
    .lowTemp();

    //blizz
    jar("kubejs:nectarblock_blizz", [
     Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:pigman_honeycomb_block", "2x resourcefulbees:snowball_honeycomb_block"
    ])
    .time(600)
    .lowTemp();

    //end
    jar("kubejs:nectarblock_end", [
     Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:pigman_honeycomb_block", "2x minecraft:end_stone"
    ])
    .time(600)
    .lowTemp();

    //lapis
    jar("kubejs:nectarblock_lapis", [
     Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:cinnabar_honeycomb_block", "2x resourcefulbees:rgbee_honeycomb_block"
    ])
    .time(600)
    .lowTemp();

    //lumium
    jar("kubejs:nectarblock_lumium", [
     Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:pigman_honeycomb_block", "2x thermal:lumium_block"
    ])
    .time(600)
    .lowTemp();

    //pig_iron
    jar("kubejs:nectarblock_pig_iron", [
     Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:pigman_honeycomb_block", "2x tconstruct:pig_iron_block"
    ])
    .time(600)
    .lowTemp();

    //redstone
    jar("kubejs:nectarblock_redstone", [
     Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:cinnabar_honeycomb_block", "2x resourcefulbees:cobblestone_honeycomb_block"
    ])
    .time(600)
    .lowTemp();

    //refined_glowstone
    jar("kubejs:nectarblock_refined_glowstone", [
     Fluid.of("resourcefulbees:honey", 1000), "2x mekanism:block_refined_glowstone", "2x resourcefulbees:pigman_honeycomb_block"
    ])
    .time(600)
    .lowTemp();

    })
