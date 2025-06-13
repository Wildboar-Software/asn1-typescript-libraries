import type { INTEGER } from "asn1-ts";

export
function isPositionalInt (max: number): (num: INTEGER) => boolean {
    return function (num: INTEGER): boolean {
        return (
            (num > 0)
            && (num <= max)
            && (Number.isSafeInteger(num))
        );
    };
}

export default isPositionalInt;
