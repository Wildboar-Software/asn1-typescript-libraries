import { Buffer } from "node:buffer";

/**
 * BIT STRING values are `Uint8ClampedArray`; OCTET STRING values are
 * `Uint8Array`. Indexed comparison works on both; `Buffer.compare`
 * does not accept clamped arrays.
 */
export
type ByteArray = Uint8Array | Uint8ClampedArray;

export
type TimingSafeEqual = (
    a: ByteArray,
    b: ByteArray,
) => boolean;

/**
 * Cross-platform JavaScript-native constant-time byte comparison for
 * two `Uint8Array`s of equal length.
 */
export
function jsTimingSafeEqual (a: ByteArray, b: ByteArray): boolean {
    if (a.byteLength !== b.byteLength) {
        throw new RangeError("Input buffers must have the same byte length");
    }
    let diff = 0;
    for (let i = 0; i < a.byteLength; i++) {
        diff |= a[i] ^ b[i];
    }
    return diff === 0;
}

function asUint8Array (bytes: ByteArray): Uint8Array {
    return bytes instanceof Uint8Array
        ? bytes
        : new Uint8Array(bytes.buffer, bytes.byteOffset, bytes.byteLength);
}

let timingSafeEqual: TimingSafeEqual = jsTimingSafeEqual;

export
function setTimingSafeEqual (fn: TimingSafeEqual): void {
    timingSafeEqual = fn;
}

/**
 * Below this byte length, an indexed JavaScript loop is faster than
 * crossing the V8-to-native boundary for `Buffer.compare`.
 */
const SMALL_BYTES_EQUAL_THRESHOLD = 48;

function fastBytesEqual (a: ByteArray, b: ByteArray): boolean {
    const len = a.byteLength;
    if (len !== b.byteLength) {
        return false;
    }
    if (len <= SMALL_BYTES_EQUAL_THRESHOLD) {
        for (let i = 0; i < len; i++) {
            if (a[i] !== b[i]) {
                return false;
            }
        }
        return true;
    }
    return Buffer.compare(asUint8Array(a), asUint8Array(b)) === 0;
}

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
 * When lengths match and are non-zero, `timingSafeEqual` compares
 * the buffers in constant time. When lengths differ, `a` is compared
 * against itself so the comparison still performs work proportional
 * to `a.byteLength`.
 */
export
function ctBytesEqual (a: ByteArray, b: ByteArray): boolean {
    const aView = asUint8Array(a);
    if (aView.byteLength === 0) {
        return b.byteLength === 0;
    }
    if (aView.byteLength !== b.byteLength) {
        timingSafeEqual(aView, aView);
        return false;
    }
    return timingSafeEqual(aView, asUint8Array(b));
}

/**
 * Compare two byte arrays according to `flag & MATCH_FLAG_CONSTANT_TIME`.
 */
export
function bytesEqual (
    a: ByteArray,
    b: ByteArray,
    constantTime: boolean | number,
): boolean {
    return constantTime
        ? ctBytesEqual(a, b)
        : fastBytesEqual(a, b);
}

/**
 * Signed code-point (UTF-16 code unit) comparison of `a` and `b` in
 * time proportional to `Math.min(a.length, b.length)`, without
 * returning on the first differing code unit.
 */
export
function ctCompareCodePoints (a: string, b: string): number {
    const aLen = a.length;
    const bLen = b.length;
    const minLen = Math.min(aLen, bLen);
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
function ctCompareBytes (a: ByteArray, b: ByteArray): number {
    const aLen = a.length;
    const bLen = b.length;
    const minLen = Math.min(aLen, bLen);
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
    haystack: ByteArray,
    start: number,
    needle: ByteArray,
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
    haystack: ByteArray,
    needle: ByteArray,
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
