import { html } from 'lit';

export function cardComponentTemplate() {
  const cardList = this.cards.map(
    card => html`
      <div class="card card--${card.icon}">
        <div class="card__wrapper">
          <p class="card__title">${card.title}</p>
          <p class="card__description">${card.description}</p>
          <img
            alt="${card.icon} icon"
            src="../assets/card-component/icon-${card.icon}.svg"
            class="card__icon"
          />
        </div>
      </div>
    `
  );

  return html`
    <div class="page-container">
      <div class="presentation-wrapper">
        <div class="presentation-intro">
          <p class="presentation-intro__motto">${this.motto}</p>
          <p class="presentation-intro__partner">Powered by ${this.partner}</p>
          <p class="presentation-intro__description">${this.description}</p>
        </div>
        <div class="cards-list">
          ${cardList[0]}
          <div class="card-list--second-column">
            ${cardList[1]} ${cardList[2]}
          </div>
          ${cardList[3]}
        </div>
      </div>
    </div>
  `;
}
