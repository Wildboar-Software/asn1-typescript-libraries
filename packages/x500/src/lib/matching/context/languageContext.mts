import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";

/**
 * WARNING: This is technically incorrect, because it does not translate
 * ISO 639-2 Alpha-2 codes to Alpha-3 codes or vice versa before comparison.
 *
 * @deprecated
 */
export
const evaluateLanguageContext: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    return (assertion.printableString === value.printableString);
}

export default evaluateLanguageContext;
