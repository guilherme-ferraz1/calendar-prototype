import { useMemo, useState } from 'react';
import { DateTime } from 'luxon';
import { USERS_MOCK, UserI } from '../mocks/users';
import { EVENTS_MOCK, EventsI } from '../mocks/events';

interface UseCalendarI {
  selectedDate: DateTime
  setSelectedDate: (date: DateTime) => void,
  currentYear: string,
  currentDay: string,
  currentDate: DateTime,
  selectedUser: UserI,
  setSelectedUser: (user: UserI) => void,
  todayEventsForUser: EventsI
}

export const useCalendar = () => {
  const currentDate = DateTime.now().setZone('America/Sao_Paulo');

  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [selectedUser, setSelectedUser] = useState(USERS_MOCK[2])
  const currentYear = currentDate.year
  const currentDay = currentDate.toFormat('MMMM d')

  const filterEventKey: string = useMemo(() => selectedDate.toFormat('yyyy-MM-dd'), [selectedDate])

  const todayEventsForUser = useMemo(() => {
    const todayEvents = EVENTS_MOCK.find(eventObj => eventObj[filterEventKey])
    if (todayEvents) {
      return {
        [filterEventKey]: todayEvents[filterEventKey].filter(({ owner }) => owner === selectedUser.name)
      }
    }
    return [] as unknown as EventsI
  }, [selectedDate, selectedUser])

  return {
    selectedDate,
    setSelectedDate,
    currentYear,
    currentDay,
    currentDate,
    selectedUser,
    setSelectedUser,
    todayEventsForUser
  };
};
