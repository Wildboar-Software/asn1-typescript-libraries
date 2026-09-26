import type SubstringSelection from "../../types/SubstringSelection.mjs";
import { ASN1Element } from "@wildboar/asn1";
import type {
    PreparedSubstring,
    SubstringAssertionInput,
} from "../readValue.mjs";
import { readSubstringAssertion } from "../readValue.mjs";
import {
    _decode_TelephoneNumber,
} from "../../modules/SelectedAttributeTypes/TelephoneNumber.ta.mjs";
import type {
    FacsimileTelephoneNumber,
} from "../../modules/SelectedAttributeTypes/FacsimileTelephoneNumber.ta.mjs";
import { telephoneNumberSubstringsMatchTyped } from "./telephoneNumberSubstringsMatch.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.14
 * `facsimileNumberSubstringsMatch`.
 *
 * Substring-matches the first (`telephoneNumber`) element of a
 * facsimile sequence; `parameters` is not evaluated. Matching of
 * that number is as for telephone-number matching (hyphens and
 * spaces insignificant).
 *
 * `assertion` is an element or a substring assertion. `value` is a
 * facsimile element, a `FacsimileTelephoneNumber`, or the
 * telephone-number string. `selection` is unused.
 */
export
function facsimileNumberSubstringsMatch (
    assertion: SubstringAssertionInput,
    value: ASN1Element | FacsimileTelephoneNumber | string,
    _selection?: SubstringSelection,
): boolean {
    const stored = typeof value === "string"
        ? value
        : ASN1Element.isElement(value)
            ? _decode_TelephoneNumber(value.sequence[0])
            : value.telephoneNumber;
    return facsimileNumberSubstringsMatchTyped(readSubstringAssertion(assertion), stored);
}

/**
 * `facsimileNumberSubstringsMatch` on prepared pieces and the
 * stored telephone number.
 *
 * @param assertion Presented substring pieces.
 * @param value Stored telephone number.
 * @returns `true` when the pieces partition the normalized number.
 */
export
function facsimileNumberSubstringsMatchTyped (
    assertion: readonly PreparedSubstring[],
    value: string,
): boolean {
    return telephoneNumberSubstringsMatchTyped(assertion, value);
}

export default facsimileNumberSubstringsMatch;
