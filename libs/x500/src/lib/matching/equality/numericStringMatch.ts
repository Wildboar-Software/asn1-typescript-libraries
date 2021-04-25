import EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element } from "asn1-ts";

export
const numeringStringMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: string = assertion.numericString.replace(/\s+/, "");
    const v: string = value.numericString.replace(/\s+/, "");
    return (a === v);
}

export default numeringStringMatch;
