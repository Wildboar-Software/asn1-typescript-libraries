import type { ASN1Element } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    MATCH_FLAG_VALUE_NORMALIZED,
    type Matcher,
} from "@wildboar/x500";
import { _decode_ORAddress } from "@wildboar/x400/MTSAbstractService";
import {
    compareORAddressInfo,
    normalizeORAddressInfo,
    type ORAddressInfo,
    orAddressToInfo,
} from "./orAddressUtilities.js";

function decodeORAddressAssertion (el: ASN1Element): ORAddressInfo {
    const decoded = _decode_ORAddress(el);
    if (decoded.isEmptyOrAddress()) {
        throw new Error("oRAddressMatch: assertion is empty");
    }
    const info = orAddressToInfo(decoded, false);
    if (!info) {
        throw new Error("oRAddressMatch: malformed ORAddress assertion");
    }
    return info;
}

function normalizeORAddressAssertion (raw: ORAddressInfo): ORAddressInfo {
    const normalized = normalizeORAddressInfo(raw);
    if (!normalized) {
        throw new Error("oRAddressMatch: malformed ORAddress assertion");
    }
    return normalized;
}

export
const oRAddressMatch: Matcher = createEqualityMatcher(
    decodeORAddressAssertion,
    (assertion: ORAddressInfo, value: ASN1Element, _getEqualityMatcher, flags = 0): boolean | undefined => {
        const v = _decode_ORAddress(value);
        if (v.isEmptyOrAddress()) {
            return undefined;
        }
        const vInfo = orAddressToInfo(v, !(flags & MATCH_FLAG_VALUE_NORMALIZED));
        if (!vInfo) {
            return undefined;
        }
        return compareORAddressInfo(assertion, vInfo, "exact");
    },
    undefined,
    false,
    normalizeORAddressAssertion,
);

export default oRAddressMatch;
