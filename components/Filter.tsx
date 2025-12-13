"use client";
import { ChevronDown, X } from "lucide-react";

const Filter = ({
  className,
  openMobileFilter,
  closeHandler,
}: {
  className?: string;
  openMobileFilter?: boolean;
  closeHandler?: () => void;
}) => {
  return (
    <div className="flex relative">
      <div
        className={`w-screen ${
          openMobileFilter ? "block" : "hidden"
        } h-dvh bg-(--surface-dark) sm:hidden fixed top-0 left-0 z-100 `}
      ></div>
      <aside
        className={`hidden z-120 sm:block min-w-[190px] lg:w-1/4 xl:w-1/5 ${className} ${
          openMobileFilter
            ? "flex! flex-col px-10 py-40 gap-20 w-full h-dvh bg-(--surface-dark)! "
            : ""
        } `}
      >
        <X
          className="ml-auto sm:hidden cursor-pointer "
          onClick={closeHandler}
        />
        <div className={`sticky top-[73px] left-0"  pt-4`}>
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-base font-bold tracking-wider uppercase">
              Filters
            </h1>
            <div className="flex flex-col">
              <details
                className="flex flex-col border-t border-t-[#685a31] py-2 group"
                //   open=""
              >
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
                  <p className="text-white text-sm font-medium leading-normal">
                    Style
                  </p>
                  <span className="material-symbols-outlined text-white group-open:rotate-180 transition-transform">
                    <ChevronDown />
                  </span>
                </summary>
                <div className="flex flex-col gap-2 pt-2">
                  <label className="flex items-center gap-2 text-[#cbbc90] text-sm cursor-pointer hover:text-white">
                    <input
                      className="form-checkbox bg-transparent border-[#685a31] rounded text-primary focus:ring-primary/50"
                      type="checkbox"
                    />
                    Bob
                  </label>
                  <label className="flex items-center gap-2 text-[#cbbc90] text-sm cursor-pointer hover:text-white">
                    <input
                      // checked=""
                      className="form-checkbox bg-transparent border-[#685a31] rounded text-primary focus:ring-primary/50"
                      type="checkbox"
                    />
                    Long
                  </label>
                  <label className="flex items-center gap-2 text-[#cbbc90] text-sm cursor-pointer hover:text-white">
                    <input
                      className="form-checkbox bg-transparent border-[#685a31] rounded text-primary focus:ring-primary/50"
                      type="checkbox"
                    />
                    Curly
                  </label>
                </div>
              </details>
              <details className="flex flex-col border-t border-t-[#685a31] py-2 group">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
                  <p className="text-white text-sm font-medium leading-normal">
                    Color
                  </p>
                  <span className="material-symbols-outlined text-white group-open:rotate-180 transition-transform">
                    <ChevronDown />
                  </span>
                </summary>
                <div className="flex flex-col gap-2 pt-2">
                  <label className="flex items-center gap-2 text-[#cbbc90] text-sm cursor-pointer hover:text-white">
                    <input
                      className="form-checkbox bg-transparent border-[#685a31] rounded text-primary focus:ring-primary/50"
                      type="checkbox"
                    />
                    Blonde
                  </label>
                  <label className="flex items-center gap-2 text-[#cbbc90] text-sm cursor-pointer hover:text-white">
                    <input
                      className="form-checkbox bg-transparent border-[#685a31] rounded text-primary focus:ring-primary/50"
                      type="checkbox"
                    />
                    Brunette
                  </label>
                </div>
              </details>
              <details className="flex flex-col border-t border-t-[#685a31] py-2 group">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
                  <p className="text-white text-sm font-medium leading-normal">
                    Length
                  </p>
                  <span className="material-symbols-outlined text-white group-open:rotate-180 transition-transform">
                    <ChevronDown />
                  </span>
                </summary>
                <div className="text-[#cbbc90] text-sm font-normal leading-normal pt-2">
                  Length options here.
                </div>
              </details>
              <details className="flex flex-col border-y border-y-[#685a31] py-2 group">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
                  <p className="text-white text-sm font-medium leading-normal">
                    Price Range
                  </p>
                  <span className="material-symbols-outlined text-white group-open:rotate-180 transition-transform">
                    <ChevronDown />
                  </span>
                </summary>
                <div className="pt-4 px-1">
                  <input
                    className="w-full h-2 bg-[#493f22] rounded-lg appearance-none cursor-pointer accent-primary"
                    max="1000"
                    min="0"
                    type="range"
                    value="500"
                    onChange={() => {}}
                  />
                  <div className="flex justify-between text-xs text-[#cbbc90] mt-2">
                    <span>$0</span>
                    <span>$1000</span>
                  </div>
                </div>
              </details>
            </div>
            <div className="flex flex-col gap-2 mt-4 items-center ">
              <button className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-(--primary) text-background-dark text-sm font-bold leading-normal tracking-[0.015em]">
                Apply Filters
              </button>
              <button className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-transparent border border-[#493f22] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#493f22]">
                Clear All
              </button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Filter;
