import React, { useState } from "react";
import NavigationNavItem from "./common/NavigationNavItem";
import "./Navigation.css";

export const Navigation = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNavItemClick = (idx) => {
    setActiveIndex(idx);
  };

  const navs = [
    {
      title: "All",
      count: 34,
    },
    {
      title: "Important",
      count: 10,
    },
    {
      title: "Education",
      count: 16,
    },
    {
      title: "Health",
      count: 8,
    },
  ];

  return (
    <div className="navigation_container">
      <div>
        {navs.map((item, index) => (
          <NavigationNavItem
            title={item.title}
            count={item.count}
            index={index}
            handleClick={handleNavItemClick}
            activeIndex={activeIndex}
          />
        ))}
      </div>
    </div>
  );
};
