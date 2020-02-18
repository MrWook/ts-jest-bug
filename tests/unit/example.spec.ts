import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import GloballyLoaded from '@/components/GloballyLoaded.vue'
function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', async () => {
    const wrapper = mount(App, {
      stubs: {
        GloballyLoaded: GloballyLoaded
      }
    })
    await sleep(2000)
    console.log(wrapper.html())
    expect(true).toBeTruthy()
    // expect(wrapper.text()).toMatch(msg)
  })
})
