# ts-jest-bug
This is only a test related bug.
If a component is loaded async and has a globally registered component in it, it will fail if the loaded component is written in typescript.
This repo is a reproduction repository to show this behavior.

To see the error for yourself you can setup the project and execute `npm run test:unit`.
In the test you can see this warning:
`[Vue warn]: Unknown custom element: <GloballyLoaded> - did you register the component correctly? For recursive components, make sure to provide the "name" option.`
To prove that this only occurred for typescript you can change the async loaded component inside [the componentLoader](./src/components/ComponentLoader.vue) to `@/components/HelloWorldTs.vue`


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
