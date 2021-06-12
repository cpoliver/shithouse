import * as React from "react"

import { PlayingCard, PlayingCardProps } from "./PlayingCard"
import { TopTrumpsCard, TopTrumpsCardProps } from "./TopTrumpsCard"
import { CAHCard, CAHCardProps } from "./CAHCard"

export type CardProps = CAHCardProps | PlayingCardProps | TopTrumpsCardProps
export type CardType = CardProps["type"]
export type OnRemove = { onRemove?: () => void }

const cards: { [key in CardType]: React.FC<CardProps & OnRemove> } = {
	CAH: CAHCard as React.FC<CAHCardProps>,
	Playing: PlayingCard,
	TopTrumps: TopTrumpsCard,
}

export const Card: React.FC<CardProps & OnRemove> = ({ onRemove, ...card }) => {
	const CardComponent = cards[card.type]

	return <CardComponent {...card} onRemove={onRemove} />
}
