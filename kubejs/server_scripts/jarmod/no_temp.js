onEvent("recipes", (event) => {
    const jar = event.recipes.ftbjarmod.jar;



//organic_water
  jar(Fluid.of("kubejs:organic_water", 1000), [Fluid.of("minecraft:water", 1000), "1x #forge:seeds"]).time(680);

//soul_sand
  jar("minecraft:soul_sand", [Fluid.of("kubejs:organic_water", 1000), "1x #minecraft:sand"]).time(380);

//soul_soil
  jar("minecraft:soul_soil", [Fluid.of("kubejs:organic_water", 1000), "1x minecraft:coarse_dirt"]).time(380);

//slime_block
  jar("minecraft:slime_block", [Fluid.of("kubejs:organic_water", 1000), "1x #forge:mushrooms"]).time(380);

//prismarine
  jar("minecraft:prismarine", [Fluid.of("kubejs:organic_water", 1000), "1x minecraft:cobblestone"]).time(380);

//dirt
  jar("minecraft:dirt", ["8x #minecraft:leaves"]).time(380);

//dirt
  jar("minecraft:dirt", ["10x minecraft:apple"]).time(380);

//dirt
  jar("minecraft:dirt", ["10x #forge:mushrooms"]).time(380);

//dirt
  jar("minecraft:dirt", ["5x #forge:meat_uncooked"]).time(380);

//dirt
  jar("minecraft:dirt", ["5x #forge:meat_cooked"]).time(380);

//dirt
  jar("minecraft:dirt", ["12x #forge:seeds"]).time(380);

//dirt
  jar("minecraft:dirt", ["10x #forge:crops"]).time(380);

//dirt
  jar("minecraft:dirt", ["10x #minecraft:flowers"]).time(380);

//dirt
  jar("minecraft:dirt", ["8x #minecraft:saplings"]).time(380);

//dirt
  jar("minecraft:dirt", ["8x #forge:sawdust"]).time(380);

//clay
  jar("minecraft:clay", [Fluid.of("minecraft:water", 1000), "1x minecraft:sand"]).time(380);

//end_stone
  jar("minecraft:end_stone", [Fluid.of("minecraft:lava", 1000), "1x minecraft:glowstone_dust"]).time(380);

//netherrack
  jar("minecraft:netherrack", [Fluid.of("minecraft:lava", 1000), "1x minecraft:redstone"]).time(380);

//bone_block
  jar("minecraft:bone_block", ["16x minecraft:white_wool"]).time(380);

//grass_block
  jar("minecraft:grass_block", ["minecraft:dirt", "#forge:seeds"]).time(380);


  })
