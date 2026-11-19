import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { compareRDNSequence } from "@wildboar/dn";
import {
    createEqualityMatcher,
    type Matcher,
} from "@wildboar/x500";
import {
    type ORName,
    _decode_ORName,
} from "@wildboar/x400/MTSAbstractService";
import { orAddressIsSubstringSubset } from "./oRAddressSubstringElementsMatch.js";
import { namingEqualityMatcher } from "../namingEqualityMatcher.js";

export
function oRNameSubstringElementsMatchTyped (
    assertion: ORName,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags?: number,
): boolean {
    const a = assertion;
    const v = _decode_ORName(value);
    if (a.directory_name) {
        if (v.directory_name) {
            // TODO: Match upon RDN presence substrings. (This could be an approximate matching rule implementation.)
            const namesMatch = compareRDNSequence(
                a.directory_name.rdnSequence,
                v.directory_name.rdnSequence,
                namingEqualityMatcher(getEqualityMatcher, flags),
            );
            if (namesMatch) {
                return true; // Either the DN or ORAddress must match.
            }
            return orAddressIsSubstringSubset(a, v);
        }
    }
    return orAddressIsSubstringSubset(a, v);
}

export
const oRNameSubstringElementsMatch: Matcher = createEqualityMatcher(
    _decode_ORName,
    oRNameSubstringElementsMatchTyped,
);

export default oRNameSubstringElementsMatch;
