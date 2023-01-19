import React, { useEffect, useState } from "react";
import { client } from "./client";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == 'netlify']`).then((data) => {
      console.log(data);
      setNotes(data);
    });
  }, []);

  return (
    <>
      <header>Notes</header>
      {notes.map((article) => {
        return (
          <article key={article._id}>
            {article.title}
            <p>{article.content}</p>
          </article>
        );
      })}
    </>
  );
};

export default Notes;
