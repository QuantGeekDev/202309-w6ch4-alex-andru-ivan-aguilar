import type Character from "../Character/Character.js";
import type { Fighter } from "../Fighter/Fighter.js";

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

export interface SquireData extends CharacterDataType {
  kissAssLevel: number;
  serves: Fighter;
}

export interface AdvisorData extends CharacterDataType {
  adviseCharacter: Character;
}
