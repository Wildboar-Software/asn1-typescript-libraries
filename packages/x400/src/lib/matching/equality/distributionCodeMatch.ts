import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import { _decode_DistributionCode } from "@wildboar/x400/IPMSHeadingExtensions";
import { normalizeMSString, univOrBmpToString } from "./orAddressUtilities.js";

// NOTE: The or-descriptor is not used for this matching rule.
export
const distributionCodeMatch: Matcher = createEqualityMatcher(
    _decode_DistributionCode,
    (assertion, value): boolean => {
        const v = _decode_DistributionCode(value);
        const a = assertion;
        if (a.oid_code && v.oid_code) {
            const oidCodesMatch = a.oid_code.isEqualTo(v.oid_code);
            if (!oidCodesMatch) {
                return false;
            }
            if (a.alphanumeric_code && v.alphanumeric_code) {
                const acode = normalizeMSString(univOrBmpToString(a.alphanumeric_code), true);
                const vcode = normalizeMSString(univOrBmpToString(v.alphanumeric_code), true);
                return (acode === vcode);
            } else if (!a.alphanumeric_code && !v.alphanumeric_code) {
                return true;
            } else {
                return false;
            }
        } else if (a.alphanumeric_code && v.alphanumeric_code) {
            const acode = normalizeMSString(univOrBmpToString(a.alphanumeric_code), true);
            const vcode = normalizeMSString(univOrBmpToString(v.alphanumeric_code), true);
            return (acode === vcode);
        } else {
            return false;
        }
    },
);

export default distributionCodeMatch;
