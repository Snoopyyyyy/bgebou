ServerEvents.recipes(event => {
    event.recipes.create.splashing(['9x tconstruct:cobalt_nugget', Item.of('minecraft:coal').withChance(0.75)], 'create:crushed_raw_cobalt').id('kubejs:splashing/create/crushed_raw_cobalt');
});