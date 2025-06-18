import type { OPTIONALLY_PROTECTED } from "@wildboar/x500/src/lib/modules/EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";

/**
 * @summary Where `op` is `OPTIONALLY_PROTECTED<T>`, get `T`
 * @param op The optionally-protected T from whence the T is to be extracted
 * @returns The inner signed thing, if signed; otherwise, the thing.
 * @function
 */
export
function getOptionallyProtectedValue <T> (op: OPTIONALLY_PROTECTED<T>): T {
    return (("signed" in op)
        ? op.signed.toBeSigned
        : op.unsigned);
}

export default getOptionallyProtectedValue;
