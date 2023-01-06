import "./App.css";
import Btn from "./componetns/Btn";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Compose from "./componetns/Compose";
import Inbox from "./componetns/Inbox";
import OpenMassage from "./componetns/OpenMassage";

function App() {
  // const inboxMassages = useSelector((state) => state.inboxMassages);
  const inboxMassages = []

  return (
    <>
      <Router>
        <Btn />
        <Routes>
          <Route path="/Compose" element={<Compose />} />
          <Route path="/Inbox" element={<Inbox />} />
          <Route
            path="/OpenMassage/:key"
            element={<OpenMassage inboxMassages={inboxMassages} Subject />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
