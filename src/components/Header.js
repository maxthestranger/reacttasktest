import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task app",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// const headStyle = {
//   color: "red",
//   backgroundColor: "blue",
// };

export default Header;
