import Login from "./components/login/login";
import "./App.css";
import Tables from "./components/Table/Tables";
import { Users } from "./components/Table/Users";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const keys = ["first_name", "last_name", "email"];

  const search = (data) => {
    return data.filter((elem) =>
      keys.some((key) => elem[key].toLowerCase().includes(query))
    );
  };
  return (
    <>
      <div className="app_container">
      <div className="app">
        <input
          className="search"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
        <Tables data={search(Users)} />
      </div>
      </div>
    </>
  );
}

export default App;
