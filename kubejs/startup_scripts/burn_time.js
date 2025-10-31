events.listen('block.registry', event => {



  onEvent('item.modification', event => {
    event.modify('resourcefulbees:wood_honeycomb', item => {
      item.burnTime = 200
    })
  })

    onEvent('item.modification', event => {
      event.modify('resourcefulbees:wood_honeycomb_block', item => {
        item.burnTime = 1800
      })
  })

      onEvent('item.modification', event => {
        event.modify('resourcefulbees:coal_honeycomb', item => {
          item.burnTime = 1000
        })
    })

        onEvent('item.modification', event => {
          event.modify('resourcefulbees:coal_honeycomb_block', item => {
            item.burnTime = 9000
          })
    })

})
