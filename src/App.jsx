import Header from "./Header";
import Home from "./pages/Home";
import Character from "./pages/Character";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CharacterDetails from "./pages/CharacterDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/characters" element={<Character />}></Route>
        <Route path='/:url' element={<CharacterDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
