import { Advisor } from "./Advisor/Advisor.js";
import { Fighter } from "./Fighter/Fighter.js";
import { King } from "./King/King.js";
import { Squire } from "./Squire/Squire.js";

const joffreyCharacterData = {
  id: 1,
  name: "Joffrey",
  family: "Baratheon",
  age: 16,
  imageSource: "joffrey.jpg",
  yearsOfReign: 2,
};

const joffrey = new King(joffreyCharacterData, 2);

const jaimeCharacterData = {
  id: 2,
  name: "Jaime",
  family: "Lannister",
  age: 45,
  imageSource: "jaime.jpg",
  dexterity: 7,
  weapon: "sword",
};

const jaime = new Fighter(jaimeCharacterData, 7, "sword");

const daenerysCharacterData = {
  id: 3,
  name: "Daenerys",
  family: "Targaryen",
  age: 30,
  imageSource: "daenerys.jpg",
  dexterity: 10,
  weapon: "dragons",
};

const daenerys = new Fighter(daenerysCharacterData, 10, "dragons");

const tyrionCharacterData = {
  id: 4,
  name: "Tyrion",
  family: "Lannister",
  age: 40,
  imageSource: "tyrion.jpg",
  adviseCharacter: daenerys,
};

const tyrion = new Advisor(tyrionCharacterData, daenerys);

const bronnCharacterData = {
  id: 5,
  name: "Bronn",
  family: "Blackwater",
  age: 54,
  imageSource: "bronn.jpg",
  kissAssLevel: 0,
  serves: jaime,
};

const bronn = new Squire(bronnCharacterData);

export const characters = [jaime, joffrey, daenerys, tyrion, bronn];
