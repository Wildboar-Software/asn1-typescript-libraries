import type { ASN1Element } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "@wildboar/x500";
import {
    type ORAddress,
    _decode_ORAddress,
} from "@wildboar/x400/MTSAbstractService";
import { type ORAddressInfo, orAddressToInfo } from "./orAddressUtilities.mjs";
import { strict as assert } from "node:assert";

export
function isSubstringSubset(value: unknown, assertion: unknown): boolean {
    const typeofValue = typeof value;
    const typeofAssertion = typeof assertion;
    if (typeofValue !== typeofAssertion) {
        return false;
    }
    if (typeofValue === "string") {
        assert(typeof value === "string");
        assert(typeof assertion === "string");
        const a = assertion.trim().replace(/\s+/g, " ").toUpperCase();
        const v = value.trim().replace(/\s+/g, " ").toUpperCase();
        if (v.indexOf(a) <= -1) {
            return false;
        }
    }
    if (typeof value === "object") {
        assert(typeof assertion === "object");
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
function orAddressIsSubstringSubset(asserted: ORAddress, value: ORAddress): boolean {
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
function oRAddressSubstringElementsMatchTyped(
    assertion: ASN1Element,
    value: ASN1Element,
): boolean | undefined {
    const a = _decode_ORAddress(assertion);
    const v = _decode_ORAddress(value);
    return orAddressIsSubstringSubset(a, v);
}

oRAddressSubstringElementsMatchTyped satisfies TypedEquationFunction<ASN1Element>;

export
const oRAddressSubstringElementsMatch: Matcher = createEqualityMatcher(
    (el: ASN1Element): ASN1Element => el,
    oRAddressSubstringElementsMatchTyped,
);

export default oRAddressSubstringElementsMatch;
