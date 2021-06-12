import create from "zustand"
import * as R from "ramda"

import { CardType, CardProps } from "components"
import { decks as initDecks } from "data"

type Store = {
	decks: { [key in CardType]: CardProps[] }
	cards: CardProps[]

	drawCard: (cardType: CardType) => void
	returnCard: (card: CardProps) => void
}

export const useStore = create<Store>((set) => ({
	decks: initDecks,
	cards: [],

	drawCard: (cardType: CardType) => {
		set((state) => {
			const deck = state.decks[cardType]
			const card = deck.pop()

			return {
				decks: R.assoc(cardType, deck, state.decks),
				cards: [...state.cards, card],
			}
		})
	},

	returnCard: (card: CardProps) => {
		set((state) => {
			const deck = state.decks[card.type]

			return {
				decks: R.assoc(card.type, R.append(card, deck), state.decks),
				cards: R.without([card], state.cards),
			}
		})
	},
}))
