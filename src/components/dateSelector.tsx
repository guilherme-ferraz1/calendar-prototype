import React, { useState } from 'react';
import { View, Text, Colors } from 'react-native-ui-lib';
import { DateTime } from 'luxon';
import { Pressable } from 'react-native';

interface DayProps {
	date: DateTime
	handleChangeDate: (date: DateTime) => void
	selected: boolean
}

const Day = ({ date, selected, handleChangeDate }: DayProps) => {
  const dayLabel = date.toFormat('EEE').substring(0, 2);
  const dayNumber = date.day;
  const isToday = date.hasSame(DateTime.local(), 'day');

  const bgColor = selected ? 'white' : (isToday ? Colors.blueGray700 : null);
	
  return (
    <View padding center>
      <Text color='white'>{dayLabel}</Text>
			<Pressable onPress={() => handleChangeDate(date)}>
				<View marginT-8 center width={46} height={46} br20 backgroundColor={bgColor}>
					<Text h4 color={selected ? Colors.blueGray700 : 'white'}>{dayNumber}</Text>
				</View>
			</Pressable>
    </View>
  );
};

interface DateSelectorProps {
	today: DateTime
	handleChangeDate: (date: DateTime) => void
	selectedDate: DateTime
}

export const DateSelector = ({ today, handleChangeDate, selectedDate }: DateSelectorProps): JSX.Element => {
  const startOfWeek = today.startOf('week')

  return (
    <View row center marginB-16>
      {[...Array(7)].map((_, i) => {
        const date = startOfWeek.plus({ days: i })
        const isSelected = date.hasSame(selectedDate, 'day')
        return <Day handleChangeDate={handleChangeDate} key={i} date={date} selected={isSelected} />
      })}
    </View>
  );
};
