import { useEffect, useState, useRef } from 'react';

//------import library
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

//------import component
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';
import AccountItem from '~/components/AccountItem';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/services/searchService';

const cx = classNames.bind(styles);
function Search() {
   const [searchValue, setSearchValue] = useState('');
   const [searchResult, setSearchResult] = useState([]);
   const [showResult, setShowResult] = useState(true);
   const [loading, setLoading] = useState(false);

   const debouncedValue = useDebounce(searchValue, 500);

   const inputRef = useRef();

   const handleHideResult = () => {
      setShowResult(false);
   };

   useEffect(() => {
      if (!debouncedValue.trim()) {
         setSearchResult([]);
         return;
      }

      const fetchApi = async () => {
         setLoading(true);
         const result = await searchServices.search(debouncedValue);
         setSearchResult(result);

         setLoading(false);
      };
      fetchApi();
   }, [debouncedValue]);

   const handleChange = (e) => {
      const searchValue = e.target.value;
      if (!searchValue.startsWith(' ')) {
         setSearchValue(e.target.value);
      }
   };

   return (
      // Bọc thẻ div trong HeadlessTippy để tránh ăn log warning bạn nhé :))))
      <div>
         <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
               <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                  <PopperWrapper>
                     <h3 className={cx('search-title')}>Account</h3>
                     {searchResult.map((item) => {
                        return <AccountItem key={item.id} data={item} />;
                     })}
                  </PopperWrapper>
               </div>
            )}
            onClickOutside={handleHideResult}
         >
            {/* Search */}
            <div className={cx('search')}>
               <input
                  ref={inputRef}
                  value={searchValue}
                  onChange={handleChange}
                  onFocus={() => setShowResult(true)}
                  spellCheck={false}
                  placeholder="Search accounts and videos..."
               />
               {!!searchValue && !loading && (
                  <button
                     className={cx('clear')}
                     onClick={() => {
                        setSearchValue('');
                        inputRef.current.focus();
                     }}
                  >
                     <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
               )}

               {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

               <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
               </button>
            </div>
         </HeadlessTippy>
      </div>
   );
}

export default Search;
