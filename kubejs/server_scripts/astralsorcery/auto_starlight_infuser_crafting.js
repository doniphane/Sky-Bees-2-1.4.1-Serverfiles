onEvent('recipes', event => {
  event.custom(
{
  "type": "astralsorcery:altar",
  "altar_type": 1,
  "duration": 200,
  "starlight": 1400,
  "pattern": [
    "AB_BA",
    "BCDCB",
    "_DED_",
    "BCDCB",
    "AB_BA"
  ],
  "key": {
    "A": {
      "item": "mekanism:steel_casing"
    },
    "B": {
      "item": "astralsorcery:marble_pillar"
    },
    "C": {
      "item": "rftoolsbase:machine_frame"
    },
    "D": {
      "item": "thermal:machine_frame"
    },
    "E": {
      "item": "astralsorcery:infuser"
    }
  },
  "output": [
    {
      "tag": "forge:infuser",
      "count": 1
    }
  ],
  "effects": [
    "astralsorcery:built_in_effect_discovery_central_beam",
    "astralsorcery:built_in_effect_attunement_sparkle"
  ]
}
)
})
