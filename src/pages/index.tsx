import Head from 'next/head'
import React from 'react'
import { History } from '../components/history'
import { Input } from '../components/input'
import { useShell } from '../utils/shellProvider'
import { useTheme } from '../utils/themeProvider'

interface IndexPageProps {
  inputRef: React.MutableRefObject<HTMLInputElement>
}

function IndexPage({ inputRef }) {
  const { history } = useShell()
  const { theme } = useTheme()

  const containerRef = React.useRef(null)
  
  React.useEffect(() => {

    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [history])

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE || 'MJ Terminal'}</title>
        <meta property="og:title" content={process.env.NEXT_PUBLIC_TITLE || 'MJ Terminal'} key="title" />
      </Head>
      <Head>
        <meta property="og:title" content={process.env.NEXT_PUBLIC_TITLE || 'MJ Terminal'} key="title" />
      </Head>

      <div
        className="overflow-hidden h-full rounded"
        style={{
          borderColor: theme.blue,
          padding: 16,
          borderWidth: 2
        }}
      >
        <div ref={containerRef} className="overflow-y-auto h-full">
          <History history={history} />

          <Input inputRef={inputRef} containerRef={containerRef} />
        </div>
      </div>
    </>
  )
}

export default IndexPage
