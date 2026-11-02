/**
 * True if two strings are equal or differ by at most 1 edit
 * (1 substitution, 1 insertion, or 1 deletion).
 */
export
function approximatelyEqualStrings (a: string, b: string): boolean {
    if (a === b) {
        return true;
    }
    const lenA = a.length;
    const lenB = b.length;
    const diff = lenA - lenB;
    if (diff > 1 || diff < -1) {
        return false;
    }
    let i = 0;
    const minLen = lenA < lenB ? lenA : lenB;
    while (i < minLen && a.charCodeAt(i) === b.charCodeAt(i)) {
        i++;
    }
    if (diff === 0) {
        return a.slice(i + 1) === b.slice(i + 1);
    }
    return diff > 0
        ? a.slice(i + 1) === b.slice(i)
        : a.slice(i) === b.slice(i + 1);
}

/**
 * True if two byte/bit arrays are equal or differ by at most 1 element
 * (1 substitution, 1 insertion, or 1 deletion).
 */
export
function approximatelyEqualBytes (
    a: Uint8Array | Uint8ClampedArray,
    b: Uint8Array | Uint8ClampedArray,
): boolean {
    const lenA = a.length;
    const lenB = b.length;
    const diff = lenA - lenB;
    if (diff > 1 || diff < -1) {
        return false;
    }
    let i = 0;
    const minLen = lenA < lenB ? lenA : lenB;
    while (i < minLen && a[i] === b[i]) {
        i++;
    }
    if (i === minLen) {
        return true;
    }
    if (diff === 0) {
        for (let j = i + 1; j < lenA; j++) {
            if (a[j] !== b[j]) {
                return false;
            }
        }
        return true;
    }
    if (diff > 0) {
        for (let j = i; j < lenB; j++) {
            if (a[j + 1] !== b[j]) {
                return false;
            }
        }
        return true;
    }
    for (let j = i; j < lenA; j++) {
        if (a[j] !== b[j + 1]) {
            return false;
        }
    }
    return true;
}

/**
 * True if two bigints differ by at most 1 (`|a - b| <= 1n`).
 */
export
function approximatelyEqualBigInts (a: bigint, b: bigint): boolean {
    const diff = a - b;
    return diff >= -1n && diff <= 1n;
}
