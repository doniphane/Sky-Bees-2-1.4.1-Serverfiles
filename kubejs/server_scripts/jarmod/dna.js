onEvent("recipes", (event) => {
    const jar = event.recipes.ftbjarmod.jar;

//Bee
    jar("kubejs:bee_dna", [
        "kubejs:empty_dna", "minecraft:yellow_dye"
    ])
    .time(600)
    .highTemp();

//Andesite
        jar("kubejs:andesite_bee_dna", [
            "kubejs:empty_dna", "minecraft:andesite"
        ])
        .time(600)
        .highTemp();

//cobblestone
    jar("kubejs:cobblestone_bee_dna", [
        "kubejs:empty_dna", "minecraft:cobblestone"
    ])
    .time(600)
    .highTemp();

//diorite
jar("kubejs:diorite_bee_dna", [
    "kubejs:empty_dna", "minecraft:diorite"
])
.time(600)
.highTemp();

//dirt
jar("kubejs:dirt_bee_dna", [
    "kubejs:empty_dna", "minecraft:dirt"
])
.time(600)
.highTemp();

//fishi
jar("kubejs:fishi_bee_dna", [
    "kubejs:empty_dna", "#minecraft:fishes"
])
.time(600)
.highTemp();

//granite
jar("kubejs:granite_bee_dna", [
    "kubejs:empty_dna", "minecraft:granite"
])
.time(600)
.highTemp();

//gravel
jar("kubejs:gravel_bee_dna", [
    "kubejs:empty_dna", "minecraft:gravel"
])
.time(600)
.highTemp();

//lava
jar("kubejs:lava_bee_dna", [
    "kubejs:empty_dna", Fluid.of("minecraft:lava", 1000)
])
.time(600)
.highTemp();

//rgbee
jar("kubejs:rgbee_bee_dna", [
    "kubejs:empty_dna", "kubejs:rgb_dye"
])
.time(600)
.highTemp();

//sand
jar("kubejs:sand_bee_dna", [
    "kubejs:empty_dna", "minecraft:sand"
])
.time(600)
.highTemp();

//snowball
jar("kubejs:snowball_bee_dna", [
    "kubejs:empty_dna", "minecraft:snowball"
])
.time(600)
.highTemp();

//water
jar("kubejs:water_bee_dna", [
    "kubejs:empty_dna", Fluid.of("minecraft:water", 1000)
])
.time(600)
.highTemp();

//wood
jar("kubejs:wood_bee_dna", [
    "kubejs:empty_dna", "#minecraft:logs"
])
.time(600)
.highTemp();

//blazing
jar("kubejs:blaze_dna", [
    "kubejs:empty_dna", "4x minecraft:blaze_powder", "minecraft:nether_wart"
])
.time(600)
.highTemp();

//enderman
jar("kubejs:enderman_dna", [
    "kubejs:empty_dna", "4x minecraft:black_dye", "minecraft:nether_wart"
])
.time(600)
.highTemp();

//shulker
jar("kubejs:shulker_dna", [
    "kubejs:empty_dna", "4x minecraft:purple_dye", "minecraft:end_stone"
])
.time(600)
.highTemp();

//guardian
jar("kubejs:guardian_dna", [
    "kubejs:empty_dna", "4x minecraft:prismarine_crystals", "#minecraft:fishes"
])
.time(600)
.highTemp();

//basalz
jar("kubejs:basalz_dna", [
    "kubejs:empty_dna", "4x mekanism:dust_obsidian", "minecraft:nether_wart"
])
.time(600)
.highTemp();

//blitz
jar("kubejs:blitz_dna", [
    "kubejs:empty_dna", "4x thermal:niter_dust", "minecraft:nether_wart"
])
.time(600)
.highTemp();

//blitz
jar("kubejs:blizz_dna", [
    "kubejs:empty_dna", "4x minecraft:snowball", "minecraft:nether_wart"
])
.time(600)
.highTemp();

//matter
jar("kubejs:matter_bee_dna", [
    "kubejs:empty_dna", "appliedenergistics2:singularity"
])
.time(600)
.highTemp();

})
