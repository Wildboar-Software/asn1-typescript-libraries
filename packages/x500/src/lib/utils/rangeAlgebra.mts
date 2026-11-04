import {
    ASN1Construction,
    ASN1TagClass,
    ASN1UniversalType,
    DERElement,
    type INTEGER,
    type OCTET_STRING,
} from "@wildboar/asn1";

/**
 * @summary One-dimensional bound used by X.500 range classes.
 * @description
 *
 * `undefined` means that side is unbounded. Values are compared as
 * signed integers (milliseconds for `Date`, numeric value for
 * `INTEGER` / DER INTEGER bytes).
 *
 * @typedef {bigint | undefined} Bound
 */
export type Bound = bigint | undefined;

/**
 * @summary Closed or half-open interval `[start, end]` / `[start, end)`.
 * @description
 *
 * This copies what works from the VS Code `Range` API and applies it
 * to a 1-D ordered line: intersection is the overlap (or
 * `undefined`), union is the covering interval, containment is
 * inclusive of present bounds, and equality is bound equality.
 * Unbounded sides are `undefined`.
 *
 * Unlike VS Code `Range`, inverted bounds (`start` after `end`) are
 * **not** swapped: that interval is empty and contains nothing.
 *
 * @typedef {object} Interval
 * @property {Bound} start Inclusive lower bound, or unbounded.
 * @property {Bound} end Upper bound (inclusive unless `exclusiveEnd`).
 */
export type Interval = {
    start: Bound;
    end: Bound;
};

/**
 * @summary Compare two bounds.
 * @description
 *
 * Unbounded start is treated as −∞ when `unboundedIsLess` is true
 * (the start of an interval). Unbounded end is treated as +∞ when
 * `unboundedIsLess` is false.
 *
 * @param {Bound} a First bound.
 * @param {Bound} b Second bound.
 * @param {boolean} unboundedIsLess Whether `undefined` sorts first.
 * @returns {number} Negative, `0`, or positive.
 * @function
 */
export function compareBounds (
    a: Bound,
    b: Bound,
    unboundedIsLess: boolean,
): number {
    if (a === undefined && b === undefined) {
        return 0;
    }
    if (a === undefined) {
        return unboundedIsLess ? -1 : 1;
    }
    if (b === undefined) {
        return unboundedIsLess ? 1 : -1;
    }
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}

/**
 * @summary Compare two intervals by start, then end.
 * @param {Interval} a First interval.
 * @param {Interval} b Second interval.
 * @returns {number} Negative, `0`, or positive.
 * @function
 */
export function compareIntervals (a: Interval, b: Interval): number {
    const startDiff = compareBounds(a.start, b.start, true);
    if (startDiff !== 0) {
        return startDiff;
    }
    return compareBounds(a.end, b.end, false);
}

/**
 * @summary Later of two lower bounds (−∞ loses).
 * @param {Bound} a First start.
 * @param {Bound} b Second start.
 * @returns {Bound} The greater start.
 * @function
 */
export function laterStart (a: Bound, b: Bound): Bound {
    if (a === undefined) {
        return b;
    }
    if (b === undefined) {
        return a;
    }
    return (a >= b) ? a : b;
}

/**
 * @summary Earlier of two upper bounds (+∞ loses).
 * @param {Bound} a First end.
 * @param {Bound} b Second end.
 * @returns {Bound} The lesser end.
 * @function
 */
export function earlierEnd (a: Bound, b: Bound): Bound {
    if (a === undefined) {
        return b;
    }
    if (b === undefined) {
        return a;
    }
    return (a <= b) ? a : b;
}

/**
 * @summary Earlier of two lower bounds (−∞ wins).
 * @param {Bound} a First start.
 * @param {Bound} b Second start.
 * @returns {Bound} The lesser start.
 * @function
 */
export function earlierStart (a: Bound, b: Bound): Bound {
    if ((a === undefined) || (b === undefined)) {
        return undefined;
    }
    return (a <= b) ? a : b;
}

/**
 * @summary Later of two upper bounds (+∞ wins).
 * @param {Bound} a First end.
 * @param {Bound} b Second end.
 * @returns {Bound} The greater end.
 * @function
 */
export function laterEnd (a: Bound, b: Bound): Bound {
    if ((a === undefined) || (b === undefined)) {
        return undefined;
    }
    return (a >= b) ? a : b;
}

/**
 * @summary Whether the interval matches no point.
 * @description
 *
 * Copies VS Code `Range.isEmpty` in spirit, but emptiness here is
 * inverted (or exclusive-empty) bounds rather than a zero-width
 * closed range. A closed interval covering a single point is not
 * empty. An exclusive interval with `start === end` is empty.
 *
 * @param {Interval} interval The interval.
 * @param {boolean} exclusiveEnd Whether `end` is excluded.
 * @returns {boolean} `true` iff no point is in the interval.
 * @function
 */
export function isEmptyInterval (
    interval: Interval,
    exclusiveEnd: boolean,
): boolean {
    if ((interval.start === undefined) || (interval.end === undefined)) {
        return false;
    }
    return exclusiveEnd
        ? (interval.start >= interval.end)
        : (interval.start > interval.end);
}

/**
 * @summary Whether `t` lies in the interval.
 * @param {Interval} interval The interval.
 * @param {bigint} t The point.
 * @param {boolean} exclusiveEnd Whether `end` is excluded.
 * @returns {boolean} `true` iff `t` is in the interval.
 * @function
 */
export function containsPoint (
    interval: Interval,
    t: bigint,
    exclusiveEnd: boolean,
): boolean {
    if (isEmptyInterval(interval, exclusiveEnd)) {
        return false;
    }
    if ((interval.start !== undefined) && (t < interval.start)) {
        return false;
    }
    if (interval.end !== undefined) {
        if (exclusiveEnd) {
            if (t >= interval.end) {
                return false;
            }
        } else if (t > interval.end) {
            return false;
        }
    }
    return true;
}

/**
 * @summary Whether `inner` is a subset of `outer`.
 * @description
 *
 * Copies VS Code `Range.contains` for another range: both bounds of
 * `inner` must lie in `outer`. An empty `inner` is not contained.
 * An unbounded side of `inner` is contained only if `outer` is also
 * unbounded on that side.
 *
 * @param {Interval} outer The containing interval.
 * @param {Interval} inner The candidate subset.
 * @param {boolean} exclusiveEnd Whether ends are excluded.
 * @returns {boolean} `true` iff `inner` ⊆ `outer`.
 * @function
 */
export function containsInterval (
    outer: Interval,
    inner: Interval,
    exclusiveEnd: boolean,
): boolean {
    if (isEmptyInterval(inner, exclusiveEnd)) {
        return false;
    }
    if (isEmptyInterval(outer, exclusiveEnd)) {
        return false;
    }
    if (inner.start === undefined) {
        if (outer.start !== undefined) {
            return false;
        }
    } else if (!containsPoint(outer, inner.start, exclusiveEnd)) {
        return false;
    }
    if (inner.end === undefined) {
        return (outer.end === undefined);
    }
    if (exclusiveEnd) {
        if ((outer.end !== undefined) && (inner.end > outer.end)) {
            return false;
        }
        if (
            (outer.start !== undefined)
            && (inner.end <= outer.start)
        ) {
            return false;
        }
        return true;
    }
    return containsPoint(outer, inner.end, exclusiveEnd);
}

/**
 * @summary Overlap of two intervals, if any.
 * @description
 *
 * Copies VS Code `Range.intersection`: greater start, smaller end,
 * or `undefined` when there is no overlap (including when either
 * interval is empty).
 *
 * @param {Interval} a First interval.
 * @param {Interval} b Second interval.
 * @param {boolean} exclusiveEnd Whether ends are excluded.
 * @returns {Interval | undefined} The overlap, or `undefined`.
 * @function
 */
export function intersectionOf (
    a: Interval,
    b: Interval,
    exclusiveEnd: boolean,
): Interval | undefined {
    if (
        isEmptyInterval(a, exclusiveEnd)
        || isEmptyInterval(b, exclusiveEnd)
    ) {
        return undefined;
    }
    const overlap: Interval = {
        start: laterStart(a.start, b.start),
        end: earlierEnd(a.end, b.end),
    };
    if (isEmptyInterval(overlap, exclusiveEnd)) {
        return undefined;
    }
    return overlap;
}

/**
 * @summary Covering interval of `a` and `b`.
 * @description
 *
 * Copies VS Code `Range.union`: smaller start, greater end. A gap
 * between the intervals is filled.
 *
 * @param {Interval} a First interval.
 * @param {Interval} b Second interval.
 * @returns {Interval} One interval spanning both.
 * @function
 */
export function unionOf (a: Interval, b: Interval): Interval {
    return {
        start: earlierStart(a.start, b.start),
        end: laterEnd(a.end, b.end),
    };
}

/**
 * @summary Whether two intervals share any point.
 * @param {Interval} a First interval.
 * @param {Interval} b Second interval.
 * @param {boolean} exclusiveEnd Whether ends are excluded.
 * @returns {boolean} `true` iff the intervals overlap.
 * @function
 */
export function overlapsInterval (
    a: Interval,
    b: Interval,
    exclusiveEnd: boolean,
): boolean {
    return (intersectionOf(a, b, exclusiveEnd) !== undefined);
}

/**
 * @summary Whether `other` abuts `interval` with no gap or overlap.
 * @description
 *
 * Inclusive: one interval ends at `T` and the other starts at
 * `T + 1`. Exclusive: one interval's exclusive end equals the
 * other's start. Returns `-1` if `other` is adjacent below,
 * `1` if adjacent above, `0` otherwise.
 *
 * @param {Interval} interval This interval.
 * @param {Interval} other The other interval.
 * @param {boolean} exclusiveEnd Whether ends are excluded.
 * @returns {-1 | 0 | 1} Adjacent side, or `0`.
 * @function
 */
export function adjacencyOf (
    interval: Interval,
    other: Interval,
    exclusiveEnd: boolean,
): -1 | 0 | 1 {
    if (
        isEmptyInterval(interval, exclusiveEnd)
        || isEmptyInterval(other, exclusiveEnd)
    ) {
        return 0;
    }
    if (
        (interval.end !== undefined)
        && (other.start !== undefined)
    ) {
        const touching = exclusiveEnd
            ? (interval.end === other.start)
            : ((interval.end + 1n) === other.start);
        if (touching) {
            return 1;
        }
    }
    if (
        (other.end !== undefined)
        && (interval.start !== undefined)
    ) {
        const touching = exclusiveEnd
            ? (other.end === interval.start)
            : ((other.end + 1n) === interval.start);
        if (touching) {
            return -1;
        }
    }
    return 0;
}

/**
 * @summary `Date` as a bound (milliseconds since epoch).
 * @param {Date} [date] Instant, or omitted for unbounded.
 * @returns {Bound} Milliseconds, or `undefined`.
 * @function
 */
export function dateToBound (date: Date | undefined): Bound {
    return (date === undefined) ? undefined : BigInt(date.getTime());
}

/**
 * @summary Bound back to a `Date`.
 * @param {Bound} bound Milliseconds, or unbounded.
 * @returns {Date | undefined} The instant, or `undefined`.
 * @function
 */
export function boundToDate (bound: Bound): Date | undefined {
    return (bound === undefined) ? undefined : new Date(Number(bound));
}

/**
 * @summary ASN.1 `INTEGER` as a bound.
 * @param {INTEGER} [value] Integer, or omitted for unbounded.
 * @returns {Bound} The integer as `bigint`, or `undefined`.
 * @function
 */
export function integerToBound (value: INTEGER | undefined): Bound {
    return (value === undefined) ? undefined : BigInt(value);
}

/**
 * @summary Bound back to an ASN.1 `INTEGER`.
 * @description
 *
 * Safe integers are returned as `number`; larger magnitudes stay
 * `bigint`.
 *
 * @param {Bound} bound Integer, or unbounded.
 * @returns {INTEGER | undefined} The integer, or `undefined`.
 * @function
 */
export function boundToInteger (bound: Bound): INTEGER | undefined {
    if (bound === undefined) {
        return undefined;
    }
    if (
        (bound >= BigInt(Number.MIN_SAFE_INTEGER))
        && (bound <= BigInt(Number.MAX_SAFE_INTEGER))
    ) {
        return Number(bound);
    }
    return bound;
}

/**
 * @summary DER INTEGER contents as a bound.
 * @param {OCTET_STRING} [bytes] Two's-complement INTEGER value.
 * @returns {Bound} The integer, or `undefined` if omitted.
 * @function
 */
export function integerBytesToBound (
    bytes: OCTET_STRING | undefined,
): Bound {
    if (bytes === undefined) {
        return undefined;
    }
    const el = new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.integer,
    );
    el.value = new Uint8Array(bytes);
    return BigInt(el.integer);
}

/**
 * @summary Bound as DER INTEGER contents.
 * @param {Bound} bound Integer, or unbounded.
 * @returns {OCTET_STRING | undefined} DER INTEGER bytes, or omitted.
 * @function
 */
export function boundToIntegerBytes (
    bound: Bound,
): OCTET_STRING | undefined {
    if (bound === undefined) {
        return undefined;
    }
    const el = new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.integer,
    );
    el.integer = bound;
    return el.value;
}

/**
 * @summary Euclidean remainder of `n` modulo `m`.
 * @param {bigint} n Dividend.
 * @param {bigint} m Modulus (must not be `0`).
 * @returns {bigint} Remainder in `0 .. |m|-1`.
 * @function
 */
export function euclideanMod (n: bigint, m: bigint): bigint {
    if (m === 0n) {
        throw new Error("modulus must not be 0");
    }
    const abs = (m < 0n) ? -m : m;
    const r = n % abs;
    return (r < 0n) ? (r + abs) : r;
}

/**
 * @summary Whether two optional INTEGER encodings are the same number.
 * @param {OCTET_STRING} [a] First encoding, or omitted.
 * @param {OCTET_STRING} [b] Second encoding, or omitted.
 * @returns {boolean} `true` iff both omitted or both equal as integers.
 * @function
 */
export function sameIntegerBytes (
    a: OCTET_STRING | undefined,
    b: OCTET_STRING | undefined,
): boolean {
    if (a === undefined && b === undefined) {
        return true;
    }
    if ((a === undefined) || (b === undefined)) {
        return false;
    }
    return integerBytesToBound(a) === integerBytesToBound(b);
}
