import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "asn1-ts";
import { prepString } from "../../utils/prepString.mjs";

export
const caseIgnoreIA5Match: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: string | undefined = prepString(assertion.ia5String);
    const v: string | undefined = prepString(value.ia5String);
    if (a === undefined) {
        return false;
        // throw new Error("5f4ce135-89b5-482a-9c03-fe1d0c0ae483: Invalid characters in caseIgnoreIA5Match assertion.");
    }
    if (v === undefined) {
        return false;
    }
    return (a.toLowerCase() === v.toLowerCase());
}

export default caseIgnoreIA5Match;
