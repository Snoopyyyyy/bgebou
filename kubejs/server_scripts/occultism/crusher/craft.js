ServerEvents.recipes((event) => {
  function occultismCrusher(ore, type, mod) {
    event
      .custom({
        type: "occultism:crushing",
        ingredient: { tag: `forge:ores/${ore}` },
        result: { item: `${mod}:${type ? type + "_" : ""}${ore}`, count: 2 },
        crushing_time: 200,
      })
      .id(`occultism:crushing/${type ? type + "_" : ""}${ore}`);
  }

  occultismCrusher("coal", "", "minecraft");
  occultismCrusher("copper", "raw", "minecraft");
  occultismCrusher("iron", "raw", "minecraft");
  occultismCrusher("gold", "raw", "minecraft");
  occultismCrusher("redstone", "", "minecraft");
  occultismCrusher("lapis", "", "minecraft");
  occultismCrusher("diamond", "", "minecraft");
  occultismCrusher("emerald", "", "minecraft");
  occultismCrusher("quartz", "", "minecraft");
});
