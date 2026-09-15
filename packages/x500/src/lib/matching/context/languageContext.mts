import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";

/**
 * Rec. ITU-T X.520 (10/2019), clause 10.1 `languageContext`.
 *
 * Associates an attribute value with ISO 639-2 language codes
 * (`PrintableString` of size 2..3). A presented context matches a
 * stored context iff the character sequences are identical.
 *
 * This implementation does not map ISO 639-2 alpha-2 codes to
 * alpha-3 (or vice versa) before comparing.
 */
export
const evaluateLanguageContext: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    return (assertion.printableString === value.printableString);
}

export default evaluateLanguageContext;
