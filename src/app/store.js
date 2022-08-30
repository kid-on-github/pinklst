import { configureStore } from '@reduxjs/toolkit'
import checklistReducer from './dashboard/list/components/checklist/checklistSlice'

export const store = configureStore({
	reducer: {
		checklist: checklistReducer,
	},
})
