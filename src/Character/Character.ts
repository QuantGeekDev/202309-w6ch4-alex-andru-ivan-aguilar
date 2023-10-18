import type { CharacterDataType } from "../types/types";
class Character {
  isAlive: boolean;
  series: string;

  constructor(public characterData: CharacterDataType) {
    this.characterData = characterData;
  }

  communicate(): string {
    return `${this.characterData.name} says: `;
  }

  die(): void {
    this.isAlive = false;
  }
}

export default Character;
