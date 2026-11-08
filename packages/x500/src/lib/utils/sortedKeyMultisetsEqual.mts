import { stringsEqual } from "../matching/constantTime.mjs";

/**
 * Compare derived key multisets in O(n log n) comparisons, preserving counts.
 * Only the temporary key arrays are sorted. Constant-time mode scans every
 * aligned key without an early mismatch return; key generation and sorting
 * themselves are not timing-independent.
 */
export function sortedKeyMultisetsEqual (
    a: string[],
    b: string[],
    constantTime: boolean | number = false,
): boolean {
    if (a.length !== b.length) return false;
    a.sort();
    b.sort();
    let matched = true;
    for (let i = 0; i < a.length; i++) {
        if (!stringsEqual(a[i], b[i], constantTime)) {
            if (!constantTime) return false;
            matched = false;
        }
    }
    return matched;
}
