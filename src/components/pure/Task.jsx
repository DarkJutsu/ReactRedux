import { PropTypes } from "prop-types";

export const Task = ({ onClick, completed, text, id }) => {
  return (
    <div>
      <li
        onClick={onClick}
        style={{
          textDecoration: completed ? "line-through" : "none",
          textDecorationColor: completed ? "green" : "none",
          color: completed ? "green" : "white",
        }}
      >
        {id} - {text}
      </li>
    </div>
  );
};

Task.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
