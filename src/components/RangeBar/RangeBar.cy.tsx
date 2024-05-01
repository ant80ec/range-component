import React from 'react'
import RangeBar from './RangeBar'

describe('<RangeBar />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<RangeBar />)
  })
})