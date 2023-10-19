import Component from "../component/component.js";
import { type CharacterDataType } from "../../types/types.js";

class CharacaterCard extends Component {
  constructor(
    parentElement: Element,
    protected characterData: CharacterDataType,
  ) {
    super(parentElement, "li", "col");
  }

  protected populate(): void {
    const { name, family, age, imageSource } = this.characterData;
    this.element.innerHTML = `
        <article class="character">
          <div class="card charactercard">
            <img src="img/${imageSource}" alt="${name} and ${family}" class="characterpicture card-img-top">
            <div class="card-body">
              <h2 class="charactername card-title h4">${name} ${family}</h2>
              <div class="characterinfo">
                <ul class="list-unstyled">
                  <li>Age: ${age} yrs</li>
                  <li>
                    State:
                    <i class="fas fa-thumbs-down"></i>
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
`;
  }
}

export default CharacaterCard;
