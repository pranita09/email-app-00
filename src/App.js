import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./styles.css";
import Inbox from "./pages/Inbox";
import Sent from "./pages/Sent";
import IndividualMail from "./pages/IndividualMail";

export default function App() {
  return (
    <div className="">
      <Home />
      <Routes>
        <Route path='/inbox' element={<Inbox/>} />
        <Route path='/sent' element={<Sent/>} />
        <Route path='/details/:mailId' element={<IndividualMail/>}  />
        {/* <Route path='/sent/:mailId' element={<IndividualMail/>} /> */}
      </Routes>
    </div>
  );
}
