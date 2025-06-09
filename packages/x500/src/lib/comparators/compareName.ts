import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type { Name } from "../modules/InformationFramework/Name.ta.js";
import type EqualityMatcher from "../types/EqualityMatcher.js";
import compareRDNSequence from "./compareRDNSequence.js";

export default function compare(
    a: Name,
    b: Name,
    getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    return compareRDNSequence(a.rdnSequence, b.rdnSequence, getEqualityMatcher);
}
