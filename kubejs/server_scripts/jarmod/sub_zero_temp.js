onEvent("recipes", (event) => {
    const jar = event.recipes.ftbjarmod.jar;

//Ice
    jar("minecraft:ice", [
         Fluid.of("minecraft:water", 1000)
    ])
    .time(200)
    .subzeroTemp();





    })
