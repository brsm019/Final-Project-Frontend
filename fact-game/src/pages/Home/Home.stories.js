import React from 'react'
import Home from './Home'

export default {
    title: 'Home',
    component: Home,
}

const Template = (args) => <Home {...args} />

export const FirstStory = Template.bind({})
FirstStory.args = {}
