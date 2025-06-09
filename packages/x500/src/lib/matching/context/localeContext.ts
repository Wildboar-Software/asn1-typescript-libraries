import EqualityMatcher from "../../types/EqualityMatcher.js";
import type { ASN1Element } from "asn1-ts";
import {
    LocaleContextSyntax,
    _decode_LocaleContextSyntax,
} from "../../modules/SelectedAttributeTypes/LocaleContextSyntax.ta.js";
import directoryStringToString from "../../stringifiers/directoryStringToString.js";;

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
        return false;
    }
}

export default evaluateLocaleContext;
