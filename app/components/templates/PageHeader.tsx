import React from "react";
import Image from "next/image";

interface PageHeaderProps {
  title: string;
  onClose?: () => void;
}
export const PageHeader = ({ title, onClose }: PageHeaderProps) => {
  return (
    <div className="flex justify-between items-center font-bold  border-neutral-200 border-b p-3 mx-5 ">
      <div>
        <span className="text-base font-bold">{title}</span>
      </div>

      <button onClick={onClose}>
        <Image
          src="/icons/closeSquare.svg"
          width={24}
          height={24}
          alt="Close"
        />
      </button>
    </div>
  );
};
