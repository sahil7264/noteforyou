import React from "react";
import SearchBox from "../components/SearchBox";
const UserPage = () => {
  const emailData = [
    {
      email: "sahilshile25@gmail.com",
    },
    {
      email: "sahilshile25@gmail.com",
    },
    {
      email: "sahilshile25@gmail.com",
    },
    {
      email: "sahilshile25@gmail.com",
    },
    {
      email: "sahilshile25@gmail.com",
    },
    {
      email: "sahilshile25@gmail.com",
    },
    {
      email: "sahilshile25@gmail.com",
    },
    {
      email: "sahilshile25@gmail.com",
    },
    {
      email: "sahilshile25@gmail.com",
    },
  ];
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex justify-between border-2 p-5 rounded-xl bg-pink-200">
        <h1 className="text-3xl text-center">Users</h1>
        <div className="flex gap-6 w-[50%]">
          <SearchBox></SearchBox>
          {/* <button className="bg-white border-2 px-3 rounded-lg w-[20%]">
            Add new
          </button> */}
        </div>
      </div>
      <div className="flex flex-col gap-5 overflow-auto h-[550px] p-2">
        {emailData.map((item) => (
          <h1 className="text-3x bg-green-300 p-4 rounded-xl">{item.email}</h1>
        ))}
      </div>
    </div>
  );
};

export default UserPage;
