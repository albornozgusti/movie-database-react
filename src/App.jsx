import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import MovieDetailScreen from "./pages/movieDetailScreen";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<MovieDetailScreen />} />
        </Routes>
    );
}

export default App;
