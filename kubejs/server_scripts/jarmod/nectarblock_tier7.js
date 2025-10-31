onEvent("recipes", (event) => {
    const jar = event.recipes.ftbjarmod.jar;

    //blaze
    jar("kubejs:nectarblock_blaze", [
     Fluid.of("resourcefulbees:honey", 1000), "2x botania:blaze_block", "2x resourcefulbees:redstone_honeycomb_block"
    ])
    .time(600)
    .lowTemp();

    //chorus
    jar("kubejs:nectarblock_chorus", [
     Fluid.of("resourcefulbees:honey", 1000), "2x minecraft:purpur_block", "2x resourcefulbees:end_honeycomb_block"
    ])
    .time(600)
    .lowTemp();

    //dragon
    jar("kubejs:nectarblock_dragon", [
     Fluid.of("resourcefulbees:honey", 1000), "2x minecraft:dragon_egg", "2x resourcefulbees:end_honeycomb_block"
    ])
    .time(600)
    .lowTemp();

    //flux
    jar("kubejs:nectarblock_flux", [
     Fluid.of("resourcefulbees:honey", 1000), "16x fluxnetworks:flux_dust", "2x resourcefulbees:redstone_honeycomb_block"
    ])
    .time(600)
    .lowTemp();

    //signalum
    jar("kubejs:nectarblock_signalum", [
     Fluid.of("resourcefulbees:honey", 1000), "2x thermal:signalum_block", "2x resourcefulbees:redstone_honeycomb_block"
    ])
    .time(600)
    .lowTemp();



        })
