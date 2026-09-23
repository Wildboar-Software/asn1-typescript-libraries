import type { CharacterStringInput } from "../readValue.mjs";
import { readPrintableString } from "../readValue.mjs";

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
    assertion: CharacterStringInput,
    value: CharacterStringInput,
): boolean {
    return evaluateLanguageContextTyped(
        readPrintableString(assertion),
        readPrintableString(value),
    );
}

/**
 * `languageContext` on two language codes.
 *
 * @param assertion Presented language code.
 * @param value Stored language code.
 * @returns `true` when the codes are identical.
 */
export
function evaluateLanguageContextTyped (assertion: string, value: string): boolean {
    return assertion === value;
}

export default evaluateLanguageContext;
