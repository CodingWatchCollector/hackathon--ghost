import { Link } from "react-router-dom";

type LinkProps = {
  type: "link";
  href: string;
};

type ButtonProps = {
  type: "button";
  action: () => void;
};

type Common = {
  children: React.ReactNode;
  [x: string]: unknown;
};

type Props = (LinkProps | ButtonProps) & Common;

const className = "button-style";

export const Button = ({ type, action, href, children, ...rest }: Props) =>
  type === "link" ? (
    <Link to={href} className={className} {...rest}>
      {children}
    </Link>
  ) : (
    <button onClick={action} className={className} {...rest}>
      {children}
    </button>
  );
