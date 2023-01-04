import "./App.css";
import Btn from "./componetns/Btn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Compose from "./componetns/Compose";
import Inbox from "./componetns/Inbox";
import OpenMassage from "./componetns/OpenMassage";

function App() {
  return (
    <>
      <Router>
        <Btn />
        <Routes>
          <Route path="/Compose" element={<Compose />} />
          <Route path="/Inbox" element={<Inbox />} />
          <Route path="/OpenMassage" element={<OpenMassage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
