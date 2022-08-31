import { CreatePage } from "./CreatePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ReadingData } from "./ReadingData";
import { UpdatePage } from "./UpdateData";
import { DeleteData } from "./DeleteData";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ReadingData />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/update" element={<UpdatePage />} />
          <Route path="delete" element={<DeleteData />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
