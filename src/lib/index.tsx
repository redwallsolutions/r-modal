import { ICommonProps } from '@redwallsolutions/common-interfaces-ts'
import { useAnimation, useDragControls } from 'framer-motion'
import React, { ReactNode, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useMedia, useWindowSize } from 'react-use'
import { ThemeContext } from 'styled-components'
import {
  dialogVariant,
  mDialogVariant,
  motionProps,
  overlayVariant,
} from './animations'
import { CrossComponent as Close } from './cross'
import { Fullscreen } from './fullscreen'
import { Line } from './styles'
import {
  Container,
  Controllers,
  Dialog,
  DialogContent,
  Overlay,
  Title,
  SubTitle,
  Header,
} from './styles'

const defaultTheme = {
  mode: 'light',
}

let portalContainer: Element | null
function usePortalContainer(): void {
  const [, rerender] = useState(0)
  useEffect(() => {
    portalContainer = document.querySelector('body #r-modal')
    if (!portalContainer) {
      portalContainer = document.createElement('div')
      portalContainer.id = 'r-modal'
      document.body.appendChild(portalContainer)
    }
    rerender(1)
  }, [])
}

interface Props extends ICommonProps {
  children?: any
  fullscreen?: boolean
  title?: string | ReactNode
  subTitle?: string | ReactNode
  onClose(): void
  height?: number
  width?: number
}

export default function ({
  children,
  onClose,
  appearance = 'default',
  theme,
  fullscreen = false,
  title = null,
  subTitle = null,
  height = 500,
  width = 649,
}: Props) {
  usePortalContainer()
  const dialogControls = useAnimation()
  const [innerFullscreen, setInnerFullscreen] = useState(fullscreen)
  const toggleFullscreen = () => {
    setInnerFullscreen(!innerFullscreen)
  }
  const themeToApply = theme || React.useContext(ThemeContext) || defaultTheme
  const isWide = useMedia('(min-width: 649px)')
  const { height: windowHeight, width: windowWidth } = useWindowSize()
  const y = windowHeight - height
  const contentHeight =
    (innerFullscreen ? windowHeight : height) - (isWide ? 95 : 125)
  const dragControls = useDragControls()
  const startDrag = (event: any) => {
    dragControls.start(event, { snapToCursor: false })
  }

  const isClosingRef = useRef<boolean>(false)
  const close = () => {
    if (!isClosingRef.current) {
      isClosingRef.current = true
      onClose()
    }
  }

  const dragStartPointer = useRef<number | null>(null)
  const mobileDragStart = (e: PointerEvent) => {
    dragStartPointer.current = e.y
  }
  const mobileDragEnd = ({ y }: PointerEvent) => {
    if (y < dragStartPointer.current! && !innerFullscreen) {
      setInnerFullscreen(true)
    } else if (!innerFullscreen) {
      close()
    } else {
      setInnerFullscreen(false)
    }
  }

  useEffect(() => {
    if (innerFullscreen) {
      setTimeout(() => {
        dialogControls.start('full')
      }, 50)
    } else if (!isWide) {
      setTimeout(() => {
        dialogControls.start('show')
      }, 50)
    }
  }, [innerFullscreen])
  const titleToApply =
    title && typeof title === 'string' ? (
      <Title theme={themeToApply} appearance={appearance}>
        {title}
      </Title>
    ) : (
      title
    )
  const subTitleToApply =
    subTitle && typeof subTitle === 'string' ? (
      <SubTitle theme={themeToApply} appearance={appearance}>
        {subTitle}
      </SubTitle>
    ) : (
      subTitle
    )
  const customMotionValues = useMemo(
    () => ({
      y,
      totalHeight: windowHeight,
      totalWidth: windowWidth,
      currentHeight: height,
      currentWidth: width,
    }),
    [windowHeight, windowWidth, height, width],
  )
  const render = portalContainer
    ? createPortal(
        <Container {...motionProps}>
          <Overlay
            variants={overlayVariant}
            onClick={close}
            data-testid="overlay"
          />
          <Dialog
            isWide={isWide}
            appearance={appearance}
            theme={themeToApply}
            custom={customMotionValues}
            animate={dialogControls}
            variants={isWide ? dialogVariant : mDialogVariant}
            drag="y"
            dragControls={dragControls}
            dragListener={false}
            onDragStart={mobileDragStart}
            onDragEnd={mobileDragEnd}
            borderRadius={!isWide ? '25px 25px 0 0' : '25px'}
            height={isWide && !innerFullscreen ? height : windowHeight}
            width={isWide && !innerFullscreen ? width : windowWidth}
          >
            <Header isWide={isWide}>
              {isWide ? (
                <Controllers>
                  <Fullscreen
                    appearance={appearance}
                    theme={theme}
                    onClick={toggleFullscreen}
                  />
                  <Close
                    appearance={appearance}
                    theme={theme}
                    onClick={close}
                  />
                </Controllers>
              ) : (
                <Line onPointerDown={startDrag}>
                  <hr />
                </Line>
              )}
              {titleToApply}
              {subTitleToApply}
            </Header>
            <DialogContent height={contentHeight}>{children}</DialogContent>
          </Dialog>
        </Container>,
        portalContainer!,
      )
    : null
  return render
}
