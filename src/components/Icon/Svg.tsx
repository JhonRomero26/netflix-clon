import React from 'react'

interface SvgProps {
  viewBox: string
  svg: React.ReactNode
}

export class Svg implements SvgProps {
  public viewBox: string
  public svg: React.ReactNode

  constructor(viewBox: string, svg: React.ReactNode) {
    this.viewBox = viewBox
    this.svg = <>{svg}</>
  }

}
