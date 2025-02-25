import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import DropdownListMenu from "./DropdownListMenu";

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-col items-center py-4 px-8 justify-between sm:flex-row gap-4">
        <Logo />
        <SearchBar />
        <DropdownListMenu />
      </div>
    </nav>
  );
};

export default Navbar;
