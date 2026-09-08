declare module 'react-pageflip' {
  import type { ForwardRefExoticComponent, RefAttributes, ReactNode, CSSProperties } from 'react'

  type HTMLFlipBookProps = {
    className?: string
    style?: CSSProperties
    children?: ReactNode
    width: number
    height: number
    size?: 'fixed' | 'stretch'
    minWidth?: number
    maxWidth?: number
    minHeight?: number
    maxHeight?: number
    startPage?: number
    drawShadow?: boolean
    flippingTime?: number
    usePortrait?: boolean
    startZIndex?: number
    autoSize?: boolean
    maxShadowOpacity?: number
    showCover?: boolean
    mobileScrollSupport?: boolean
    clickEventForward?: boolean
    useMouseEvents?: boolean
    swipeDistance?: number
    showPageCorners?: boolean
    disableFlipByClick?: boolean
    renderOnlyPageLengthChange?: boolean
    onFlip?: (event: { data: number }) => void
    onInit?: (event: { data: { page: number; mode: string } }) => void
    onUpdate?: (event: { data: { page: number; mode: string } }) => void
    onChangeState?: (event: { data: string }) => void
    onChangeOrientation?: (event: { data: string }) => void
  }

  const HTMLFlipBook: ForwardRefExoticComponent<
    HTMLFlipBookProps &
      RefAttributes<{
        pageFlip: () => {
          flip: (page: number, corner?: 'top' | 'bottom') => void
          flipNext: (corner?: 'top' | 'bottom') => void
          flipPrev: (corner?: 'top' | 'bottom') => void
          getCurrentPageIndex: () => number
        }
      }>
  >

  export default HTMLFlipBook
}
