import type { ASN1Element } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    MATCH_FLAG_ASSERTION_NORMALIZED,
    MATCH_FLAG_VALUE_NORMALIZED,
    type Matcher,
} from "@wildboar/x500";
import {
    ORAddress,
    _decode_ORAddress,
} from "@wildboar/x400/MTSAbstractService";
import {
    compareORAddressInfo,
    normalizeMSString,
    normalizeORAddressInfo,
    type ORAddressInfo,
    orAddressToInfo,
} from "./orAddressUtilities.js";

export
function isSubstringSubset (value: unknown, assertion: unknown): boolean {
    if (
        (typeof value === "number" || typeof value === "bigint")
        && (typeof assertion === "number" || typeof assertion === "bigint")
    ) {
        // Loose equality so a number matches the same bigint.
        return value == assertion;
    }
    const typeofValue = typeof value;
    const typeofAssertion = typeof assertion;
    if (typeofValue !== typeofAssertion) {
        return false;
    }
    if (typeof value === "string" && typeof assertion === "string") {
        const a = normalizeMSString(assertion, true);
        const v = normalizeMSString(value, true);
        if (a.length === 0) {
            return v.length === 0;
        }
        return v.indexOf(a) >= 0;
    }
    if (typeof value === "object" && typeof assertion === "object") {
        if (value === null || assertion === null) {
            return value === assertion;
        }
        if (ArrayBuffer.isView(value) || ArrayBuffer.isView(assertion)) {
            return false;
        }
        if (Array.isArray(value) !== Array.isArray(assertion)) {
            return false;
        }
        if (Array.isArray(assertion) && Array.isArray(value)) {
            for (let i = 0; i < assertion.length; i++) {
                if (assertion[i] === undefined) {
                    continue;
                }
                if (i >= value.length || !isSubstringSubset(value[i], assertion[i])) {
                    return false;
                }
            }
            return true;
        }
        for (const [ k, aVal ] of Object.entries(assertion)) {
            if (aVal === undefined) {
                continue;
            }
            if (
                !Object.prototype.hasOwnProperty.call(value, k)
                || !isSubstringSubset((value as Record<string, unknown>)[k], aVal)
            ) {
                return false;
            }
        }
        return true;
    }
    return value === assertion;
}

export
function orAddressIsSubstringSubset (
    asserted: ORAddress,
    value: ORAddress,
    flags: number = 0,
): boolean | undefined {
    if (asserted.isEmptyOrAddress() || value.isEmptyOrAddress()) {
        return undefined;
    }
    const aInfo: ORAddressInfo | null = orAddressToInfo(
        asserted,
        !(flags & MATCH_FLAG_ASSERTION_NORMALIZED),
    );
    const bInfo: ORAddressInfo | null = orAddressToInfo(
        value,
        !(flags & MATCH_FLAG_VALUE_NORMALIZED),
    );
    if (!aInfo || !bInfo) {
        return undefined;
    }
    return compareORAddressInfo(aInfo, bInfo, "substrings");
}

function decodeORAddressSubstringElementsAssertion (el: ASN1Element): ORAddressInfo {
    const decoded = _decode_ORAddress(el);
    if (decoded.isEmptyOrAddress()) {
        throw new Error("oRAddressSubstringElementsMatch: assertion is empty");
    }
    const info = orAddressToInfo(decoded, false);
    if (!info) {
        throw new Error("oRAddressSubstringElementsMatch: malformed ORAddress assertion");
    }
    return info;
}

function normalizeORAddressSubstringElementsAssertion (raw: ORAddressInfo): ORAddressInfo {
    const normalized = normalizeORAddressInfo(raw);
    if (!normalized) {
        throw new Error("oRAddressSubstringElementsMatch: malformed ORAddress assertion");
    }
    return normalized;
}

export
const oRAddressSubstringElementsMatch: Matcher = createEqualityMatcher(
    decodeORAddressSubstringElementsAssertion,
    (assertion: ORAddressInfo, value: ASN1Element, _getEqualityMatcher, flags = 0): boolean | undefined => {
        const v = _decode_ORAddress(value);
        if (v.isEmptyOrAddress()) {
            return undefined;
        }
        const vInfo = orAddressToInfo(v, !(flags & MATCH_FLAG_VALUE_NORMALIZED));
        if (!vInfo) {
            return undefined;
        }
        return compareORAddressInfo(assertion, vInfo, "substrings");
    },
    undefined,
    false,
    normalizeORAddressSubstringElementsAssertion,
);

export default oRAddressSubstringElementsMatch;
