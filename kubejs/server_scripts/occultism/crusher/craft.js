ServerEvents.recipes((event) => {
  event.custom({ type: "occultism:crushing", ingredient: { item: "minecraft:end_stone" }, result: { item: "occultism:crushed_end_stone", count: 1 }, crushing_time: 200 }).id("occultism:crushing/end_stone_dust");
  event.custom({ type: "occultism:crushing", ingredient: { item: "minecraft:obsidian" }, result: { item: "create:powdered_obsidian", count: 1 }, crushing_time: 200 }).id("occultism:crushing/obsidian_dust");
  event.custom({ type: "occultism:crushing", ingredient: { item: "minecraft:blaze_rod" }, result: { item: "minecraft:blaze_powder", count: 5 }, crushing_time: 200 }).id("occultism:crushing/blaze_powder_from_rod");


  // Ores
  event.custom({ type: "occultism:crushing", ingredient: { item: "minecraft:redstone_ore" }, result: { item: "minecraft:redstone_dust", count: 6 }, crushing_time: 200 }).id("occultism:crushing/redstone_from_ore");
  event.custom({ type: "occultism:crushing", ingredient: { item: "minecraft:redstone_ore" }, result: { item: "minecraft:deepslate_redstone_dust", count: 7 }, crushing_time: 200 }).id("occultism:crushing/redstone_from_deepslate_ore");
  
  event.custom({ type: "occultism:crushing", ingredient: { item: "minecraft:lapis_ore" }, result: { item: "minecraft:lapis_lazuli", count: 10 }, crushing_time: 200 }).id("occultism:crushing/lapis_from_ore");
  event.custom({ type: "occultism:crushing", ingredient: { item: "minecraft:lapis_ore" }, result: { item: "minecraft:deepslate_lapis_lazuli", count: 12 }, crushing_time: 200 }).id("occultism:crushing/lapis_from_deepslate_ore");
 
  event.custom({ type: "occultism:crushing", ingredient: { item: "minecraft:coal_ore" }, result: { item: "minecraft:coal", count: 1 }, crushing_time: 200 }).id("occultism:crushing/coal_from_ore");
  event.custom({ type: "occultism:crushing", ingredient: { item: "minecraft:coal_ore" }, result: { item: "minecraft:deepslate_coal", count: 2 }, crushing_time: 200 }).id("occultism:crushing/coal_from_deepslate_ore");

  event.custom({ type: "occultism:crushing", ingredient: { item: "minecraft:iron_ore" }, result: { item: "create:crushed_raw_iron", count: 1 }, crushing_time: 200 }).id("occultism:crushing/iron_from_ore");
  event.custom({ type: "occultism:crushing", ingredient: { item: "minecraft:deepslate_iron_ore" }, result: { item: "create:crushed_raw_iron", count: 2 }, crushing_time: 200 }).id("occultism:crushing/iron_from_deepslate_ore");

  event.custom({ type: "occultism:crushing", ingredient: { item: "minecraft:copper_ore" }, result: { item: "create:crushed_raw_copper", count: 1 }, crushing_time: 200 }).id("occultism:crushing/copper_from_ore");
  event.custom({ type: "occultism:crushing", ingredient: { item: "minecraft:deepslate_copper_ore" }, result: { item: "create:crushed_raw_copper", count: 2 }, crushing_time: 200 }).id("occultism:crushing/copper_from_deepslate_ore");

  event.custom({ type: "occultism:crushing", ingredient: { item: "minecraft:gold_ore" }, result: { item: "create:crushed_raw_gold", count: 1 }, crushing_time: 200 }).id("occultism:crushing/gold_from_ore");
  event.custom({ type: "occultism:crushing", ingredient: { item: "minecraft:deepslate_gold_ore" }, result: { item: "create:crushed_raw_gold", count: 2 }, crushing_time: 200 }).id("occultism:crushing/gold_from_deepslate_ore");

  event.custom({ type: "occultism:crushing", ingredient: { item: "minecraft:emerald_ore" }, result: { item: "minecraft:emerald", count: 1 }, crushing_time: 200 }).id("occultism:crushing/emerald_from_ore");
  event.custom({ type: "occultism:crushing", ingredient: { item: "minecraft:deepslate_emerald_ore" }, result: { item: "minecraft:emerald", count: 2 }, crushing_time: 200 }).id("occultism:crushing/emerald_from_deepslate_ore");

  event.custom({ type: "occultism:crushing", ingredient: { item: "minecraft:diamond_ore" }, result: { item: "minecraft:diamond", count: 1 }, crushing_time: 200 }).id("occultism:crushing/diamond_from_ore");
  event.custom({ type: "occultism:crushing", ingredient: { item: "minecraft:deepslate_diamond_ore" }, result: { item: "minecraft:diamond", count: 2 }, crushing_time: 200 }).id("occultism:crushing/diamond_from_deepslate_ore");

  event.custom({ type: "occultism:crushing", ingredient: { item: "create:asurine" }, result: [{ item: "create:crushed_raw_zinc", count: 0.4 }, {item: "create:zinc_nugget", count: 0.4 }], crushing_time: 200 }).id("occultism:crushing/zinc_from_asurine");
  event.custom({ type: "occultism:crushing", ingredient: { item: "create:zinc_ore" }, result: { item: "create:crushed_raw_zinc", count: 1 }, crushing_time: 200 }).id("occultism:crushing/zinc_from_ore");
  event.custom({ type: "occultism:crushing", ingredient: { item: "create:deepslate_zinc_ore" }, result: { item: "create:crushed_raw_zinc", count: 2 }, crushing_time: 200 }).id("occultism:crushing/zinc_from_deepslate_ore");
});
