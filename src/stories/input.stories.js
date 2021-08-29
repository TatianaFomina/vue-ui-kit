import Input from '../components/input/input.vue'

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    type: { control: { type: 'select' }, options: ['text', 'number', 'password', 'date'], defaultValue: 'text' },
    label: { control: 'text', defaultValue: 'Name' },
    disabled: { control: 'boolean', defaultValue: false },
    placeholder: { control: 'text' },
    error: { control: 'text' }
  }

}

const Template = (args) => ({
  components: { Input },
  setup() {
    return { args }
  },
  data() {
    return {
      value: null
    }
  },
  template: '<div style="max-width: 320px"><Input v-bind="args" v-model="value"/> </div>'
})

export const Default = Template.bind({})

export const Error = Template.bind({})
Error.args = {
  error: 'Invalid value'
}

export const Password = Template.bind({})
Password.args = {
  type: 'password',
  label: 'Password'
}

export const Date = Template.bind({})
Date.args = {
  type: 'date',
  label: 'Date'
}
