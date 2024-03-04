import React from "react";

const sizes = {
  "3xl": "text-[22px] font-bold leading-[31px]",
  "2xl": "text-xl font-semibold leading-7",
  xl: "text-[19px] font-bold leading-[25px]",
  "5xl": "text-[28px] font-extrabold leading-[39px]",
  "4xl": "text-2xl font-bold leading-[33px]",
  "7xl": "text-[46px] font-extrabold leading-[63px]",
  s: "text-sm font-semibold leading-5",
  md: "text-base font-semibold leading-[22px]",
  "6xl": "text-4xl font-extrabold leading-[50px]",
  "8xl": "text-[54px] font-extrabold leading-[74px]",
  xs: "text-xs font-semibold leading-[17px]",
  lg: "text-lg font-bold leading-[25px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "md",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900 font-manrope ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
