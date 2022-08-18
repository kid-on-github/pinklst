import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	listName: '',
	listItems: [
		// { text: 'list item', checked: false },
		// { text: 'another list item', checked: false },
	],
}

export const checklistSlice = createSlice({
	name: 'checklist',
	initialState,
	reducers: {
		updateListName: (state, action) => {
			state.listName = action.payload
		},
		toggleItem: (state, action) => {
			state.listItems[action.payload].checked =
				!state.listItems[action.payload].checked
		},
		addItem: (state, action) => {
			state.listItems.push({ text: action.payload, checked: false })
		},
		editItem: (state, action) => {
			const { index, text } = action.payload
			state.listItems[index].text = text
		},
		removeItem: (state, action) => {
			state.listItems.splice(action.payload, 1)
		},
		insertNewItem: (state, action) => {
			const index = action.payload
			state.listItems.splice(index, 0, { text: '', checked: false })
		},
	},
})

export const checklist = (state) => state.checklist
export const {
	toggleItem,
	addItem,
	updateListName,
	editItem,
	removeItem,
	insertNewItem,
} = checklistSlice.actions

export default checklistSlice.reducer
