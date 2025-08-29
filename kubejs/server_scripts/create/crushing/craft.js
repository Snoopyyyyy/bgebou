ServerEvents.recipes(event => {
    event.recipes.create.crushing([Item.of('minecraft:netherite_scrap').withChance(0.4), Item.of('tconstruct:debris_nugget').withChance(0.4)], 'create:scoria');
    event.recipes.create.crushing([Item.of('create:crushed_raw_cobalt').withChance(0.4), Item.of('tconstruct:cobalt_nugget').withChance(0.4)], 'create:scorchia');
    event.recipes.create.crushing([Item.of('create:crushed_raw_aluminum').withChance(0.4), Item.of('immersiveengineering:nugget_aluminum').withChance(0.4)], 'create:limestone');
});