import type EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type { ASN1Element, BIT_STRING } from "@wildboar/asn1";
import {
    NameAndOptionalUID,
    _decode_NameAndOptionalUID,
} from "../../modules/SelectedAttributeTypes/NameAndOptionalUID.ta.mjs";
import compareDistinguishedName from "../../comparators/compareDistinguishedName.mjs";

export
const uniqueMemberMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean => {
    const a: NameAndOptionalUID = _decode_NameAndOptionalUID(assertion);
    const v: NameAndOptionalUID = _decode_NameAndOptionalUID(value);
    const distinguishedNamesAreTheSame: boolean = compareDistinguishedName(a.dn, v.dn, getEqualityMatcher ?? (() => undefined));
    if (!distinguishedNamesAreTheSame) {
        return false;
    }

    if (!a.uid && !v.uid) {
        return distinguishedNamesAreTheSame;
    }
    else if (!a.uid || !v.uid) { // One has a UID, but the other does not.
        return false;
    }

    const aBits: BIT_STRING = a.uid;
    const vBits: BIT_STRING = v.uid;

    return (
        distinguishedNamesAreTheSame
        && !Buffer.compare(
            Buffer.from(aBits.buffer),
            Buffer.from(vBits.buffer),
        )
    );
}

export default uniqueMemberMatch;
