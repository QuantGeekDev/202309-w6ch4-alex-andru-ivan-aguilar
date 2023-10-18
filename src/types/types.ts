export interface CharacterDataType {
  name: string;
  family: string;
  age: number;
  imageSource: string;
}

export interface KingData extends CharacterDataType {
  yearsOfReign: number;
}
