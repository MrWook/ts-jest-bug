import Vue from 'vue'

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  render(createElement) {
    return createElement('div',  {
        attrs: {
          class: 'hello'
        },
      },
      [
        createElement('GloballyLoaded'),
        createElement('h1',this.msg),
      ]
    )
  }
})
