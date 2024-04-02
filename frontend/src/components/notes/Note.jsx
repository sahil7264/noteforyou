import React from "react";

const Note = ({ note }) => {
  return (
    <div
      className={
        note.status
          ? `w-full flex gap-5  border-2 p-6 rounded-xl  bg-green-300 `
          : `w-full flex gap-5  border-2 p-6 rounded-xl  bg-red-300 `
      }
    >
      <div className="w-full">
        <h3>{note.title}</h3>
        <h3 className="text-gray-1200">{note.description}</h3>
      </div>
      <div className="flex gap-3 align-baseline justify-end w-full">
        <button className="bg-blue-400 px-5 rounded-lg">Edit</button>
        <button className="bg-red-400 px-5 rounded-lg">Delete</button>
      </div>
    </div>
  );
};

export default Note;
