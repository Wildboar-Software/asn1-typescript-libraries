import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type EqualityMatcher from "../types/EqualityMatcher";
import type { DistinguishedName } from "../modules/InformationFramework/DistinguishedName.ta";
import compareRDNSequence from "./compareRDNSequence";

export default function compare(
    a: DistinguishedName,
    b: DistinguishedName,
    getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    return compareRDNSequence(a, b, getEqualityMatcher);
}
