import * as React from "react"
import { Text } from "@chakra-ui/react"
import { CardContainer } from "./CardContainer"

export const SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"] as const
export const RANKS = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"]

type Suit = typeof SUITS[number]
type Rank = typeof RANKS[number]

export type PlayingCardProps = {
	id: string
	type: "Playing"
	suit: Suit
	rank: Rank
}

const suitColor: { [key in Suit]: string } = {
	Clubs: "black",
	Diamonds: "red",
	Hearts: "red",
	Spades: "black",
}

export const PlayingCard: React.FC<PlayingCardProps> = ({ suit, rank }) => (
	<CardContainer id={suit + rank} color={suitColor[suit]}>
		<Text>
			{rank} of {suit}
		</Text>
	</CardContainer>
)
