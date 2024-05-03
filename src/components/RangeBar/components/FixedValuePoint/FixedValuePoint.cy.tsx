import React from 'react'
import FixedValuePoint from './FixedValuePoint'

describe('<FixedValuePoint />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<FixedValuePoint />)
  })
})