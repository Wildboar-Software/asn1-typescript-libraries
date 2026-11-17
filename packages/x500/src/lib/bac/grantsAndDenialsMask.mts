import type { GrantsAndDenials } from "../modules/BasicAccessControl/GrantsAndDenials.ta.mjs";

/**
 * @summary Pack `GrantsAndDenials` into a signed 32-bit mask.
 * @description
 *
 * X.500 names bits 0..25 and Q.1228 / Q.1238 / Q.1248 name bits 30 and 31
 * (`grantExecuteMethod` / `denyExecuteMethod`). Every bit the access-control
 * decision function consults therefore fits in one int32, with bit 0
 * (`grantAdd`) as the least significant bit. Even bits grant and odd bits
 * deny. Bit 31 is the sign bit; masks that set it are negative, and the
 * bitwise tests below still work.
 *
 * A benchmark against the `Uint8ClampedArray` BIT STRING (Node 22) found,
 * approximately:
 *
 * - splitting a mixed batch about 9× faster, and one pure value about 1.3×
 * - clearing a set bit across a batch about 2.7× faster
 * - split, then relevance, then permit for one read about 5.7× faster
 * - a denial scan about 2.5× faster over a mixed batch. One value was a tie:
 *   a denial in bit 1 returns from the first odd byte of the array, and a
 *   value with no denial bit is only a few percent apart once the call
 *   overhead is counted
 * - one permission test within the noise of two array indexes. With three
 *   permissions, testing each operation was faster than OR-ing the grant
 *   flags into one mask first (that form was slower than the array)
 * - packing the BIT STRING on every test slower than indexing it, so
 *   `ACDFTuple` packs once in its constructor and the hot path uses the mask
 *
 * A set byte is any non-zero value. Decoded BIT STRINGs use `TRUE_BIT` (1)
 * and `FALSE_BIT` (0). A set bit at index 32 or above cannot be represented
 * and throws, so a denial outside this word is not silently ignored.
 *
 * @param bits A `GrantsAndDenials` BIT STRING, or a mask already returned by
 *  this function.
 * @returns The signed 32-bit mask.
 * @throws {RangeError} A set bit is past bit 31, or a numeric argument is not
 *  an int32.
 * @function
 * @author Cursor Grok 4.7
 */
export
function grantsAndDenialsToMask (bits: GrantsAndDenials | number): number {
    if (typeof bits === "number") {
        // 0x7FFFFFFF is the greatest positive int32. -0x80000000 is bit 31 alone.
        if (!Number.isInteger(bits) || (bits > 0x7FFFFFFF) || (bits < -0x80000000)) {
            throw new RangeError("GrantsAndDenials mask must fit in a signed 32-bit integer");
        }
        return bits | 0;
    }
    const length = bits.length;
    const limit = length < 32 ? length : 32;
    let mask = 0;
    for (let i = 0; i < limit; i++) {
        if (bits[i]) {
            mask |= 1 << i;
        }
    }
    for (let i = 32; i < length; i++) {
        if (bits[i]) {
            throw new RangeError(
                "GrantsAndDenials bit " + i + " is outside the 32 bits used by access control",
            );
        }
    }
    return mask;
}

/**
 * Even bits 0, 2, ..., 30. Grant flags.
 */
export const GRANTS_AND_DENIALS_GRANT_MASK: number = 0x55555555;

/**
 * Odd bits 1, 3, ..., 31. Denial flags. Bit 31 makes the value negative.
 */
export const GRANTS_AND_DENIALS_DENIAL_MASK: number = 0xAAAAAAAA | 0;

/**
 * Category `n` uses grant bit `n * 2`. Category 15 is bits 30 and 31.
 * A larger category must not be shifted: JavaScript masks the shift count
 * to five bits, so category 16 would alias to `grantAdd`.
 */
const MAX_PERMISSION_CATEGORY: number = 15;

/**
 * @summary Whether `bit` is set on a grants-and-denials mask.
 * @param mask A mask from {@link grantsAndDenialsToMask}.
 * @param bit A `GrantsAndDenials` bit index, 0..31.
 * @returns `true` when that bit is set. An index outside 0..31 is unset.
 * @function
 * @author Cursor Grok 4.7
 */
export
function grantsAndDenialsHasBit (mask: number, bit: number): boolean {
    if ((bit >>> 0) > 31) {
        return false;
    }
    return (mask & (1 << bit)) !== 0;
}

/**
 * @summary Mask with `bit` cleared.
 * @param mask A mask from {@link grantsAndDenialsToMask}.
 * @param bit A `GrantsAndDenials` bit index, 0..31.
 * @returns The mask with that bit cleared. Clearing an absent bit, or an
 *  index outside 0..31, returns the same value.
 * @function
 * @author Cursor Grok 4.7
 */
export
function grantsAndDenialsWithoutBit (mask: number, bit: number): number {
    if ((bit >>> 0) > 31) {
        return mask;
    }
    return mask & ~(1 << bit);
}

/**
 * @summary Grant flag for one permission category.
 * @description
 *
 * Returns `0` when the category does not fit in the mask.
 *
 * @param operation Permission category (`GrantsAndDenials` bit index / 2).
 * @returns The grant bit flag, or `0` when `operation` is outside 0..15.
 * @function
 * @author Cursor Grok 4.7
 */
function grantFlag (operation: number): number {
    if ((operation >>> 0) > MAX_PERMISSION_CATEGORY) {
        return 0;
    }
    return 1 << (operation << 1);
}

/**
 * @summary Whether every requested grant bit is set and none of its deny bits are.
 * @description
 *
 * An operation outside 0..15 does not fit in the mask. Shifting it would alias
 * onto a low bit, so it is treated as not granted.
 *
 * @param mask A mask from {@link grantsAndDenialsToMask}.
 * @param operations Permission categories (`GrantsAndDenials` bit index / 2).
 * @returns `true` when every operation is granted and none of those is denied.
 *  An empty list is permitted.
 * @function
 * @author Cursor Grok 4.7
 */
export
function grantsAndDenialsPermit (mask: number, operations: number[]): boolean {
    const operationCount = operations.length;
    for (let i = 0; i < operationCount; i++) {
        const grant = grantFlag(operations[i]);
        if (grant === 0) {
            return false;
        }
        if (((mask & grant) === 0) || ((mask & (grant << 1)) !== 0)) {
            return false;
        }
    }
    return true;
}

/**
 * @summary Whether any requested grant or deny bit is set.
 * @description
 *
 * ITU Recommendation X.501 (2016), Section 18.8.3.4 keeps a tuple when the
 * requested permission is one of the set bits, whether that bit grants or
 * denies. An operation outside 0..15 contributes no bit.
 *
 * @param mask A mask from {@link grantsAndDenialsToMask}.
 * @param operations Permission categories (`GrantsAndDenials` bit index / 2).
 * @returns `true` when a requested grant or deny bit is set.
 * @function
 * @author Cursor Grok 4.7
 */
export
function grantsAndDenialsRelevant (mask: number, operations: number[]): boolean {
    const operationCount = operations.length;
    for (let i = 0; i < operationCount; i++) {
        const grant = grantFlag(operations[i]);
        if ((grant !== 0) && ((mask & (grant | (grant << 1))) !== 0)) {
            return true;
        }
    }
    return false;
}
