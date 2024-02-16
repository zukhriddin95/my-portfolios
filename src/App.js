import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Layout from './pages/layout'
import NotFound from './pages/not-found'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/' element={<Home />} />
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
