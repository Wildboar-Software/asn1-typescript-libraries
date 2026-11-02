import { ASN1Element } from "@wildboar/asn1";
import {
    MATCH_FLAG_CONSTANT_TIME,
    type ContextMatcher,
} from "../../types/matching.mjs";
import { id_avc_ldapAttributeOption } from "../../modules/SelectedAttributeTypes/id-avc-ldapAttributeOption.va.mjs";
import { matchAnyContextValue } from "./matchAnyContextValue.mjs";
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
    flags: number = 0,
): boolean {
    const a = ASN1Element.isElement(assertion) ? _decode_AttributeOptionList(assertion) : assertion;
    const v = ASN1Element.isElement(value) ? _decode_AttributeOptionList(value) : value;
    return evaluateLDAPAttributeOptionContextTyped(a, v, flags);
}

/**
 * `ldapAttributeOptionContext` on two option lists. Asserted
 * options must be a case-insensitive subset of the stored options.
 *
 * @param assertion Presented options.
 * @param value Stored options.
 * @param flags `MATCH_FLAG_CONSTANT_TIME`.
 * @returns `true` when every asserted option is stored.
 */
export
function evaluateLDAPAttributeOptionContextTyped (
    assertion: readonly string[],
    value: readonly string[],
    flags: number = 0,
): boolean {
    const constantTime = Boolean(flags & MATCH_FLAG_CONSTANT_TIME);
    const storedValues: Set<string> = new Set(value.map((str) => str.toLowerCase()));
    let matched = true;
    for (let i = 0; i < assertion.length; i++) {
        const assertedValue: string = assertion[i].toLowerCase();
        if (!storedValues.has(assertedValue)) {
            if (!constantTime) {
                return false;
            }
            matched = false;
        }
    }
    return matched;
}

/**
 * `ldapAttributeOptionContext` as a `ContextMatcher`. TRUE iff the
 * asserted option list is a case-insensitive subset of any stored
 * list. A malformed assertion throws. An invalid stored value is
 * skipped. An empty value list is FALSE.
 */
export
const ldapAttributeOptionContext: ContextMatcher = (
    assertion,
    values,
    _getEqualityMatcher,
    flags = 0,
) => {
    const presented = _decode_AttributeOptionList(assertion);
    return matchAnyContextValue(
        values,
        (value) => evaluateLDAPAttributeOptionContextTyped(
            presented,
            _decode_AttributeOptionList(value),
            flags,
        ),
        id_avc_ldapAttributeOption,
        flags,
    );
};

export default ldapAttributeOptionContext;
