import React from 'react'

import { tuple } from '../../../_utils/types'
import { svgs } from './svgs'

const IconNames = tuple(...Object.keys(svgs))
export type IconName = typeof IconNames[number] 
  

interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: IconName
}

export function Icon({
  icon,
  className = '',
  ...props
}: IconProps) {

  const svgRender = svgs[icon] || svgs['netflix-logo']

  console.log(svgRender)
  return (
    <svg
      viewBox={svgRender.viewBox}
      className={`icon-${icon} ${className}`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {svgRender.svg}
    </svg>
  )
}
