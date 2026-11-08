import type { INTEGER } from "@wildboar/asn1";

/** Positive integer positions within both `max` and the safe-number range. */
export
function isPositionalInt (max: number): (num: INTEGER) => boolean {
    return function (num: INTEGER): boolean {
        return (
            (num > 0)
            && (num <= max)
            && (typeof num === "bigint"
                ? num <= BigInt(Number.MAX_SAFE_INTEGER)
                : Number.isSafeInteger(num))
        );
    };
}

export default isPositionalInt;
