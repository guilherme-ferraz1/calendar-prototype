import React from 'react';
import {
  TimelineList,
  CalendarProvider,
  TimelinePackedEventProps,
} from 'react-native-calendars';
import { Colors, Image, Text, View } from 'react-native-ui-lib';
import { EventsI } from '../mocks/events';
import { DateTime } from 'luxon';
import { checkDurationAndFormat } from '../utils/timeline';
  
const renderItem = (event: TimelinePackedEventProps) => {
	const timeInfo = checkDurationAndFormat(event)
	return (
		<View center padding-12 height={40} width="100%" row style={{ justifyContent: 'space-between' }}>
			<View>
				<Text h3 color="white">{event.title}</Text>
				{timeInfo && <Text h3 color="gray">{timeInfo}</Text>}
			</View>
			<Image width={36} height={36} borderRadius={18} source={{ uri: event.summary }} />
		</View>
	)
} 

interface TimelineProps {
	selectedDate: DateTime
	events: EventsI
}

export const Timeline = ({ selectedDate, events }: TimelineProps) => {
	const timelineProps = {
		format24h: false,
    overlapEventsSpacing: 8,
    rightEdgeSpacing: 24,
    styles: { 
			calendarBackground: Colors.blueGray900, 
			line: { backgroundColor: Colors.blueGray800 },
			verticalLine: { display: 'none' },
			nowIndicatorLine: { backgroundColor: 'white' },
			nowIndicatorKnob: { backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' },
    },
    renderEvent: renderItem,
	}
  
	return (
		<CalendarProvider
			date={selectedDate.toString()}
			disabledOpacity={0.6}
		>
			<TimelineList
				events={events}
				timelineProps={timelineProps}
				showNowIndicator={true}
				scrollToNow
			/>
		</CalendarProvider>
	);
}