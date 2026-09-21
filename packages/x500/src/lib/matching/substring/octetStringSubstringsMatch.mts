import SubstringsMatcher from "../../types/SubstringsMatcher.mjs";
import SubstringSelection from "../../types/SubstringSelection.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import { partitionOctets, substringPieces } from "../../utils/substringPartition.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.7
 * `octetStringSubstringsMatch`.
 *
 * TRUE iff the stored OCTET STRING contains the presented
 * `OctetSubstringAssertion` octets with the same initial/any/final
 * partitioning as `caseIgnoreSubstringsMatch`.
 */
export
const octetStringSubstringsMatch: SubstringsMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    selection?: SubstringSelection,
): boolean => {
    const stored = value.octetString;
    const needles = [];
    for (const p of substringPieces(assertion, selection)) {
        needles.push({ kind: p.kind, bytes: p.element.octetString });
    }
    return partitionOctets(stored, needles);
}

export default octetStringSubstringsMatch;
