react-native-prompt-simple
===================


A simple prompt for react-native

----------

**installation**

```
npm install --save react-native-prompt-simple
```

**Screen**
![enter image description here](http://res.cloudinary.com/h27hacklab/image/upload/c_scale,r_0,w_299/v1508123685/Simulator_Screen_Shot_-_iPhone_6_-_2017-10-15_at_22.07.34_wjx1sm.png)

____
**USE**

```js

import Prompt from 'react-native-prompt-simple';

        <Prompt
          title="Codigo"
          visible={true}
          placeholder="Texto"
          textCancel="Cancelar"
          textAccept="Aceptar"
          onChange={(v) => {
            console.log(v);
          }}

          onCancel={(v) => {
            console.log(v);
          }}

          onAccept={(v) => {
            console.log(v);
          }}
        />
```
----
**Props**

 - ``Title`` -- Add a title to the prompt by default is **Titulo**
 - ``visible`` -- a Boolean value that shows and hides the prompt
 - ``placeholder`` -- Value that is assigned to the sample text box, by default is **Add data**
 - ``textAccept`` -- Accept text value by default is **Accept**
 - ``textCancel`` -- Cancel text value by default is **Cancel**
 - ``onChange`` -- a function that returns the value that is being entered in the text field
 - ``onAccept`` -- a function that returns the value of the text when we give it to accept
 - ``onCancel`` -- A function that returns us Cancel when we press the button
