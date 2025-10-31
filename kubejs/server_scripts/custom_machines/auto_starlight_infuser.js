
onEvent('recipes', e => {

//crusher

function infuser(ticks, block, item) {

e.recipes.custommachinery.custom_machine("custommachinery:auto_starlight_infuser", ticks)


.produceItem(item)
.requireItem(block).chance(1.0)
.requireFluid(Fluid.of("astralsorcery:liquid_starlight", 1000))
.requireStructure([
  ["       "," aaaaa "," a   a "," a   a "," a   a "," aaaaa ","       "],
  ["  bbb  "," cdddc ","bdbbbdb","bdbebdb","bdbbbdb"," cdddc ","  bbb  "],
  ["       "," f   f ","       ","   m   ","       "," f   f ","       "],
  ["       "," c   c ","       ","       ","       "," c   c ","       "]],
  {"a":"astralsorcery:marble_raw","b":"astralsorcery:marble_runed","c":"astralsorcery:marble_chiseled","d":"astralsorcery:liquid_starlight[level=0]","e":"minecraft:lapis_block","f":"astralsorcery:marble_pillar[pillartype=middle,waterlogged=false]"})
.jei()
}

infuser(120, "industrialforegoing:machine_frame_pity", "thermal:machine_frame")


  })
