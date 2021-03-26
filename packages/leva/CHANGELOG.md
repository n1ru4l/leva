# leva

## 0.8.2

### Patch Changes

- b4aa43d: Fix: add empty key warning.
- e21f2fe: fix: slider position overflowing with range input.

## 0.8.1

### Patch Changes

- c997410: Plugin: add the Bezier plugin

  ```js
  import { bezier } from '@leva-ui/plugin-bezier'
  useControls({ curve: bezier([0.25, 0.1, 0.25, 1]) })
  ```

## 0.8.0

### Minor Changes

- edc8847: Breaking: change how `leva/plugin` exports components.

  ```jsx
  // before
  import { Row, Label, String } from 'leva/plugin'

  // after
  import { Components } from 'leva/plugin'
  const { Row, Label, String } = Components
  ```

  Feat: add `useValue` / `useValues` hooks that let an input query other inputs values.

  Feat: `normalize` has additional arguments to its signature:

  ```ts
  /**
   * @path the path of the input
   * @data the data available in the store
   */
  const normalize = (input: Input, path: string, data: Data)
  ```

  Feat: `sanitize` has additional arguments to its signature:

  ```ts
  /**
   * @path the path of the input
   * @store the store
   */
  const sanitize = (
    value: any,
    settings: Settings,
    prevValue: any,
    path: string,
    store: StoreType
  )
  ```

  Styles: better feedback when dragging number from inner label.

  Plugin: add the Plot plugin 📈

  ```js
  import { plot } from '@leva-ui/plugin-plot'
  useControls({ y: plot({ expression: 'cos(x)', graph: true, boundsX: [-10, 10], boundsY: [0, 100] }) })
  ```

## 0.7.3

### Patch Changes

- f9f7f1e: - Have `Select` accept functions as value or options. Fixes #165.
  - Temporarily type the `set` function values with `any` when `useControls` is used with the function API. In the future, we should infer th value type from the sanitize function.

## 0.7.2

### Patch Changes

- d2eaf58: fix: properly resolves value-keyed objects for the `Select` input.

## 0.7.1

### Patch Changes

- 98984e1: types: fix `set` types in transient mode.

## 0.7.0

### Minor Changes

- 0b7e968: Add the `invertY` setting for the Vector2D joystick for inverting the y coordinate.

  **BREAKING**: The default behavior has been changed. If you want the same behavior as in previous versions you will have to set the `joystick` option to `'invertY'`.

  ```tsx
  const values = useControl({
    vector2d: {
      value: [0, 0],
      joystick: 'invertY',
    },
  })
  ```

### Patch Changes

- f323cfc: Feat: `onChange` callback for transient updates

  ```js
  useControls({ color: { value: 'red', onChange: v => console.log(v) } })
  ```

## 0.6.3

### Patch Changes

- fa909f0: Allow useControls to update settings and input options when dependency array changes. (See #124)

## 0.6.2

### Patch Changes

- 72bcebe: Reject null Vectors

## 0.6.1

### Patch Changes

- 66dcb79: Add id to root div so that we're sure to always use the same root `div`. This should fix #106.
- c6a69e3: Fix scrollbars flashing when collapsing a folder. Fixes #139.
- 9e32b2c: Prevent errors in node environments by aliasing stitches global identifier to \_global as global indentifier is reserved

## 0.6.0

### Minor Changes

- ce42683: Add `hideCopyButton` property for hiding the copy to clipboard button.
