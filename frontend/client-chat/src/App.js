import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProviderContext from "./context/provider";
import Chat from "./pages/chat";
import SubUser from './pages/subscribe/subscribe'
import Login from "./pages/singin";
import SingUp from "./pages/singup";
import Channels from "./pages/channel";

function App() {
  return (
  <ProviderContext>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/channels" element={<Channels />} />
        <Route path="/chat/:id" element={<Chat />} />
        <Route path="/subscribe" element={<SubUser/>} />
      </Routes>
     </BrowserRouter>
  </ProviderContext>
  );
}

export default App;
