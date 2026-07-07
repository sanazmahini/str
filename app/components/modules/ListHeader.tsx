import React, { Children } from "react";
import { LatestUpdate } from "./LatestUpdate";
interface ListHeaderProps {
  title?: string;
  children?: React.ReactNode;
}
export const ListHeader = ({ title, children }: ListHeaderProps) => {
  return (
    <>
      <div className="flex">
        <span className="text-base font-medium">{title}</span>
        <LatestUpdate />
      </div>
      <div className="flex">{children}</div>
    </>
  );
};
