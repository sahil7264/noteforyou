import React from "react";
import Note from "../components/notes/Note";
import SearchBox from "../components/SearchBox";
const NotesPage = () => {
  const data = [
    {
      title: "Cp Notes",
      description: "This is a note taking app for competitive programmers",
      status: 1,
    },
    {
      title: "Cp Notes",
      description: "This is a note taking app for competitive programmers",
      status: 0,
    },
    {
      title: "Cp Notes",
      description: "This is a note taking app for competitive programmers",
      status: 0,
    },
    {
      title: "Cp Notes",
      description: "This is a note taking app for competitive programmers",
      status: 0,
    },
    {
      title: "Cp Notes",
      description: "This is a note taking app for competitive programmers",
      status: 1,
    },
    {
      title: "Cp Notes",
      description: "This is a note taking app for competitive programmers",
      status: 0,
    },
    {
      title: "Cp Notes",
      description: "This is a note taking app for competitive programmers",
      status: 0,
    },
  ];
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex justify-between border-2 p-5 rounded-xl bg-pink-200">
        <h1 className="text-3xl text-center">Notes</h1>
        <div className="flex gap-6 w-[50%]">
          <SearchBox></SearchBox>
          <button className="bg-white border-2 px-3 rounded-lg w-[20%]">
            Add new
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5 overflow-auto h-[550px] p-2">
        {data.map((item) => (
          <Note note={item}></Note>
        ))}
      </div>
    </div>
  );
};

export default NotesPage;
