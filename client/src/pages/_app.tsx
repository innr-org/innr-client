import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Lexend} from "next/font/google";

const lexend = Lexend({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <style jsx global>{`
          html {
            font-family: ${lexend.style.fontFamily};
          }
        `}</style>
      <Component {...pageProps} />
    </>
  )

}
