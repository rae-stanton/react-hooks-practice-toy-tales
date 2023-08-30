import React, { useState, useEffect } from "react";
import ToyCard from "./ToyCard";

function ToyContainer() {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    // Fetch initial toys when the component mounts
    fetch("http://localhost:3001/toys")
      .then(response => response.json())
      .then(data => {
        setToys(data);
      })
      .catch(error => {
        console.error("Error fetching initial toys:", error);
      });
  }, []);

// handles the toy card data - add whatever needed for the DB.json
  return (
    <div id="toy-collection">
      {toys.map((toy) => (
        <ToyCard
          key={toy.id}
          id={toy.id}
          name={toy.name}
          image={toy.image}
          likes={toy.likes}
          onUpdateToys={(updatedToy) => {
            const updatedToys = toys.map((toy) =>
              toy.id === updatedToy.id ? updatedToy : toy
            );
            setToys(updatedToys);
          }}
          onDeleteToys={(idToDelete) => {
            const updatedToys = toys.filter(toy => toy.id !== idToDelete);
            setToys(updatedToys);
          }}
        />
      ))}
    </div>
  );
}

export default ToyContainer;
