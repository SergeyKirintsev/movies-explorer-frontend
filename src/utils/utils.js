import {cardsInRowConfig, DURATION_SHORT_FILM} from "./constants";

export function durationToHours(duration = 100) {
  const hours = Math.floor(duration / 60);
  const minutes = duration - hours * 60;
  return `${hours} ч ${minutes} мин`
}

export function calcCardsInRow() {
  let countCards;
  const clientWidth = document.documentElement.clientWidth;

  Object.keys(cardsInRowConfig)
    .sort((a, b) => a - b)
    .forEach(key => {
      if (clientWidth > +key) {
        countCards = cardsInRowConfig[key]
      }
    })

  return countCards;
}

export function isShortFilm(duration) {
  return duration <= DURATION_SHORT_FILM;
}
