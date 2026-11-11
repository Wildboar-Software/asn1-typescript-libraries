import {
    getRDNFromDITDescending,
    type RDNSequenceDescending,
    type RDNSequenceEndingWith,
    type RDNSequenceOf,
    type RDNSequenceOfLength,
    type RelativeDistinguishedName,
    type RelativeDistinguishedNameOf,
} from "@wildboar/dn";

/**
 * @summary The RDN of the entry named by a descending distinguished name.
 * @description
 *
 * `D` is interpreted as an X.500 distinguished name: DIT-descending, so
 * the last RDN is the entry named.
 *
 * - An empty name, the root, has no RDN: `undefined`.
 * - A name known to end with RDN `R` yields `R`.
 * - A name whose every RDN is one value of attribute type `T` yields
 *   that RDN, or `undefined` when the name may be empty.
 * - Any other name yields the entry's RDN, or `undefined` for the root.
 *
 * @template D A distinguished name in DIT-descending order.
 */
export type RDNFromDN<D> =
    D extends RDNSequenceOfLength<0>
        ? undefined
        : D extends RDNSequenceEndingWith<infer R>
            ? R
            : D extends RDNSequenceOf<infer T>
                ? RelativeDistinguishedNameOf<T> | undefined
                : RelativeDistinguishedName | undefined;

/**
 * @summary Get the RDN of the entry named by a distinguished name.
 * @description
 *
 * In an X.500 distinguished name the RDNs descend the DIT. The first RDN
 * belongs to an entry immediately under the root, and the last RDN is the
 * entry named. LDAP strings (IETF RFC 4514) are the other way around.
 *
 * `dn` is a {@link RDNSequenceDescending}. Brand a sequence that is
 * already in this order with `asDITDescending` from `@wildboar/dn`, or
 * reverse an LDAP-order sequence with `toDITDescending`. A sequence
 * whose order is unknown, and a sequence in DIT-ascending order, are
 * rejected at compile time.
 *
 * This is {@link getRDNFromDITDescending}. The return type narrows when
 * the shape of `dn` is known; see {@link RDNFromDN}.
 *
 * @param dn The distinguished name, in DIT-descending order.
 * @returns The RDN of the entry named, or `undefined` if `dn` names
 *  the root.
 * @function
 */
export
function getRDN <D extends RDNSequenceDescending> (
    dn: D,
): RDNFromDN<D> {
    return getRDNFromDITDescending(dn) as RDNFromDN<D>;
}

export default getRDN;
