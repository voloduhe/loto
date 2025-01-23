import type { ButtonHTMLAttributes } from "react";

function RefreshButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="px-4 py-2 border text-purple-200 border-purple-300 text-2xl shadow-[0_0_5px] shadow-purple-300 cursor-pointer hover:text-amber-300 hover:border-amber-300 active:scale-95"
    >
      Новый билет!
    </button>
  );
}

export { RefreshButton };
