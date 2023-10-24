import { TimelinePackedEventProps } from "react-native-calendars"

export const checkDurationAndFormat = (eventObj: TimelinePackedEventProps) => {
	const startDate = new Date(eventObj.start)
	const endDate = new Date(eventObj.end)

	const durationInMilliseconds = +endDate - +startDate

	if (durationInMilliseconds < 3600000) { 
		return false
	}

	const startTime = `${startDate.getHours().toString().padStart(2, '0')}:${startDate.getMinutes().toString().padStart(2, '0')}`
	const endTime = `${endDate.getHours().toString().padStart(2, '0')}:${endDate.getMinutes().toString().padStart(2, '0')}`

	return `${startTime} - ${endTime}`
}