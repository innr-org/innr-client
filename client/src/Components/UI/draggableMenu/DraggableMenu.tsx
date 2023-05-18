import React, {useRef, useEffect, useState} from 'react';
import Image from "next/image"
import cl from './Draggable.module.css'
import {ChildButton, FloatingMenu, MainButton} from "react-floating-button-menu";
import burger from '../../../../public/menu/burgerMenu.svg'

function DraggableMenuItem(props) {

    const [isOpen, setIsOpen] = useState(false)
   return (
       <FloatingMenu className={cl.menu}
           slideSpeed={500}
           direction="up"
           spacing={8}
           isOpen={isOpen}
       >
           <MainButton
               style={{ boxShadow: '0px 0px 15px 10px #AED6F7'}}
               iconResting={<Image width='100%' height='100%' src={burger} alt=""/>}
               iconActive={<div>X</div>}
               backgroundColor="black"
               onClick={() => setIsOpen(prevState => !prevState)}
               size={56}
           />
           <ChildButton
               icon={<div>+</div>}
               backgroundColor="white"
               size={40}
               onClick={() => console.log('First button clicked')}
           />
           <ChildButton
               icon={<div>+</div>}
               backgroundColor="white"
               size={40}
           />
           <ChildButton
               icon={<div>+</div>}
               backgroundColor="white"
               size={40}
           />
       </FloatingMenu>
   )
}

export default DraggableMenuItem;