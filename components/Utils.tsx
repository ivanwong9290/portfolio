import { useEffect, useRef } from "react";

export const buildClassName = (classes: any[]): string => {
    return classes.join(" ");
}

export const calcPagePercentage = (scrollHeight: number, maxHeight: number) => {
    return scrollHeight / maxHeight * 100;
}