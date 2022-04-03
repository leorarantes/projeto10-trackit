import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Home";
import Register from "../Register";
import Habits from "../Habits";
import Today from "../Today";
import History from "../History";


export default function App() {
	return (
		<BrowserRouter>
			<Routes>
                <Route path="/" element={<Home />} />
				<Route path="/cadastro" element={<Register />} />
				<Route path="/habitos" element={<Habits />} />
				<Route path="/hoje" element={<Today />} />
				<Route path="/historico" element={<History />} />
			</Routes>
		</BrowserRouter>
	);
}