import React from 'react'
import RangeSlider from './index'

describe('<RangeSlider />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<RangeSlider />)
  })
})