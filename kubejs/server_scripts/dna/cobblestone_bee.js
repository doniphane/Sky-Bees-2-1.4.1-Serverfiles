onEvent('block.right_click', event => {
    if (event.hand == MAIN_HAND)
    if (event.item.id == 'kubejs:cobblestone_bee_dna')
    if (event.block.id == 'kubejs:dna_spawner'){
      event.server.schedule(5, event.server, function (callback) {
callback.server.runCommandSilent(`execute as ${event.player.name} in ${event.player.world.dimension} run summon resourcefulbees:cobblestone_bee ${event.block.x} ${event.block.y+1} ${event.block.z}`);
    if (!event.player.isCreativeMode()) {event.item.setCount(event.item.getCount() - 1)}})}})
