import { ASN1CharactersError, type ASN1Element } from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import { _decode_ORName, type ORName } from "@wildboar/x400/MTSAbstractService";
import { _decode_MSString } from "@wildboar/x400/MSMatchingRules";
import { msStringToString, orAddressToInfo } from "./orAddressUtilities.js";

export
function extractStrings (value: unknown, depth: number = 0): string[] {
    if (depth > 10) {
        return [];
    }
    if (typeof value === "string") {
        return [ value ];
    } else if (value instanceof Map) {
        return Array.from(value.values()).flatMap((v) => extractStrings(v, depth + 1));
    } else if (value instanceof Set) {
        return Array.from(value).flatMap((v) => extractStrings(v, depth + 1));
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
    const str = msStringToString(_decode_MSString(el));
    if (str.length === 0) {
        throw new ASN1CharactersError("MSString assertion cannot be empty", el);
    }
    return str;
}

export
function normalizeORNameSingleElementAssertion (assertion: string): string {
    const trimmed = assertion.trim().replace(/\s+/g, " ").toUpperCase();
    return trimmed.length === 0 ? " " : trimmed;
}

export
function matchORNameSingleElement (
    assertion: string,
    v: ORName,
): boolean | undefined {
    if (v.isEmpty()) {
        return undefined;
    }
    if (!v.isEmptyOrAddress()) {
        const vInfo = orAddressToInfo(v);
        if (!vInfo) {
            return undefined;
        }
        const stringsInValue = extractStrings(vInfo);
        for (const strInValue of stringsInValue) {
            const s = normalizeORNameSingleElementAssertion(strInValue);
            if (s === assertion) {
                return true;
            }
        }
    }
    if (v.directory_name) {
        for (const rdn of v.directory_name.rdnSequence) {
            for (const atav of rdn) {
                if (atav.value.toString() === `"${assertion}"`) {
                    return true;
                }
            }
        }
    }
    return false;
}

export
function oRNameSingleElementMatchTyped (
    assertion: string,
    value: ASN1Element,
): boolean | undefined {
    const v = _decode_ORName(value);
    return matchORNameSingleElement(assertion, v);
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
