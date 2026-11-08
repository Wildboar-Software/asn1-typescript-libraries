import { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
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
import { nameToKey } from "@wildboar/dn";
import { sortedKeyMultisetsEqual } from "../../utils/sortedKeyMultisetsEqual.mjs";

/**
 * Rec. ITU-T X.501 (10/2019), clause 24.2.1.9.2
 * `masterAndShadowAccessPointsMatch`.
 *
 * Equality for `MasterAndShadowAccessPoints`. Category, address, and
 * chaining requirements are ignored. The ae-titles are the same
 * multiset when {@link nameToKey} yields the same strings with the
 * same counts. Component order is not significant.
 */
/**
 * `masterAndShadowAccessPointsMatch` on decoded names and access
 * points. The inputs are not reordered.
 *
 * @param a Presented ae-titles.
 * @param value Stored access points, or those points already decoded.
 * @param _getMatcher Accepted for the matcher signature. Ae-titles
 *  are compared with `nameToKey`, so this lookup is not consulted.
 * @param flags `MATCH_FLAG_CONSTANT_TIME` scans every aligned key after sorting.
 *  Key generation and sorting themselves are not timing-independent.
 * @returns `true` when the ae-title keys match.
 */
export
function masterAndShadowAccessPointsMatchTyped (
    a: readonly Name[],
    value: MasterAndShadowAccessPoints | ASN1Element,
    _getMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean {
    const v = readDecoded(value, _decode_MasterAndShadowAccessPoints);
    if (a.length !== v.length) {
        return false;
    }
    const stored = v.map((point) => point.ae_title);
    return sortedKeyMultisetsEqual(
        a.map((name) => nameToKey(name)), stored.map((name) => nameToKey(name)),
        flags & MATCH_FLAG_CONSTANT_TIME,
    );
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
