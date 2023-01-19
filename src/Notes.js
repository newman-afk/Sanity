import React, { useEffect, useState } from "react";
import { client } from "./client";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == 'notes']`).then((data) => {
      console.log(data);
    });
    console.log(process.env.REACT_APP_SANITY_PROJECT_ID);
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
