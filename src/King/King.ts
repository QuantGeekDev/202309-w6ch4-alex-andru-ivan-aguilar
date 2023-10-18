import Character from "../Character/Character";
import { type KingData } from "../types/types";

export class King extends Character {
  yearsOfReign;

  constructor(data: KingData) {
    super(data);
    this.yearsOfReign = data.yearsOfReign;
  }
}
