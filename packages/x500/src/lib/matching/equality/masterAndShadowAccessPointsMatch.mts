import { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_DEBUG,
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

/**
 * Pair comparisons allowed by {@link matchInConstantTime}.
 * 31 ae-titles is 961 comparisons; 32 is 1024 and stops.
 */
const MAX_MATCH_ITERATIONS = 1000;

/**
 * Multiset equality of ae-title keys.
 *
 * Two names match when {@link nameToKey} returns the same string.
 * Sorting those strings orders the set; equal multisets then line
 * up index by index.
 */
function matchByNameKey (
    asserted: readonly Name[],
    stored: readonly Name[],
): boolean {
    const assertedKeys = asserted.map(nameToKey).sort();
    const storedKeys = stored.map(nameToKey).sort();
    for (let i = 0; i < assertedKeys.length; i++) {
        if (assertedKeys[i] !== storedKeys[i]) {
            return false;
        }
    }
    return true;
}

/**
 * Same key multiset, comparing every pair until
 * {@link MAX_MATCH_ITERATIONS}.
 *
 * Each stored key is consumed at most once. Passing the iteration
 * cap returns `false`.
 */
function matchInConstantTime (
    asserted: readonly Name[],
    stored: readonly Name[],
    flags: number,
): boolean {
    const assertedKeys = asserted.map(nameToKey);
    const storedKeys = stored.map(nameToKey);
    const used: boolean[] = new Array(storedKeys.length).fill(false);
    let matched = true;
    let iterations = 0;
    for (let i = 0; i < assertedKeys.length; i++) {
        let found = false;
        for (let j = 0; j < storedKeys.length; j++) {
            iterations += 1;
            if (iterations > MAX_MATCH_ITERATIONS) {
                if (flags & MATCH_FLAG_DEBUG) {
                    console.error(
                        "@wildboar/x500: debug: masterAndShadowAccessPointsMatch:"
                        + ` exceeded ${MAX_MATCH_ITERATIONS} iterations`,
                    );
                }
                return false;
            }
            if (assertedKeys[i] === storedKeys[j] && !used[j] && !found) {
                used[j] = true;
                found = true;
            }
        }
        if (!found) {
            matched = false;
        }
    }
    return matched;
}

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
 * @param flags `MATCH_FLAG_CONSTANT_TIME` compares every pair, up to
 *  1000 iterations.
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
    if (flags & MATCH_FLAG_CONSTANT_TIME) {
        return matchInConstantTime(a, stored, flags);
    }
    return matchByNameKey(a, stored);
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
