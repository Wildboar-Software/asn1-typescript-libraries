import type { ASN1Element } from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import { _decode_ORAddress } from "@wildboar/x400/MTSAbstractService";
import {
    compareORAddressInfo,
    type ORAddressInfo,
    orAddressToInfo,
} from "./orAddressUtilities.js";

function decodeORAddressAssertion (el: ASN1Element): ORAddressInfo {
    const decoded = _decode_ORAddress(el);
    if (decoded.isEmptyOrAddress()) {
        throw new Error("oRAddressMatch: assertion is empty");
    }
    const info = orAddressToInfo(decoded);
    if (!info) {
        throw new Error("oRAddressMatch: malformed ORAddress assertion");
    }
    return info;
}

export
const oRAddressMatch: Matcher = createEqualityMatcher(
    decodeORAddressAssertion,
    (assertion: ORAddressInfo, value: ASN1Element): boolean | undefined => {
        const v = _decode_ORAddress(value);
        if (v.isEmptyOrAddress()) {
            return undefined;
        }
        const vInfo = orAddressToInfo(v);
        if (!vInfo) {
            return undefined;
        }
        return compareORAddressInfo(assertion, vInfo, "exact");
    },
);

export default oRAddressMatch;
