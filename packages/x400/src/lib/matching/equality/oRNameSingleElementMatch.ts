import type { ASN1Element } from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import { _decode_ORName } from "@wildboar/x400/MTSAbstractService";
import { _decode_MSString } from "@wildboar/x400/MSMatchingRules";
import { msStringToString, orAddressToInfo } from "./orAddressUtilities.js";

export
function extractStrings (value: unknown, depth: number = 0): string[] {
    if (depth > 10) {
        return [];
    }
    if (typeof value === "string") {
        return [ value ];
    } else if (typeof value === "object") {
        if (!value) {
            return [];
        }
        return Object.values(value).flatMap((v) => extractStrings(v, depth + 1));
    } else {
        return [];
    }
}

export
function decodeORNameSingleElementAssertion (el: ASN1Element): string {
    return msStringToString(_decode_MSString(el));
}

export
function normalizeORNameSingleElementAssertion (assertion: string): string {
    return assertion.trim().replace(/\s+/g, " ").toUpperCase();
}

export
function oRNameSingleElementMatchTyped (
    assertion: string,
    value: ASN1Element,
): boolean {
    const a: string = assertion;
    const v = _decode_ORName(value);
    const vInfo = orAddressToInfo(v);
    if (!vInfo) {
        return false;
    }
    const stringsInValue = extractStrings(vInfo);
    for (const strInValue of stringsInValue) {
        const s = strInValue.trim().replace(/\s+/g, " ").toUpperCase();
        if (s === a) {
            return true;
        }
    }
    if (v.directory_name) {
        for (const rdn of v.directory_name.rdnSequence) {
            for (const atav of rdn) {
                if (atav.value.toString() === `"${a}"`) {
                    return true;
                }
            }
        }
    }
    return false;
}

export
const oRNameSingleElementMatch: Matcher = createEqualityMatcher(
    decodeORNameSingleElementAssertion,
    oRNameSingleElementMatchTyped,
    undefined,
    true,
    normalizeORNameSingleElementAssertion,
);

export default oRNameSingleElementMatch;
