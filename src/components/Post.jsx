import PropTypes from "prop-types";

export const Post = ({ title, body }) => {
    return (
        <li>
            <p>{title}</p>
            <small>{body}</small>
        </li>
    );
};

Post.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};
