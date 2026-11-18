import type { ASN1Element } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "@wildboar/x500";

export
function contentIdentifierMatchTyped(
    assertion: ASN1Element,
    value: ASN1Element,
): boolean | undefined {
    return (
        assertion.printableString.trim().replace(/\s+/g, " ")
        === value.printableString.trim().replace(/\s+/g, " ")
    ); // case-sensitive.
}

contentIdentifierMatchTyped satisfies TypedEquationFunction<ASN1Element>;

export
const contentIdentifierMatch: Matcher = createEqualityMatcher(
    (el: ASN1Element): ASN1Element => el,
    contentIdentifierMatchTyped,
);

export default contentIdentifierMatch;
