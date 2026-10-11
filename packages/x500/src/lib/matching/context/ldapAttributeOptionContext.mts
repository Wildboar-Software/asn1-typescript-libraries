import { ASN1Element } from "@wildboar/asn1";
import {
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
 *
 * Each argument may be an `ASN1Element` or an array of option
 * strings (`AttributeOptionList`).
 */
export
function evaluateLDAPAttributeOptionContext (
    assertion: ASN1Element | readonly string[],
    value: ASN1Element | readonly string[],
): boolean {
    const a = ASN1Element.isElement(assertion) ? _decode_AttributeOptionList(assertion) : assertion;
    const v = ASN1Element.isElement(value) ? _decode_AttributeOptionList(value) : value;
    return evaluateLDAPAttributeOptionContextTyped(a, v);
}

/**
 * `ldapAttributeOptionContext` on two option lists. Asserted
 * options must be a case-insensitive subset of the stored options.
 *
 * @param assertion Presented options.
 * @param value Stored options.
 * @returns `true` when every asserted option is stored.
 */
export
function evaluateLDAPAttributeOptionContextTyped (
    assertion: readonly string[],
    value: readonly string[],
): boolean {
    const storedValues: Set<string> = new Set(value.map((str) => str.toLowerCase()));
    for (let i = 0; i < assertion.length; i++) {
        const assertedValue: string = assertion[i].toLowerCase();
        if (!storedValues.has(assertedValue)) {
            return false;
        }
    }
    return true;
}

export default evaluateLDAPAttributeOptionContext;
