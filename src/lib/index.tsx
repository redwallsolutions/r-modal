import { ICommonProps } from '@redwallsolutions/common-interfaces-ts'
import { AnimateSharedLayout, motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useMedia } from 'react-use'
import { ThemeContext } from 'styled-components'
import {
  containerVariant,
  dialogVariant,
  mDialogLineVariant,
  mDialogVariant,
  motionProps,
  overlayVariant,
} from './animations'
import { CrossComponent as Close } from './cross'
import { Fullscreen } from './fullscreen'
import { LineComponent as Line } from './line'
import {
  Container,
  Controllers,
  Dialog,
  DialogContent,
  MDialog,
  Overlay,
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
  onClose(): void
}

export default function ({
  children,
  onClose,
  appearance = 'default',
  theme,
  fullscreen = false,
}: Props) {
  usePortalContainer()
  const [innerFullscreen, setInnerFullscreen] = useState(fullscreen)
  const themeToApply = theme || React.useContext(ThemeContext) || defaultTheme
  const isWide = useMedia('(min-width: 649px)')
  const toggleFullScreen = () => {
    setInnerFullscreen(state => !state)
  }
  const dragStartPointer = useRef<number | null>(null)
  const mobileDragStart = (e: PointerEvent) => {
    dragStartPointer.current = e.y
  }
  const mobileDragEnd = ({ y }: PointerEvent) => {
    if (y < dragStartPointer.current!) {
      setInnerFullscreen(true)
    } else {
      if (!innerFullscreen) {
        onClose()
      } else {
        setInnerFullscreen(false)
      }
    }
  }
  const ResponsiveDialog = ({ children }: any) => {
    return isWide ? (
      <Dialog
        layoutId="dialog"
        className={innerFullscreen ? 'fullscreen' : 'regular'}
        width="650px"
        height="480px"
        variants={
          innerFullscreen ? { hide: dialogVariant.hide } : dialogVariant
        }
        appearance={appearance}
        theme={themeToApply}
      >
        <DialogContent>{children}</DialogContent>
      </Dialog>
    ) : (
      <>
        <MDialog
          layout
          layoutId="mdialog"
          className={innerFullscreen ? 'fullscreen' : 'regular'}
          custom={{ initialY: 400, hideY: 400 }}
          variants={innerFullscreen ? {} : mDialogVariant}
          appearance={appearance}
          theme={themeToApply}
          height="400px"
        >
          <DialogContent layout layoutId="mcontent" style={{ marginTop: 0 }}>
            {children}
          </DialogContent>
        </MDialog>
      </>
    )
  }
  const render = portalContainer
    ? createPortal(
        <AnimateSharedLayout>
          <Container {...motionProps} variants={containerVariant}>
            <Overlay variants={overlayVariant} onClick={onClose} />
            <ResponsiveDialog>
              {isWide && (
                <Controllers>
                  <Fullscreen onClick={toggleFullScreen} />
                  <Close onClick={onClose} variants={dialogVariant} />
                </Controllers>
              )}
              {children}
            </ResponsiveDialog>
            {!isWide && (
              <Line
                custom={{ initialY: 400, hideY: 400 }}
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                onDragStart={mobileDragStart}
                onDragEnd={mobileDragEnd}
                height={'400px'}
                appearance={appearance}
                theme={themeToApply}
                className={innerFullscreen ? 'fullscreen' : 'regular'}
                variants={mDialogLineVariant}
              />
            )}
          </Container>
        </AnimateSharedLayout>,
        portalContainer!,
      )
    : null
  return render
}
