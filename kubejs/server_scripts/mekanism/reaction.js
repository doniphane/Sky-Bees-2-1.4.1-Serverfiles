onEvent('recipes', event => {

//dusts_coals
  event.custom(
    {
    "type": "mekanism:reaction",
    "itemInput": [
      {
        "ingredient": {
          "tag": "forge:dusts/coal"
        }
      },
      {
        "ingredient": {
          "tag": "forge:dusts/charcoal"
        }
      }
    ],
    "fluidInput": {
      "amount": 100,
      "tag": "minecraft:water"
    },
    "gasInput": {
      "amount": 100,
      "gas": "mekanism:oxygen"
    },
    "duration": 100,
    "itemOutput": {
      "item": "thermal:sulfur_dust"
    },
    "gasOutput": {
      "gas": "mekanism:hydrogen",
      "amount": 100
    }
  })
//blocks_coal
event.custom(
  {
    "type": "mekanism:reaction",
    "itemInput": [
      {
        "ingredient": {
          "tag": "forge:storage_blocks/coal"
        }
      },
      {
        "ingredient": {
          "tag": "forge:storage_blocks/charcoal"
        }
      }
    ],
    "fluidInput": {
      "amount": 1000,
      "tag": "minecraft:water"
    },
    "gasInput": {
      "amount": 1000,
      "gas": "mekanism:oxygen"
    },
    "duration": 900,
    "itemOutput": {
      "item": "thermal:sulfur_dust",
      "count": 9
    },
    "gasOutput": {
      "gas": "mekanism:hydrogen",
      "amount": 1000
    }
  })
//coals
event.custom(
  {
    "type": "mekanism:reaction",
    "itemInput": {
      "ingredient": {
        "tag": "minecraft:coals"
      }
    },
    "fluidInput": {
      "amount": 100,
      "tag": "minecraft:water"
    },
    "gasInput": {
      "amount": 100,
      "gas": "mekanism:oxygen"
    },
    "duration": 100,
    "itemOutput": {
      "item": "thermal:sulfur_dust"
    },
    "gasOutput": {
      "gas": "mekanism:hydrogen",
      "amount": 100
    }
  })


})
