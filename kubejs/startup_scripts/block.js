StartupEvents.registry("block", (event) => {
  event
    .create("molten_vents:molten_core")
    .displayName("§dMolten Core Block")
    .soundType("deepslate")
    .hardness(1)
    .resistance(10)
    .requiresTool(true)
    .tagBlock("minecraft:mineable/pickaxe");
});
