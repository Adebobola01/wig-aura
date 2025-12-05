"use client";
import { Search } from "lucide-react";
import { ChangeEventHandler } from "react";

const SearchInput = () => {
  const inputFieldChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target);
  };
  return (
    <div className="flex items-center gap-1 w-60 rounded-lg  bg-(--surface-dark) px-2">
      <Search width={20} height={20} stroke="#cbbc90" strokeWidth={2} />
      <input
        className="form-input flex w-full  min-w-0 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none focus:border-none h-full placeholder:text-(--primary-light) rounded-l-none border-l-0  text-base font-normal leading-normal"
        placeholder="Search"
        type="text"
        onChange={
          inputFieldChangeHandler as ChangeEventHandler<HTMLInputElement>
        }
      />
    </div>
  );
};

export default SearchInput;
