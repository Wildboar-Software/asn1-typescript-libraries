import { ASN1Element, ASN1TagClass, ASN1UniversalType } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "@wildboar/x500";

// This matching rule has a defined assertion syntax, but it does not use it, it seems...
export
function circulationMemberCheckmarkMatchTyped(
    _assertion: ASN1Element,
    value: ASN1Element,
): boolean | undefined {
    return value.set.some((el) => (
        (el.tagClass === ASN1TagClass.universal)
        && (
            (el.tagNumber === ASN1UniversalType.nill) // simple
            || (el.tagNumber === ASN1UniversalType.generalizedTime) // timestamped
            || (el.tagNumber === ASN1UniversalType.sequence) // signed
        )
    ));
}

circulationMemberCheckmarkMatchTyped satisfies TypedEquationFunction<ASN1Element>;

export
const circulationMemberCheckmarkMatch: Matcher = createEqualityMatcher(
    (el: ASN1Element): ASN1Element => el,
    circulationMemberCheckmarkMatchTyped,
);

export default circulationMemberCheckmarkMatch;
