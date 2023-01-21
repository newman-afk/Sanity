import React, { useEffect, useState } from "react";
import { client } from "../../client";
import { Link } from "react-router-dom";
import { topic } from "../../data";
import "./Notes.css";
const Notes = () => {
  const [content, setContent] = useState([]);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == 'notes']`).then((data) => {
      setNotes(data);
      console.log(data);
    });
  }, []);
  const handleOnClick = (article) => {
    setContent(article);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="accordion" id="accordionExample">
            {topic.sort().map((item) => {
              return (
                <div key={item} className="accordion-item">
                  <h2 className="accordion-header" id={`${item}-heading`}>
                    <button
                      // onClick={() => handleOnClickTopic(item)}
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${item}`}
                      aria-expanded="true"
                      aria-controls={item}
                    >
                      {item}
                    </button>
                  </h2>
                  <div
                    id={item}
                    className="accordion-collapse collapse"
                    aria-labelledby={`${item}-heading`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      {notes
                        .filter(
                          (note) =>
                            note.label.toLowerCase() === item.toLowerCase()
                        )
                        .map((item) => {
                          return (
                            <Link
                              key={item._id}
                              className="mylink"
                              onClick={() => handleOnClick(item)}
                            >
                              {item.title}
                            </Link>
                          );
                        })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col mt-1 mb-5">
          <h1 className="mb-5">{content.title}</h1>
          <p className="time">
            {content._createdAt &&
              "CreatedAt: " +
                content._createdAt.replace("T", " ").replace("Z", "")}
          </p>
          <p className="time">
            {content._updatedAt &&
              "UpdatedAt: " +
                content._updatedAt.replace("T", " ").replace("Z", "")}
          </p>
          <p>{content.content}</p>
          <a target="_blank" rel="noreferrer" href={`${content.link}`}>
            {content.link}
          </a>
        </div>
      </div>
    </div>
  );
};
export default Notes;
