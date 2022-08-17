import { useSelector, useDispatch } from 'react-redux'
import {
	checklist,
	toggleItem,
	addItem,
	updateListName,
	editItem,
} from './checklistSlice'
import styles from './Checklist.module.css'
import { useState } from 'react'

const Checklist = () => {
	const { listName } = useSelector(checklist)
	const dispatch = useDispatch()

	return (
		<div className={styles.Checklist}>
			<input
				type='text'
				value={listName}
				onChange={(e) => dispatch(updateListName(e.target.value))}
				placeholder='list name'
			/>
			<List />
			<NewItemEntry />
		</div>
	)
}

const List = () => {
	const { listItems } = useSelector(checklist)

	const listItemCount = Object.keys(listItems).length

	const list = Object.entries(listItems).map(([index, { text, checked }]) => {
		const backgroundShade = (listItemCount - index) / listItemCount

		return (
			<ListItem
				index={index}
				text={text}
				checked={checked}
				backgroundShade={backgroundShade}
				key={index}
			/>
		)
	})

	return <div>{list}</div>
}

const ListItem = ({ index, text, checked, backgroundShade }) => {
	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(toggleItem(index))
	}

	return (
		<div
			className={styles.ListItem}
			style={{ backgroundColor: `rgba(255, 214, 220, ${backgroundShade})` }}
		>
			<input type='checkbox' checked={checked} readOnly onClick={handleClick} />
			<input
				type='text'
				disabled={checked}
				className={checked ? styles.checkedOff : ''}
				value={text}
				onChange={(e) => dispatch(editItem({ index, text: e.target.value }))}
			/>
		</div>
	)
}

const NewItemEntry = () => {
	const [text, setText] = useState('')
	const dispatch = useDispatch()

	const addNewItem = () => {
		const trimmedText = text.trim()
		if (trimmedText.length > 0) {
			dispatch(addItem(trimmedText))
			setText('')
		}
	}

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			addNewItem()
		}
	}

	return (
		<div className={styles.NewItemEntry}>
			<input
				type='text'
				onKeyDown={handleKeyDown}
				placeholder='Add new items here'
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<button onClick={addNewItem}>&#10548;</button>
		</div>
	)
}

export default Checklist
