import { timingSafeEqual } from "node:crypto";
import { Buffer } from "node:buffer";

/**
 * Compare two strings in time proportional to `a.length`, without
 * exiting on the first differing UTF-16 code unit.
 *
 * `a` is the presented assertion (known to the caller) and `b` is
 * the stored value. Iterating `a.length` times avoids a branch on
 * `b.length` while still reading from `b` on every iteration when
 * `b` is non-empty.
 */
export
function ctStringsEqual (a: string, b: string): boolean {
    const aLen = a.length;
    const bLen = b.length;
    let diff = aLen ^ bLen;
    for (let i = 0; i < aLen; i++) {
        const bCode = bLen === 0 ? 0 : b.charCodeAt(i < bLen ? i : 0);
        diff |= a.charCodeAt(i) ^ bCode;
    }
    return diff === 0;
}

/**
 * Compare two strings according to `flag & MATCH_FLAG_CONSTANT_TIME`.
 */
export
function stringsEqual (
    a: string,
    b: string,
    constantTime: boolean | number,
): boolean {
    return constantTime ? ctStringsEqual(a, b) : a === b;
}

/**
 * Compare two byte arrays in time proportional to `a.byteLength`,
 * without exiting on the first differing byte.
 *
 * When lengths match and are non-zero, `node:crypto`'s
 * `timingSafeEqual` compares the buffers in constant time. When
 * lengths differ, `a` is compared against itself so the comparison
 * still performs work proportional to `a.byteLength`.
 */
export
function ctBytesEqual (a: Uint8Array, b: Uint8Array): boolean {
    if (a.byteLength === 0) {
        return b.byteLength === 0;
    }
    if (a.byteLength !== b.byteLength) {
        timingSafeEqual(a, a);
        return false;
    }
    return timingSafeEqual(a, b);
}

/**
 * Compare two byte arrays according to `flag & MATCH_FLAG_CONSTANT_TIME`.
 */
export
function bytesEqual (
    a: Uint8Array,
    b: Uint8Array,
    constantTime: boolean | number,
): boolean {
    return constantTime
        ? ctBytesEqual(a, b)
        : Buffer.compare(a, b) === 0;
}

/**
 * Signed code-point (UTF-16 code unit) comparison of `a` and `b` in
 * time proportional to `Math.max(a.length, b.length)`, without
 * returning on the first differing code unit.
 */
export
function ctCompareCodePoints (a: string, b: string): number {
    const aLen = a.length;
    const bLen = b.length;
    const minLen = aLen < bLen ? aLen : bLen;
    let result = 0;
    for (let i = 0; i < minLen; i++) {
        const diff = a.charCodeAt(i) - b.charCodeAt(i);
        const take = (result === 0 && diff !== 0) ? 1 : 0;
        result += take * diff;
    }
    if (result !== 0) {
        return result < 0 ? -1 : 1;
    }
    if (aLen < bLen) {
        return -1;
    }
    if (aLen > bLen) {
        return 1;
    }
    return 0;
}

/**
 * Signed lexicographical byte comparison of `a` and `b` in time
 * proportional to `Math.min(a.length, b.length)`, without returning
 * on the first differing byte.
 */
export
function ctCompareBytes (a: Uint8Array, b: Uint8Array): number {
    const aLen = a.length;
    const bLen = b.length;
    const minLen = aLen < bLen ? aLen : bLen;
    let result = 0;
    for (let i = 0; i < minLen; i++) {
        const diff = a[i] - b[i];
        const take = (result === 0 && diff !== 0) ? 1 : 0;
        result += take * diff;
    }
    if (result !== 0) {
        return result < 0 ? -1 : 1;
    }
    if (aLen < bLen) {
        return -1;
    }
    if (aLen > bLen) {
        return 1;
    }
    return 0;
}

/**
 * Return 1 when `haystack` contains `needle` at `start`, otherwise 0.
 * Always runs `needle.length` iterations.
 */
export
function ctBytesEqualAt (
    haystack: Uint8Array,
    start: number,
    needle: Uint8Array,
): number {
    const n = needle.length;
    const hlen = haystack.length;
    let mismatch = (start >= 0 && (start + n) <= hlen) ? 0 : 1;
    for (let j = 0; j < n; j++) {
        const pos = start + j;
        const inPos = (pos >= 0 && pos < hlen) ? 1 : 0;
        const hb = hlen === 0 ? 0 : haystack[inPos ? pos : 0];
        mismatch |= (hb ^ needle[j]) | (inPos ^ 1);
    }
    return mismatch === 0 ? 1 : 0;
}

/**
 * Earliest index of `needle` at or after `from` and ending at or
 * before `end` in `haystack`, scanning every alignment in constant
 * time. Returns -1 on a miss.
 */
export
function ctBytesIndexOf (
    haystack: Uint8Array,
    needle: Uint8Array,
    from: number,
    end: number,
): number {
    const needleLength = needle.length;
    const haystackLength = haystack.length;
    let earliestIndex = -1;
    for (let index = 0; index <= haystackLength; index++) {
        const needleMatchesHere = ctBytesEqualAt(haystack, index, needle);
        const startsAtOrAfterWindow = index >= from ? 1 : 0;
        const endsAtOrBeforeWindow = (index + needleLength) <= end ? 1 : 0;
        const noEarlierMatch = earliestIndex < 0 ? 1 : 0;
        const useThisIndex = needleMatchesHere
            & startsAtOrAfterWindow
            & endsAtOrBeforeWindow
            & noEarlierMatch;
        earliestIndex += useThisIndex * (index - earliestIndex);
    }
    return earliestIndex;
}
