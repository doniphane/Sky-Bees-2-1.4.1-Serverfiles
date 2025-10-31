onEvent("recipes", (event) => {
    const jar = event.recipes.ftbjarmod.jar;

    //bronze
    jar("kubejs:nectarblock_bronze", [
     Fluid.of("resourcefulbees:honey", 1000), "2x thermal:tin_block", "2x thermal:copper_block"
    ])
    .time(600)
    .lowTemp();

    //certus
    jar("kubejs:nectarblock_certus", [
     Fluid.of("resourcefulbees:honey", 1000), "2x appliedenergistics2:quartz_block", "2x resourcefulbees:nether_quartz_honeycomb_block"
    ])
    .time(600)
    .lowTemp();

    //cobalt
    jar("kubejs:nectarblock_cobalt", [
     Fluid.of("resourcefulbees:honey", 1000), "2x tconstruct:cobalt_block", "2x resourcefulbees:nether_quartz_honeycomb_block"
    ])
    .time(600)
    .lowTemp();

    //constantan
    jar("kubejs:nectarblock_constantan", [
     Fluid.of("resourcefulbees:honey", 1000), "2x thermal:copper_block", "2x thermal:nickel_block"
    ])
    .time(600)
    .lowTemp();

    //gold
    jar("kubejs:nectarblock_gold", [
     Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:copper_honeycomb_block", "2x resourcefulbees:cobblestone_honeycomb_block"
    ])
    .time(600)
    .lowTemp();

    //lithium
    jar("kubejs:nectarblock_lithium", [
     Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:osmium_honeycomb_block", "2x resourcefulbees:salt_honeycomb_block"
    ])
    .time(600)
    .lowTemp();

    //refined_obsidian
    jar("kubejs:nectarblock_refined_obsidian", [
     Fluid.of("resourcefulbees:honey", 1000), "2x mekanism:block_refined_obsidian", "2x resourcefulbees:obsidian_honeycomb_block"
    ])
    .time(600)
    .lowTemp();

    //wither
    jar("kubejs:nectarblock_wither", [
     Fluid.of("resourcefulbees:honey", 1000), "2x minecraft:wither_rose", "2x extendedcrafting:nether_star_block"
    ])
    .time(600)
    .lowTemp();







  })
