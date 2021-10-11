/*
    This solution is from https://blog.bitsrc.io/polling-in-react-using-the-useinterval-custom-hook-e2bcefda4197
*/

import React, { useEffect, useRef } from 'react';

interface ICallback {
    (): void;
}
export function useInterval(callback: ICallback, delay: number) {
    const savedCallback = useRef<ICallback>(() => { });

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => {
                clearInterval(id);
            };
        }
    }, [callback, delay]);
}