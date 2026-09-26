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
    let stored: string;
    if (typeof value === "string") {
        stored = value;
    } else if (ASN1Element.isElement(value)) {
        stored = _decode_TelephoneNumber(value.sequence[0]);
    } else {
        stored = value.telephoneNumber;
    }
    const presented = typeof assertion === "string" ? assertion : assertion.printableString;
    return telephoneNumberMatchTyped(presented, stored);
}

export default facsimileNumberMatch;
