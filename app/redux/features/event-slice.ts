import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Event = {
  id: string;
  rank: number;
  title: string;
  category: string;
  description: string;
  country: string;
  start: string;
  date: string;
  time: string;
  isFavourite: boolean;
};

export const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const ProcessDate = (dateToBeProcessed: string) => {
  const date = new Date(dateToBeProcessed);

  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const monthInText = monthNames[date.getUTCMonth()];
  const year = date.getUTCFullYear();

  const hours = date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

  const formattedDate = [
    `${day}-${monthInText}-${year}`,
    `${day} ${month} ${year}`,
    `${hours}:${minutes}`,
  ];

  return formattedDate;
};

const initialState: {
  totalCount: number;
  events: Event[];
  isLoading: boolean;
} = {
  totalCount: 0,
  events: [],
  isLoading: true,
};

export const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (
      state,
      action: PayloadAction<{ count: number; results: Event[] }>
    ) => {
      state.totalCount = action.payload.count;
      action.payload.results.forEach((singleEvent: Event) => {
        const formatedDateTime = ProcessDate(singleEvent.start);

        const existingEvent = state.events.find(
          (event) => event.id === singleEvent.id
        );

        if (!existingEvent) {
          state.events.push({
            id: singleEvent.id,
            rank: singleEvent.rank,
            title: singleEvent.title,
            category: singleEvent.category,
            description: singleEvent.description,
            country: singleEvent.country,
            date: formatedDateTime[0],
            start: formatedDateTime[1],
            time: formatedDateTime[2],
            isFavourite: false,
          });
        }
      });
    },

    setLoading: (state, action: PayloadAction<{ loading: boolean }>) => {
      state.isLoading = action.payload.loading;
    },
  },
});

export const { setEvents, setLoading } = eventSlice.actions;
export default eventSlice.reducer;
