import type { ASN1Element } from "@wildboar/asn1";
import { domainToUnicode } from "node:url";
import { prepString } from "../../utils/prepString.mjs";
import { caseIgnoreMatchTyped } from "./caseIgnoreMatch.mjs";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

function compareLabels (a: string, b: string, wildcardAllowed: boolean): boolean | undefined {
    if (a === "*" || b === "*") {
        return wildcardAllowed;
    }
    const prepared = prepString(a, { caseFold: true });
    if (prepared === undefined) {
        return undefined;
    }
    return caseIgnoreMatchTyped(prepared, b);
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.9.2 `dnsNameMatch`.
 *
 * Label-for-label equality of `DomainName`. Label counts must
 * match. Same-type labels use `caseIgnoreMatch`. A U-label is
 * converted to an A-label before comparison with an A-label. Mixing
 * a clause 6.2.15 item a) label with an A-label or U-label is FALSE.
 *
 * At most one wildcard `*` is allowed, and only as the leftmost
 * label; remaining labels then match as above. `*.example.com`
 * matches `a.example.com` but not `a.b.example.com` or
 * `example.com`.
 *
 * @param assertion Presented domain.
 * @param value Stored domain, or that domain already decoded.
 */
export
function dnsNameMatchTyped (
    assertion: string,
    value: string | ASN1Element,
): boolean | undefined {
    const stored = typeof value === "string" ? value : value.utf8String;
    // I checked: this preserves asterisks and periods.
    const a = domainToUnicode(assertion.trim());
    const v = domainToUnicode(stored.trim());
    if (a === "" || v === "") {
        return false;
    }

    let i = 0;
    let startA = 0;
    let startV = 0;
    while (i < 255) {
        const wildcardAllowed: boolean = (
            (startA === 0)
            && (startV === 0)
        );
        const nextDotA = a.indexOf('.', startA);
        const nextDotV = v.indexOf('.', startV);
        if (nextDotA === -1) {
            const labelA = a.slice(startA);
            const labelV = v.slice(startV);
            const labels = compareLabels(labelA, labelV, wildcardAllowed);
            if (labels !== true) {
                return labels;
            }
            break;
        }
        const labelA = a.slice(startA, nextDotA);
        const labelV = v.slice(startV, nextDotV);
        const labels = compareLabels(labelA, labelV, wildcardAllowed);
        if (labels !== true) {
            return labels;
        }
        startA = nextDotA + 1;
        startV = nextDotV + 1;
        i++;
    }
    return true;
}

dnsNameMatchTyped satisfies TypedEquationFunction<string>;

/**
 * `dnsNameMatch` as a `Matcher`.
 */
export
const dnsNameMatch: Matcher = createEqualityMatcher(
    (el) => el.utf8String,
    dnsNameMatchTyped,
);

export default dnsNameMatch;
