import { createThemeWithAppearance } from '@redwallsolutions/theming-component-module'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { ICommonProps } from '@redwallsolutions/common-interfaces-ts'
import Color from 'color'
const theming = createThemeWithAppearance()
const isLight = (props: ICommonProps) =>
  props.theme && props.theme.mode === 'light'
const background = (props: ICommonProps) => {
  return theming(props).contrast
}
const color = (props: ICommonProps) => {
  return theming(props).color
}
export const Container = styled(motion.div)`
  z-index: 666;
  position: fixed;
  top: 0;
  left: 0;
`
export const Overlay = styled(motion.div)`
  background: rgb(0, 0, 0);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`

interface IDialog {
  width?: number | string
  height?: number | string
  borderRadius?: string
}

// export const Dialog = styled(motion.div)<ICommonProps & IDialog>`
//   position: fixed;
//   background: ${props =>
//     isLight(props)
//       ? background(props)
//       : Color(background(props)(props)).lighten(0.2).toString()};
//   color: ${props => (isLight(props) ? '#333' : '#ccc')};
//   z-index: 667;
//   padding: 20px 25px;
//   box-sizing: border-box;
//   overflow: hidden;
//   &.regular {
//     left: ${({ width }) => `calc(50% - (${width} / 2))`};
//     top: ${({ height }) => `calc(50% - (${height} / 2))`};
//     width: ${({ width }) => width};
//     height: ${({ height }) => height};
//     max-width: 700px;
//     max-height: 500px;
//     min-width: 480px;
//     min-height: 480px;
//     border-radius: 19px;
//   }
//   &.fullscreen {
//     left: 0;
//     top: 0;
//     width: 100%;
//     height: 100%;
//   }
// `

export const DialogContent = styled(motion.div)<any>`
  height: ${props => props.height}px;
  overflow-y: auto;
  padding: 0 2px;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0px;
  }
`
export interface IMDialog {
  height: string
}

export const Dialog = styled(motion.div)<ICommonProps & IDialog>`
  left: 0;
  bottom: 0;
  width: ${({ width = '100%' }) => width};
  height: ${({ height }) => height}px;
  background: ${props =>
    isLight(props)
      ? background(props)
      : Color(background(props)(props)).lighten(0.2).toString()};
  color: ${props => (isLight(props) ? '#333' : '#ccc')};
  padding: 20px;
  padding-top: 0px;
  position: fixed;
  box-sizing: border-box;
  z-index: 667;
  touch-action: none;
  border-radius: ${({ borderRadius }) => borderRadius};
`

export const Controllers = styled(motion.div)`
  position: absolute;
  right: 0;
  top: 0;
  padding: 20px;
`

export const Icon = styled(motion.span)<ICommonProps>`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 100px;
  display: inline-block;
  box-shadow: 0 4px 15px -2px rgba(0, 0, 0, 0.15);
  margin: 0 5px;
  padding: 3px;
  box-sizing: border-box;
  background: ${props =>
    Color(background(props)(props)).lighten(0.8).toString()};
  svg {
    g,
    path {
      color: ${props => Color(color(props)(props)).lighten(0.1).toString()};
      fill: ${props => Color(color(props)(props)).lighten(0.1).toString()};
    }
  }
`

export interface ILineContainer {
  height: string
}

export const Line = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  hr {
    position: absolute;
    top: 10px;
    left: calc(50% - 30px / 2);
    width: 40px;
    height: 0px;
    background: gray;
    border: 4px solid gray;
    border-radius: 100px;
  }
`

export const Title = styled.h1<ICommonProps>`
  color: ${props => (isLight(props) ? '#222' : '#ddd')};
  margin: 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;
  font-size: 22px;
  padding: 3px 0;
`
export const SubTitle = styled.h2<ICommonProps>`
  color: ${props => (isLight(props) ? '#3f3f3f' : '#c7c7c7')};
  margin: 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: normal;
  letter-spacing: -0.6px;
  font-size: 16px;
  padding: 3px 0;
`
