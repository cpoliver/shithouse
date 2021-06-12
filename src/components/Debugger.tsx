import { Box } from "@chakra-ui/react"
import * as React from "react"

type DebuggerProps = {
	//
}

export const Debugger: React.FC<DebuggerProps> = ({ children }) => (
	<Box as="pre" color="gray.50" fontSize="sm" maxW={600} maxH="calc(100vh - 8.75rem)" overflowX="scroll">
		{JSON.stringify(children, null, 2)}
	</Box>
)
