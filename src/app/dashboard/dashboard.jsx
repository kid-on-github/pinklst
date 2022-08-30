import { Route, Routes, Link } from 'react-router-dom'
import { SubRoutes as List } from './list/list.jsx'
import styles from './dashboard.module.css'

export const Dashboard = () => {
	return (
		<div className={styles.Dashboard}>
			<h1>dashboard</h1>
			<Link to='list'>list</Link>
		</div>
	)
}

export const SubRoutes = () => (
	<Routes>
		<Route path='list' element={<List />} />
		<Route path='' element={<Dashboard />} />
	</Routes>
)
