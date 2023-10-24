import { Text, Colors, View } from 'react-native-ui-lib'
import React from 'react'
import { DateSelector } from '../../components/dateSelector'
import { useCalendar } from '../../hooks/useCalendar'
import { UserSelector } from '../../components/userSelector'
import { Timeline } from '../../components/timeline'
import { SafeAreaView } from 'react-native-safe-area-context'

export const CalendarStack = () => {
  const { 
    selectedDate,
    setSelectedDate,
    currentDay,
    currentYear,
    currentDate,
    selectedUser,
    setSelectedUser,
    todayEventsForUser
  } = useCalendar()

  return (
    <SafeAreaView style={{ backgroundColor: Colors.blueGray800, flex: 1 }}>
      <View row paddingH-24 paddingV-24>
        <Text h1Bold color='white'>{currentDay}, </Text>
        <Text h1 color='white'>{currentYear}</Text>
      </View>
      <View flex>
        <DateSelector today={currentDate} selectedDate={selectedDate} handleChangeDate={setSelectedDate} />
        <UserSelector selectedUser={selectedUser} setSelectedUser={setSelectedUser}  />
        <View flex>
          <Timeline events={todayEventsForUser} selectedDate={selectedDate} />
        </View>
      </View>
    </SafeAreaView>
  )
}