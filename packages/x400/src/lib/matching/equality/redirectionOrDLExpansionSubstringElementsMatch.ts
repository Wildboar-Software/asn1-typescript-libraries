import { ASN1Element, BERElement, type OBJECT_IDENTIFIER } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    type Matcher,
} from "@wildboar/x500";
import {
    _decode_ORAddressAndOptionalDirectoryName,
    type ORName,
} from "@wildboar/x400/MTSAbstractService";
import { oRNameSubstringElementsMatchTyped } from "./oRNameSubstringElementsMatch.js";

// FIXME: This implementation is wrong.
// I think you'd just want to use `ORNameSubstringElementsMatch`

export
function redirectionOrDLExpansionSubstringElementsMatchTyped (
    assertion: ORName,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags?: number,
): boolean {
    return value.sequenceOf.some((el) => {
        const v = new BERElement();
        v.fromBytes(el.value);
        return oRNameSubstringElementsMatchTyped(assertion, v, getEqualityMatcher, flags);
    });
}

export
const redirectionOrDLExpansionSubstringElementsMatch: Matcher = createEqualityMatcher(
    _decode_ORAddressAndOptionalDirectoryName,
    redirectionOrDLExpansionSubstringElementsMatchTyped,
    undefined,
    true,
);

export default redirectionOrDLExpansionSubstringElementsMatch;
