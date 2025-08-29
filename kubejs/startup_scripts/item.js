StartupEvents.registry("item", (event) => {
  function createIncompleteVentItem(vent) {
    event
      .create(`molten_vents:incomplete_active_molten_${vent}`, "create:sequenced_assembly")
      .displayName(`Incomplete Active Molten ${vent.charAt(0).toUpperCase() + vent.slice(1)}`)
      .modelJson({
        parent: "molten_vents:block/dormant_molten_" + vent,
      });
  }

  createIncompleteVentItem("asurine");
  createIncompleteVentItem("veridium");
  createIncompleteVentItem("crimsite");
  createIncompleteVentItem("ochrum");
  createIncompleteVentItem("scorchia");
  createIncompleteVentItem("scoria");
  createIncompleteVentItem("limestone");

  event.create('create:crushed_raw_cobalt');
});
