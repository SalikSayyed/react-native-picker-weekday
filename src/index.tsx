import React from 'react'
import { StyleSheet, Text,NativeModules, View, TouchableOpacity } from 'react-native'

interface Props {
  weekdays: number[]
  setWeekdays: React.Dispatch<React.SetStateAction<number[]>>
  activeColor?:string
  textColor?:string
  inactiveColor?:string
  wrapperStyles?: any
  dayTextStyle?:any
  itemStyles?:any
}
export const DayPicker :React.FC<Props> = ({ weekdays, setWeekdays,dayTextStyle,textColor,activeColor,inactiveColor,wrapperStyles,itemStyles }: Props) =>{
  function daysIO(v: number) {
    if (weekdays.includes(v)) {
      const weekdayRemoved = weekdays.filter((element) => element !== v)
      setWeekdays(weekdayRemoved)
    } else {
      setWeekdays([...weekdays, v])
    }
  }

  const acColor = activeColor?activeColor:'red'
  const icColor = inactiveColor?inactiveColor:'grey'
  const tColor = textColor?textColor:'white'
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  return (
    <View style={[styles.boxContainer,wrapperStyles]}>
      {days.map((value, index) => (
        <TouchableOpacity key={value} onPress={() => daysIO(index + 1)}>
          <View
            style={[
              styles.box,itemStyles,
              { backgroundColor: weekdays.includes(index + 1) ? acColor : icColor },
            ]}
          >
            <Text style={[{ color: tColor },dayTextStyle]}>{value}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
  },
})


export default NativeModules.pickweekdayModule
