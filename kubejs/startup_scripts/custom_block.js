events.listen('block.registry', event => {


event.create('valdanium_block').material('iron').hardness(50).displayName('Block of Valdanium').requiresTool(true)
event.create('seed_ore').material('stone').hardness(2.0).displayName('Seed Ore').requiresTool(true)
event.create('starlight_iron').material('stone').hardness(2.0).displayName('Starlight Infused Iron').requiresTool(true)
event.create('manainfused_coal').material('stone').hardness(2.0).displayName('Mana Infused Coal').requiresTool(true)
event.create('dna_spawner').material('stone').hardness(2.0).displayName('DNA Spawner').requiresTool(true).defaultCutout()





})
