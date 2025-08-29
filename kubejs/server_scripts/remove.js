ServerEvents.recipes((event) => {
  event.remove({ id: "/occultism:miner/" });
  event.remove({ id: "/occultism:crushing/" });
});
