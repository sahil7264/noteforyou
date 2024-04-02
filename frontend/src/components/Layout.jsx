import React from "react";
import { useNavigate } from "react-router-dom";
const Layout = () => {
  const navigate = useNavigate();
  const [defaultRoute, setDefaultRoute] = React.useState(0);
  const dataRoutes = [
    {
      name: "Notes",
      path: "/",
    },
    {
      name: "Users",
      path: "/user",
    },
    {
      name: "Developer",
      path: "/about",
    },
  ];
  return (
    <div className="flex flex-col py-10 px-6 gap-4">
      {dataRoutes.map((item, index) => {
        return (
          <h3
            className={
              defaultRoute == index
                ? `text-2xl cursor-pointer bg-gray-200 rounded-xl px-4 py-4`
                : `text-2xl cursor-pointer p-2  px-4 py-4`
            }
            onClick={() => {
              navigate(item.path);
              setDefaultRoute(index);
            }}
          >
            {item.name}
          </h3>
        );
      })}
    </div>
  );
};

export default Layout;
