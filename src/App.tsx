import { Routes, Route } from "react-router-dom";
import { IndexPage } from "./pages/IndexPage";
import { SuccessPage } from "./pages/SuccessPage";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </>
  );
}

export default App;
