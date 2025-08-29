ServerEvents.recipes(event => {
    event.smelting('tconstruct:cobalt_ingot', 'create:crushed_raw_cobalt').xp(0.1).id('kubejs:smelting/create/crushed_raw_cobalt');
    event.blasting('tconstruct:cobalt_ingot', 'create:crushed_raw_cobalt').xp(0.1).id('kubejs:blasting/create/crushed_raw_cobalt');

    event.shapeless('minecraft:netherite_scrap', ['9x tconstruct:debris_nugget']).id('tconstruct:netherite_scrap_from_debris');
    event.shapeless('9x tconstruct:debris_nugget', ['minecraft:netherite_scrap']).id('tconstruct:debris_from_netherite_scrap');

    event.shaped('molten_vents:molten_core', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'minecraft:fire_charge',
        B: 'minecraft:obsidian',
        C: 'create:blaze_cake'
    }).id('molten_vents:molten_core');
});