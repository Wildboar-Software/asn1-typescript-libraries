import type SubstringSelection from "../../types/SubstringSelection.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import type {
    PreparedSubstring,
    SubstringAssertionInput,
} from "../readValue.mjs";
import { readSubstringAssertion } from "../readValue.mjs";
import {
    _decode_TelephoneNumber,
} from "../../modules/SelectedAttributeTypes/TelephoneNumber.ta.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.9
 * `telephoneNumberSubstringsMatch`.
 *
 * Substring match of a telephone-number `PrintableString`. Same as
 * `caseExactSubstringsMatch` except hyphens and spaces are
 * insignificant and are removed during character removal.
 *
 * `assertion` is an element or a substring assertion. `value` is
 * an element or the telephone-number string. `selection` is unused.
 */
export
function telephoneNumberSubstringsMatch (
    assertion: SubstringAssertionInput,
    value: ASN1Element | string,
    _selection?: SubstringSelection,
): boolean {
    const stored = typeof value === "string" ? value : _decode_TelephoneNumber(value);
    return telephoneNumberSubstringsMatchTyped(readSubstringAssertion(assertion), stored);
}

/**
 * `telephoneNumberSubstringsMatch` on prepared pieces and a
 * telephone number. Digits are kept from the stored number; the
 * presented pieces are not rewritten.
 *
 * @param assertion Presented substring pieces.
 * @param value Stored telephone number.
 * @returns `true` when every piece matches the digit string.
 */
export
function telephoneNumberSubstringsMatchTyped (
    assertion: readonly PreparedSubstring[],
    value: string,
): boolean {
    const v: string = value.replace(/\D/g, "");
    return assertion.every((str) => {
        if (str.kind === "initial") {
            return v.startsWith(str.text);
        } else if (str.kind === "any") {
            return (v.indexOf(str.text) > -1);
        } else if (str.kind === "final") {
            return v.endsWith(str.text);
        } else {
            return false;
        }
    });
}

export default telephoneNumberSubstringsMatch;
