import {
    ASN1Element,
    ASN1TagClass,
    ASN1UniversalType,
} from "@wildboar/asn1";
import {
    _decode_TelephoneNumber,
} from "../../modules/SelectedAttributeTypes/TelephoneNumber.ta.mjs";
import type {
    FacsimileTelephoneNumber,
} from "../../modules/SelectedAttributeTypes/FacsimileTelephoneNumber.ta.mjs";
import { telephoneNumberMatchTyped } from "./telephoneNumberMatch.mjs";

/** Element, decoded facsimile number, or the telephone number string. */
type FacsimileNumberInput = ASN1Element | FacsimileTelephoneNumber | string;

/**
 * Telephone number from a `TelephoneNumber`, a
 * `FacsimileTelephoneNumber` (its `telephoneNumber` component), or
 * that string already. Facsimile `parameters` are ignored.
 */
function readFacsimileNumber (value: FacsimileNumberInput): string {
    if (typeof value === "string") {
        return value;
    }
    if (!ASN1Element.isElement(value)) {
        return value.telephoneNumber;
    }
    if (
        value.tagClass === ASN1TagClass.universal
        && value.tagNumber === ASN1UniversalType.sequence
    ) {
        return _decode_TelephoneNumber(value.sequence[0]);
    }
    return value.printableString;
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.13 `facsimileNumberMatch`.
 *
 * Compares the telephone number in a presented value with the
 * telephone number in a stored value. The `parameters` element of
 * a `FacsimileTelephoneNumber` is not evaluated. Matching of that
 * number is as for `telephoneNumberMatch`.
 *
 * Each argument may be an `ASN1Element` (`TelephoneNumber` or
 * `FacsimileTelephoneNumber`), a `FacsimileTelephoneNumber`, or
 * the telephone number string.
 */
export
function facsimileNumberMatch (
    assertion: FacsimileNumberInput,
    value: FacsimileNumberInput,
): boolean {
    return telephoneNumberMatchTyped(
        readFacsimileNumber(assertion),
        readFacsimileNumber(value),
    );
}

export default facsimileNumberMatch;
