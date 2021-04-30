import EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element, BIT_STRING } from "asn1-ts";
import {
    NameAndOptionalUID,
    _decode_NameAndOptionalUID,
} from "../../modules/SelectedAttributeTypes/NameAndOptionalUID.ta";
import compareDistinguishedName from "../../comparators/compareDistinguishedName";

export
const uniqueMemberMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: NameAndOptionalUID = _decode_NameAndOptionalUID(assertion);
    const v: NameAndOptionalUID = _decode_NameAndOptionalUID(value);
    const distinguishedNamesAreTheSame: boolean = compareDistinguishedName(a.dn, v.dn);
    if (!distinguishedNamesAreTheSame) {
        return false;
    }

    if ((a.uid === undefined) && (v.uid === undefined)) {
        return distinguishedNamesAreTheSame;
    }
    else if (!a.uid || !v.uid) {
        return false;
    }

    const aBits: BIT_STRING = a.uid;
    const vBits: BIT_STRING = v.uid;

    if (aBits.length !== vBits.length) {
        return false;
    }
    for (let i = 0; i < aBits.length; i++) {
        if (aBits[i] !== vBits[i]) {
            return false;
        }
    }

    return distinguishedNamesAreTheSame;
}

export default uniqueMemberMatch;
