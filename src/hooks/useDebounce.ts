import { useEffect, useRef} from "react";

export const useDebounce = (callback: (...args: any[]) => void, delay: number) => {
    const timeoutRef = useRef<number | undefined>(undefined);

    const debounce = (...args: any[]) => {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            callback(...args);
        }, delay);
    };

    useEffect(() => {
        return () => clearTimeout(timeoutRef.current);
    }, []);

    return debounce;
}