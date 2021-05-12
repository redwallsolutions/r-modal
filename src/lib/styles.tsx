// import { createThemeWithAppearance } from '@redwallsolutions/theming-component-module'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { ICommonProps } from '@redwallsolutions/common-interfaces-ts'
// const theming = createThemeWithAppearance()
const isLight = (props: ICommonProps) =>
  props.theme && props.theme.mode === 'light'

export const Container = styled(motion.div)`
  z-index: 666;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`
export const Overlay = styled(motion.div)`
  background: rgb(0, 0, 0);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

interface IDialog {
  width: number | string
  height: number | string
}

export const Dialog = styled(motion.div)<ICommonProps & IDialog>`
  position: fixed;
  background: ${props => (isLight(props) ? '#f2f2f2' : '#0b0b0b')};
  z-index: 667;
  padding: 40px 20px;
  box-sizing: border-box;
  &.regular {
    left: ${({ width }) => `calc(50% - (${width} / 2))`};
    top: ${({ height }) => `calc(50% - (${height} / 2))`};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    max-width: 700px;
    max-height: 500px;
    min-width: 480px;
    min-height: 480px;
    border-radius: 19px;
  }
  &.fullscreen {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`

export const DialogContent = styled(motion.div)`
  margin-top: 32px;
  height: calc(100% - 20px);
  overflow-x: hidden;
  overflow-y: auto;
`
export interface IMDialog {
  height: string
}

export const MDialog = styled(motion.div)<ICommonProps & IMDialog>`
  left: 0;
  bottom: 0;
  width: 100%;
  background: ${props => (isLight(props) ? '#f2f2f2' : '#0b0b0b')};
  padding: 20px;
  padding-top: 0px;
  position: fixed;
  box-sizing: border-box;
  z-index: 667;
  touch-action: none;
  &.regular {
    height: calc(${({ height }) => height} - 60px);
  }
  &.fullscreen {
    height: calc(100% - 60px);
  }
`

export const Controllers = styled(motion.div)`
  position: absolute;
  right: 0;
  top: 0;
  padding: 20px;
`

export const Icon = styled(motion.span)`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 100px;
  display: inline-block;
  box-shadow: 0 4px 15px -2px rgba(0, 0, 0, 0.15);
  margin: 0 5px;
`

export interface ILineContainer {
  height: string
}

export const LineContainer = styled(motion.div)<ICommonProps & ILineContainer>`
  position: fixed;
  left: 0;
  width: 100%;
  height: calc(${({ height }) => height});
  cursor: grab;
  background: ${props => (isLight(props) ? '#f2f2f2' : '#0b0b0b')};
  border-radius: 19px 19px 0 0;
  &.fullscreen {
    top: 0;
  }
  &.regular {
    bottom: 0;
  }
  z-index: 666;
`

export const Line = styled.hr`
  position: absolute;
  top: 4px;
  left: calc(50% - 30px / 2);
  width: 40px;
  height: 0px;
  background: gray;
  border: 4px solid gray;
  border-radius: 100px;
`
