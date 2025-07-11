import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import { _decodeSetOf } from "@wildboar/asn1/functional";
import {
    Name,
    _decode_Name,
} from "../../modules/InformationFramework/Name.ta.mjs";
import {
    MasterAndShadowAccessPoints,
    _decode_MasterAndShadowAccessPoints,
} from "../../modules/DistributedOperations/MasterAndShadowAccessPoints.ta.mjs";

function scoreName (name: Name): number {
    return name.rdnSequence.reduce((p, c, i) => (p + (c.length * (10 ** i))), 0);
}

export
const masterAndShadowAccessPointsMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: Name[] = _decodeSetOf<Name>(() => _decode_Name)(assertion);
    const v: MasterAndShadowAccessPoints = _decode_MasterAndShadowAccessPoints(value);
    if (a.length !== v.length) {
        return false;
    }
    const sortedAssertedNames: Name[] = a.sort((a, b) => (scoreName(a) - scoreName(b)));
    const sortedStoredNames: Name[] = v.map((n) => n.ae_title).sort((a, b) => (scoreName(a) - scoreName(b)));
    for (let i = 0; i < sortedAssertedNames.length; i++) {
        if (sortedAssertedNames[i] !== sortedStoredNames[i]) {
            return false;
        }
    }
    return true;
}

export default masterAndShadowAccessPointsMatch;
