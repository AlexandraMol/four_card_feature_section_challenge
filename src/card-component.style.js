import { css } from 'lit';

export const cardComponentStyle = css`
  .page-container {
    display: flex;
    justify-content: center;
    min-height: 100vh;
  }

  .presentation-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .presentation-intro {
    text-align: center;
    width: 60%;
  }

  .presentation-intro__motto,
  .presentation-intro__partner {
    margin: 0px;
  }
  .presentation-intro__description {
    margin: 20px 0 0;
  }

  .presentation-intro__motto {
    font-weight: 200;
    font-size: 26px;
    color: hsl(229, 6%, 66%);
  }

  .presentation-intro__partner {
    font-weight: 600;
    color: hsl(234, 12%, 34%);
    font-size: 26px;
  }

  .presentation-intro__description {
    color: hsl(229, 6%, 66%);
    font-weight: 400;
    font-size: 17px;
  }

  .cards-list {
    margin-top: 30px;
    display: flex;
    align-items: center;
  }

  .card {
    border-radius: 5px;
    box-shadow: 7px 7px 7px hsl(229, 6%, 66%);
    width: 270px;
    height: 200px;
    margin: 10px;
  }

  .card__wrapper {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }

  .card--supervisor {
    border-top: 4px solid hsl(180, 62%, 55%);
    margin-right: 2rem;
    padding-left: 1rem;
  }

  .card--team-builder {
    border-top: 4px solid hsl(0, 78%, 62%);
    margin-bottom: 2rem;
    margin-bottom: 2rem;
    padding-left: 1rem;
  }

  .card--karma {
    border-top: 4px solid hsl(34, 97%, 64%);
    padding-left: 1rem;
  }

  .card--calculator {
    border-top: 4px solid hsl(212, 86%, 64%);
    margin-left: 2rem;
    padding-left: 1rem;
  }

  .card__title {
    margin-bottom: 0;
    font-size: 18px;
    font-weight: 600;
    color: rgb(76, 78, 97);
  }

  .card__description {
    color: hsl(229, 6%, 66%);
  }

  .card__icon {
    align-self: flex-end;
    width: 50px;
  }

  @media screen and (max-width: 992px) {
    .cards-list {
      flex-direction: column;
    }
    .card {
      width: 400px;
      height: 250px;
      font-size: 18px;
    }
    .card--supervisor,
    .card--team-builder,
    .card--karma,
    .card--calculator {
      margin: 25px;
      padding: 0;
    }
    .card__icon {
      width: 70px;
    }
  }
`;
