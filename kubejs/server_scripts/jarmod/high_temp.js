onEvent("recipes", (event) => {
    const jar = event.recipes.ftbjarmod.jar;

//quartz
    jar("minecraft:quartz", [
        "thermal:quartz_dust"
    ])
    .time(600)
    .highTemp();

//lava
  jar(Fluid.of("minecraft:lava", 1000), ["4x minecraft:cobblestone"]).time(1280).highTemp();

//lava
  jar(Fluid.of("minecraft:lava", 1000), ["4x #forge:stone"]).time(1280).highTemp();

//lava
  jar(Fluid.of("minecraft:lava", 1000), ["2x compressium:dirt_1"]).time(1280).highTemp();


    })
