import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Event } from './event-slice';

type InitialState = {
  totalCount: number;
  events: Event[];
};

const initialState: InitialState = {
  totalCount: 0,
  events: [],
};

export const importLocalStorage = (): InitialState => {
  const existingData = localStorage.getItem('favourites');
  return existingData ? JSON.parse(existingData) : initialState;
};

const saveToLocalStorage = (state: InitialState) => {
  localStorage.setItem('favourites', JSON.stringify(state));
};

export const favourites = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    setFavEvents: (state) => {
      const localStorage = importLocalStorage();
      state.events = localStorage.events;
      state.totalCount = localStorage.totalCount;
    },
    addEventToFavouriteEvents: (
      state,
      action: PayloadAction<{ results: Event }>
    ) => {
      const selectedEvent = state.events.find(
        (event) => action.payload.results.id === event.id
      );

      if (selectedEvent) {
        const updatedValue = state.events.filter(
          (event) => event.id !== action.payload.results.id
        );
        state.events = updatedValue;
        state.totalCount = state.totalCount - 1;
      } else {
        console.log(action.payload.results.start);

        state.events.push({
          id: action.payload.results.id,
          rank: action.payload.results.rank,
          title: action.payload.results.title,
          category: action.payload.results.category,
          description: action.payload.results.description,
          country: action.payload.results.country,
          date: action.payload.results.date,
          start: action.payload.results.start,
          time: action.payload.results.time,
          isFavourite: true,
        });
        state.totalCount = state.totalCount + 1;
      }

      saveToLocalStorage(state);
    },
  },
});

export const { setFavEvents, addEventToFavouriteEvents } = favourites.actions;
export default favourites.reducer;
