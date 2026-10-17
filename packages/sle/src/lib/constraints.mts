/**
 * Shared checks for ASN.1 integer constraints.
 * `INTEGER` values are `number` for the ranges used by SLE, and `bigint` once
 * they no longer fit in a safe integer.
 */
export function integerInRange (value: number | bigint, min: number, max: number): boolean {
    if (typeof value === "bigint") {
        return value >= BigInt(min) && value <= BigInt(max);
    }
    return value >= min && value <= max;
}

function isIntegerSet (
    allowed: ReadonlySet<bigint> | readonly bigint[],
): allowed is ReadonlySet<bigint> {
    return !Array.isArray(allowed);
}

export function integerIsOneOf (
    value: number | bigint,
    allowed: ReadonlySet<bigint> | readonly bigint[],
): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return isIntegerSet(allowed) ? allowed.has(n) : allowed.includes(n);
}
