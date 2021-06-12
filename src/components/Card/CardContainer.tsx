import * as React from "react"
import { Stack, StackProps } from "@chakra-ui/react"

export const CardContainer: React.FC<StackProps> = ({ ...stackProps }) => (
	<Stack
		h={320}
		w={240}
		pos="relative"
		p={4}
		bg="white"
		boxShadow="md"
		borderRadius="lg"
		cursor="pointer"
		layout
		{...stackProps}
	/>
)
