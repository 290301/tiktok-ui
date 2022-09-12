//------import library
import classNames from 'classnames/bind';

//------import component
import styles from './Sidebar.modude.scss'

const cx = classNames.bind(styles);

function Sidebar() {
   return (
      <aside className={cx('wrapper')}>
         <h2>Sidebar</h2>
      </aside>
   );
}

export default Sidebar;
