# @authord/runtime-node

Node.js runtime adapter for `@authord/render-core`.

```ts
import { setRenderRuntime } from "@authord/render-core";
import { createNodeRuntime } from "@authord/runtime-node";

setRenderRuntime(createNodeRuntime());
```
