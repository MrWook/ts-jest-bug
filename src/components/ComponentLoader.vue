<script>
export default {
  name: 'ComponentLoader',
  methods: {
    loadProductComponent() {
      return import(/* webpackChunkName: "ProductComponent-[request]" */ `@/components/HelloWorldTs.vue`)
    }
  },
  render(createElement) {
    return createElement(this.loadProductComponent, {
      attrs: {
        ...this.$attrs,
      },
    })
  }
}
</script>
