import type { AppProps } from 'next/app'
import { Layout } from '@components/common'
import '../styles/globals.css'
import { ManagedUIContext } from '@components/ui/context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ManagedUIContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ManagedUIContext>
  )
}

export default MyApp
