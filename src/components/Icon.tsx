import type { ReactNode, SVGProps } from "react";

type IconName =
  | "arrow_back"
  | "arrow_forward"
  | "expand_less"
  | "search"
  | "close"
  | "auto_awesome"
  | "auto_stories"
  | "bookmark_border"
  | "history_edu"
  | "menu_book"
  | "local_library"
  | "person";

const paths: Record<IconName, ReactNode> = {
  arrow_back: <path d="M19 12H5m7-7-7 7 7 7" />,
  arrow_forward: <path d="M5 12h14m-7-7 7 7-7 7" />,
  expand_less: <path d="m6 14 6-6 6 6" />,
  search: <><circle cx="11" cy="11" r="6.5" /><path d="m16 16 5 5" /></>,
  close: <><path d="m6 6 12 12" /><path d="m18 6-12 12" /></>,
  auto_awesome: <><path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3Z" /><path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" /></>,
  auto_stories: <><path d="M12 5.5c-2-1.4-4.3-2-7-2v13c2.7 0 5 .6 7 2V5.5Z" /><path d="M12 5.5c2-1.4 4.3-2 7-2v13c-2.7 0-5 .6-7 2V5.5Z" /></>,
  bookmark_border: <path d="M6 4.5A2.5 2.5 0 0 1 8.5 2h7A2.5 2.5 0 0 1 18 4.5V21l-6-3.5L6 21V4.5Z" />,
  history_edu: <><path d="M5 19.5h9" /><path d="M6 16.5V4h9v12.5" /><path d="M9 7h3m-3 3h3" /><path d="m14.5 18.5 4.8-4.8 1.5 1.5-4.8 4.8-2.4.6.6-2.1Z" /></>,
  menu_book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H12v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Z" /><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H12v15h5.5a2.5 2.5 0 0 1 2.5 2.5v-15Z" /></>,
  local_library: <><path d="M5 4h14v16H5z" /><path d="M8 8h8m-8 4h8m-8 4h5" /></>,
  person: <><circle cx="12" cy="8" r="3" /><path d="M5 21a7 7 0 0 1 14 0" /></>,
};

export function Icon({ name, size = 20, className = "", ...props }: { name: IconName; size?: number; className?: string } & Omit<SVGProps<SVGSVGElement>, "name">) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 ${className}`}
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
