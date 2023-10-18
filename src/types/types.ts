export interface CharacterDataType {
  name: string;
  family: string;
  age: number;
  imageSource: string;
}

export interface KingData extends CharacterDataType {
  yearsOfReign: number;
}

export interface FighterData extends CharacterDataType {
  dexterity: number;
  weapon: string;
}

export interface Squire extends CharacterDataType {
  kissAssLevel: number;
  serves: string;
}
