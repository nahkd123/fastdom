# fastdom
A relatively small package for manipulating DOM a little bit faster. Surely it won't be 1.5GB worth of ``node_modules`` hell.

## Installing and using fastdom
Install fastdom:
```sh
npm i @nahkd123/fastdom
```

Using fastdom with bundler:
```js
const fd = require("@nahkd123/fastdom")

// Target our document body and do something with it...
new fd.Target(document.body).generator(function*() {
    // You can yield HTMLElement...
    yield document.createElement("div")

    // ...or you can yield targeted element!
    yield fd.create("span").with(s => s.textContent = "Hello there!")
})
```

Using fastdom obtained from Skypack CDN:
```html
<head>
    <script src="https://cdn.skypack.dev/@nahkd123/fastdom"></script>
</head>
<body>
    <script>
        new fastdom.Target(document.body).generator(function*() {
            yield fastdom.create("span").with(s => s.textContent = "Hello there!")
        })
    </script>
</body>
```

## Build fastdom
```sh
# One-time build
# (run any of these commands)
npm run build
tsc -b                   # If you have TypeScript installed globally

# Watching changes
npm run build:watch
tsc --watch              # If you have TypeScript installed globally
```