import React from 'react';
import './styles/App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import BaseLayout from "./components/BaseLayout/BaseLayout";
import NotFoundPage from "./pages/PageNotFound";
import HomePage from "./pages/HomePage/HomePage";
import AutoCompletePage from "./pages/AutoCompletePage/AutoCompletePage";

const App: React.FC = () => {
  return (
      <Router>
        <BaseLayout>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/autocomplete" element={<AutoCompletePage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
        </BaseLayout>
      </Router>
  );
}

export default App;
