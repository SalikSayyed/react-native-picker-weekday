# WeekDay Picker
[checkOutNpmPackageHere](https://www.npmjs.com/package/react-native-picker-weekday)

## Simple Customizable Weekday Picker for react native and Expo.

- _Steps to use_
  - npm i react-native-picker-weekday

```js
import * as React from 'react'
import { DayPicker } from 'react-native-picker-weekday'
const SampleApp = () => {
  const [weekdays, setWeekdays] = React.useState([-1])
  return (
    <DayPicker
      weekdays={weekdays}
      setWeekdays={setWeekdays}
      activeColor='violet'
      textColor='white'
      inactiveColor='grey'
    />

    /*
    optional parameters include
    dayTextStyle - All styles applicable to text component
    itemStyles - All Styles applicable to View component
    wrapperStyles - All Styles applicable to View component

    This gives high flexibility over Visiblity and Styling of this component.

    */
  )
}
```

- Uses a number[] type React State.
- Simple created by setting initial state to [-1] _dont pick 1-7_
- Pass the state and StateSetter to see the selected components.
- State list intially will have [-1] then state change will contain numbers 1-7 (sunday-saturday) as per selection.

![package](https://user-images.githubusercontent.com/51844798/131120040-f4dde12b-5714-450f-ba41-38f052e5167a.PNG)
