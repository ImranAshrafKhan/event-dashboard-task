import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Event, ProcessDate, monthNames } from './event-slice';

const initialState: {
  currentMonthEventsCount: number;
  upcomingEvents: Event[];
} = {
  currentMonthEventsCount: 0,
  upcomingEvents: [],
};

export const upcomingEventSlice = createSlice({
  name: 'upcomingEvents',
  initialState,
  reducers: {
    setUpcomingEvents: (state, action: PayloadAction<{ results: Event[] }>) => {
      const currentDate = new Date();

      action.payload.results.forEach((singleEvent: Event) => {
        const eventDate = new Date(singleEvent.start);

        if (eventDate >= currentDate) {
          state.currentMonthEventsCount += 1;

          const formatedDateTime = ProcessDate(singleEvent.start);
          const existingEvent = state.upcomingEvents.find(
            (event) => event.id === singleEvent.id
          );

          if (!existingEvent) {
            state.upcomingEvents.push({
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
        }
      });
    },

    // addUpcomingEventtoFavourite: (
    //   state,
    //   action: PayloadAction<{ id: String }>
    // ) => {
    //   state.value.forEach((result: EventState) => {
    //     if (result.id == action.payload.id) {
    //       result.favourite = !result.favourite;
    //       console.log(result);
    //     }
    //   });
    // },
  },
});

export const { setUpcomingEvents } = upcomingEventSlice.actions;
export default upcomingEventSlice.reducer;
