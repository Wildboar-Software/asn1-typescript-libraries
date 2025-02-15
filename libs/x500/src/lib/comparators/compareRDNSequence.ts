import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type { RDNSequence } from "../modules/InformationFramework/RDNSequence.ta";
import type EqualityMatcher from "../types/EqualityMatcher";
import compareRelativeDistinguishedName from "./compareRelativeDistinguishedName";

export default function compare(
    a: RDNSequence,
    b: RDNSequence,
    getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (!compareRelativeDistinguishedName(a[i], b[i], getEqualityMatcher)) {
            return false;
        }
    }
    return true;
}
