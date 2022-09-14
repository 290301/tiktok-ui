//------import library
import classNames from 'classnames/bind';

//------import component
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Wrapper({ children }) {
   return <div className={cx('wrapper')}>{children}</div>;
}

export default Wrapper;
