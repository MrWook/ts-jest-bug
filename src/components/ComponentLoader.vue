<script>
// import HelloWorldExtend from '@/components/HelloWorldExtend'
export default {
  name: 'ComponentLoader',
  methods: {
    loadProductComponent() {
      return import(/* webpackChunkName: "ProductComponent-[request]" */ `@/components/HelloWorldExtend`)
    }
  },
  render(createElement) {
    // return createElement(HelloWorldExtend, {
    return createElement(this.loadProductComponent, {
      attrs: {
        ...this.$attrs,
      },
    })
  }
}
</script>
