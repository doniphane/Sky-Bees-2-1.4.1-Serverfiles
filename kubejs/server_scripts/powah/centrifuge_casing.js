onEvent('recipes', event => {
  event.custom(
    {
      "type": "powah:energizing",
      "ingredients": [
    	{"item": "resourcefulbees:waxed_machine_block"}
      ],
      "energy": 250000,
      "result": {
    	"item": "resourcefulbees:centrifuge_casing"
      }
    }
)
})
