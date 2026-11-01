import { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { valueEqualityMatcher } from "../valueEqualityMatcher.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";
import { readDecoded } from "../readValue.mjs";
import { _decodeSetOf } from "@wildboar/asn1/functional";
import {
    type Name,
    _decode_Name,
} from "../../modules/InformationFramework/Name.ta.mjs";
import {
    type MasterAndShadowAccessPoints,
    _decode_MasterAndShadowAccessPoints,
} from "../../modules/DistributedOperations/MasterAndShadowAccessPoints.ta.mjs";
import { compareName } from "@wildboar/dn";

function scoreName (name: Name): number {
    return name.rdnSequence.reduce((p, c, i) => (p + (c.length * (10 ** i))), 0);
}

/**
 * Rec. ITU-T X.501 (10/2019), clause 24.2.1.9.2
 * `masterAndShadowAccessPointsMatch`.
 *
 * Equality for `MasterAndShadowAccessPoints`. Category and address
 * are ignored; remaining `ae-title` names must be the same set
 * (same count, each pair matching via `distinguishedNameMatch`
 * after ordering the SET OF elements in any convenient fashion).
 */
/**
 * `masterAndShadowAccessPointsMatch` on decoded names and access
 * points. The name arrays are copied before sorting.
 *
 * @param a Presented ae-titles.
 * @param value Stored access points, or those points already decoded.
 * @param getMatcher Equality rule lookup for naming attributes.
 * @returns `true` when the ae-title sets match.
 */
export
function masterAndShadowAccessPointsMatchTyped (
    a: readonly Name[],
    value: MasterAndShadowAccessPoints | ASN1Element,
    getMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean {
    const v = readDecoded(value, _decode_MasterAndShadowAccessPoints);
    const constantTime = Boolean(flags & MATCH_FLAG_CONSTANT_TIME);
    const getEqualityMatcher = valueEqualityMatcher(getMatcher, flags);
    if (a.length !== v.length) {
        return false;
    }
    const sortedAssertedNames: Name[] = a.slice().sort((a, b) => (scoreName(a) - scoreName(b)));
    const sortedStoredNames: Name[] = v.map((n) => n.ae_title).sort((a, b) => (scoreName(a) - scoreName(b)));
    let matched = true;
    for (let i = 0; i < sortedAssertedNames.length; i++) {
        if (!compareName(sortedAssertedNames[i], sortedStoredNames[i], getEqualityMatcher)) {
            if (!constantTime) {
                return false;
            }
            matched = false;
        }
    }
    return matched;
}

masterAndShadowAccessPointsMatchTyped satisfies TypedEquationFunction<readonly Name[]>;

/**
 * `masterAndShadowAccessPointsMatch` as a `Matcher`.
 */
export
const masterAndShadowAccessPointsMatch: Matcher = createEqualityMatcher(
    _decodeSetOf<Name>(() => _decode_Name),
    masterAndShadowAccessPointsMatchTyped,
    undefined,
    true,
);

export default masterAndShadowAccessPointsMatch;
