import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import {
    LocaleContextSyntax,
    _decode_LocaleContextSyntax,
} from "../../modules/SelectedAttributeTypes/LocaleContextSyntax.ta.mjs";
import directoryStringToString from "../../stringifiers/directoryStringToString.mjs";
import compareElements from "../../comparators/compareElements.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 10.3 `localeContext`.
 *
 * Associates an attribute value with a POSIX locale (ISO/IEC/IEEE
 * 9945; registration in ISO/IEC 15897). TRUE iff both sides are
 * object identifiers and equal, or both are strings and equal.
 * Mixed OID/string is not a match.
 */
export
const evaluateLocaleContext: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: LocaleContextSyntax = _decode_LocaleContextSyntax(assertion);
    const v: LocaleContextSyntax = _decode_LocaleContextSyntax(value);
    if (("localeID1" in a) && ("localeID1" in v)) {
        return (a.localeID1.isEqualTo(v.localeID1));
    } else if (("localeID2" in a) && ("localeID2" in v)) {
        return (directoryStringToString(a.localeID2) === directoryStringToString(v.localeID2));
    } else {
        return compareElements(assertion, value);
    }
}

export default evaluateLocaleContext;
