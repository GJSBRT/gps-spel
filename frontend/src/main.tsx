import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import './index.css';
import store from './store';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import Layout from './components/Layout';

const router = createBrowserRouter([
	{
		element: <Layout/>,
		children: [
			{
				path: '/',
				element: <Home/>,
			}
		]
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>,
)
