import { acornCluster, blomCluster, iwonaCluster, lidkaCluster, rabbitsCluster, rPentominoCluster } from "./methuselahs";
import { blinkerCluster, figure8Cluster, koksGalaxyCluster, octagonCluster, pentadecathlonCluster, starCluster } from "./oscillators";
import { coeShipCluster, copperheadCluster, gliderCluster, HWSSCluster, LWSSCluster, MWSSCluster, sirRobinCluster } from "./spaceships";
import { beehiveCluster, blockCluster, boatCluster, eater2Cluster, fishhookCluster, tubCluster } from "./stillLives";


export const patternSwitch = {
  "r-pentomino": rPentominoCluster,
  rabbits: rabbitsCluster,
  acorn: acornCluster,
  blom: blomCluster,
  iwona: iwonaCluster,
  lidka: lidkaCluster,
  block: blockCluster,
  beehive: beehiveCluster,
  tub: tubCluster,
  boat: boatCluster,
  fishhook: fishhookCluster,
  eater2: eater2Cluster,
  blinker: blinkerCluster,
  star: starCluster,
  octagon: octagonCluster,
  koksGalaxy: koksGalaxyCluster,
  pentadecathlon: pentadecathlonCluster,
  figure8: figure8Cluster,
  glider: gliderCluster,
  LWSS: LWSSCluster,
  MWSS: MWSSCluster,
  HWSS: HWSSCluster,
  coeShip: coeShipCluster,
  copperhead: copperheadCluster,
}