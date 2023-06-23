import { FC } from "react";
import { IconProps } from "./types";

export const CloseIcon: FC<IconProps> = ({ color }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.0673 12.1828C13.1254 12.2409 13.1714 12.3098 13.2028 12.3857C13.2343 12.4615 13.2505 12.5429 13.2505 12.625C13.2505 12.7071 13.2343 12.7884 13.2028 12.8643C13.1714 12.9402 13.1254 13.0091 13.0673 13.0672C13.0092 13.1252 12.9403 13.1713 12.8644 13.2027C12.7885 13.2342 12.7072 13.2503 12.6251 13.2503C12.543 13.2503 12.4617 13.2342 12.3858 13.2027C12.3099 13.1713 12.241 13.1252 12.1829 13.0672L7.0001 7.88357L1.81729 13.0672C1.70002 13.1844 1.54096 13.2503 1.3751 13.2503C1.20925 13.2503 1.05019 13.1844 0.932916 13.0672C0.81564 12.9499 0.749756 12.7908 0.749756 12.625C0.749756 12.4591 0.81564 12.3001 0.932916 12.1828L6.11651 6.99998L0.932916 1.81717C0.81564 1.69989 0.749756 1.54083 0.749756 1.37498C0.749756 1.20913 0.81564 1.05007 0.932916 0.932794C1.05019 0.815518 1.20925 0.749634 1.3751 0.749634C1.54096 0.749634 1.70002 0.815518 1.81729 0.932794L7.0001 6.11639L12.1829 0.932794C12.3002 0.815518 12.4593 0.749634 12.6251 0.749634C12.791 0.749634 12.95 0.815518 13.0673 0.932794C13.1846 1.05007 13.2505 1.20913 13.2505 1.37498C13.2505 1.54083 13.1846 1.69989 13.0673 1.81717L7.8837 6.99998L13.0673 12.1828Z"
        fill={color}
      />
    </svg>
  );
};
