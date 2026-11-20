import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import {
    ORAddress,
    _decode_ORAddress,
} from "@wildboar/x400/MTSAbstractService";
import { ORAddressInfo, orAddressToInfo } from "./orAddressUtilities.js";

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
        const a = assertion.trim().replace(/\s+/g, " ").toUpperCase();
        const v = value.trim().replace(/\s+/g, " ").toUpperCase();
        if (v.indexOf(a) <= -1) {
            return false;
        }
    }
    if (typeof value === "object") {
        if (typeof assertion !== "object") {
            return false;
        }
        if (!value) {
            return true;
        }
        if (!assertion) {
            return true;
        }
        return Object.entries(value).every(([ k, v ]) => isSubstringSubset(v, assertion[k as keyof typeof assertion]));
    }
    return true;
}

export
function orAddressIsSubstringSubset (asserted: ORAddress, value: ORAddress): boolean {
    const aInfo: ORAddressInfo | null = orAddressToInfo(asserted);
    const bInfo: ORAddressInfo | null = orAddressToInfo(value);
    if (!aInfo) {
        return false;
    }
    if (!bInfo) {
        return false;
    }
    return isSubstringSubset(bInfo, aInfo);
}

export
const oRAddressSubstringElementsMatch: Matcher = createEqualityMatcher(
    _decode_ORAddress,
    (assertion, value): boolean => {
        const v = _decode_ORAddress(value);
        return orAddressIsSubstringSubset(assertion, v);
    },
);

export default oRAddressSubstringElementsMatch;
