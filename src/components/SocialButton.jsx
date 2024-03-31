import PropTypes from "prop-types";

const SocialButton = ({ icon }) => {
  return (
    <>
      <img className='icons' src={icon} alt='' />
    </>
  );
};

SocialButton.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default SocialButton;
