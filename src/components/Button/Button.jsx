import styles from './Button.module.css'
import PropTypes from 'prop-types';

function Button({children, onClick, type}) {
    return (
        <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
          {children}  
        </button>
    )
}

Button.propTypes = {
  // ⛔️ incorrect prop type
  children: PropTypes.any,
  onClick: PropTypes.any,
  type: PropTypes.any
};

export default Button
