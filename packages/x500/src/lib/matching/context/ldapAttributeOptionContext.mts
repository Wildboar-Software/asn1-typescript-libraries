import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import {
    AttributeOptionList,
    _decode_AttributeOptionList,
} from "../../modules/SelectedAttributeTypes/AttributeOptionList.ta.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 10.4
 * `ldapAttributeOptionContext`.
 *
 * Aligns X.500 contexts with LDAP attribute options. Each option is
 * one UTF8String in a SEQUENCE (order is for DER only). A
 * `ContextAssertion` matches a stored list if it is a subset,
 * ignoring letter case and option order. `ABSENT-MATCH` is FALSE:
 * a value without this context does not satisfy an assertion.
 */
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
