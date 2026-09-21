import SubstringsMatcher from "../../types/SubstringsMatcher.mjs";
import SubstringSelection from "../../types/SubstringSelection.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import {
    _decode_UnboundedDirectoryString as _decode_UDS,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import directoryStringToString from "../../stringifiers/directoryStringToString.mjs";
import { prepString } from "../../utils/prepString.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.9 `storedPrefixMatch`.
 *
 * TRUE iff the *stored* `UnboundedDirectoryString` is an initial
 * substring of the *presented* value (reversed from ordinary
 * substring match). Case and insignificant spaces are ignored
 * (clause 7.6). Typical use: stored area codes vs a presented
 * telephone number.
 *
 * `selection` is ignored: this is an equality matching rule whose
 * assertion syntax is `UnboundedDirectoryString`.
 */
export
const storedPrefixMatch: SubstringsMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    _selection?: SubstringSelection,
): boolean => {
    const a: string | undefined = prepString(
        directoryStringToString(_decode_UDS(assertion)),
        { caseFold: true },
    );
    const v: string | undefined = prepString(
        directoryStringToString(_decode_UDS(value)),
        { caseFold: true },
    );
    if ((a === undefined) || (v === undefined)) {
        return false;
    }
    return a.startsWith(v);
}

export default storedPrefixMatch;
