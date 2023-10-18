import { Advisor } from "./Advisor/Advisor";
import { Fighter } from "./Fighter/Fighter";
import { King } from "./King/King";
import { Squire } from "./Squire/Squire";

const joffreyCharacterData = {
  id: 1,
  name: "Joffrey",
  family: "Baratheon",
  age: 16,
  imageSource: "joffrey.jpg",
  yearsOfReign: 2,
};

const jaimeCharacterData = {
  id: 2,
  name: "Jaime",
  family: "Lannister",
  age: 45,
  imageSource: "jaime.jpg",
  dexterity: 7,
  weapon: "sword",
};

const daenerysCharacterData = {
  id: 3,
  name: "Daenerys",
  family: "Targaryen",
  age: 30,
  imageSource: "daenerys.jpg",
  dexterity: 10,
  weapon: "dragons",
};

const tyrionCharacterData = {
  id: 4,
  name: "Tyrion",
  family: "Lannister",
  age: 40,
  imageSource: "tyrion.jpg",
  adviseCharacter: daenerys,
};

const bronnCharacterData = {
  id: 5,
  name: "Bronn",
  family: "Blackwater",
  age: 54,
  imageSource: "bronn.jpg",
  kissAssLevel: 0,
  serves: jaime,
};

const joffrey = new King(joffreyCharacterData, 2);
const jaime = new Fighter(jaimeCharacterData, 7, "sword");
const daenerys = new Fighter(daenerysCharacterData, 10, "dragons");
const tyrion = new Advisor(tyrionCharacterData, daenerys);
const bronn = new Squire(bronnCharacterData);

export const characters = [jaime, joffrey, daenerys, tyrion, bronn];
