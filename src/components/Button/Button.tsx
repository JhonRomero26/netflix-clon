import React, { ButtonHTMLAttributes } from 'react'

import { tuple } from '../../../_utils/types'
import classNames from 'classnames'

const ButtonKinds = tuple('primary', 'secondary', 'tertiary', 'ghost')
export type ButtonKind = typeof ButtonKinds[number]

const ButtonVariants = tuple('red', 'white', 'gray')
export type ButtonVariant = typeof ButtonVariants[number]

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  kind: ButtonKind
  variant: ButtonVariant
}


export function Button({
  kind='primary',
  variant='red',
  className,
  children,
  ...props
}: ButtonProps) {

  const classes = classNames(
    'btn',
    `btn-${kind}`,
    `btn-${variant}Button`
  )

  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  )
}