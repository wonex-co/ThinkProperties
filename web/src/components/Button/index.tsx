import React from "react";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-[0px]",
  round: "rounded-[10px]",
} as const;
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-gray-900",
    gray_900: "bg-gray-900 text-white-A700",
  },
  outline: {
    gray_700: "border-gray-700 border border-solid text-gray-900",
    gray_600_02: "border-gray-600_02 border border-solid text-gray-900",
    blue_gray_100_02: "border-blue_gray-100_02 border border-solid text-gray-900",
    blue_gray_100_01: "border-blue_gray-100_01 border border-solid text-gray-900",
  },
} as const;
const sizes = {
  "2xl": "h-[56px] px-[35px] text-base",
  lg: "h-[44px] px-[35px] text-base",
  "3xl": "h-[60px] px-3.5",
  xs: "h-[25px] text-lg",
  md: "h-[39px] px-3.5 text-sm",
  sm: "h-[30px]",
  "4xl": "h-[60px] px-4 text-lg",
  xl: "h-[48px] px-6 text-base",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  variant = "fill",
  size = "xl",
  color = "gray_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
