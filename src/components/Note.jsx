import PropTypes from "prop-types";

export const Note = ({ title, body }) => {
    return (
        <li>
            <p>{title}</p>
            <small>{body}</small>
        </li>
    );
};

Note.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};
