import React from 'react'
import { Icon } from './styles'

export const Fullscreen = ({ onClick, appearance, theme }: any) => {
  return (
    <Icon
      onClick={onClick}
      whileHover={{ scale: 1.1, transition: { type: 'tween', duration: 0.2 } }}
      whileTap={{ scale: 0.9, transition: { type: 'tween', duration: 0.2 } }}
      appearance={appearance}
      theme={theme}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 527.2 526.2">
        <path
          fill="#5d3d91"
          d="M104 133.5V254h34.4V150.7h103.4v-34.5H121.2c-9.5 0-17.2 7.7-17.2 17.3zM407.6 115H287v34.4h103.3v103.4h34.5V132.2c0-9.5-7.7-17.2-17.2-17.2zM390.3 385.3H287v34.5h120.6c9.5 0 17.2-7.7 17.2-17.2V282h-34.5v103.3zM139.4 283.5H105V404c0 9.5 7.7 17.2 17.2 17.2h120.6v-34.4H139.4V283.5z"
        />
      </svg>
    </Icon>
  )
}
