import SubstringsMatcher from "../../types/SubstringsMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import {
    _decode_UnboundedDirectoryString as _decode_UDS,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import directoryStringToString from "../../stringifiers/directoryStringToString.mjs";
import { prepString } from "../../utils/prepString.mjs";

/**
 * Clause 7.2 maps these controls to SPACE. `prepString` deletes every
 * `Cc` character, so they are rewritten before that call.
 */
const controlsMappedToSpace: RegExp = /[\u0009\u000A\u000B\u000C\u000D\u0085]/g;

/**
 * Prepare one string for `storedPrefixMatch` (clause 7).
 *
 * Case is folded. Leading and trailing spaces are removed, and
 * consecutive whitespace is one SPACE. A string of only spaces stays
 * a single SPACE (clause 7.6.1); a string that preparation empties
 * for any other reason is prohibited (clause 7.4).
 */
function prepare (input: string): string | undefined {
    const spaced: string = input.replace(controlsMappedToSpace, " ");
    const prepared: string | undefined = prepString(spaced);
    if (prepared === undefined) {
        return undefined;
    }
    if (prepared.length === 0) {
        const onlySpaces: boolean = spaced.length > 0 && spaced.trim().length === 0;
        return onlySpaces ? " " : undefined;
    }
    return prepared.toLowerCase();
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.9 `storedPrefixMatch`.
 *
 * TRUE iff the stored attribute value is an initial substring of the
 * presented value. Corresponding characters are identical except for
 * case. Insignificant spaces are ignored (clause 7.6.1): leading and
 * trailing spaces are removed, and inner whitespace is one space.
 * Typical use: a stored area code against a presented telephone number.
 */
export
const storedPrefixMatch: SubstringsMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const presented: string | undefined = prepare(directoryStringToString(_decode_UDS(assertion)));
    const stored: string | undefined = prepare(directoryStringToString(_decode_UDS(value)));
    if (presented === undefined || stored === undefined) {
        return false;
    }
    return presented.startsWith(stored);
};

export default storedPrefixMatch;
