import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { _decodeSetOf } from "@wildboar/asn1/functional";
import {
    Name,
    _decode_Name,
} from "../../modules/InformationFramework/Name.ta.mjs";
import {
    MasterAndShadowAccessPoints,
    _decode_MasterAndShadowAccessPoints,
} from "../../modules/DistributedOperations/MasterAndShadowAccessPoints.ta.mjs";
import compareName from "../../comparators/compareName.mjs";

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
export
const masterAndShadowAccessPointsMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean => {
    const a: Name[] = _decodeSetOf<Name>(() => _decode_Name)(assertion);
    const v: MasterAndShadowAccessPoints = _decode_MasterAndShadowAccessPoints(value);
    if (a.length !== v.length) {
        return false;
    }
    const sortedAssertedNames: Name[] = a.sort((a, b) => (scoreName(a) - scoreName(b)));
    const sortedStoredNames: Name[] = v.map((n) => n.ae_title).sort((a, b) => (scoreName(a) - scoreName(b)));
    for (let i = 0; i < sortedAssertedNames.length; i++) {
        if (!compareName(sortedAssertedNames[i], sortedStoredNames[i], getEqualityMatcher)) {
            return false;
        }
    }
    return true;
}

export default masterAndShadowAccessPointsMatch;
