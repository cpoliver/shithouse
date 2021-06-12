import { Heading, Stack, Flex } from "@chakra-ui/react"
import * as React from "react"

import { useStore } from "./store"
import { CardGrid, Deck, Debugger } from "components"

export const App: React.FC = () => {
	const decks = useStore((s) => s.decks)
	const cards = useStore((s) => s.cards)

	const handleDrawCard = useStore((s) => s.drawCard)

	return (
		<Flex minH="100vh" color="gray.800" flex={1}>
			<Stack bg="gray.50" spacing={8} p={8} maxH="100vh">
				<Heading>Decks</Heading>
				<Stack flex={1}>
					<Deck title="Cards Against Humanity" cards={decks.CAH} onDrawCard={() => handleDrawCard("CAH")} />
					<Deck title="Playing Cards" cards={decks.Playing} />
					<Deck title="Top Trumps" cards={decks.TopTrumps} />
				</Stack>
			</Stack>

			<Stack bg="gray.200" flex={2} spacing={8} p={8}>
				<Heading>Cards</Heading>
				<CardGrid />
			</Stack>

			<Flex flex="*">
				<Stack p={8} bg="gray.900" color="gray.300" flex={1} spacing={8}>
					<Heading>State</Heading>
					<Debugger>{{ cards }}</Debugger>
				</Stack>
			</Flex>
		</Flex>
	)
}
