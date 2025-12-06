import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = () => {
  return (
    <div className="flex justify-center items-center mt-12">
      <nav className="flex items-center gap-2">
        <a
          className="flex items-center justify-center size-9 rounded-lg hover:bg-[#493f22] text-[#cbbc90]"
          href="#"
        >
          <span className="material-symbols-outlined text-xl">
            <ChevronLeft />
          </span>
        </a>
        <a
          className="flex items-center justify-center size-9 rounded-lg bg-primary text-background-dark text-sm font-bold"
          href="#"
        >
          1
        </a>
        <a
          className="flex items-center justify-center size-9 rounded-lg hover:bg-[#493f22] text-white text-sm font-medium"
          href="#"
        >
          2
        </a>
        <a
          className="flex items-center justify-center size-9 rounded-lg hover:bg-[#493f22] text-white text-sm font-medium"
          href="#"
        >
          3
        </a>
        <span className="text-white">...</span>
        <a
          className="flex items-center justify-center size-9 rounded-lg hover:bg-[#493f22] text-white text-sm font-medium"
          href="#"
        >
          10
        </a>
        <a
          className="flex items-center justify-center size-9 rounded-lg hover:bg-[#493f22] text-[#cbbc90]"
          href="#"
        >
          <span className="material-symbols-outlined text-xl">
            <ChevronRight />
          </span>
        </a>
      </nav>
    </div>
  );
};

export default Pagination;
