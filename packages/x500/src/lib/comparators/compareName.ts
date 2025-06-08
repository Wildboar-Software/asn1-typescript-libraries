import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type { Name } from "../modules/InformationFramework/Name.ta";
import type EqualityMatcher from "../types/EqualityMatcher";
import compareRDNSequence from "./compareRDNSequence";

export default function compare(
    a: Name,
    b: Name,
    getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    return compareRDNSequence(a.rdnSequence, b.rdnSequence, getEqualityMatcher);
}
