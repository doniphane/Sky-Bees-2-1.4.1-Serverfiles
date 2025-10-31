onEvent("recipes", (event) => {
    const jar = event.recipes.ftbjarmod.jar;

//cobblestone
    jar("minecraft:cobblestone", [
         Fluid.of("minecraft:water", 1000), Fluid.of("minecraft:lava", 1000)
    ])
    .time(200)
    .lowTemp();

//sand
    jar("minecraft:sand", [
         Fluid.of("astralsorcery:liquid_starlight", 1000), Fluid.of("minecraft:lava", 1000)
    ])
    .time(200)
    .lowTemp();

//water
  jar(Fluid.of("minecraft:water", 1000), ["10x #minecraft:leaves"]).time(1280).lowTemp();



    })
