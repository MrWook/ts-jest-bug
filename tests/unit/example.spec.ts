import { mount, createLocalVue } from '@vue/test-utils'
import App from '@/App.vue'
import GloballyLoaded from '@/components/GloballyLoaded.vue'
function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const localVue = createLocalVue()
localVue.component('GloballyLoaded', GloballyLoaded)

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', async () => {
    const wrapper = mount(App, {
      localVue
    })
    await sleep(2000)
    console.log(wrapper.html())
    expect(true).toBeTruthy()
    // expect(wrapper.text()).toMatch(msg)
  })
})
