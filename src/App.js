import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Table1 from "./Taskblue/Table1";
// import Form1 from "./Taskblue/Form1";
import Form from "./task/Form";
import Table from "./task/Table";
// import Form2 from "./testing/Form2";
// import Table2 from "./testing/Table2";
// import Formy from "./Trytask/Formy";
// import Tabby from "./Trytask/Tabby";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </Router>

      {/* <Form />
      <Table /> */}
    </div>
  );
}

export default App;
