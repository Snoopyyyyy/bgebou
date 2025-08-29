ServerEvents.recipes((event) => {
  function occultismMiner(type, ore, weight) {
    event.custom({
      type: "occultism:miner",
      ingredient: { tag: "occultism:miners/" + type },
      result: { item: ore },
      weight: weight,
    });
  }

  occultismMiner("basic_resources", "minecraft:dirt", 250);
  occultismMiner("basic_resources", "minecraft:sand", 250);
  occultismMiner("basic_resources", "minecraft:gravel", 250);
  occultismMiner("basic_resources", "minecraft:stone", 250);
  occultismMiner("basic_resources", "minecraft:andesite", 250);
  occultismMiner("basic_resources", "minecraft:diorite", 250);
  occultismMiner("basic_resources", "minecraft:granite", 250);
  occultismMiner("basic_resources", "minecraft:netherrack", 100);
  occultismMiner("basic_resources", "minecraft:basalt", 100);
  occultismMiner("basic_resources", "minecraft:blackstone", 100);
  occultismMiner("basic_resources", "minecraft:end_stone", 50);

  occultismMiner("ores", "minecraft:coal_ore", 1000);
  occultismMiner("ores", "minecraft:copper_ore", 950);
  occultismMiner("ores", "minecraft:iron_ore", 900);
  occultismMiner("ores", "minecraft:gold_ore", 800);
  occultismMiner("ores", "minecraft:redstone_ore", 750);
  occultismMiner("ores", "minecraft:emerald_ore", 150);
  occultismMiner("ores", "minecraft:lapis_ore", 400);
  occultismMiner("ores", "minecraft:diamond_ore", 100);
  occultismMiner("ores", "create:zinc_ore", 500);
  occultismMiner("ores", "immersiveengineering:ore_aluminum", 500);
  occultismMiner("ores", "immersiveengineering:ore_lead", 400);
  occultismMiner("ores", "immersiveengineering:ore_silver", 300);
  occultismMiner("ores", "immersiveengineering:ore_nickel", 200);
  occultismMiner("ores", "immersiveengineering:ore_uranium", 100);
  occultismMiner("ores", "evilcraft:dark_ore", 1000);
  occultismMiner("ores", "minecraft:nether_quartz_ore", 250);
  
  occultismMiner('deeps', 'create:deepslate_zinc_ore', 500)
  occultismMiner('deeps', 'minecraft:cobbled_deepslate', 100)
  occultismMiner('deeps', 'minecraft:deepslate_diamond_ore', 100)
  occultismMiner('deeps', 'minecraft:deepslate_lapis_ore', 400)
  occultismMiner('deeps', 'minecraft:deepslate_emerald_ore', 150)
  occultismMiner('deeps', 'minecraft:deepslate_redstone_ore', 750)
  occultismMiner('deeps', 'minecraft:deepslate_gold_ore', 800)
  occultismMiner('deeps', 'minecraft:deepslate_copper_ore', 950)
  occultismMiner('deeps', 'minecraft:deepslate_iron_ore', 900)
  occultismMiner('deeps', 'minecraft:deepslate_coal_ore', 1000)
  occultismMiner('deeps', 'evilcraft:dark_ore_deepslate', 300)
  occultismMiner('deeps', 'immersiveengineering:deepslate_ore_aluminum', 500)
  occultismMiner('deeps', 'immersiveengineering:deepslate_ore_lead', 400)
  occultismMiner('deeps', 'immersiveengineering:deepslate_ore_silver', 300)
  occultismMiner('deeps', 'immersiveengineering:deepslate_ore_nickel', 200)
  occultismMiner('deeps', 'immersiveengineering:deepslate_ore_uranium', 100)

  occultismMiner("master", "tconstruct:cobalt_ore", 150);
  occultismMiner("master", "occultism:iesnium_ore", 100);
  occultismMiner("master", "minecraft:ancient_debris", 50);
});
