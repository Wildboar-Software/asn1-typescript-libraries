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
 *
 * Each argument may be an `ASN1Element` or a string.
 */
export
function evaluateLanguageContext (
    assertion: ASN1Element | string,
    value: ASN1Element | string,
): boolean {
    const presented = typeof assertion === "string" ? assertion : assertion.printableString;
    const stored = typeof value === "string" ? value : value.printableString;
    return presented === stored;
}

export default evaluateLanguageContext;
