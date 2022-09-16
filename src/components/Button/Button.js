//------import library
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

//------import component
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
function Button({
   to,
   href,
   primary = false,
   outline = false,
   small = false,
   large = false,
   text = false,
   disable = false,
   rounded = false,
   leftIcon,
   rightIcon,
   children,
   className,
   onClick,
   ...passProps
}) {
   let Comp = 'button';
   const props = {
      onClick,
      ...passProps,
   };

   //  Remove event listener when button was disable
   if (disable) {
      Object.keys(props).forEach((key) => {
         if (key.startsWith('on') && typeof props[key] === 'function') {
            delete props[key];
         }
      });
   }
   if (to) {
      props.to = to;
      Comp = Link;
   } else if (href) {
      props.href = href;
      Comp = 'a';
   }
   const classes = cx('wrapper', { [className]: className, primary, outline, small, large, text, disable, rounded });
   const isIcon = leftIcon || rightIcon ? '' : cx('padding-y');
   return (
      <Comp className={classes} {...props}>
         {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
         <span className={cx('title', isIcon)}>{children}</span>
         {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
      </Comp>
   );
}
Button.propTypes = {
   to: PropTypes.string,
   href: PropTypes.string,
   primary: PropTypes.bool,
   outline: PropTypes.bool,
   small: PropTypes.bool,
   large: PropTypes.bool,
   text: PropTypes.bool,
   disable: PropTypes.bool,
   rounded: PropTypes.bool,
   leftIcon: PropTypes.node,
   rightIcon: PropTypes.node,
   children: PropTypes.node.isRequired,
   className: PropTypes.string,
   onClick: PropTypes.func,
};
export default Button;
