import { SimpleGrid } from "@chakra-ui/react"
import * as React from "react"
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"

import { useStore } from "app/store"
import { Card } from "components"

const animateIn = {
	opacity: 1,
	h: 320,
}

const animateOut = {
	opacity: 0,
	height: 0,
}

const MotionGrid = motion(SimpleGrid)

export const CardGrid: React.FC = () => {
	const [cardToRemove, setCardToRemove] = React.useState<string | null>()

	const cards = useStore((s) => s.cards)
	const returnCard = useStore((s) => s.returnCard)

	const onRemove = React.useCallback((card) => setCardToRemove(card.id), [])

	return (
		<AnimateSharedLayout>
			<MotionGrid p={8} templateColumns="repeat(auto-fill, minmax(320px, 1fr))" gap={8} layout>
				{cards.map((card) => (
					<AnimatePresence
						key={card.id}
						onExitComplete={() => {
							returnCard(card)
							setCardToRemove(null)
						}}
						// exitBeforeEnter
					>
						{cardToRemove !== card.id && (
							<motion.div key={card.id} initial={animateOut} exit={animateOut} animate={animateIn} layout>
								<Card {...card} onRemove={() => onRemove(card)} />
							</motion.div>
						)}
					</AnimatePresence>
				))}
			</MotionGrid>
		</AnimateSharedLayout>
	)
}
