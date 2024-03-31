import PropTypes from "prop-types";

const Subtitle = ({ subtitleText }) => {
  return (
    <>
      <h6 className='texto'>{subtitleText}</h6>
    </>
  );
};

Subtitle.propTypes = {
  subtitleText: PropTypes.string.isRequired,
};

export default Subtitle;
