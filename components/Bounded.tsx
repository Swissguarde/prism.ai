import clsx from "clsx";
import React, { MutableRefObject } from "react";

type BoundedProps = {
  className?: string;
  children: React.ReactNode;
  ref?: MutableRefObject<null>;
};

const Bounded: React.FC<BoundedProps> = ({ className, children, ref }) => {
  return (
    <section
      className={clsx(
        "px-4 py-14 first:pt-10 md:px-6 md:py-20 lg:py-24",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
        {children}
      </div>
    </section>
  );
};
export default Bounded;
