import React, { useCallback, useEffect, useRef, useState } from 'react';
import {useRouter} from "next/router";
import { store } from '../store'
import { Provider } from 'react-redux'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Lexend} from "next/font/google";
import Home from "@/pages/index";
import DraggableMenuItem from "@/Components/UI/draggableMenu/DraggableMenu";


const lexend = Lexend({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const hiddenRoutes = ['/register', '/login', '/scanning'];
  const isHiddenRoute = hiddenRoutes.includes(router.pathname);

  return(
    <>
        <Provider store={store}>
            {!isHiddenRoute && <DraggableMenuItem
            />}
            <Home/>
            <style jsx global>{`
                    html {font-family: ${lexend.style.fontFamily};
                      }
                  `}</style>
            <Component {...pageProps} />
        </Provider>
    </>
  )

}

