import { useRef, useState } from 'react'
import Burger from 'assets/icons/burger.svg?react'

import BurgerMenu from 'components/burgerMenu'

import './header.scss'

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false)

  const burgerButtonRef = useRef<HTMLButtonElement>(null)

  const toggleBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen)
  }

  return (
    <header className='header'>
      <button
        ref={burgerButtonRef}
        type='button'
        aria-label='Burger menu button'
        className='header__burger-btn'
        onClick={toggleBurgerMenu}>
        <Burger />
      </button>

      <BurgerMenu
        burgerButtonRef={burgerButtonRef}
        isOpen={isBurgerOpen}
        setClose={toggleBurgerMenu}
      />
    </header>
  )
}

export default Header
