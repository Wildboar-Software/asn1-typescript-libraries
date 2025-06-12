import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "asn1-ts";
import { prepString } from "../../utils/prepString.mjs";

export
const caseExactIA5Match: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: string | undefined = prepString(assertion.ia5String);
    const v: string | undefined = prepString(value.ia5String);
    if (a === undefined) {
        return false;
        // throw new Error("03635c43-6624-4af4-8432-a56b96f082cd: Invalid characters in caseExactIA5Match assertion.");
    }
    if (v === undefined) {
        return false;
    }
    return (a === v);
}

export default caseExactIA5Match;
