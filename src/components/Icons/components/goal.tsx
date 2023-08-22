// Downloaded from: https://www.svgrepo.com/svg/322437/goal-keeper
// Used svgr to adapt it to react: https://react-svgr.com/playground/

export function GoalIcon({
  width = 128,
  height = 128,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  props["aria-description"] ??=
    "Goalkeeper is not playing. The team is attacking with seven players.";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      aria-hidden="true"
      className="iconify iconify--noto"
      viewBox="0 0 128 128"
      {...props}
    >
      <path
        fill="#b7cbd3"
        d="M35.89 98.57c-.01-.14-1.02-14.31-1.02-23.58 0-8.68.13-28.31.14-30.84-.45-.79-2-3.47-3.33-5.39-1.62-2.36-4.75-8.47-4.88-8.72l1.78-.91c.03.06 3.2 6.25 4.75 8.5 1.61 2.35 3.47 5.63 3.55 5.77l.13.23v.27c0 .22-.15 21.86-.15 31.09 0 9.2 1.01 23.29 1.02 23.43l-1.99.15zM48.84 99.58l-2-.14c0-.02.15-2.2-.15-6.58l-.24-3.55c-.49-7.18-.96-13.96-1.08-23.95-.14-11.56.11-20.44.14-21.54-.1-.48-.61-2.78-2.11-6.26-1.8-4.2-2.11-8.61-2.12-8.8l2-.13c0 .04.31 4.27 1.97 8.14 1.78 4.15 2.24 6.68 2.26 6.79l.02.1v.1c0 .09-.29 9.32-.15 21.56.12 9.94.58 16.69 1.07 23.84l.24 3.55c.3 4.56.15 6.78.15 6.87zM57.35 98.07c-.01-.36-.59-36.56-.73-42.48-.13-5.46-.02-11.35 0-12.32-.2-.8-1.18-4.81-1.45-8.06-.2-2.36-.01-6.52 0-6.7l2 .09c0 .04-.19 4.21 0 6.44.28 3.38 1.42 7.82 1.43 7.86l.03.13v.14c0 .06-.14 6.47 0 12.36.14 5.92.72 42.13.73 42.49l-2.01.05zM69.47 98.07l-.58-53.93.01-.06c.02-.17.45-4.16 1.03-7.23.37-1.92.57-4.65.57-7.7h2c0 3.21-.21 6-.6 8.07-.53 2.79-.95 6.51-1 7.02l.58 53.81-2.01.02zM82.86 98.64h-2c0-.1 0-9.83-.15-27.29-.14-17.47-.15-26.92-.15-27.02v-.18l.06-.17c.01-.03 1.01-2.76 1.72-5.59.73-2.92 2.19-9.04 2.19-9.04l1.95.46s-1.46 6.14-2.19 9.06c-.64 2.56-1.49 4.97-1.72 5.63 0 1.37.01 10.67.15 26.83.14 17.47.14 27.21.14 27.31zM91.66 97.33l-.44-52.51.11-.22s3.07-5.99 4.68-9.06c1.61-3.07 4.03-6.79 4.14-6.94l1.67 1.09c-.02.04-2.47 3.79-4.04 6.78-1.42 2.72-3.99 7.72-4.56 8.83l.44 52.02-2 .01zM17.65 104.02l-1.81-.84c.5-1.08 1.81-4.27 1.81-6 0-.79-.02-3.89-.04-7.99-.04-7.9-.11-19.84-.11-25.73 0-8.81.29-25.69.29-25.86l2 .03c0 .17-.29 17.03-.29 25.82 0 5.89.06 17.82.11 25.72.02 4.11.04 7.21.04 8-.01 2.54-1.92 6.68-2 6.85zM108.16 101.13c0-.18-.14-17.93 0-27.03.03-2.14.09-5.12.16-8.47.2-10.42.5-26.17.29-28.35l1.99-.2c.23 2.3-.05 16.88-.28 28.59-.06 3.35-.12 6.33-.16 8.46-.14 9.08 0 26.81 0 26.99l-2 .01z"
      />
      <path
        fill="#b7cbd3"
        d="M60.05 55.42c-24.91 0-34.43-2.86-34.84-2.98l-.21-.09c-.03-.02-3.19-1.88-6.72-3.29-3.72-1.49-8.07-4.66-8.25-4.79l1.18-1.61c.04.03 4.32 3.16 7.81 4.55 3.34 1.34 6.28 3.01 6.89 3.36 1.14.32 11.93 3.12 37.7 2.85 25.41-.27 37.92-2.4 39.62-2.72l11.65-8.2 1.15 1.64-12 8.44-.21.04c-.12.03-12.68 2.5-40.19 2.79-1.24 0-2.43.01-3.58.01zM64.63 64.02c-28.68 0-38.21-2.95-39.73-3.5-.89.03-4.44.14-6.26.14-2.03 0-7.53-.14-7.76-.15l.05-2c.06 0 5.7.15 7.71.15 2 0 6.35-.14 6.39-.15l.22-.01.2.08c.08.03 8.81 3.43 39.18 3.43 30.46 0 38.5-1.99 38.58-2.01l13.57-3.65.52 1.93-13.58 3.65c-.32.09-8.22 2.09-39.09 2.09zM59.32 73.67c-25.32 0-32.21-2.06-33.94-2.87-.9.23-3.34.86-6.64 1.66-4.28 1.03-8.21 1.19-8.37 1.2l-.07-2c.04 0 3.9-.16 7.98-1.14 4.17-1.01 6.96-1.74 6.99-1.75l.49-.13.39.32c.14.09 4.97 2.97 37.46 2.7 33.05-.28 38.79-2.59 39.02-2.69l.27-.12.31.04c.02 0 2.45.42 5.96.42 3.62 0 8.74.14 8.79.15l-.06 2c-.05 0-5.14-.15-8.73-.15-3.04 0-5.28-.3-6.03-.41-1.57.52-9.45 2.49-39.51 2.75-1.5.01-2.94.02-4.31.02zM11.76 84.45l-.26-1.98c.03 0 3.35-.44 6.75-1.29 3.4-.85 7.15-2.29 7.18-2.3l.28-.11.29.07c.11.02 11.35 2.45 38.16 1.87 26.92-.58 38.73-2.45 38.84-2.47l.28-.04.26.11c.02.01 1.76.72 5.98 1.7 4.34 1.01 8.31 2.04 8.35 2.05l-.5 1.94c-.04-.01-3.98-1.03-8.3-2.04-3.5-.82-5.36-1.45-6.02-1.7-1.92.28-14.03 1.92-38.85 2.45-25.01.54-36.37-1.47-38.34-1.86-.95.36-4.12 1.51-7.14 2.27-3.5.87-6.82 1.31-6.96 1.33zM116.93 96.78s-5.26-2.34-8.48-3.8a24.216 24.216 0 0 1-4.69-2.81l-.64.55-.34.02c-.14.01-14.17.74-38.29 1.17-22.53.4-37.41-.7-39.43-.86l-12.78 5.03-.73-1.86 13.21-5.2.24.01c.15.01 15.42 1.31 39.46.87 22.02-.39 35.6-1.04 37.88-1.15l1.44-1.23.65.6c.02.02 1.84 1.67 4.85 3.04 3.21 1.46 8.46 3.79 8.46 3.79l-.81 1.83zM70.2 35.57c-2.1 0-4.3-.01-6.6-.03-35.84-.29-46.56-1.31-46.66-1.32l.2-1.99c.1.01 10.78 1.02 46.48 1.31 35.61.29 47.58-1.86 47.7-1.88l.37 1.97c-.46.09-10.75 1.94-41.49 1.94zM70.8 40.38c-2.22 0-4.56 0-7.05-.01-36.63-.15-42.75-1.44-42.99-1.49l.43-1.95c.25.05 6.46 1.29 42.57 1.44 36.24.14 43.14-.85 43.2-.86l.31 1.98c-.25.02-6.05.89-36.47.89z"
      />
      <path
        fill="#9a9a9a"
        d="m104.52 96.46.37-50.94 11.58-12.58-2.62-4.36L100.9 42.9l-74.47-.75-14.44-15.67-3.74 3.49 15.5 16.12.19 51.75-11.58 4.61-.37 5.48 14.7-6.1 76.84-.75 12.7 6.48-.12-4.86-11.59-6.24zm-3.86-.62c-.62.37-72.23.75-72.6.5S27 47.96 27.81 47.15c.62-.62 71.73-.25 73.1.37.68.31.51 10.98.37 22.79-.16 12.11-.31 25.34-.62 25.53z"
      />
      <path
        fill="#df0a2b"
        d="m5.93 105.72 3.01 3.25s.9-.01 2.11-.25c1.24-.24 2.08-.86 2.3-1.74.31-1.24-.33-72.02-.33-72.02.09-1.61-.09-3.32 2.15-3.41 2.24-.09 95.96-.09 97.03-.09s2.69.36 2.69 2.78-.45 71.83-.36 72.46c.09.63.69 1.5 2.44 1.87 1.85.39 4.2.11 4.2.11l1.25-11.04-1.39-71.55L9.19 25.04l-3.92 6.19.66 74.49z"
      />
      <path
        fill="#ff180a"
        d="M5.62 24.69c-2.24 2.99-1.7 6.14-1.7 15.02s-.13 64.25 0 65.82c.13 1.57.33 2.62 2.25 3.17 1.39.39 2.75.27 2.75.27s.22-76.83.22-78.01-.26-3.26 1.96-3.53 103.04.26 104.21.13 3.13 1.04 3.13 2.48.76 78.74.76 78.74 3.57.26 4.33-1.3c.77-1.57.52-77.31.26-79.4s-1.96-4.57-5.35-5.35-105.64-.79-107.46-.66-4.18 1.05-5.36 2.62z"
      />
    </svg>
  );
}
