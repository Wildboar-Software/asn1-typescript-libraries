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
 * True if two equal-length byte/bit arrays are identical or differ in at most 1 position.
 */
function bytesDifferByAtMostOneSubstitution (
    a: Uint8Array | Uint8ClampedArray,
    b: Uint8Array | Uint8ClampedArray,
): boolean {
    let forgiven = false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            if (forgiven) {
                return false;
            }
            forgiven = true;
        }
    }
    return true;
}

/**
 * True if `longer` (length N + 1) and `shorter` (length N) match when one
 * element is removed from `longer`.
 */
function bytesDifferByOneInsertion (
    longer: Uint8Array | Uint8ClampedArray,
    shorter: Uint8Array | Uint8ClampedArray,
): boolean {
    let forgiven = false;
    for (let i = 0; i < shorter.length; i++) {
        if (longer[forgiven ? i + 1 : i] !== shorter[i]) {
            if (forgiven) {
                return false;
            }
            forgiven = true;
            i--;
        }
    }
    return true;
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
    const diff = a.length - b.length;
    if (diff === 0) {
        return bytesDifferByAtMostOneSubstitution(a, b);
    }
    if (diff === 1) {
        return bytesDifferByOneInsertion(a, b);
    }
    if (diff === -1) {
        return bytesDifferByOneInsertion(b, a);
    }
    return false;
}

/**
 * True if two bigints differ by at most 1 (`|a - b| <= 1n`).
 */
export
function approximatelyEqualBigInts (a: bigint, b: bigint): boolean {
    const diff = a - b;
    return diff >= -1n && diff <= 1n;
}
