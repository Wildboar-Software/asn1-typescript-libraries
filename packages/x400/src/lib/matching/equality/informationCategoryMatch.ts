import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import { _decode_InformationCategory } from "@wildboar/x400/IPMSHeadingExtensions";
import { normalizeMSString, univOrBmpToString } from "./orAddressUtilities.js";

interface PreparedInformationCategory {
    readonly reference?: OBJECT_IDENTIFIER;
    readonly description?: string;
}

function decodeInformationCategoryAssertion (el: ASN1Element): PreparedInformationCategory {
    const ic = _decode_InformationCategory(el);
    return {
        reference: ic.reference,
        description: ic.description
            ? univOrBmpToString(ic.description)
            : undefined,
    };
}

function normalizeInformationCategoryAssertion (
    a: PreparedInformationCategory,
): PreparedInformationCategory {
    if (a.description === undefined) {
        return a;
    }
    return {
        reference: a.reference,
        description: normalizeMSString(a.description, true),
    };
}

export
const informationCategoryMatch: Matcher = createEqualityMatcher(
    decodeInformationCategoryAssertion,
    (assertion: PreparedInformationCategory, value): boolean => {
        const v = _decode_InformationCategory(value);
        const a = assertion;
        if (v.reference && a.reference) {
            if (!v.reference.isEqualTo(a.reference)) {
                return false;
            }
            if (v.description && (a.description !== undefined)) {
                const vdesc = normalizeMSString(univOrBmpToString(v.description), true);
                return (vdesc === a.description);
            }
            return true;
        }
        if (!v.reference && !a.reference) {
            if (!v.description || (a.description === undefined)) {
                return false;
            }
            const vdesc = normalizeMSString(univOrBmpToString(v.description), true);
            return (vdesc === a.description);
        }
        return false;
    },
    undefined,
    false,
    normalizeInformationCategoryAssertion,
);

export default informationCategoryMatch;
