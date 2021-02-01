import { AppProps } from 'next/dist/next-server/lib/router/router'
import { ReactElement } from 'react'
import { useGtagHandlerouteChange } from 'services/gtag'
import '../styles/index.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function MyApp({
  Component,
  pageProps,
}: AppProps): ReactElement {
  useGtagHandlerouteChange()

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />
}
