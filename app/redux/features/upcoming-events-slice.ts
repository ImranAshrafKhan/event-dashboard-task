import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Event, ProcessDate } from './event-slice';

const initialState: {
  currentMonthEventsCount: number;
  eventOfTheMonth: Event;
  upcomingEvents: Event[];
} = {
  currentMonthEventsCount: 0,
  eventOfTheMonth: {
    id: '',
    rank: 0,
    title: 'Loading',
    category: '',
    description: '',
    country: '',
    start: '',
    date: '',
    time: '',
    isFavourite: false,
  },
  upcomingEvents: [],
};

export const upcomingEventSlice = createSlice({
  name: 'upcomingEvents',
  initialState,
  reducers: {
    setUpcomingEvents: (state, action: PayloadAction<{ results: Event[] }>) => {
      const currentDate = new Date();
      const currentMonth = new Date().getMonth() + 1;
      const currentYear = new Date().getFullYear();

      //   Comment the above logic for month and year and use the below one to check
      //   because the api is sending data for month feb and year 2024
      //   const currentMonth = 2;
      //   const currentYear = 2024;

      action.payload.results.forEach((singleEvent: Event) => {
        const eventDate = new Date(singleEvent.start);
        const eventMonth = new Date(singleEvent.start).getMonth() + 1;
        const eventYear = new Date(singleEvent.start).getFullYear();

        if (eventMonth === currentMonth && eventYear === currentYear) {
          state.currentMonthEventsCount += 1;

          if (state.eventOfTheMonth?.rank < singleEvent.rank) {
            const formatedDateTime = ProcessDate(singleEvent.start);
            state.eventOfTheMonth = {
              ...singleEvent,
              date: formatedDateTime[0],
              start: formatedDateTime[1],
              time: formatedDateTime[2],
            };
          }
        }

        if (eventDate >= currentDate) {
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
