import Component from "../component/component.js";
import CharactersCards from "../CharactersCards/CharactersCards.js";
class App extends Component {
  protected populate(): void {
    const div = document.querySelector("div")!;
    const charactersCards = new CharactersCards(
      div,
      "ul",
      "characters-list row list-unstyled",
    );

    charactersCards.render();
  }
}

export default App;
