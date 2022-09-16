//------import library
import classNames from 'classnames/bind';

//------import component
import styles from './Sidebar.modude.scss';
import Menu, { MenuItem } from '../Sidebar/Menu';
import config from '~/config';
import {
   PeopleIcon,
   HomeIcon,
   CameraIcon,
   PeopleActiveIcon,
   HomeActiveIcon,
   CameraActiveIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
   return (
      <aside className={cx('wrapper')}>
         <Menu>
            <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
            <MenuItem
               title="Following"
               to={config.routes.following}
               icon={<PeopleIcon />}
               activeIcon={<PeopleActiveIcon />}
            />
            <MenuItem title="LIVE" to={config.routes.live} icon={<CameraIcon />} activeIcon={<CameraActiveIcon />} />
         </Menu>
      </aside>
   );
}

export default Sidebar;
