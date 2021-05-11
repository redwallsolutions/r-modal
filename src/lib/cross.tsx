import React from 'react'
import { Icon } from './styles'

export const CrossComponent = ({ onClick }: any) => {
  return (
    <Icon
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <ellipse fill="#fff" ry="255.8" rx="256" cy="256" cx="256" />
        <g fill="#5d3d91">
          <path d="M397 348l-45 45-231-232 45-45z" />
          <path d="M397 161L166 393l-45-46 231-231z" />
        </g>
      </svg>
    </Icon>
  )
}
