import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import { BER, _encodeUTF8String } from "@wildboar/asn1/functional";
import { _encode_UnboundedDirectoryString } from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import caseIgnoreMatch from "./caseIgnoreMatch.mjs";
import dnsNameMatch from "./dnsNameMatch.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.9.3 `intEmailMatch`.
 *
 * Equality of `IntEmail`: both local-part and domain-part must
 * match. The local-part uses `caseIgnoreMatch`; the domain-part
 * uses `dnsNameMatch` (clause 8.9.2).
 */
export
const intEmailMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    // The domain cannot contain `@`, so the last `@` is the separator.
    const a: string = assertion.utf8String;
    const v: string = value.utf8String;
    const aAt: number = a.lastIndexOf("@");
    const vAt: number = v.lastIndexOf("@");
    if (aAt <= 0 || vAt <= 0 || aAt >= a.length - 1 || vAt >= v.length - 1) {
        return false;
    }
    const localsMatch: boolean = caseIgnoreMatch(
        _encode_UnboundedDirectoryString({ uTF8String: a.slice(0, aAt) }, BER),
        _encode_UnboundedDirectoryString({ uTF8String: v.slice(0, vAt) }, BER),
    );
    if (!localsMatch) {
        return false;
    }
    return dnsNameMatch(
        _encodeUTF8String(a.slice(aAt + 1), BER),
        _encodeUTF8String(v.slice(vAt + 1), BER),
    );
}

export default intEmailMatch;
