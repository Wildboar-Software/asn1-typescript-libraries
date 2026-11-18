import type { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "@wildboar/x500/InformationFramework";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "@wildboar/x500";
import { compareRDNSequence } from "@wildboar/dn";
import { _decode_ORName } from "@wildboar/x400/MTSAbstractService";
import { orAddressIsSubstringSubset } from "./oRAddressSubstringElementsMatch.mjs";
import { namingEqualityMatcher } from "../namingEqualityMatcher.mjs";

export
function oRNameSubstringElementsMatchTyped(
    assertion: ASN1Element,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const a = _decode_ORName(assertion);
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

oRNameSubstringElementsMatchTyped satisfies TypedEquationFunction<ASN1Element>;

export
const oRNameSubstringElementsMatch: Matcher = createEqualityMatcher(
    (el: ASN1Element): ASN1Element => el,
    oRNameSubstringElementsMatchTyped,
);

export default oRNameSubstringElementsMatch;
