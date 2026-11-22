import type { ASN1Element } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    MATCH_FLAG_ASSERTION_NORMALIZED,
    MATCH_FLAG_VALUE_NORMALIZED,
    type Matcher,
} from "@wildboar/x500";
import {
    ORAddress,
    _decode_ORAddress,
} from "@wildboar/x400/MTSAbstractService";
import {
    compareORAddressInfo,
    normalizeORAddressInfo,
    type ORAddressInfo,
    orAddressToInfo,
} from "./orAddressUtilities.js";

export
function orAddressIsSubset (
    asserted: ORAddress,
    value: ORAddress,
    flags: number = 0,
): boolean | undefined {
    if (asserted.isEmptyOrAddress() || value.isEmptyOrAddress()) {
        return undefined;
    }
    const aInfo: ORAddressInfo | null = orAddressToInfo(
        asserted,
        !(flags & MATCH_FLAG_ASSERTION_NORMALIZED),
    );
    const bInfo: ORAddressInfo | null = orAddressToInfo(
        value,
        !(flags & MATCH_FLAG_VALUE_NORMALIZED),
    );
    if (!aInfo || !bInfo) {
        return undefined;
    }
    return compareORAddressInfo(aInfo, bInfo, "elements", flags);
}

function decodeORAddressElementsAssertion (el: ASN1Element): ORAddressInfo {
    const decoded = _decode_ORAddress(el);
    if (decoded.isEmptyOrAddress()) {
        throw new Error("oRAddressElementsMatch: assertion is empty");
    }
    const info = orAddressToInfo(decoded, false);
    if (!info) {
        throw new Error("oRAddressElementsMatch: malformed ORAddress assertion");
    }
    return info;
}

function normalizeORAddressElementsAssertion (raw: ORAddressInfo): ORAddressInfo {
    const normalized = normalizeORAddressInfo(raw);
    if (!normalized) {
        throw new Error("oRAddressElementsMatch: malformed ORAddress assertion");
    }
    return normalized;
}

export
const oRAddressElementsMatch: Matcher = createEqualityMatcher(
    decodeORAddressElementsAssertion,
    (assertion: ORAddressInfo, value: ASN1Element, _getEqualityMatcher, flags = 0): boolean | undefined => {
        const v = _decode_ORAddress(value);
        if (v.isEmptyOrAddress()) {
            return undefined;
        }
        const vInfo = orAddressToInfo(v, !(flags & MATCH_FLAG_VALUE_NORMALIZED));
        if (!vInfo) {
            return undefined;
        }
        return compareORAddressInfo(assertion, vInfo, "elements", flags);
    },
    undefined,
    false,
    normalizeORAddressElementsAssertion,
);

export default oRAddressElementsMatch;
