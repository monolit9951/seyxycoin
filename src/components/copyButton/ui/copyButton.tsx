import { useEffect, useRef } from 'react'

import './copyButton.scss'

const CopyButton = () => {
  const tooltipRef = useRef<HTMLSpanElement>(null)
  const copyBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const buttonElement = copyBtnRef.current

    const handleMouseEnter = () => {
      if (tooltipRef.current) {
        tooltipRef.current.textContent = 'Copy to clipboard'
      }
    }

    const handleMouseLeave = () => {
      if (tooltipRef.current) {
        const visibility = window
          .getComputedStyle(tooltipRef.current)
          .getPropertyValue('visibility')
        if (visibility === 'hidden') {
          tooltipRef.current.textContent = 'Copy to clipboard'
        }
      }
    }

    if (buttonElement) {
      buttonElement.addEventListener('mouseenter', handleMouseEnter)
      buttonElement.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (buttonElement) {
        buttonElement.removeEventListener('mouseenter', handleMouseEnter)
        buttonElement.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])
  const onCopyClick = () => {
    if (tooltipRef.current) {
      tooltipRef.current.textContent = 'Copied!'
    }
    navigator.clipboard.writeText('Dc84SNsfCk7o1uRy6UcUrVKM3dp21HcxbPy9CALNpump')
  }
  return (
    <button type='button' ref={copyBtnRef} className='copy-text' onClick={onCopyClick}>
      <span ref={tooltipRef} className='tooltip'>
        Copy to clipboard
      </span>
      <p>CA:Dc84SNsfCk7o1uRy6UcUrVKM3dp21HcxbPy9CALNpump</p>
    </button>
  )
}

export default CopyButton
