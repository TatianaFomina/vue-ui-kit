import Checkbox from '../components/checkbox/checkbox.vue'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    label: { control: { type: 'text' }, defaultValue: 'Check me' }
  }
}

const Template = (args) => ({
  components: { Checkbox },
  setup() {
    return { args }
  },
  data() {
    return {
      checked: false
    }
  },
  template: '<Checkbox v-bind="args" v-model="checked"/>'
})

export const Default = Template.bind({})