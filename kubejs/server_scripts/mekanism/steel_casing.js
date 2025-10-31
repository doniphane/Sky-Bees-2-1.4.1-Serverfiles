onEvent('recipes', event => {
  event.custom(
    {
      "type": "bloodmagic:altar",
      "input": {
        "item": "thermal:machine_frame"
      },
      "output": {
        "item": "mekanism:steel_casing"
      },
      "upgradeLevel": 2,
      "altarSyphon": 20000,
      "consumptionRate": 5,
      "drainRate": 5
    }
)
})
