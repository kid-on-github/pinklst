import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import checklistReducer from '../features/checklist/checklistSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    checklist: checklistReducer,
  },
});
