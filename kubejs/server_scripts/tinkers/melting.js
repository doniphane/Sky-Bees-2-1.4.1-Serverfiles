//4

events.listen('recipes', event => {

//ender
event.custom({"type": "tconstruct:melting","ingredient": {"item": "minecraft:ender_pearl"},"result": {"fluid": "tconstruct:molten_ender","amount": 250},"temperature": 750,"time": 49})
//Glowstone
event.custom({"type": "tconstruct:melting","ingredient": {"item": "minecraft:glowstone_dust"},"result": {"fluid": "thermal:glowstone","amount": 250},"temperature": 750,"time": 49})
event.custom({"type": "tconstruct:melting","ingredient": {"item": "minecraft:glowstone"},"result": {"fluid": "thermal:glowstone","amount": 1000},"temperature": 750,"time": 49})
//redstone
event.custom({"type": "tconstruct:melting","ingredient": {"tag": "forge:dusts/redstone"},"result": {"fluid": "thermal:redstone","amount": 100},"temperature": 800,"time": 60})
event.custom({"type": "tconstruct:melting","ingredient": {"tag": "forge:storage_blocks/redstone"},"result": {"fluid": "thermal:redstone","amount": 900 },"temperature": 800,"time": 180})
//valdanium
event.custom({"type": "tconstruct:melting","ingredient": {"item": "kubejs:valdanium_ingot"},"result": {"fluid": "kubejs:molten_valdanium","amount": 144},"temperature": 1500,"time": 60})
event.custom({"type": "tconstruct:melting","ingredient": {"item": "kubejs:valdanium_nugget"},"result": {"fluid": "kubejs:molten_valdanium","amount": 16},"temperature": 1500,"time": 20})
event.custom({"type": "tconstruct:melting","ingredient": {"item": "kubejs:valdanium_block"},"result": {"fluid": "kubejs:molten_valdanium","amount": 1296},"temperature": 1500,"time": 180})
//starlight_iron
event.custom({"type": "tconstruct:melting","ingredient": {"item": "kubejs:starlight_iron"},"result": {"fluid": "kubejs:molten_starlight_iron","amount": 1000},"temperature": 1200,"time": 60})
//manainfused_coal
event.custom({"type": "tconstruct:melting","ingredient": {"item": "kubejs:manainfused_coal"},"result": {"fluid": "kubejs:molten_manainfused_coal","amount": 1000},"temperature": 1200,"time": 60})


})
