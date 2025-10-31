onEvent('recipes', event => {

event.remove({type: 'industrialforegoing:stonework_generate'})
event.remove({output: 'industrialforegoing:material_stonework_factory'})

})
