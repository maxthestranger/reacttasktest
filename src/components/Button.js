import PropTypes from "prop-types";

export default function Button({ color, text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  color: "steelblue",
};

Button.protoTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
