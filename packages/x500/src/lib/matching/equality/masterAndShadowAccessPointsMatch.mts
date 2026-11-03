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
import {
    compareName,
    nameToKey,
    type GetDistinguishedValueMatcher,
} from "@wildboar/dn";

/**
 * Remove one stored ae-title that matches `asserted`.
 *
 * `distinguishedNameMatch` is an equivalence, so the first match is a
 * correct representative of that class. Callers use this to test
 * multiset equality.
 */
function takeEqualName (
    candidates: Name[] | undefined,
    asserted: Name,
    getEqualityMatcher: GetDistinguishedValueMatcher | undefined,
): boolean {
    if (!candidates) {
        return false;
    }
    for (let i = 0; i < candidates.length; i++) {
        if (compareName(asserted, candidates[i], getEqualityMatcher)) {
            candidates.splice(i, 1);
            return true;
        }
    }
    return false;
}

/**
 * Multiset equality of ae-titles.
 *
 * `nameToKey` buckets names that the default distinguished-name
 * comparison would treat as equal, which makes the usual case one
 * hash lookup and one name comparison per element. A caller-supplied
 * equality rule can still equate names whose keys differ, so a miss
 * scans the other buckets. Keys are not trusted on their own:
 * `compareName` decides each pair.
 */
function matchByNameKey (
    asserted: readonly Name[],
    stored: readonly Name[],
    getEqualityMatcher: GetDistinguishedValueMatcher | undefined,
): boolean {
    const buckets = new Map<string, Name[]>();
    for (let i = 0; i < stored.length; i++) {
        const storedName = stored[i];
        const key = nameToKey(storedName);
        const bucket = buckets.get(key);
        if (bucket) {
            bucket.push(storedName);
        } else {
            buckets.set(key, [ storedName ]);
        }
    }
    for (let i = 0; i < asserted.length; i++) {
        const name = asserted[i];
        const key = nameToKey(name);
        if (takeEqualName(buckets.get(key), name, getEqualityMatcher)) {
            continue;
        }
        let found = false;
        for (const [ otherKey, candidates ] of buckets) {
            if (otherKey === key) {
                continue;
            }
            if (takeEqualName(candidates, name, getEqualityMatcher)) {
                found = true;
                break;
            }
        }
        if (!found) {
            return false;
        }
    }
    return true;
}

/**
 * Same multiset test, with one name comparison for every pair.
 *
 * The number of `compareName` calls is `asserted.length ** 2` (the
 * lengths are equal). Each asserted name still consumes at most one
 * stored name.
 */
function matchInConstantTime (
    asserted: readonly Name[],
    stored: readonly Name[],
    getEqualityMatcher: GetDistinguishedValueMatcher | undefined,
): boolean {
    const used: boolean[] = new Array(stored.length).fill(false);
    let matched = true;
    for (let i = 0; i < asserted.length; i++) {
        let found = false;
        for (let j = 0; j < stored.length; j++) {
            const equal = compareName(asserted[i], stored[j], getEqualityMatcher);
            if (equal && !used[j] && !found) {
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
 * chaining requirements are ignored. The ae-title values must be the
 * same multiset: the same count, and a bijection under which each
 * pair matches by `distinguishedNameMatch`. Component order is not
 * significant.
 */
/**
 * `masterAndShadowAccessPointsMatch` on decoded names and access
 * points. The inputs are not reordered.
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
    if (a.length !== v.length) {
        return false;
    }
    if (a.length === 0) {
        return true;
    }
    const getEqualityMatcher = valueEqualityMatcher(getMatcher, flags);
    const stored = v.map((point) => point.ae_title);
    if (a.length === 1) {
        return compareName(a[0], stored[0], getEqualityMatcher);
    }
    if (flags & MATCH_FLAG_CONSTANT_TIME) {
        return matchInConstantTime(a, stored, getEqualityMatcher);
    }
    return matchByNameKey(a, stored, getEqualityMatcher);
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
