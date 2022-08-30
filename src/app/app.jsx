import React from 'react'
import styles from './app.module.css'

import { Route, Routes, Link } from 'react-router-dom'
import { SubRoutes as Dashboard } from './dashboard/dashboard.jsx'

export const App = () => {
	return (
		<div className={styles.App}>
			<h1>pinklst</h1>
			<Link to='/dashboard'>dashboard</Link>
		</div>
	)
}

export const SubRoutes = () => (
	<Routes>
		<Route path='/dashboard/*' element={<Dashboard />} />
		<Route path='/' element={<App />} />
	</Routes>
)
