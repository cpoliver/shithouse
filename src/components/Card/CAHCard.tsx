import * as React from "react"
import { Text } from "@chakra-ui/react"
import { sanitize } from "dompurify"
import { css } from "@emotion/css"

import { CardContainer } from "./CardContainer"
import { OnRemove } from "./index"

export type CAHCardProps = {
	id: string
	type: "CAH"
	color: "black" | "white"
	text: string
}

const styles = css`
	span.underline {
		margin-bottom: -0.2rem;
		margin-left: 0.2rem;
		margin-right: 0.2rem;
		height: 1rem;
		width: 100%;
		max-width: 8rem;
		border-bottom: 1px white solid;
		display: inline-flex;
	}
`

export const CAHCard: React.FC<CAHCardProps & OnRemove> = ({ onRemove, ...card }) => {
	const handleClick = () => onRemove()

	return (
		<CardContainer
			className={styles}
			bg={card.color}
			color={card.color === "black" ? "white" : "black"}
			p={6}
			fontSize="xl"
			fontWeight="bold"
			lineHeight="140%"
			onClick={handleClick}
		>
			<Text dangerouslySetInnerHTML={{ __html: sanitize(card.text).replaceAll(" / ", "<br/>") }} />
		</CardContainer>
	)
}
