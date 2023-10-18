interface CharacterDataType {
  name: string;
  family: string;
  age: number;
  imageSource: string;
}

export class Character {
  isAlive = true;
  series = "Game of Thrones";
  characterData;

  constructor(characterData: CharacterDataType) {
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
