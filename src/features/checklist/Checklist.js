import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './Checklist.module.css'
import {
	checklist,
	toggleItem,
	addItem,
	updateListName,
	editItem,
	removeItem,
	insertNewItem,
} from './checklistSlice'

const Checklist = () => {
	const { listName } = useSelector(checklist)
	const dispatch = useDispatch()

	const handleListNameChange = (e) => {
		const trimmedText = e.target.value.trim()
		dispatch(updateListName(e.target.value))
		document.title = `pinklst - ${trimmedText}`
	}

	return (
		<div className={styles.Checklist}>
			<input
				type='text'
				value={listName}
				onChange={(e) => handleListNameChange(e)}
				placeholder='list name'
			/>
			<List />
			<NewItemEntry />
		</div>
	)
}

const List = () => {
	const { listItems } = useSelector(checklist)
	const [indexToFocus, setIndexToFocus] = useState(null)

	const listItemCount = Object.keys(listItems).length
	const list = Object.entries(listItems).map(([index, { text, checked }]) => {
		const backgroundShade = (listItemCount - index) / listItemCount

		return (
			<ListItem
				{...{
					index,
					text,
					checked,
					backgroundShade,
					indexToFocus,
					setIndexToFocus,
				}}
				key={index}
			/>
		)
	})

	return <div className={styles.List}>{list}</div>
}

const ListItem = ({
	index,
	text,
	checked,
	backgroundShade,
	indexToFocus,
	setIndexToFocus,
}) => {
	const dispatch = useDispatch()
	const textRef = useRef()

	const handleKeyDown = ({ key }) => {
		if (key === 'Enter' && text.length > 0) {
			const indexOfNewItem = Number(index) + 1
			dispatch(insertNewItem(indexOfNewItem))
			setIndexToFocus(indexOfNewItem)
		} else if (key === 'Escape') {
			textRef.current.blur()
		}
	}

	const handleBlur = () => {
		if (text.length === 0) {
			dispatch(removeItem(index))
		}
	}

	useEffect(() => {
		if (indexToFocus === Number(index)) {
			textRef.current.focus()
			setIndexToFocus(null)
		}
	}, [index, indexToFocus, setIndexToFocus])

	return (
		<div
			className={styles.ListItem}
			style={{ backgroundColor: `rgba(255, 214, 220, ${backgroundShade})` }}
			onBlur={handleBlur}
		>
			<input
				type='checkbox'
				checked={checked}
				readOnly
				onClick={() => dispatch(toggleItem(index))}
			/>
			<input
				type='text'
				disabled={checked}
				className={checked ? styles.checkedOff : ''}
				onKeyDown={handleKeyDown}
				value={text}
				ref={textRef}
				onChange={(e) => dispatch(editItem({ index, text: e.target.value }))}
			/>
			<button onClick={() => dispatch(removeItem(index))}>✕</button>
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
