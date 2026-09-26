import type EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type { ASN1Element } from "@wildboar/asn1";
import { readDecoded } from "../readValue.mjs";
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
 *
 * Each argument may be an `ASN1Element` or a `NameAndOptionalUID`.
 */
export
function uniqueMemberMatch (
    assertion: ASN1Element | NameAndOptionalUID,
    value: ASN1Element | NameAndOptionalUID,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    return uniqueMemberMatchTyped(
        readDecoded(assertion, _decode_NameAndOptionalUID),
        readDecoded(value, _decode_NameAndOptionalUID),
        getEqualityMatcher,
    );
}

/**
 * `uniqueMemberMatch` on two decoded `NameAndOptionalUID` values.
 *
 * @param a Presented name and optional UID.
 * @param v Stored name and optional UID.
 * @param getEqualityMatcher Equality rule lookup for naming attributes.
 * @returns `true` when the distinguished names and UIDs match.
 */
export
function uniqueMemberMatchTyped (
    a: NameAndOptionalUID,
    v: NameAndOptionalUID,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
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
