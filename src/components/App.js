import React, { useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);

  function handleAddToy(newToy) {
    // This can now be passed to the ToyForm to handle new toys
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={() => setShowForm(prev => !prev)}>Add a Toy</button>
      </div>
      <ToyContainer />
    </>
  );
}

export default App;

