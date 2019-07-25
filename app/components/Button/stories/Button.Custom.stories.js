import React from 'react'
import { storiesOf } from '@storybook/react'
import { grommet } from 'grommet' /** @todo: replace with custom wrappers */

import { Box } from '../../Box'
import { Container } from '../../Container'
import { Button } from '..'
import README from '../README.md'

const customTheme = {
  global: {
    font: {
      family: 'Arial',
    },
  },
  button: {
    border: {
      radius: undefined,
      color: '#2196f3',
    },
    padding: {
      vertical: '12px',
      horizontal: '24px',
    },
    primary: {
      color: '#2196f3',
    },
    extend: props => {
      let extraStyles = ''
      if (props.primary) {
        extraStyles = `
            text-transform: uppercase;
          `
      }
      return `
          color: white;
          font-size: 12px;
          font-weight: bold;

          ${extraStyles}
        `
    },
  },
}

const CustomTheme = () => (
  <React.Fragment>
    <Container theme={customTheme}>
      <Box align="center" pad="large">
        <Button title="custom theme" onClick={() => {}} primary />
      </Box>
    </Container>
    <Container theme={grommet}>
      <Box align="center" pad="large">
        <Button as="span" title="Custom as=span" path="/" />
      </Box>
    </Container>
  </React.Fragment>
)

storiesOf('Button', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Custom', () => <CustomTheme />)
