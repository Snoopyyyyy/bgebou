ServerEvents.recipes((event) => {
    function moltenVentRecipe(vent) {
        const transitionalItem = `molten_vents:incomplete_active_molten_${vent}`;

        event.recipes.create.sequenced_assembly([
            Item.of(`molten_vents:active_molten_${vent}`).withChance(0.25),
            Item.of(`molten_vents:molten_core`).withChance(0.75)
        ], "molten_vents:molten_core", [
            event.recipes.createDeploying(transitionalItem, [transitionalItem, `create:${vent}`]),
            event.recipes.createFilling(transitionalItem, [transitionalItem, Fluid.lava(1000)]),
            event.recipes.createPressing(transitionalItem, transitionalItem),
        ]).transitionalItem(transitionalItem).loops(16);
    }

    moltenVentRecipe('asurine');
    moltenVentRecipe('veridium');
    moltenVentRecipe('crimsite');
    moltenVentRecipe('ochrum');
    moltenVentRecipe('scorchia');
    moltenVentRecipe('scoria');
    moltenVentRecipe('limestone');
});
