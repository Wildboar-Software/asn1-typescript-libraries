import { Context } from "./lib/modules/InformationFramework/Context.ta.mjs";
import { Buffer } from "node:buffer";

/**
 * @summary Determine if two context lists are the same
 * @description
 * 
 * Compare context lists to determine if they are the same, regardless of the
 * ordering of context types or context values.
 * 
 * One `Context` does NOT match another if they differ by their `fallback`
 * settings. This function compares context values exactly, byte-for-byte.
 * This is not 100% correct in all cases, but it should work for 99%+.
 * Especially when DER encoding is used, there are few possible ways that
 * a given context value can be represented at all, so a plain
 * byte-for-byte match should be "good enough."
 * 
 * This function was designed for use in comparing attributes in X.509
 * attribute certificates, particularly for the purposes of ensuring
 * that an attribute authority (AA) did not issue attributes that have
 * greater privileges. In Meerkat DSA's implementation of PMI verification,
 * if any contexts are present in an AA's attribute, those exact same
 * contexts must ALL be present and identical in the holder's attributes.
 * Contexts are not likely to see wide usage in attributes in PMI, but
 * 
 * @param a The first contexts list
 * @param b The second context list
 * @returns `true` if the context lists are the same
 * 
 * @function
 */
export function compareContextLists(
    a: Context[],
    b: Context[],
): boolean {
    if (a.length !== b.length) {
        return false; // The contexts did not match exactly.
    }
    const asorted = [ ...a ]
        .sort((a, b) => a.contextType.toString().localeCompare(b.contextType.toString()));
    const bsorted = [ ...b ]
        .sort((a, b) => a.contextType.toString().localeCompare(b.contextType.toString()));
    for (let i = 0; i < asorted.length; i++) {
        const ctxa = asorted[i];
        const ctxb = bsorted[i];
        if (!ctxa.contextType.isEqualTo(ctxb.contextType)) {
            return false; // The contexts did not match exactly.
        }
        // Actually, they could differ in length if they have
        // duplicate values, too, which is not semantically a problem,
        
        // but it is not technically allowed. Since this code is
        // expected to be used in verifying PMI delegation (and the
        // usage of contexts is likely to be rare anyway), we are going
        // to be virtuously strict, so incorrectness of this sort is not
        // allowed to propagate through the AA delegation path.
        if (ctxa.contextValues.length !== ctxb.contextValues.length) {
            return false; // The contexts did not match exactly.
        }
        const fallbacka = ctxa.fallback ?? Context._default_value_for_fallback;
        const fallbackb = ctxb.fallback ?? Context._default_value_for_fallback;
        if (fallbacka !== fallbackb) {   
            return false; // The fallback did not match exactly.
        }
        const avalues: Set<string> = new Set();
        for (const v of ctxa.contextValues) {
            const buf = v.toBytes();
            // latin1 is fastest: it basically turns the bytes directly into a string.
            // I'm not sure if it allocates a new buffer under the hood or not.
            // TODO: Refactor this whole ternary + toString() trick into a function.
            const key = (Buffer.isBuffer(buf)
                ? buf
                : Buffer.from(
                    buf.buffer,
                    buf.byteOffset,
                    buf.byteLength,
                )).toString("latin1");
            avalues.add(key);
        }
        for (const v of ctxb.contextValues) {
            const buf = v.toBytes();
            const key = (Buffer.isBuffer(buf)
                ? buf
                : Buffer.from(
                    buf.buffer,
                    buf.byteOffset,
                    buf.byteLength,
                )).toString("latin1");
            if (!avalues.has(key)) {
                return false; // The context values did not match exactly.
            }
            // Remove this so duplicates fail.
            avalues.delete(key);
        }
        if (avalues.size > 0) {
            return false; // The context values did not match exactly.
        }
    }
    return true; // No differences were found.
}

export default compareContextLists;
