onEvent("recipes", (event) => {
    const jar = event.recipes.ftbjarmod.jar;

    //awakened_draconium
    jar("kubejs:nectarblock_awakened_draconium", [
     Fluid.of("resourcefulbees:honey", 1000), "2x draconicevolution:awakened_draconium_block", "2x resourcefulbees:draconium_honeycomb_block"
    ])
    .time(600)
    .lowTemp();

    //draconium
    jar("kubejs:nectarblock_draconium", [
     Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:enderium_honeycomb_block", "2x resourcefulbees:terrasteel_honeycomb_block"
    ])
    .time(600)
    .lowTemp();

    //emerald
    jar("kubejs:nectarblock_emerald", [
     Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:diamond_honeycomb_block", "2x resourcefulbees:rgbee_honeycomb_block"
    ])
    .time(600)
    .lowTemp();

    //enderium
    jar("kubejs:nectarblock_enderium", [
     Fluid.of("resourcefulbees:honey", 1000), "2x thermal:enderium_block", "2x resourcefulbees:diamond_honeycomb_block"
    ])
    .time(600)
    .lowTemp();

    //terrasteel
    jar("kubejs:nectarblock_terrasteel", [
     Fluid.of("resourcefulbees:honey", 1000), "2x botania:terrasteel_block", "2x resourcefulbees:manasteel_honeycomb_block"
    ])
    .time(600)
    .lowTemp();

    //chaos
    jar("kubejs:nectarblock_chaos", [
     Fluid.of("resourcefulbees:honey", 1000), "32x draconicevolution:awakened_draconium_block", "8x draconicevolution:dragon_heart"
    ])
    .time(600)
    .lowTemp();



  })
