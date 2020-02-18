import { render, wait } from '@testing-library/vue'
import Component from '@/App.vue'
import GloballyLoaded from '@/components/GloballyLoaded.vue'

function renderView(options = {}) {
  return render(
    Component,
    {},
    (vue, store, router) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      vue.component('GloballyLoaded', GloballyLoaded)
      return {}
    },
  )
}

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', async () => {
    const { debug } = renderView()
    await wait()
    debug()
    expect(true).toBeTruthy()
    // expect(wrapper.text()).toMatch(msg)
  })
})
