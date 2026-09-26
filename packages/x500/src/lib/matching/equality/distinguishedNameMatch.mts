import type EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { readDecoded } from "../readValue.mjs";
import compareDistinguishedName from "../../comparators/compareDistinguishedName.mjs";
import {
    DistinguishedName,
    _decode_DistinguishedName,
} from "../../modules/InformationFramework/DistinguishedName.ta.mjs";

/**
 * Rec. ITU-T X.501 (10/2019), clause 13.5.2
 * `distinguishedNameMatch` (also 8.9.6 and 9.4).
 *
 * TRUE iff both names have the same number of RDNs, corresponding
 * RDNs have the same number of `AttributeTypeAndValue`, and
 * corresponding AVAs (same RDN, same attribute type) have values
 * that match using the attribute type's equality matching rule.
 *
 * `getEqualityMatcher` is required so nested naming attributes can
 * be compared with their own equality rules.
 *
 * Each argument may be an `ASN1Element` or a `DistinguishedName`.
 */
export
function distinguishedNameMatch (
    assertion: ASN1Element | DistinguishedName,
    value: ASN1Element | DistinguishedName,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    return distinguishedNameMatchTyped(
        readDecoded(assertion, _decode_DistinguishedName),
        readDecoded(value, _decode_DistinguishedName),
        getEqualityMatcher,
    );
}

/**
 * `distinguishedNameMatch` on two decoded names.
 *
 * @param assertion Presented name.
 * @param value Stored name.
 * @param getEqualityMatcher Equality rule lookup for naming attributes.
 * @returns `true` when the names match.
 */
export
function distinguishedNameMatchTyped (
    assertion: DistinguishedName,
    value: DistinguishedName,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    return compareDistinguishedName(assertion, value, getEqualityMatcher);
}

export default distinguishedNameMatch;
