import type { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { readDecoded } from "../readValue.mjs";
import { valueEqualityMatcher } from "../valueEqualityMatcher.mjs";
import { compareRDNSequence } from "@wildboar/dn";
import {
    type DistinguishedName,
    _decode_DistinguishedName,
} from "../../modules/InformationFramework/DistinguishedName.ta.mjs";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

/**
 * Rec. ITU-T X.501 (10/2019), clause 13.5.2
 * `distinguishedNameMatch` (also 8.9.6 and 9.4).
 *
 * TRUE iff both names have the same number of RDNs, corresponding
 * RDNs have the same number of `AttributeTypeAndValue`, and
 * corresponding AVAs (same RDN, same attribute type) have values
 * that match using the attribute type's equality matching rule.
 *
 * @param assertion Presented name.
 * @param value Stored name, or that name already decoded.
 * @param getMatcher Equality rule lookup for naming attributes.
 */
export
function distinguishedNameMatchTyped (
    assertion: DistinguishedName,
    value: DistinguishedName | ASN1Element,
    getMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    return compareRDNSequence(
        assertion,
        readDecoded(value, _decode_DistinguishedName),
        valueEqualityMatcher(getMatcher, flags),
    );
}

distinguishedNameMatchTyped satisfies TypedEquationFunction<DistinguishedName>;

/**
 * `distinguishedNameMatch` as a `Matcher`.
 */
export
const distinguishedNameMatch: Matcher = createEqualityMatcher(
    _decode_DistinguishedName,
    distinguishedNameMatchTyped,
);

export default distinguishedNameMatch;
