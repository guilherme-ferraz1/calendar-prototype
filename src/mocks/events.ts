import { TimelineProps } from "react-native-calendars";

type EventFromTimeline = TimelineProps['events'][number];

interface EventWithOwner extends EventFromTimeline {
  owner: string;
}

export interface EventsI {
  [date: string]: EventWithOwner[];
}

export const EVENTS_MOCK: EventsI[] = [
  {
    "2023-10-23": [
      {
        owner: "Alice",
        summary: "https://randomuser.me/api/portraits/women/44.jpg",
        title: "Roger Rod",
        start: "2023-10-23T09:00:00Z",
        end: "2023-10-23T10:00:00Z"
      },
      {
        owner: "Bob",
        summary: "https://randomuser.me/api/portraits/men/22.jpg",
        title: "Ali Zambon",
        start: "2023-10-23T12:00:00Z",
        end: "2023-10-23T12:30:00Z"
      },
    ]
  },
  {
    "2023-10-24": [
        {
          owner: "Charlie",
          summary: "https://randomuser.me/api/portraits/men/33.jpg",
          title: "Discussion with David",
          start: "2023-10-24T09:00:00Z",
          end: "2023-10-24T10:00:00Z"
        },
        {
          owner: "David",
          summary: "https://randomuser.me/api/portraits/men/11.jpg",
          title: "Lunch with Charlie",
          start: "2023-10-24T12:00:00Z",
          end: "2023-10-24T12:30:00Z"
        },
        {
          owner: "Alice",
          summary: "https://randomuser.me/api/portraits/women/44.jpg",
          title: "Roger Rodolfo",
          start: "2023-10-24T14:00:00Z",
          end: "2023-10-24T15:00:00Z"
        },
        {
          owner: "Bob",
          summary: "https://randomuser.me/api/portraits/men/22.jpg",
          title: "Betina Meck",
          start: "2023-10-24T17:00:00Z",
          end: "2023-10-24T18:30:00Z"
        },
      ]
  },
  {
    "2023-10-25": [
      {
        owner: "Charlie",
        summary: "https://randomuser.me/api/portraits/men/33.jpg",
        title: "Discussion with Bob",
        start: "2023-10-25T09:00:00Z",
        end: "2023-10-25T10:00:00Z"
      },
      {
        owner: "David",
        summary: "https://randomuser.me/api/portraits/men/11.jpg",
        title: "Lunch with David",
        start: "2023-10-25T12:00:00Z",
        end: "2023-10-25T12:30:00Z"
      },
      {
        owner: "Alice",
        summary: "https://randomuser.me/api/portraits/women/44.jpg",
        title: "Roger Guedes",
        start: "2023-10-25T14:00:00Z",
        end: "2023-10-25T15:00:00Z"
      },
      {
        owner: "Bob",
        summary: "https://randomuser.me/api/portraits/men/22.jpg",
        title: "Betina Becker",
        start: "2023-10-25T17:00:00Z",
        end: "2023-10-25T18:30:00Z"
      },
    ]
  },
  {
    "2023-10-26": [
        {
          owner: "Charlie",
          summary: "https://randomuser.me/api/portraits/men/33.jpg",
          title: "Discussion with David",
          start: "2023-10-26T09:00:00Z",
          end: "2023-10-26T10:00:00Z"
        },
        {
          owner: "David",
          summary: "https://randomuser.me/api/portraits/men/11.jpg",
          title: "Lunch with Charlie",
          start: "2023-10-26T12:00:00Z",
          end: "2023-10-26T12:30:00Z"
        },
    ]
  },
  {
    "2023-10-27": [
      {
        owner: "Charlie",
        summary: "https://randomuser.me/api/portraits/men/33.jpg",
        title: "Discussion with David",
        start: "2023-10-27T09:00:00Z",
        end: "2023-10-27T10:00:00Z"
      },
      {
        owner: "David",
        summary: "https://randomuser.me/api/portraits/men/11.jpg",
        title: "Lunch with Bob",
        start: "2023-10-27T12:00:00Z",
        end: "2023-10-27T12:30:00Z"
      },
    ]
  },
];
