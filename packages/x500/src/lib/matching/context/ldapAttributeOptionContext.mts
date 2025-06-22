import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import {
    AttributeOptionList,
    _decode_AttributeOptionList,
} from "../../modules/SelectedAttributeTypes/AttributeOptionList.ta.mjs";

export
const evaluateLDAPAttributeOptionContext: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: AttributeOptionList = _decode_AttributeOptionList(assertion);
    const v: AttributeOptionList = _decode_AttributeOptionList(value);
    const storedValues: Set<string> = new Set(v.map((str) => str.toLowerCase()));
    for (let i = 0; i < a.length; i++) {
        const assertedValue: string = a[i].toLowerCase();
        if (!storedValues.has(assertedValue)) {
            return false;
        }
    }
    return true;
}

export default evaluateLDAPAttributeOptionContext;
