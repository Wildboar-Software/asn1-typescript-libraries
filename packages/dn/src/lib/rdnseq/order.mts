import type { RelativeDistinguishedName } from "../RelativeDistinguishedName.ta.mjs";
import type {
    RDNSequenceAscending,
    RDNSequenceDescending,
    RDNSequenceCastableToDITOrder,
} from "../brands.mjs";

/**
 * @summary Brand an `RDNSequence` as being in DIT ascending order.
 * @description
 *
 * This does not change or copy `rdns`; it only changes its type. The
 * caller asserts that the first RDN is that of the entry named, as in
 * LDAP. An `RDNSequence` already in DIT descending order cannot be
 * passed: use {@link toDITAscending} to reverse it instead.
 *
 * @param rdns The RDNs, in DIT ascending order.
 * @returns `rdns`, branded.
 * @function
 */
export
function asDITAscending (
    rdns: RDNSequenceCastableToDITOrder<"ascending">,
): RDNSequenceAscending {
    return rdns as RDNSequenceAscending;
}

/**
 * @summary Brand an `RDNSequence` as being in DIT descending order.
 * @description
 *
 * This does not change or copy `rdns`; it only changes its type. The
 * caller asserts that the last RDN is that of the entry named, as in
 * X.500. An `RDNSequence` already in DIT ascending order cannot be
 * passed: use {@link toDITDescending} to reverse it instead.
 *
 * @param rdns The RDNs, in DIT descending order.
 * @returns `rdns`, branded.
 * @function
 */
export
function asDITDescending (
    rdns: RDNSequenceCastableToDITOrder<"descending">,
): RDNSequenceDescending {
    return rdns as RDNSequenceDescending;
}

/**
 * @summary Convert an `RDNSequence` from DIT descending order to DIT
 * ascending order.
 * @description
 *
 * Returns a reversed copy. `dn` is not modified.
 *
 * @param dn The RDNs, in DIT descending order.
 * @returns A copy of `dn` in DIT ascending order.
 * @function
 */
export
function toDITAscending (
    dn: RDNSequenceDescending,
): RDNSequenceAscending {
    return asDITAscending([...dn].reverse());
}

/**
 * @summary Convert an `RDNSequence` from DIT ascending order to DIT
 * descending order.
 * @description
 *
 * Returns a reversed copy. `dn` is not modified.
 *
 * @param dn The RDNs, in DIT ascending order.
 * @returns A copy of `dn` in DIT descending order.
 * @function
 */
export
function toDITDescending (
    dn: RDNSequenceAscending,
): RDNSequenceDescending {
    return asDITDescending([...dn].reverse());
}

/**
 * @summary Get the RDN of the entry named by a DN in DIT ascending
 * order.
 * @description
 *
 * Returns the first RDN. `dn` is not modified.
 *
 * @param dn The RDNs, in DIT ascending order.
 * @returns The RDN of the entry named, or `undefined` if `dn` is empty
 * and so names the root.
 * @function
 */
export
function getRDNFromDITAscending (
    dn: RDNSequenceAscending,
): RelativeDistinguishedName | undefined {
    return dn[0];
}

/**
 * @summary Get the RDN of the entry named by a DN in DIT descending
 * order.
 * @description
 *
 * Returns the last RDN. `dn` is not modified.
 *
 * @param dn The RDNs, in DIT descending order.
 * @returns The RDN of the entry named, or `undefined` if `dn` is empty
 * and so names the root.
 * @function
 */
export
function getRDNFromDITDescending (
    dn: RDNSequenceDescending,
): RelativeDistinguishedName | undefined {
    return dn[dn.length - 1];
}

/**
 * @summary Get the RDN of the top-level entry of a DN in DIT ascending
 * order.
 * @description
 *
 * The top-level entry is the one immediately subordinate to the root.
 * Returns the last RDN. `dn` is not modified.
 *
 * @param dn The RDNs, in DIT ascending order.
 * @returns The RDN of the top-level entry, or `undefined` if `dn` is
 * empty and so names the root.
 * @function
 */
export
function getTopLevelRDNFromDITAscending (
    dn: RDNSequenceAscending,
): RelativeDistinguishedName | undefined {
    return dn[dn.length - 1];
}

/**
 * @summary Get the RDN of the top-level entry of a DN in DIT descending
 * order.
 * @description
 *
 * The top-level entry is the one immediately subordinate to the root.
 * Returns the first RDN. `dn` is not modified.
 *
 * @param dn The RDNs, in DIT descending order.
 * @returns The RDN of the top-level entry, or `undefined` if `dn` is
 * empty and so names the root.
 * @function
 */
export
function getTopLevelRDNFromDITDescending (
    dn: RDNSequenceDescending,
): RelativeDistinguishedName | undefined {
    return dn[0];
}
