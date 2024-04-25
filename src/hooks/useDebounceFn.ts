import { useEffect, useRef, useCallback } from "react";

type CallbackFunction = () => void;

const useDebounceFn = (callback: CallbackFunction, delay: number = 600): CallbackFunction => {
    const ref = useRef<CallbackFunction>();
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        ref.current = callback;
    }, [callback]);

    const debouncedCallback = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            ref.current?.();
        }, delay);
    }, [delay]);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return debouncedCallback;
};

export default useDebounceFn;
