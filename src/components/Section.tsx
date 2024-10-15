import classNames from "classnames";
import { ReactNode } from "react";

interface IProps {
  id?: string;
  className?: string;
  isSectionPadding?: boolean;
  containerClass?: string;
  children: ReactNode;
  isContainer?:boolean
}

const Section = ({
  id,
  className,
  isSectionPadding = true,
  isContainer = true,
  containerClass,
  children,
}: IProps) => {
  return (
    <section
      id={id}
      className={classNames(`${isSectionPadding ? "sec_padding" : ""}`, className)}
    >
     {isContainer ?  <div className={classNames(`container`, containerClass)}>{children}</div> : children}
    </section>
  );
};

export default Section;