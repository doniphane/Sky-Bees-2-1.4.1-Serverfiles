onEvent('recipes', event => {
  event.custom(
    {
      "type": "powah:energizing",
      "ingredients": [
    	{"tag": "forge:nether_stars"},
    	{"tag": "forge:storage_blocks/redstone"},
    	{"item": "powah:blazing_crystal_block"}
      ],
      "energy": 20000000,
      "result": {
    	"item": "powah:crystal_nitro",
    	"count": 10
      }
    }
)
})
