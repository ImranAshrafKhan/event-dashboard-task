import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Event = {
  rank: number;
  title: string;
  category: string;
  description: string;
  country: string;
  start: string;
};

const initialState: {
  totalCount: number;
  events: Event[];
} = {
  totalCount: 0,
  events: [],
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
        state.events.push({
          rank: singleEvent.rank,
          title: singleEvent.title,
          category: singleEvent.category,
          description: singleEvent.description,
          country: singleEvent.country,
          start: singleEvent.start,
        });
      });
    },
  },
});

export const { setEvents } = eventSlice.actions;
export default eventSlice.reducer;
