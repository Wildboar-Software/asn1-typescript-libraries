import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    type Matcher,
} from "@wildboar/x500";
import { ctBytesEqual, ctStringsEqual } from "../constantTime.js";
import {
    type InformationCategory,
    _decode_InformationCategory,
} from "@wildboar/x400/IPMSHeadingExtensions";
import {
    normalizeMSString,
    prepareMSStringValue,
    univOrBmpToString,
} from "./orAddressUtilities.js";

const EMPTY_BYTES = new Uint8Array(0);

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

function matchInformationCategoryFast (
    a: PreparedInformationCategory,
    v: InformationCategory,
    flags: number,
): boolean {
    if (v.reference && a.reference) {
        if (!v.reference.isEqualTo(a.reference)) {
            return false;
        }
        if (v.description && (a.description !== undefined)) {
            const vdesc = prepareMSStringValue(univOrBmpToString(v.description), true, flags);
            return a.description === vdesc;
        }
        return true;
    }
    if (!v.reference && !a.reference) {
        if (!v.description || (a.description === undefined)) {
            return false;
        }
        const vdesc = prepareMSStringValue(univOrBmpToString(v.description), true, flags);
        return a.description === vdesc;
    }
    return false;
}

function matchInformationCategoryConstantTime (
    a: PreparedInformationCategory,
    v: InformationCategory,
    flags: number,
): boolean {
    const aHasRef = !!a.reference;
    const vHasRef = !!v.reference;
    let refMatch = false;
    if (aHasRef) {
        const eq = ctBytesEqual(
            a.reference!.toBytesUnsafe(),
            vHasRef ? v.reference!.toBytesUnsafe() : EMPTY_BYTES,
        );
        refMatch = vHasRef && eq;
    }
    const aHasDesc = a.description !== undefined;
    const vHasDesc = !!v.description;
    let descMatch = false;
    if (aHasDesc) {
        const vdesc = vHasDesc
            ? prepareMSStringValue(univOrBmpToString(v.description!), true, flags)
            : "";
        const cmp = ctStringsEqual(a.description!, vdesc);
        descMatch = vHasDesc && cmp;
    }
    if (aHasRef && vHasRef) {
        return refMatch && ((aHasDesc && vHasDesc) ? descMatch : true);
    }
    if (!aHasRef && !vHasRef) {
        return descMatch;
    }
    return false;
}

export
const informationCategoryMatch: Matcher = createEqualityMatcher(
    decodeInformationCategoryAssertion,
    (assertion: PreparedInformationCategory, value, _getEqualityMatcher, flags = 0): boolean => {
        const v = _decode_InformationCategory(value);
        return (flags & MATCH_FLAG_CONSTANT_TIME)
            ? matchInformationCategoryConstantTime(assertion, v, flags)
            : matchInformationCategoryFast(assertion, v, flags);
    },
    undefined,
    false,
    normalizeInformationCategoryAssertion,
);

export default informationCategoryMatch;
