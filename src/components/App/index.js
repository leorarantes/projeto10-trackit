import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import UserContext from "../../contexts/UserContext.js";
import Home from "../Home";
import Register from "../Register";
import Habits from "../Habits";
import Today from "../Today";
import History from "../History";


export default function App() {
	const [percentage, setPercentage] = useState(0);

	return (
		<UserContext.Provider value={{percentage, setPercentage}}>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cadastro" element={<Register />} />
				<Route path="/habitos" element={<Habits />} />
				<Route path="/hoje" element={<Today />} />
				<Route path="/historico" element={<History />} />
			</Routes>
		</BrowserRouter>
		</UserContext.Provider>
	);
}