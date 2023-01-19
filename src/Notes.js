import React, { useEffect, useState } from "react";
import { client } from "./client";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == 'notes']`).then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <>
      <header>Notes</header>
      <div>
        {notes.map((article) => {
          return (
            <>
              <title>{article.title}</title>
              <p>{article.body}</p>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Notes;
