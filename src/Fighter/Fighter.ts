import Character from "../Character/Character";
import { type FighterData } from "../types/types";

export class Fighter extends Character {
  dexterity;
  weapon;

  constructor(data: FighterData) {
    super(data);
    this.dexterity = data.dexterity;
    this.weapon = data.weapon;
  }
}
