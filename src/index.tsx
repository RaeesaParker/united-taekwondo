import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App"

import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)


const theme = extendTheme({
  colors: {
    blue: {
      dark: "#011627",
      light: "#007CBE"
    },
		red:{
			dark: "#F71735"
		},
		tones:{
			white:"#FDFFFC",
			darkGrey:"#C2C2C2",
			lightGrey:"#D1D1D1"
		}
  },
  fonts: {
    heading: "'Teko', sans-serif",
    body: "'Ubuntu', sans-serif",
  },
})



root.render(
	<ChakraProvider theme={theme}>
		<App />
	</ChakraProvider>
)
