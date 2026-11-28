import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    type Matcher,
} from "@wildboar/x500";
import { ctBytesEqual, ctStringsEqual } from "../constantTime.mjs";
import {
    type DistributionCode,
    _decode_DistributionCode,
} from "@wildboar/x400/IPMSHeadingExtensions";
import {
    normalizeMSString,
    prepareMSStringValue,
    univOrBmpToString,
} from "./orAddressUtilities.mjs";

const EMPTY_BYTES = new Uint8Array(0);

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

function matchDistributionCodeFast (
    a: PreparedDistributionCode,
    v: DistributionCode,
    flags: number,
): boolean {
    if (a.oidCode && v.oid_code) {
        if (!a.oidCode.isEqualTo(v.oid_code)) {
            return false;
        }
        if ((a.alphanumericCode !== undefined) && v.alphanumeric_code) {
            const vcode = prepareMSStringValue(univOrBmpToString(v.alphanumeric_code), true, flags);
            return a.alphanumericCode === vcode;
        }
        return (a.alphanumericCode === undefined) && !v.alphanumeric_code;
    }
    if ((a.alphanumericCode !== undefined) && v.alphanumeric_code) {
        const vcode = prepareMSStringValue(univOrBmpToString(v.alphanumeric_code), true, flags);
        return a.alphanumericCode === vcode;
    }
    return false;
}

function matchDistributionCodeConstantTime (
    a: PreparedDistributionCode,
    v: DistributionCode,
    flags: number,
): boolean {
    const bothHaveOid = !!(a.oidCode && v.oid_code);
    let oidMatch = false;
    if (a.oidCode) {
        const eq = ctBytesEqual(
            a.oidCode.toBytesUnsafe(),
            v.oid_code ? v.oid_code.toBytesUnsafe() : EMPTY_BYTES,
        );
        oidMatch = bothHaveOid && eq;
    }
    const aHasAlpha = a.alphanumericCode !== undefined;
    let alphaMatch = false;
    if (aHasAlpha) {
        const vcode = v.alphanumeric_code
            ? prepareMSStringValue(univOrBmpToString(v.alphanumeric_code!), true, flags)
            : "";
        const cmp = ctStringsEqual(a.alphanumericCode!, vcode);
        alphaMatch = !!v.alphanumeric_code && cmp;
    }
    if (bothHaveOid) {
        return oidMatch && (alphaMatch || (!aHasAlpha && !v.alphanumeric_code));
    }
    return alphaMatch;
}

// NOTE: The or-descriptor is not used for this matching rule.
export
const distributionCodeMatch: Matcher = createEqualityMatcher(
    decodeDistributionCodeAssertion,
    (assertion: PreparedDistributionCode, value, _getEqualityMatcher, flags = 0): boolean => {
        const v = _decode_DistributionCode(value);
        return (flags & MATCH_FLAG_CONSTANT_TIME)
            ? matchDistributionCodeConstantTime(assertion, v, flags)
            : matchDistributionCodeFast(assertion, v, flags);
    },
    undefined,
    false,
    normalizeDistributionCodeAssertion,
);

export default distributionCodeMatch;
