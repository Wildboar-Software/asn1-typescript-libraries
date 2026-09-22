import type EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type { ASN1Element, BIT_STRING } from "@wildboar/asn1";
import {
    NameAndOptionalUID,
    _decode_NameAndOptionalUID,
} from "../../modules/SelectedAttributeTypes/NameAndOptionalUID.ta.mjs";
import compareDistinguishedName from "../../comparators/compareDistinguishedName.mjs";
import { compareBitStrings } from "../../comparators/compareBitStrings.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.11 `uniqueMemberMatch`.
 *
 * Equality of `NameAndOptionalUID`. The `dn` components must match
 * with `distinguishedNameMatch`. TRUE if that holds and either the
 * stored `uid` is absent or it matches the presented `uid` with
 * `bitStringMatch`.
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
    if (!v.uid) {
        return true;
    }
    if (!a.uid) {
        return false;
    }
    const aBits: BIT_STRING = a.uid;
    const vBits: BIT_STRING = v.uid;
    return compareBitStrings(aBits, vBits);
}

export default uniqueMemberMatch;
