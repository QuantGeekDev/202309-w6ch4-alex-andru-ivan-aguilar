import Character from "../Character/Character";
import type { SquireData } from "../types/types";

export class Squire extends Character {
  kissAssLevel;
  serves;

  constructor(data: SquireData) {
    super(data);
    const { serves, kissAssLevel } = data;

    this.serves = serves;

    if (kissAssLevel < 0 || kissAssLevel > 10) {
      throw Error("Error: kissAssLevel is not a number betwen 0 or 10");
    }

    this.kissAssLevel = kissAssLevel;
  }

  communicate(): string {
    return "Soy un looser";
  }
}
