import Character from "../Character/Character";
import { type FighterData } from "../types/types";

export class Fighter extends Character {
  dexterity;
  weapon;

  constructor(data: FighterData, dexterity: number, weapon: string) {
    super(data);
    this.dexterity = dexterity;
    this.weapon = weapon;
  }
}
