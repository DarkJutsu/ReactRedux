import PropsTypes from "prop-types";

export const Filter = ({ active, onClick, children }) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </button>
  );
};

Filter.propTypes = {
  active: PropsTypes.bool.isRequired,
  onClick: PropsTypes.func.isRequired,
  children: PropsTypes.node.isRequired,
};