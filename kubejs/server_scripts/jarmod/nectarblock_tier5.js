onEvent("recipes", (event) => {
    const jar = event.recipes.ftbjarmod.jar;

    //cinnabar
    jar("kubejs:nectarblock_cinnabar", [
     Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:gold_honeycomb_block", "2x resourcefulbees:cobblestone_honeycomb_block"
    ])
    .time(600)
    .lowTemp();

    //electrum
    jar("kubejs:nectarblock_electrum", [
     Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:gold_honeycomb_block", "2x resourcefulbees:silver_honeycomb_block"
    ])
    .time(600)
    .lowTemp();

    //fluix
    jar("kubejs:nectarblock_fluix", [
     Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:certus_honeycomb_block", "2x appliedenergistics2:fluix_block"
    ])
    .time(600)
    .lowTemp();

    //hepatizon
    jar("kubejs:nectarblock_hepatizon", [
     Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:cobalt_honeycomb_block", "2x resourcefulbees:obsidian_honeycomb_block"
    ])
    .time(600)
    .lowTemp();

    //manyullyn
    jar("kubejs:nectarblock_manyullyn", [
     Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:cobalt_honeycomb_block", "2x resourcefulbees:ancient_honeycomb_block"
    ])
    .time(600)
    .lowTemp();

    //pigman
    jar("kubejs:nectarblock_pigman", [
     Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:gold_honeycomb_block", "2x resourcefulbees:nether_honeycomb_block"
    ])
    .time(600)
    .lowTemp();

    //queens_slime
    jar("kubejs:nectarblock_queens_slime", [
     Fluid.of("resourcefulbees:honey", 1000), "2x tconstruct:queens_slime_block", "2x resourcefulbees:cobalt_honeycomb_block"
    ])
    .time(600)
    .lowTemp();

    //rose_gold
    jar("kubejs:nectarblock_rose_gold", [
     Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:copper_honeycomb_block", "2x resourcefulbees:gold_honeycomb_block"
    ])
    .time(600)
    .lowTemp();

    //silicon
    jar("kubejs:nectarblock_silicon", [
     Fluid.of("resourcefulbees:honey", 1000), "18x appliedenergistics2:silicon", "2x resourcefulbees:certus_honeycomb_block"
    ])
    .time(600)
    .lowTemp();


      })
