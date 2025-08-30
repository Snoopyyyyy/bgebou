ServerEvents.tags('item', event => {
    event.add('create:crushed_raw_materials', 'create:crushed_raw_cobalt')
    event.add('forge:budding', 'buddingcrystals:budding_fluix')
    event.add('ae2:growth_acceleratable', 'buddingcrystals:budding_fluix')
})

ServerEvents.tags('block', event => {
    event.add('forge:budding', 'buddingcrystals:budding_fluix')
    event.add('ae2:growth_acceleratable', 'buddingcrystals:budding_fluix')
})