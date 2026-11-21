import type { ASN1Element } from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import {
    ORAddress,
    _decode_ORAddress,
} from "@wildboar/x400/MTSAbstractService";
import {
    compareORAddressInfo,
    type ORAddressInfo,
    orAddressToInfo,
} from "./orAddressUtilities.js";

export
function orAddressIsSubset (asserted: ORAddress, value: ORAddress): boolean | undefined {
    if (asserted.isEmptyOrAddress() || value.isEmptyOrAddress()) {
        return undefined;
    }
    const aInfo: ORAddressInfo | null = orAddressToInfo(asserted);
    const bInfo: ORAddressInfo | null = orAddressToInfo(value);
    if (!aInfo || !bInfo) {
        return undefined;
    }
    return compareORAddressInfo(aInfo, bInfo, "elements");
}

function decodeORAddressElementsAssertion (el: ASN1Element): ORAddressInfo {
    const decoded = _decode_ORAddress(el);
    if (decoded.isEmptyOrAddress()) {
        throw new Error("oRAddressElementsMatch: assertion is empty");
    }
    const info = orAddressToInfo(decoded);
    if (!info) {
        throw new Error("oRAddressElementsMatch: malformed ORAddress assertion");
    }
    return info;
}

export
const oRAddressElementsMatch: Matcher = createEqualityMatcher(
    decodeORAddressElementsAssertion,
    (assertion: ORAddressInfo, value: ASN1Element): boolean | undefined => {
        const v = _decode_ORAddress(value);
        if (v.isEmptyOrAddress()) {
            return undefined;
        }
        const vInfo = orAddressToInfo(v);
        if (!vInfo) {
            return undefined;
        }
        return compareORAddressInfo(assertion, vInfo, "elements");
    },
);

export default oRAddressElementsMatch;
