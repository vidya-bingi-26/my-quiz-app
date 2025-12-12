import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Default route → QuizPage */}
        <Route path="/" element={<QuizPage />} />

        {/* Show ResultPage at /result */}
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}
