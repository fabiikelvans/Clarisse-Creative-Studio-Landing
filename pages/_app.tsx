// Fonts
import "@fontsource/italiana";  // Defaults to weight 400.
import "@fontsource/prompt"; // Defaults to weight 400.

import '../styles/styles.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
