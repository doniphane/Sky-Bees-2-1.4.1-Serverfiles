onEvent('recipes', event => {
  event.custom(
    {
      "type": "powah:energizing",
      "ingredients": [
    	{"item": "resourcefulbees:centrifuge_casing"},
      {"item": "minecraft:redstone_block"},
      {"item": "minecraft:netherite_block"}
      ],
      "energy": 1000000,
      "result": {
    	"item": "resourcefulbees:elite_centrifuge_casing"
      }
    }
)
})
