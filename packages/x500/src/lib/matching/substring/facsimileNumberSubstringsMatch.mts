import {
    ASN1Element,
    ASN1TagClass,
    ASN1UniversalType,
} from "@wildboar/asn1";
import { FilterItem_substrings } from "../../modules/DirectoryAbstractService/FilterItem-substrings.ta.mjs";
import type { FacsimileTelephoneNumber } from "../../modules/SelectedAttributeTypes/FacsimileTelephoneNumber.ta.mjs";
import { _decode_TelephoneNumber } from "../../modules/SelectedAttributeTypes/TelephoneNumber.ta.mjs";
import type { SubstringAssertion } from "../../modules/SelectedAttributeTypes/SubstringAssertion.ta.mjs";
import {
    readSubstringAssertion,
    type PreparedSubstring,
    type SubstringAssertionInput,
} from "../readValue.mjs";
import { telephoneNumberSubstringsMatchTyped } from "./telephoneNumberSubstringsMatch.mjs";
import {
    readFacsimileNumberComponent,
    substringAssertionFromFilter,
} from "./substringAssertionFromFilter.mjs";

/**
 * Telephone number from a `TelephoneNumber`, a
 * `FacsimileTelephoneNumber`, or that string already.
 * `parameters` are ignored.
 */
function readStoredFacsimileNumber (
    value: ASN1Element | FacsimileTelephoneNumber | string,
): string {
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
 * `facsimileNumberSubstringsMatch` on pieces and the telephone number.
 * Spaces and hyphens are removed, as for `telephoneNumberSubstringsMatch`.
 *
 * @param assertion Presented pieces.
 * @param value Stored telephone number.
 * @returns `true` when the pieces match the number in order.
 */
export
function facsimileNumberSubstringsMatchTyped (
    assertion: readonly PreparedSubstring[],
    value: string,
): boolean {
    return telephoneNumberSubstringsMatchTyped(assertion, value);
}

/**
 * Convert a DAP substrings filter for `facsimileTelephoneNumber`.
 * Each component contributes its `telephoneNumber` only.
 *
 * @param item `FilterItem` substrings alternative.
 * @returns The assertion, or `undefined` when a component has no number.
 */
export
function facsimileNumberSubstringsFromFilter (
    item: FilterItem_substrings,
): SubstringAssertion | undefined {
    return substringAssertionFromFilter(item, readFacsimileNumberComponent);
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.14
 * `facsimileNumberSubstringsMatch`.
 *
 * The `telephoneNumber` component is matched as
 * `telephoneNumberSubstringsMatch`. `parameters` is not evaluated.
 *
 * `assertion` is a `FilterItem` substrings alternative, an encoded
 * `SubstringAssertion`, or the decoded array. `value` is a facsimile
 * element, a `FacsimileTelephoneNumber`, or the telephone-number string.
 */
export
function facsimileNumberSubstringsMatch (
    assertion: SubstringAssertionInput | FilterItem_substrings,
    value?: ASN1Element | FacsimileTelephoneNumber | string,
): boolean | undefined {
    const decoded = assertion instanceof FilterItem_substrings
        ? facsimileNumberSubstringsFromFilter(assertion)
        : assertion;
    if (!decoded) {
        return undefined;
    }
    if (value === undefined) {
        return false;
    }
    return facsimileNumberSubstringsMatchTyped(
        readSubstringAssertion(decoded),
        readStoredFacsimileNumber(value),
    );
}

export default facsimileNumberSubstringsMatch;
