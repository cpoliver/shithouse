import * as React from "react"
import { Button, Stack, Flex, Text } from "@chakra-ui/react"

import { CardProps } from "./Card"
import { CardContainer } from "./Card/CardContainer"

export type DeckProps = {
	title: string
	cards: CardProps[]
	onDrawCard?: () => void
}

export const Deck: React.FC<DeckProps> = ({ title, cards, onDrawCard }) => (
	<Stack bg="gray.100" borderRadius="lg" spacing={8}>
		<CardContainer align="center" justify="space-around" id={title}>
			<Flex
				display="none"
				align="center"
				justify="center"
				color="white"
				bg="orange.400"
				m={0}
				p={0}
				h={8}
				w={8}
				borderRadius="full"
			>
				<Text fontSize="md" fontWeight="bold">
					{cards.length}
				</Text>
			</Flex>
			<Text color="gray.700" fontSize="xl" fontWeight="bold" align="center">
				{title}
			</Text>
			<Button variant="outline" onClick={onDrawCard}>
				Draw Card
			</Button>
		</CardContainer>
	</Stack>
)
