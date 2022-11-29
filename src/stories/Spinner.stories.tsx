// Button.stories.ts|tsx

import React from 'react'
import { Spinner } from '..'

import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />

export const Default = Template.bind({})
export const Something = Template.bind({})

Default.args = {
  primary: true,
  label: 'Button',
}

