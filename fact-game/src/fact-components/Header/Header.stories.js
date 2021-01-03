import React from 'react'
import Header from './Header'

// This default export determines where your story goes in the story list
export default {
    title: 'Header',
    component: Header,
}

const Template = (args) => <Header {...args} />

export const HeaderStory = Template.bind({})
HeaderStory.args = {}
