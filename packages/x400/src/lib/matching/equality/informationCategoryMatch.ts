import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import { _decode_InformationCategory } from "@wildboar/x400/IPMSHeadingExtensions";
import { univOrBmpToString } from "./orAddressUtilities.js";

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
                const vdesc = univOrBmpToString(v.description).trim().replace(/\s+/g, " ").toUpperCase();
                const adesc = univOrBmpToString(a.description).trim().replace(/\s+/g, " ").toUpperCase();
                return (vdesc === adesc);
            } else {
                return true;
            }
        } else if (!v.reference && !a.reference) {
            if (!v.description || !a.description) {
                return false;
            }
            const vdesc = univOrBmpToString(v.description).trim().replace(/\s+/g, " ").toUpperCase();
            const adesc = univOrBmpToString(a.description).trim().replace(/\s+/g, " ").toUpperCase();
            return (vdesc === adesc);
        } else {
            return false;
        }
    },
);

export default informationCategoryMatch;
