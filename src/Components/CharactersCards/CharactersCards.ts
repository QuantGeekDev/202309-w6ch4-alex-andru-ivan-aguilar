import Component from "../component/component.js";
import CharacaterCard from "../CharacterCard/CharacterCard.js";
import { characters } from "../../characters.js";

class CharactersCards extends Component {
  protected populate(): void {
    const ul = document.querySelector("ul")!;

    characters.forEach((character) => {
      const characterCard = new CharacaterCard(ul, character.characterData);
      characterCard.render();
    });
  }
}

export default CharactersCards;
