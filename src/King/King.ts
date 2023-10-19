import Character from "../Character/Character.js";
import { type KingData } from "../types/types.js";

export class King extends Character {
  yearsOfReign;

  constructor(data: KingData, yearsOfReign: number) {
    super(data);
    this.yearsOfReign = yearsOfReign;
  }
}
