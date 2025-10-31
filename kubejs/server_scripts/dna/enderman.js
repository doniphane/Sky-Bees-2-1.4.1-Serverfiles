onEvent('block.right_click', event => {
    if (event.hand == MAIN_HAND)
    if (event.item.id == 'kubejs:enderman_dna')
    if (event.block.id == 'kubejs:dna_spawner'){
      event.server.schedule(5, event.server, function (callback) {
callback.server.runCommandSilent(`execute as ${event.player.name} in ${event.player.world.dimension} run summon minecraft:enderman ${event.block.x} ${event.block.y+1} ${event.block.z}`);
    if (!event.player.isCreativeMode()) {event.item.setCount(event.item.getCount() - 1)}})}})
