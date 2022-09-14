import { forwardRef } from 'react';
import images from '~/assets/images';

const Image = forwardRef(({ src, alt, className, fallback }, ref) => {
   return (
      <img
         ref={ref}
         src={src || fallback || images.NoImage}
         alt={alt}
         className={className}
         onError={(e) => (e.target.src = images.NoImage)}
      />
   );
});

export default Image;

// Thứ tự chọn Image
// 1. Truyền src
// 2. Trong trường hợp không có src có thể truyền fallback theo ý muốn(fallback: ảnh thay thế trong trường hợp src lỗi)
// 3. cũng như trường hợp 2 nhưng nếu fallback lỗi luôn thì dùng ảnh mặc định đã customize
// 4. Nếu truyền src không phải là ảnh thì vào onError => chạy vào số 3

// Tình huống này phải dùng forwardRef vì funtion component Image này được sử dụng
// bên file '~components/Header/index.js' và được bọc trong thẻ Menu(thư viện Tippy)
// Lúc này Tippy cần ref của img trong component Image để xác định vị trí của thẻ img trong DOM
// Để show tooltip khi hover

// Log Warning khi không sử dụng forwardRef:
//  Warning: forwardRef render functions accept exactly two parameters:
//  props and ref. Did you forget to use the ref parameter?
