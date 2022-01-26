import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { List, UserCard } from "./components";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="search" element={<List />} />
      <Route path="user" element={<UserCard />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
