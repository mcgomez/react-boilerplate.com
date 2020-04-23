import React from 'react'
import { render } from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect' // add some helpful assertions

import { TestWrapper } from 'utils/TestWrapper'
import { Register } from '../index'

const renderComponent = (props = {}) =>
  render(
    <TestWrapper>
      <Register {...props} />{' '}
    </TestWrapper>,
  )

/**
*
* Tests for Register
*
* @see
https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
*
*/
describe('Register', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
