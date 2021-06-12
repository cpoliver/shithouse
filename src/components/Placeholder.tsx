import { Box } from "@chakra-ui/react"
import * as React from "react"

type PlaceholderProps = {
  component: string
}

export const Placeholder: React.FC<PlaceholderProps> = ({ component }) => (
  <Box p={4} bg="gray.100" as="pre">
    &lt;{component}/&gt;
  </Box>
)
