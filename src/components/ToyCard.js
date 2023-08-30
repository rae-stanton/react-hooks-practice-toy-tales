import React from "react";

function ToyCard({ name, likes, image, id, onUpdateToys, onDeleteToys }) {
  function handleClickLike() {
    const updateLikes = {
      likes: likes + 1,
    };

  // add likes plus one, then handle the like data

    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateLikes),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((updatedToy) => {
        onUpdateToys(updatedToy);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  //delete button fetch
  function handleDelete() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        onDeleteToys(id);
      })
      .catch((error) => {
        console.error("Error deleting toy:", error);
      });
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes </p>
      //adds handle for like btn
      <button onClick={handleClickLike} className="like-btn">
        Like {"<3"}
      </button>
      //adds handling for delete button
      <button onClick={handleDelete} className="del-btn">
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
