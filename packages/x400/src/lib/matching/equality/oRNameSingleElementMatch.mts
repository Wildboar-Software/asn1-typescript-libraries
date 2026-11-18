import type { ASN1Element } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "@wildboar/x500";
import { _decode_ORName } from "@wildboar/x400/MTSAbstractService";
import {
    _decode_MSString,
} from "@wildboar/x400/MSMatchingRules";
import { msStringToString, orAddressToInfo } from "./orAddressUtilities.mjs";

export
function extractStrings(value: unknown, depth: number = 0): string[] {
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
function oRNameSingleElementMatchTyped(
    assertion: ASN1Element,
    value: ASN1Element,
): boolean | undefined {
    const a: string = msStringToString(_decode_MSString(assertion))
        .trim()
        .replace(/\s+/g, " ")
        .toUpperCase();
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

oRNameSingleElementMatchTyped satisfies TypedEquationFunction<ASN1Element>;

export
const oRNameSingleElementMatch: Matcher = createEqualityMatcher(
    (el: ASN1Element): ASN1Element => el,
    oRNameSingleElementMatchTyped,
);

export default oRNameSingleElementMatch;
