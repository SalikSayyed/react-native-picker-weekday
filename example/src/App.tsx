import React, { useEffect } from 'react'
import pickweekdayModule, { DayPicker } from 'react-native-pickweekday'

const App = () => {

   const [weekdays,setweekdays] = React.useState([-1]);
  useEffect(() => {
    console.log(pickweekdayModule)
  })

  return <DayPicker weekdays={weekdays} setWeekdays={setweekdays} />
}

export default App
