import React from 'react'
import { Button } from '../../components/Button/Button'
import Icon from '../../components/Icon'

export function WelcomePage() {
  return (
    <main>
      <header>
        <div>
          <span>
            <Icon icon="netflix-logo" />
          </span>
        </div>
        <div>
          <Button kind='primary'>
            Iniciar Sesión
          </Button>
        </div>
      </header>
    </main>
  )
}
