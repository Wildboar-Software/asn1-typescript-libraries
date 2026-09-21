import SubstringsMatcher from "../../types/SubstringsMatcher.mjs";
import SubstringSelection from "../../types/SubstringSelection.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import {
    _decode_UnboundedDirectoryString as _decode_UDS,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import directoryStringToString from "../../stringifiers/directoryStringToString.mjs";
import { prepString } from "../../utils/prepString.mjs";
import { partitionString, substringPieces } from "../../utils/substringPartition.mjs";

function pieceText (el: ASN1Element): string {
    try {
        return el.ia5String;
    } catch {
        try {
            return directoryStringToString(_decode_UDS(el));
        } catch {
            return el.utf8String;
        }
    }
}

function prepare (s: string): string | undefined {
    return prepString(s)?.toLowerCase();
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.11.3
 * `caseIgnoreIA5SubstringsMatch` (LDAP-defined).
 *
 * Substring match of an IA5String stored value against a
 * `SubstringAssertion` after string preparation (clause 7.2). Same
 * partitioning rules as `caseIgnoreSubstringsMatch` (clause
 * 8.1.3).
 */
export
const caseIgnoreIA5SubstringsMatch: SubstringsMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    selection?: SubstringSelection,
): boolean => {
    const stored = prepare(value.ia5String);
    if (stored === undefined) {
        return false;
    }
    const needles = [];
    for (const p of substringPieces(assertion, selection)) {
        const text = prepare(pieceText(p.element));
        if (text === undefined) {
            return false;
        }
        needles.push({ kind: p.kind, text });
    }
    return partitionString(stored, needles);
}

export default caseIgnoreIA5SubstringsMatch;
