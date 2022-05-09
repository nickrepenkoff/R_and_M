import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import CharDetails from "./components/CharacterCards/CharDetails";
import MainPage from "./pages/MainPage";

const App = () => {
    return (
      <Router>
          <Routes>
              <Route path='/' element={<MainPage/> }/>
              <Route path='/:id' element={<CharDetails/>}/>
          </Routes>
      </Router>

    );
};

export default App;
