import { AppProps } from 'next/app'
import '../styles/globals.css'
import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`
@font-face {
  font-family: 'Airfool';
  src: url('/fonts/Airfool.woff2') format('woff2');
}
`

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default MyApp
