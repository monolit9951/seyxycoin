import { FC, RefObject, useEffect, useRef } from 'react'

import { SocialsList } from 'components/socialsList'

import './burgerMenu.scss'

interface Props {
  burgerButtonRef: RefObject<HTMLButtonElement> | null
  isOpen: boolean
  setClose: () => void
}

const BurgerMenu: FC<Props> = (props) => {
  const { burgerButtonRef, isOpen, setClose } = props

  const burgerDataRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const targetNode = event.target as Node
      if (
        !burgerDataRef.current?.contains(targetNode) &&
        !burgerButtonRef?.current?.contains(targetNode)
      ) {
        document.body.classList.remove('overflow-hidden')
        setClose()
      }
    }

    if (isOpen) {
      document.body.classList.add('overflow-hidden')
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
    } else {
      document.body.classList.remove('overflow-hidden')
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }

    return () => {
      document.removeEventListener('touchstart', handleClickOutside)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [setClose, burgerDataRef, burgerButtonRef, isOpen])

  const onLinkClick = () => {
    setClose()
  }

  return (
    <div className='burger-menu' ref={burgerDataRef}>
      <div className={`burger-menu__content ${isOpen ? 'open' : ''}`}>
        <nav className='burger-menu__navigation'>
          <ul>
            <li>
              <a href='#comics' onClick={onLinkClick}>
                Comics
              </a>
            </li>
            <li>
              <a href='#tokenomics' onClick={onLinkClick}>
                Tokenomics
              </a>
            </li>
            <li>
              <a href='#roadmap' onClick={onLinkClick}>
                Roadmap
              </a>
            </li>
          </ul>
        </nav>

        <div className='burger-text'>
          <p>CA:Dc84SNsfCk7o1uRy6UcUrVKM3dp21HcxbPy9CALNpump</p>
        </div>

        <SocialsList />
      </div>
    </div>
  )
}

export default BurgerMenu
