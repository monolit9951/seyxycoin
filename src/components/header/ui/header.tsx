import { useEffect, useRef, useState } from 'react'
import Burger from 'assets/icons/burger.svg?react'

import BurgerMenu from 'components/burgerMenu'
import CopyButton from 'components/copyButton'
import { SocialsList } from 'components/socialsList'

import './header.scss'

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

  const burgerButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [windowWidth])

  const toggleBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen)
  }

  return (
    <header className='header'>
      {windowWidth < 768 ? (
        <>
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
        </>
      ) : (
        <>
          <nav className='header__navigation'>
            <ul>
              <li>
                <a href='#comics'>Comix</a>
              </li>
              <li>
                <a href='#tokenomics'>Tokenomics</a>
              </li>
              <li>
                <a href='#roadmap'>Roadmap</a>
              </li>
            </ul>

            <SocialsList />
          </nav>

          <CopyButton />
        </>
      )}
    </header>
  )
}

export default Header
