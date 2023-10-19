import Character from "../Character/Character.js";
import type { AdvisorData } from "../types/types.js";

export class Advisor extends Character {
  adviseCharacter;

  constructor(data: AdvisorData, adviseCharacter: Character) {
    super(data);
    this.adviseCharacter = adviseCharacter;
  }

  communicate(): string {
    return "No sé por qué, pero creo que voy a morir pronto";
  }
}
