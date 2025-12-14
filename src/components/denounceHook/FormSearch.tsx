import { useState } from "react";
import useDebounce from "./useDebounce";

export const FormSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const valueSearch = useDebounce(searchTerm, 300);
  
//   useEffect(() => {
//     if (valueSearch) {
//         postQueryFetch(valueSearch)
//     }
//   }, [valueSearch])
  
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="ابحث هنا..."
      />
      <p>القيمة الحالية: {searchTerm}</p>
      <p>القيمة المؤجلة: {valueSearch}</p>
    </div>
  );
};
