import type { ASN1Element } from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import { _decode_ORName, type ORName } from "@wildboar/x400/MTSAbstractService";
import { orAddressIsSubset } from "./oRAddressElementsMatch.js";

export
function oRNameElementsMatchTyped (
    assertion: ORName,
    value: ASN1Element,
): boolean {
    const v = _decode_ORName(value);
    // TODO: Use the directory name too.
    return orAddressIsSubset(assertion, v);
}

export
const oRNameElementsMatch: Matcher = createEqualityMatcher(
    _decode_ORName,
    oRNameElementsMatchTyped,
);

export default oRNameElementsMatch;
