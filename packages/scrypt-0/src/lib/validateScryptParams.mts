import type { INTEGER } from "@wildboar/asn1";
import type { Scrypt_params } from "./modules/Scrypt-0/Scrypt-params.ta.mjs";

/**
 * 2^32 − 1. Used in the RFC 7914 bounds on `p` and `dkLen`.
 */
const TWO_32_MINUS_1: bigint = 0xFFFF_FFFFn;

/**
 * Maximum `dkLen`: `(2^32 − 1) * hLen` with `hLen = 32` (RFC 7914 §2 / §6).
 */
const MAX_DKLEN: bigint = TWO_32_MINUS_1 * 32n;

/**
 * Convert an ASN.1 `INTEGER` to `bigint`, or `undefined` if it is not an
 * exact integer (non-integers, infinities, and unsafe `number` values).
 */
function integerToBigInt (value: INTEGER): bigint | undefined {
    if (typeof value === "bigint") {
        return value;
    }
    if ((typeof value === "number") && Number.isSafeInteger(value)) {
        return BigInt(value);
    }
    return undefined;
}

/**
 * True iff `n` is a power of two **greater than 1** (RFC 7914 §2: N must be
 * larger than 1 and a power of 2).
 */
function isPowerOfTwoGreaterThanOne (n: bigint): boolean {
    return ((n > 1n) && ((n & (n - 1n)) === 0n));
}

/**
 * @summary Validate `Scrypt-params` against RFC 7914
 * @description
 *
 * Checks the algorithmic bounds on N, r, p, and dkLen from
 * [RFC 7914 §2](https://datatracker.ietf.org/doc/html/rfc7914#section-2)
 * and [§6](https://datatracker.ietf.org/doc/html/rfc7914#section-6).
 * ASN.1 `INTEGER (1..MAX)` ([§7](https://datatracker.ietf.org/doc/html/rfc7914#section-7))
 * is implied by those bounds except that `costParameter` N must be
 * **larger than 1**, not merely ≥ 1.
 *
 * - `blockSize` r ≥ 1
 * - `costParameter` N > 1, a power of 2, and N < 2^(128 * r / 8)
 * - `parallelizationParameter` p ≥ 1 and
 *   p ≤ ((2^32 − 1) * 32) / (128 * r)
 * - `keyLength` dkLen, if present, ≥ 1 and
 *   dkLen ≤ (2^32 − 1) * 32
 *
 * Salt may be empty; RFC 7914 §12 uses an empty salt in a test vector.
 * This does not enforce implementation memory or CPU limits discussed
 * in [RFC 7914 §14](https://datatracker.ietf.org/doc/html/rfc7914#section-14).
 *
 * @param params The scrypt parameters to validate.
 * @returns `true` if the parameters satisfy RFC 7914, otherwise `false`.
 * @function
 */
export
function validateScryptParams (params: Scrypt_params): boolean {
    if (!(params.salt instanceof Uint8Array)) {
        return false;
    }

    const r = integerToBigInt(params.blockSize);
    const N = integerToBigInt(params.costParameter);
    const p = integerToBigInt(params.parallelizationParameter);
    if ((r === undefined) || (N === undefined) || (p === undefined)) {
        return false;
    }

    // r ≥ 1 (ASN.1 INTEGER (1..MAX); RFC 7914 §7)
    if (r < 1n) {
        return false;
    }

    // N > 1, a power of 2, and N < 2^(128 * r / 8) = 2^(16 * r)
    // (RFC 7914 §2, §5, §6). N < 2^k iff N >> k === 0.
    if (!isPowerOfTwoGreaterThanOne(N)) {
        return false;
    }
    if ((N >> (16n * r)) !== 0n) {
        return false;
    }

    // p ≥ 1 and p ≤ ((2^32 − 1) * 32) / (128 * r)
    // ⇔ 4 * p * r ≤ 2^32 − 1 (RFC 7914 §2 / §6)
    if (p < 1n) {
        return false;
    }
    if ((4n * p * r) > TWO_32_MINUS_1) {
        return false;
    }

    if (params.keyLength !== undefined) {
        const dkLen = integerToBigInt(params.keyLength);
        if ((dkLen === undefined) || (dkLen < 1n) || (dkLen > MAX_DKLEN)) {
            return false;
        }
    }

    return true;
}

export default validateScryptParams;
