import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DetailPage } from "./views/DetailPage";
import { HomePage } from "./views/HomePage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exac path="/" element={<HomePage />}></Route>
          <Route path=":id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
