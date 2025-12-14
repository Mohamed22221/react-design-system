import { useEffect, useState } from "react";

function useDebounce<T>(value : T, delay : number = 400) : T {
    const [debounceValue , setDebounceValue] = useState<T>(value)
    
    useEffect(() => {
        const TimerDebounce = setTimeout(() => {
            setDebounceValue(value)
        }, delay);

        return () =>{
            clearTimeout(TimerDebounce)
        }
    }, [value , delay])
    
    return debounceValue
}

export default useDebounce