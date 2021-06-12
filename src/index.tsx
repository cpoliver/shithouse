import { ChakraProvider } from "@chakra-ui/react"
import * as React from "react"
import { render } from "react-dom"

import { App } from "app/App"
import "./styles.css"

render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.getElementById("root")
)
