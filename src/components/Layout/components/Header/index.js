//------import library
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

//------import component
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from '../Search';
import {
   KeyboardIcon,
   MessageIcon,
   NoiticeIcon,
   ProfileIcon,
   QuestionIcon,
   CoinsIcon,
   SettingsIcon,
   LogoutIcon,
   LanguageIcon,
   UploadIcon,
} from '~/components/Icons';

const MENU_ITEMS = [
   {
      icon: <LanguageIcon />,
      title: 'English',
      children: {
         title: 'Languages',
         data: [
            {
               type: 'language',
               code: 'en',
               title: 'English',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'Tiếng Việt',
            },
         ],
      },
   },
   {
      icon: <QuestionIcon />,
      title: 'Feedback and help',
      to: '/Feedback',
   },
   {
      icon: <KeyboardIcon />,
      title: 'Keyboard and shortcuts',
   },
];
const cx = classNames.bind(styles);
function Header() {
   const currentUser = true;

   // handle logic
   const handleMenuOnChange = (menuItem) => {
      switch (menuItem.type) {
         case 'language':
            // Login
            break;
         default:
            throw new Error('Invalid');
      }
   };

   const userMenu = [
      {
         icon: <ProfileIcon />,
         title: 'View profile',
         to: '/Profile',
      },
      {
         icon: <CoinsIcon />,
         title: 'Get coins',
         to: '/Getcoins',
      },
      {
         icon: <SettingsIcon />,
         title: 'Settings',
         to: '/Getcoins',
      },
      ...MENU_ITEMS,
      {
         icon: <LogoutIcon />,
         title: 'Log out',
         to: '/Logout',
         separate: true, //---- Dấu gạch trên
      },
   ];

   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            {/* ----------------------------------Left Logo------------------------------------ */}

            <Image src={images.logo} alt="Tiktok" />

            {/* ----------------------------------Area Search------------------------------------ */}
            <Search />
            {/* ------------------------------------Right Action---------------------------------- */}
            <div className={cx('actions')}>
               {currentUser ? (
                  <>
                     <Tippy content="Upload video" placement="bottom">
                        <button className={cx('action-btn')}>
                           <UploadIcon />
                        </button>
                     </Tippy>
                     <Tippy content="Message" placement="bottom">
                        <button className={cx('action-btn')}>
                           <MessageIcon width="24" height="24" />
                        </button>
                     </Tippy>
                     <Tippy content="Notice" placement="bottom">
                        <button className={cx('action-btn')}>
                           <NoiticeIcon />
                        </button>
                     </Tippy>
                  </>
               ) : (
                  <>
                     <Button text>Upload</Button>
                     <Button primary>Login</Button>
                  </>
               )}
               <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuOnChange}>
                  {currentUser ? (
                     <Image
                        className={cx('user-avartar')}
                        src="https://static.remove.bg/remove-bg-web/37843dee2531e43723b012aa78be4b91cc211fef/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"
                        alt="Nguyen Van A"
                     />
                  ) : (
                     <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                     </button>
                  )}
               </Menu>
            </div>
         </div>
      </header>
   );
}

export default Header;
