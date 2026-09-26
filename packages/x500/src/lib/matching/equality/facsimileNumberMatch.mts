import { ASN1Element } from "@wildboar/asn1";
import {
    _decode_TelephoneNumber,
} from "../../modules/SelectedAttributeTypes/TelephoneNumber.ta.mjs";
import type {
    FacsimileTelephoneNumber,
} from "../../modules/SelectedAttributeTypes/FacsimileTelephoneNumber.ta.mjs";
import { telephoneNumberMatchTyped } from "./telephoneNumberMatch.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.13 `facsimileNumberMatch`.
 *
 * Compares a presented `TelephoneNumber` with the first element of
 * a facsimile sequence (`telephoneNumber`). The `parameters`
 * element is not evaluated. Matching of that number is as for
 * `telephoneNumberMatch`.
 *
 * `assertion` is an element or string. `value` is a facsimile
 * element, a `FacsimileTelephoneNumber`, or the telephone number
 * string itself.
 */
export
function facsimileNumberMatch (
    assertion: ASN1Element | string,
    value: ASN1Element | FacsimileTelephoneNumber | string,
): boolean {
    const stored = typeof value === "string"
        ? value
        : ASN1Element.isElement(value)
            ? _decode_TelephoneNumber(value.sequence[0])
            : value.telephoneNumber;
    return facsimileNumberMatchTyped(
        typeof assertion === "string" ? assertion : assertion.printableString,
        stored,
    );
}

/**
 * `facsimileNumberMatch` on the presented number and the stored
 * telephone number. Hyphens and spaces are insignificant.
 *
 * @param assertion Presented number.
 * @param value Stored telephone number.
 * @returns `true` when `telephoneNumberMatch` holds.
 */
export
function facsimileNumberMatchTyped (assertion: string, value: string): boolean {
    return telephoneNumberMatchTyped(assertion, value);
}

export default facsimileNumberMatch;
