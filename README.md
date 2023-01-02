### bs-icon

#### Installation:

```bash

yarn add bs-icon

# Or

npm install bs-icon
```

#### Usage
Import the css file in your app (it uses bootstrap icons `v1.10.3`)

```js
import 'bs-icon/icons.css'

```

Use them anywhere:

```js
import Icon from 'vs-icon'

export default function App(){
  return (
    <div>
      <Icon name='alarm-fill'/>
    </div>
  )
}
```

The `name` property accepts the name of the icon.