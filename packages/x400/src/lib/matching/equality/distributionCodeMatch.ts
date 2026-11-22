import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import { _decode_DistributionCode } from "@wildboar/x400/IPMSHeadingExtensions";
import {
    normalizeMSString,
    prepareMSStringValue,
    univOrBmpToString,
} from "./orAddressUtilities.js";

interface PreparedDistributionCode {
    readonly oidCode?: OBJECT_IDENTIFIER;
    readonly alphanumericCode?: string;
}

function decodeDistributionCodeAssertion (el: ASN1Element): PreparedDistributionCode {
    const d = _decode_DistributionCode(el);
    return {
        oidCode: d.oid_code,
        alphanumericCode: d.alphanumeric_code
            ? univOrBmpToString(d.alphanumeric_code)
            : undefined,
    };
}

function normalizeDistributionCodeAssertion (
    a: PreparedDistributionCode,
): PreparedDistributionCode {
    if (a.alphanumericCode === undefined) {
        return a;
    }
    return {
        oidCode: a.oidCode,
        alphanumericCode: normalizeMSString(a.alphanumericCode, true),
    };
}

// NOTE: The or-descriptor is not used for this matching rule.
export
const distributionCodeMatch: Matcher = createEqualityMatcher(
    decodeDistributionCodeAssertion,
    (assertion: PreparedDistributionCode, value, _getEqualityMatcher, flags = 0): boolean => {
        const v = _decode_DistributionCode(value);
        const a = assertion;
        if (a.oidCode && v.oid_code) {
            if (!a.oidCode.isEqualTo(v.oid_code)) {
                return false;
            }
            if ((a.alphanumericCode !== undefined) && v.alphanumeric_code) {
                const vcode = prepareMSStringValue(univOrBmpToString(v.alphanumeric_code), true, flags);
                return (a.alphanumericCode === vcode);
            }
            return (a.alphanumericCode === undefined) && !v.alphanumeric_code;
        }
        if ((a.alphanumericCode !== undefined) && v.alphanumeric_code) {
            const vcode = prepareMSStringValue(univOrBmpToString(v.alphanumeric_code), true, flags);
            return (a.alphanumericCode === vcode);
        }
        return false;
    },
    undefined,
    false,
    normalizeDistributionCodeAssertion,
);

export default distributionCodeMatch;
