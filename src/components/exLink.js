import { Link } from "react-router-dom";

const CustomLink = ({ to, children }) => {
  const isExternal = to.startsWith("http");

  if (isExternal) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return <Link to={to}>{children}</Link>;
};

export default CustomLink;
