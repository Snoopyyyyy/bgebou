JEIEvents.hideItems(event => {
    function hideBuddingClusters(material) {
        event.hide(`buddingcrystals:small_${material}_bud`);
        event.hide(`buddingcrystals:medium_${material}_bud`);
        event.hide(`buddingcrystals:large_${material}_bud`);
        event.hide(`buddingcrystals:${material}_cluster`);
        event.hide(`buddingcrystals:budding_${material}`);
    }

    hideBuddingClusters('prismarine');
    hideBuddingClusters('diamond');
    hideBuddingClusters('nether_quartz');
    hideBuddingClusters('lapis_lazuli');
    hideBuddingClusters('certus_quartz');
    hideBuddingClusters('redstone');
    hideBuddingClusters('emerald');
    hideBuddingClusters('glowstone');
    hideBuddingClusters('fluix');
})