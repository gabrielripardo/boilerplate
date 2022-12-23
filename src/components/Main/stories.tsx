import Main from '.'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
    title: 'Main',
    component: Main,
    args: {
        title: 'Gabriel R. sena',
        description: 'Front-end é o bastante visual'
    }
} as Meta

export const Basic: Story = (args) => ( <Main {...args} />)


export const Default: Story = (args) => ( <Main {...args} />)
Default.args = {title:"outra coisa"}
