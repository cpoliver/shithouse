import * as React from "react"
import { Stack, Text } from "@chakra-ui/react"
import styled from "@emotion/styled"

import { CardContainer } from "./CardContainer"

export type TopTrumpsCardProps = {
	id: string
	type: "TopTrumps"
	car: string
	image: string
	stats: {
		topSpeed: number
		engineSize: number
		coolFactor: number
		innovation: number
		yearLaunched: number
	}
	info: {
		hp: number
		productionYears: number
	}
}

const strokeWidth = 1
const strokeColor = "rgba(0,0,0,.7)"

const CarName = styled(Text)`
	background: rgb(0, 0, 0);
	background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 40%, rgba(0, 0, 0, 1) 100%);
	width: 100%;
	text-align: center;
	position: relative;
	font-size: 1.5rem;
	text-shadow: -${strokeWidth}px -${strokeWidth}px 0 ${strokeColor}, ${strokeWidth}px -${strokeWidth}px 0 ${strokeColor},
		-${strokeWidth}px ${strokeWidth}px 0 ${strokeColor}, ${strokeWidth}px ${strokeWidth}px 0 ${strokeColor};
`

const Stat: React.FC<{ name: string; value: number }> = ({ name, value }) => (
	<Stack direction="row" flex={1} align="center" spacing={4} lineHeight={0}>
		<Text w={32}>{name}</Text>
		<Text color="yellow" opacity=".8" flex={1}>
			{value}
		</Text>
	</Stack>
)

export const TopTrumpsCard: React.FC<TopTrumpsCardProps> = ({ id, car, stats, image }) => (
	<CardContainer
		id={id}
		backgroundImage={image}
		backgroundSize="105%"
		backgroundRepeat="no-repeat"
		backgroundPosition="top center"
		backgroundColor="gray.900"
		p={-4}
		color="white"
		spacing={0}
	>
		<Stack flex={1} mt={4} align="center" justify="flex-end" fontSize="2xl" fontWeight="bold" textTransform="uppercase">
			<CarName>{car}</CarName>
		</Stack>
		<Stack direction="row" flex={1} mt={3} textTransform="uppercase" fontSize="sm" fontWeight="bold">
			<Stack p={4} spacing={0}>
				<Stat name="Top Speed (MPH)" value={stats.topSpeed} />
				<Stat name="Engine Size" value={stats.engineSize} />
				<Stat name="Cool Factor" value={stats.coolFactor} />
				<Stat name="Innovation" value={stats.innovation} />
				<Stat name="Year Launched" value={stats.yearLaunched} />
			</Stack>
		</Stack>
	</CardContainer>
)
