import React from 'react'
import { Line, LineContainer } from './styles'
export const LineComponent = ({
  drag,
  onDragStart,
  onDragEnd,
  height,
  className,
  variants = {},
  dragConstraints,
  custom,
  appearance,
  theme,
}: any) => {
  return (
    <LineContainer
      appearance={appearance}
      theme={theme}
      custom={custom}
      dragConstraints={dragConstraints}
      className={className}
      layoutId="mline"
      dragElastic={0.3}
      drag={drag}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      height={height}
      variants={variants}
    >
      <Line className="drag-line" />
    </LineContainer>
  )
}
