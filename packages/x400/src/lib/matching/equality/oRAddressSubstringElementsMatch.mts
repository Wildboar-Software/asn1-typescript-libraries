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
} from "./orAddressUtilities.mjs";

export
function orAddressIsSubstringSubset (
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
    return compareORAddressInfo(aInfo, bInfo, "substrings", flags);
}

function decodeORAddressSubstringElementsAssertion (el: ASN1Element): ORAddressInfo {
    const decoded = _decode_ORAddress(el);
    if (decoded.isEmptyOrAddress()) {
        throw new Error("oRAddressSubstringElementsMatch: assertion is empty");
    }
    const info = orAddressToInfo(decoded, false);
    if (!info) {
        throw new Error("oRAddressSubstringElementsMatch: malformed ORAddress assertion");
    }
    return info;
}

function normalizeORAddressSubstringElementsAssertion (raw: ORAddressInfo): ORAddressInfo {
    const normalized = normalizeORAddressInfo(raw);
    if (!normalized) {
        throw new Error("oRAddressSubstringElementsMatch: malformed ORAddress assertion");
    }
    return normalized;
}

export
const oRAddressSubstringElementsMatch: Matcher = createEqualityMatcher(
    decodeORAddressSubstringElementsAssertion,
    (assertion: ORAddressInfo, value: ASN1Element, _getEqualityMatcher, flags = 0): boolean | undefined => {
        const v = _decode_ORAddress(value);
        if (v.isEmptyOrAddress()) {
            return undefined;
        }
        const vInfo = orAddressToInfo(v, !(flags & MATCH_FLAG_VALUE_NORMALIZED));
        if (!vInfo) {
            return undefined;
        }
        return compareORAddressInfo(assertion, vInfo, "substrings", flags);
    },
    undefined,
    false,
    normalizeORAddressSubstringElementsAssertion,
);

export default oRAddressSubstringElementsMatch;
