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

  function DraggableComponent() {
    const draggableRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

    const handleTouchStart = (event) => {
      const touch = event.touches[0];
      const { left, top } = draggableRef.current.getBoundingClientRect();
      setIsDragging(true);
      setDragOffset({
        x: touch.clientX - left,
        y: touch.clientY - top,
      });
    };

    const handleTouchMove = (event) => {
      if (isDragging) {
        const touch = event.touches[0];
        setPosition({
          x: touch.clientX - dragOffset.x,
          y: touch.clientY - dragOffset.y,
        });
      }
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };
  }
  return(
    <>
        <Provider store={store}>
            {!isHiddenRoute && <DraggableMenuItem
              ref={draggableRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
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

