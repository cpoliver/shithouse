import { CAHCardProps } from "components/Card/CAHCard"
import { PlayingCardProps, SUITS, RANKS } from "components/Card/PlayingCard"
import { TopTrumpsCardProps } from "components/Card/TopTrumpsCard"
import { nanoid } from "nanoid"

import { whiteCards } from "./whiteCards"
import { blackCards } from "./blackCards"
import { xprod } from "ramda"

const CAH: CAHCardProps[] = [
	...whiteCards.map((text) => ({ id: nanoid(), type: "CAH" as const, text, color: "white" as const })),
	...blackCards.map(({ text }) => ({ id: nanoid(), type: "CAH" as const, text, color: "black" as const })),
]

const Playing: PlayingCardProps[] = xprod(SUITS, RANKS).map(([suit, rank]) => ({
	id: suit + rank,
	type: "Playing" as const,
	suit,
	rank,
}))

const TopTrumps: TopTrumpsCardProps[] = [
	{
		id: "tt1",
		type: "TopTrumps",
		car: "LaFerrari",
		stats: {
			topSpeed: 217,
			engineSize: 6.3,
			coolFactor: 36,
			innovation: 10,
			yearLaunched: 2013,
		},
		info: {
			productionYears: 1,
			hp: 789,
		},
		image:
			"https://ferrari-cdn.thron.com/delivery/public/thumbnail/ferrari/f890c2ec-1480-456f-b048-e736dcdde5ae/q076ls/std/488x325/f890c2ec-1480-456f-b048-e736dcdde5ae?scalemode=auto",
	},
	{
		id: "tr2",
		type: "TopTrumps",
		car: "BAC Mono",
		stats: {
			topSpeed: 170,
			engineSize: 2.3,
			coolFactor: 47,
			innovation: 7,
			yearLaunched: 2011,
		},
		info: {
			productionYears: 3,
			hp: 280,
		},
		image: "https://car-images.bauersecure.com/pagefiles/88837/bac_mono_090.jpg",
	},
	{
		id: "tr3",
		type: "TopTrumps",
		car: "Pagani Huayra",
		stats: {
			topSpeed: 231,
			engineSize: 6.0,
			coolFactor: 44,
			innovation: 8,
			yearLaunched: 2012,
		},
		info: {
			productionYears: 2,
			hp: 730,
		},
		image:
			"https://img.jamesedition.com/listing_images/2021/02/11/11/14/39/8fcbe005-db0e-447e-bdbb-601008e1f3c4/je/600x354xc.jpg",
	},
]

export const decks = {
	CAH,
	Playing,
	TopTrumps,
}
