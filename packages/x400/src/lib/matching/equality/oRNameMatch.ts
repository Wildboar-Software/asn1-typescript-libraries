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
import { orAddressesMatch } from "./orAddressUtilities.js";
import { namingEqualityMatcher } from "../namingEqualityMatcher.js";

export
function matchORNames (
    assertion: ORName,
    value: ORName,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags?: number,
): boolean {
    const a = assertion;
    const v = value;
    if (a.directory_name) {
        if (v.directory_name) {
            const namesMatch = compareRDNSequence(
                a.directory_name.rdnSequence,
                v.directory_name.rdnSequence,
                namingEqualityMatcher(getEqualityMatcher, flags),
            );
            if (namesMatch) {
                return true; // Either the DN or ORAddress must match.
            }
            return orAddressesMatch(a, v);
        }
    }
    return orAddressesMatch(a, v);
}

export
function oRNameMatchTyped (
    assertion: ORName,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags?: number,
): boolean {
    const v = _decode_ORName(value);
    return matchORNames(assertion, v, getEqualityMatcher, flags);
}

export
const oRNameMatch: Matcher = createEqualityMatcher(
    _decode_ORName,
    oRNameMatchTyped,
);

export default oRNameMatch;
