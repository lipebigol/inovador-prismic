import { ChakraProvider } from "@chakra-ui/react"
import '../styles/adv.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
