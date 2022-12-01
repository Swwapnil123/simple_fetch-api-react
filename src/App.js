import './styles.css';
import React, { useEffect, useState } from "react";

function App() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all").then((result) => {
      result.json().then((resp) => {
        // console.log(resp)
        setUser(resp);
      });
    });
  }, []);
  console.log(users);
  return (
    <div className="App">
      <h1>Fetch API  </h1>

      {users.map((item, i) => (
        <div className="movie">
          <h1>{item.show.name}</h1>
          <img src={item.show.image.medium} alt={" "} width="200px" />
          <h3>{item.show.genres}</h3>
        </div>
      ))}
    </div>
  );
}
export default App;
