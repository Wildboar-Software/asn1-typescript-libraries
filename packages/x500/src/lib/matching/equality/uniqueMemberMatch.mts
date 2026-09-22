import type EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type { ASN1Element } from "@wildboar/asn1";
import {
    NameAndOptionalUID,
    _decode_NameAndOptionalUID,
} from "../../modules/SelectedAttributeTypes/NameAndOptionalUID.ta.mjs";
import compareDistinguishedName from "../../comparators/compareDistinguishedName.mjs";
import compareBitStrings from "../../comparators/compareBitStrings.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.11 `uniqueMemberMatch`.
 *
 * Equality of `NameAndOptionalUID`. The `dn` components must match
 * with `distinguishedNameMatch`. TRUE if that holds and either the
 * stored `uid` is absent or it matches the presented `uid` with
 * `bitStringMatch`. A presented `uid` is ignored when the stored
 * value has none. `UniqueIdentifier` has no `NamedBitList`, so
 * trailing zero bits are significant.
 */
export
const uniqueMemberMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean => {
    const a: NameAndOptionalUID = _decode_NameAndOptionalUID(assertion);
    const v: NameAndOptionalUID = _decode_NameAndOptionalUID(value);
    if (!compareDistinguishedName(a.dn, v.dn, getEqualityMatcher)) {
        return false;
    }
    // Clause 8.2.11: a stored `uid` that is absent matches any presented `uid`.
    if (v.uid === undefined) {
        return true;
    }
    if (a.uid === undefined) {
        return false;
    }
    return compareBitStrings(a.uid, v.uid);
}

export default uniqueMemberMatch;
