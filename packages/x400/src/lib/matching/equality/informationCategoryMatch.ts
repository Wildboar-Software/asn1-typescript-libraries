import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import { _decode_InformationCategory } from "@wildboar/x400/IPMSHeadingExtensions";
import { normalizeMSString, univOrBmpToString } from "./orAddressUtilities.js";

export
const informationCategoryMatch: Matcher = createEqualityMatcher(
    _decode_InformationCategory,
    (assertion, value): boolean => {
        const v = _decode_InformationCategory(value);
        const a = assertion;
        if (v.reference && a.reference) {
            const referenceMatch = v.reference.isEqualTo(a.reference);
            if (!referenceMatch) {
                return false;
            }
            if (v.description && a.description) {
                const vdesc = normalizeMSString(univOrBmpToString(v.description), true);
                const adesc = normalizeMSString(univOrBmpToString(a.description), true);
                return (vdesc === adesc);
            } else {
                return true;
            }
        } else if (!v.reference && !a.reference) {
            if (!v.description || !a.description) {
                return false;
            }
            const vdesc = normalizeMSString(univOrBmpToString(v.description), true);
            const adesc = normalizeMSString(univOrBmpToString(a.description), true);
            return (vdesc === adesc);
        } else {
            return false;
        }
    },
);

export default informationCategoryMatch;
