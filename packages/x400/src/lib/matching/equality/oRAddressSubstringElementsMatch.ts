import type { ASN1Element } from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import { PresentationAddress } from "@wildboar/x500/SelectedAttributeTypes";
import { presentationAddressMatchTyped } from "@wildboar/x500/matching/equality";
import {
    ORAddress,
    _decode_ORAddress,
} from "@wildboar/x400/MTSAbstractService";
import { type ORAddressInfo, orAddressToInfo } from "./orAddressUtilities.js";

function normalizeSubstringPiece (s: string): string {
    if (s.length === 0) {
        return "";
    }
    const trimmed = s.replace(/\s+/g, " ").trim().toUpperCase();
    return trimmed.length === 0 ? " " : trimmed;
}

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
        const a = normalizeSubstringPiece(assertion);
        const v = normalizeSubstringPiece(value);
        if (a.length === 0) {
            return v.length === 0;
        }
        return v.indexOf(a) >= 0;
    }
    if (typeof value === "object" && typeof assertion === "object") {
        if (value === null || assertion === null) {
            return value === assertion;
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
function orAddressIsSubstringSubset (asserted: ORAddress, value: ORAddress): boolean {
    if (asserted.isEmptyOrAddress() || value.isEmptyOrAddress()) {
        return false;
    }
    const aInfo: ORAddressInfo | null = orAddressToInfo(asserted);
    const bInfo: ORAddressInfo | null = orAddressToInfo(value);
    if (!aInfo || !bInfo) {
        return false;
    }
    if (aInfo.extendedNetworkAddress !== undefined) {
        if (bInfo.extendedNetworkAddress === undefined) {
            return false;
        }
        if (aInfo.extendedNetworkAddress instanceof PresentationAddress) {
            if (!(bInfo.extendedNetworkAddress instanceof PresentationAddress)) {
                return false;
            }
            if (!presentationAddressMatchTyped(aInfo.extendedNetworkAddress, bInfo.extendedNetworkAddress)) {
                return false;
            }
        } else if (Array.isArray(aInfo.extendedNetworkAddress)) {
            if (!Array.isArray(bInfo.extendedNetworkAddress)) {
                return false;
            }
            if (!isSubstringSubset(bInfo.extendedNetworkAddress, aInfo.extendedNetworkAddress)) {
                return false;
            }
        } else {
            return false;
        }
    }
    const comparableAInfo: ORAddressInfo = {
        ...aInfo,
        extendedNetworkAddress: undefined,
    };
    const comparableBInfo: ORAddressInfo = {
        ...bInfo,
        extendedNetworkAddress: undefined,
    };
    return isSubstringSubset(comparableBInfo, comparableAInfo);
}

export
const oRAddressSubstringElementsMatch: Matcher = createEqualityMatcher(
    (el: ASN1Element): ORAddress => {
        const decoded = _decode_ORAddress(el);
        if (decoded.isEmptyOrAddress()) {
            throw new Error("oRAddressSubstringElementsMatch: assertion is empty");
        }
        return decoded;
    },
    (assertion, value): boolean | undefined => {
        const v = _decode_ORAddress(value);
        if (v.isEmptyOrAddress()) {
            return undefined;
        }
        return orAddressIsSubstringSubset(assertion, v);
    },
);

export default oRAddressSubstringElementsMatch;
