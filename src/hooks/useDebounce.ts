import { useEffect, useRef} from "react";

/**
 * Оборачивает callback и добавляет к нему дебаунс.
 * Может принимать аргументы оригинального колбека.
 * @param callback - callback функция
 * @param delay - задержка в мс
 * @returns функция обертка.
 */
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