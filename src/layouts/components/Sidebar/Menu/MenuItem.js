import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, activeIcon }) {
   return (
      // Khi dùng <NavLink />  thì className nên sài callback có tham số (VD: nav) để trả về classname
      // Từ đó có thể check NavLink nào được active  => thêm class active => Module hóa nó
      // ===> Css đc Navlink active
      <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
         <span className={cx('icon')}>{icon}</span>
         <span className={cx('active-icon')}>{activeIcon}</span>
         <span className={cx('title')}>{title}</span>
      </NavLink>
   );
}

MenuItem.propTypes = {
   title: PropTypes.string.isRequired,
   to: PropTypes.string.isRequired,
   icon: PropTypes.node.isRequired,
   activeIcon: PropTypes.node.isRequired,
};
export default MenuItem;
