import type { ASN1Element } from "@wildboar/asn1";
import { type ContextMatcher } from "../../types/matching.mjs";
import { id_avc_language } from "../../modules/SelectedAttributeTypes/id-avc-language.va.mjs";
import { matchAnyContextValue } from "./matchAnyContextValue.mjs";

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

/**
 * `languageContext` as a `ContextMatcher`. TRUE iff any stored
 * language code has the same characters as the presented code.
 * A malformed assertion throws. An invalid stored value is skipped.
 * An empty value list is FALSE.
 */
export
const languageContext: ContextMatcher = (
    assertion,
    values,
    _getEqualityMatcher,
    flags = 0,
) => {
    const presented = assertion.printableString;
    return matchAnyContextValue(
        values,
        (value) => evaluateLanguageContext(presented, value),
        id_avc_language,
        flags,
    );
};

export default languageContext;
