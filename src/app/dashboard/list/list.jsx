import { Route, Routes } from 'react-router-dom'
import Checklist from './components/checklist/checklist'

export const List = () => {
	return (
		<div>
			<Checklist />
		</div>
	)
}

export const SubRoutes = () => (
	<Routes>
		<Route path='' element={<List />} />
	</Routes>
)
