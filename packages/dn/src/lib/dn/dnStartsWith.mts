import { compareRelativeDistinguishedName } from "../rdn/compare.mjs";
import type { GetDistinguishedValueMatcher } from "../atav/compare.mjs";
import type { RDNSequenceDescending } from "../brands.mjs";

/**
 * @summary Test whether a DN starts with (or is equal to) a prefix DN.
 * @description
 *
 * Returns `true` if the first `prefix.length` RDNs of `dn` match the RDNs of
 * `prefix`, in order. This is the X.500 ordering, in which the root-most RDN
 * is first. A DN is considered to start with itself, and every DN starts
 * with the empty (root DSE) prefix.
 *
 * If `matcherGetter` is supplied, it is used to look up the equality matcher
 * for each attribute type. If it returns `undefined` for an attribute type that
 * must be compared, this function returns `false`. If `matcherGetter` is
 * omitted, the built-in matching behavior is used.
 *
 * @param dn The DN to test.
 * @param prefix The prospective prefix.
 * @param matcherGetter Optional function to look up the equality matcher for an attribute type.
 * @returns Whether `dn` starts with `prefix`.
 * @function
 */
export function dnStartsWith(
    dn: RDNSequenceDescending,
    prefix: RDNSequenceDescending,
    matcherGetter?: GetDistinguishedValueMatcher,
): boolean {
    if (prefix.length > dn.length) {
        return false;
    }
    const getter: GetDistinguishedValueMatcher | undefined = matcherGetter
        ? matcherGetter
        : undefined;
    for (let i = 0; i < prefix.length; i++) {
        if (!compareRelativeDistinguishedName(dn[i], prefix[i], getter)) {
            return false;
        }
    }
    return true;
}

export default dnStartsWith;
