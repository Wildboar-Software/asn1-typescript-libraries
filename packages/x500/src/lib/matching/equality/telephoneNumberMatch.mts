import type { CharacterStringInput } from "../readValue.mjs";
import { readPrintableString } from "../readValue.mjs";

function normalizeTelephoneNumber (telephoneNumber: string): string {
    return telephoneNumber.replace(/[- ]/g, "");
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.8 `telephoneNumberMatch`.
 *
 * Equality of `TelephoneNumber` (clause 6.7.1). Same as
 * `caseIgnoreMatch` except hyphens and spaces are insignificant
 * and are removed during insignificant-character removal.
 *
 * DEVIATION: We do not lowercase the telephone number, because it is forbidden
 * from containing alphabetic characters anyway.
 *
 * Each argument may be an `ASN1Element` or a string.
 * `TelephoneNumber` decodes to `PrintableString`.
 */
export
function telephoneNumberMatch (
    assertion: CharacterStringInput,
    value: CharacterStringInput,
): boolean {
    return telephoneNumberMatchTyped(
        readPrintableString(assertion),
        readPrintableString(value),
    );
}

/**
 * `telephoneNumberMatch` on two telephone numbers. Hyphens and
 * spaces are removed here.
 *
 * @param assertion Presented number.
 * @param value Stored number.
 * @returns `true` when the normalized numbers are equal.
 */
export
function telephoneNumberMatchTyped (assertion: string, value: string): boolean {
    return normalizeTelephoneNumber(assertion) === normalizeTelephoneNumber(value);
}

export default telephoneNumberMatch;
