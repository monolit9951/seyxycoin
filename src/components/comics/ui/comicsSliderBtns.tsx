import { ButtonHTMLAttributes } from 'react'
import ArrowLeft from 'assets/icons/arrow-left.svg?react'
import ArrowRight from 'assets/icons/arrow-right.svg?react'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export const PrevButton = ({ onClick, className }: Props) => {
  return (
    <button
      type='button'
      aria-label='slider-button'
      className={`slider-button ${className}`}
      onClick={onClick}>
      <ArrowLeft />
    </button>
  )
}

export const NextButton = ({ onClick, className }: Props) => {
  return (
    <button
      type='button'
      aria-label='slider-button'
      className={`slider-button ${className}`}
      onClick={onClick}>
      <ArrowRight />
    </button>
  )
}
