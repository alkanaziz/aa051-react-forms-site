import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import "./index.scss";
import { PageSimpleForm } from "./pages/PageSimpleForm.tsx";
import { PageEmployees } from "./pages/PageEmployees.tsx";
import { PageStateForm } from "./pages/PageStateForm.tsx";
import * as config from './config.ts';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/simple-form",
				element: <PageSimpleForm />,
			},
			{
				path: "employees",
				element: <PageEmployees />,
			},
			{
				path: "state-form",
				element: <PageStateForm />,
			},
			{
				path: "/",
				element: config.environment === 'development' ? <Navigate to="/simple-form" replace /> : <Navigate to="/employees" replace />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<RouterProvider router={router} />
);
