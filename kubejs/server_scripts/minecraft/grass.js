onEvent('block.right_click', event => {
  if (event.hand == MAIN_HAND)
  if (event.item.hasTag('forge:seeds'))
  if (event.block.id == 'minecraft:dirt'){
    event.server.schedule(5, event.server, function (callback) {
    callback.server.runCommandSilent(`execute as ${event.player.name} in ${event.player.world.dimension} run setblock ${event.block.x} ${event.block.y} ${event.block.z} minecraft:grass_block`);
    callback.server.runCommandSilent(`execute as ${event.player.name} in ${event.player.world.dimension} run particle minecraft:dust 0.050 0.945 0 2 ${event.block.x} ${event.block.y+0.5} ${event.block.z} 0.2 0.2 0.2 10 100`);
    if (!event.player.isCreativeMode()) {event.item.setCount(event.item.getCount() - 1)}
})}})
