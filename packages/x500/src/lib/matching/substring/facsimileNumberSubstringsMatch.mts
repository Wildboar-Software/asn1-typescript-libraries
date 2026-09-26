import type SubstringSelection from "../../types/SubstringSelection.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import type {
    PreparedSubstring,
    SubstringAssertionInput,
} from "../readValue.mjs";
import { isAsn1Element, readSubstringAssertion } from "../readValue.mjs";
import {
    _decode_TelephoneNumber,
} from "../../modules/SelectedAttributeTypes/TelephoneNumber.ta.mjs";
import type {
    FacsimileTelephoneNumber,
} from "../../modules/SelectedAttributeTypes/FacsimileTelephoneNumber.ta.mjs";

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
        : isAsn1Element(value)
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
 * @returns `true` when every piece matches the digit string.
 */
export
function facsimileNumberSubstringsMatchTyped (
    assertion: readonly PreparedSubstring[],
    value: string,
): boolean {
    const v: string = value.replace(/\D/g, "");
    return assertion.every((str) => {
        if (str.kind === "initial") {
            return v.startsWith(str.value);
        } else if (str.kind === "any") {
            return (v.indexOf(str.value) > -1);
        } else if (str.kind === "final") {
            return v.endsWith(str.value);
        } else {
            return false;
        }
    });
}

export default facsimileNumberSubstringsMatch;
