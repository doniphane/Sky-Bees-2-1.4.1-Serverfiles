onEvent("recipes", (event) => {
    const jar = event.recipes.ftbjarmod.jar;

    //diamond
    jar("kubejs:nectarblock_diamond", [
     Fluid.of("resourcefulbees:honey", 1000), "2x resourcefulbees:blaze_honeycomb_block", "2x resourcefulbees:coal_honeycomb_block"
    ])
    .time(600)
    .lowTemp();

  })
