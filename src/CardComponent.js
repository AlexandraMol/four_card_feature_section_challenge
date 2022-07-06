import { LitElement } from 'lit';
import { cardComponentStyle } from './card-component.style.js';
import { cardComponentTemplate } from './card-component.template.js';

export class CardComponent extends LitElement {
  static get styles() {
    return cardComponentStyle;
  }

  static get properties() {
    return {
      motto: { type: String },
      partner: { type: String },
      description: { type: String },
      cards: { type: Array },
    };
  }

  constructor() {
    super();
    this.motto = 'Reliable, efficient delivery';
    this.partner = 'Technology';
    this.description =
      'Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful';
    this.cards = [
      {
        title: 'Supervisor',
        description: 'Monitors activity to identify project roadblocks',
        icon: 'supervisor',
      },
      {
        title: 'Team Builder',
        description:
          'Scans our talent network to create the optimal team for your project',
        icon: 'team-builder',
      },
      {
        title: 'Karma',
        description: 'Regularly evaluates our talent to ensure quality',
        icon: 'karma',
      },
      {
        title: 'Calculator',
        description:
          'Uses data from past projects to provide better delivery estimates',
        icon: 'calculator',
      },
    ];
  }

  render() {
    return cardComponentTemplate.call(this);
  }
}
