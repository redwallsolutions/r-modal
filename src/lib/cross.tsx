import React from 'react'
import { Icon } from './styles'

export const CrossComponent = ({ onClick, appearance, theme }: any) => {
  return (
    <Icon
      onClick={onClick}
      whileHover={{ scale: 1.1, transition: { type: 'tween', duration: 0.2 } }}
      whileTap={{
        scale: 0.9,
        rotate: 90,
        transition: { type: 'tween', duration: 0.2 },
      }}
      appearance={appearance}
      theme={theme}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <g fill="#5d3d91">
          <path d="M397 348l-45 45-231-232 45-45z" />
          <path d="M397 161L166 393l-45-46 231-231z" />
        </g>
      </svg>
    </Icon>
  )
}
