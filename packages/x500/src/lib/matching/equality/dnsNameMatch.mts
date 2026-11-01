import { ASN1CharactersError, type ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { domainToUnicode } from "node:url";
import { prepString } from "../../utils/prepString.mjs";
import { caseIgnoreMatchTyped } from "./caseIgnoreMatch.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

/**
 * `domainToUnicode`, then prepare each label with `prepString`.
 * A leftmost `*` is kept so `dnsNameMatch` can still wildcard.
 * An empty name is `""`; a label that cannot be prepared throws.
 */
export
function prepareDnsAssertion (domain: string, el?: ASN1Element): string {
    const unicode = domainToUnicode(domain.trim());
    if (unicode === "") {
        return "";
    }
    const labels = unicode.split(".");
    const prepared = new Array<string>(labels.length);
    for (let i = 0; i < labels.length; i++) {
        const label = labels[i];
        if (label === "*" && i === 0) {
            prepared[i] = "*";
            continue;
        }
        const folded = prepString(label, { caseFold: true });
        if (folded === undefined) {
            throw new ASN1CharactersError(
                "dnsNameMatch assertion failed string preparation",
                el,
            );
        }
        prepared[i] = folded;
    }
    return prepared.join(".");
}

function compareLabels (
    a: string,
    b: string,
    wildcardAllowed: boolean,
    flags: number,
): boolean | undefined {
    if (a === "*" || b === "*") {
        return wildcardAllowed;
    }
    return caseIgnoreMatchTyped(a, b, undefined, flags);
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
 * @param assertion Presented domain, already converted with
 *  `domainToUnicode` and with each label prepared.
 * @param value Stored domain, or that domain already decoded.
 */
export
function dnsNameMatchTyped (
    assertion: string,
    value: string | ASN1Element,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const stored = typeof value === "string" ? value : value.utf8String;
    // The assertion is prepared once. `domainToUnicode` preserves `*` and `.`.
    const a = assertion;
    const v = domainToUnicode(stored.trim());
    if (a === "" || v === "") {
        return false;
    }
    const constantTime = Boolean(flags & MATCH_FLAG_CONSTANT_TIME);
    let matched = true;
    let sawUndefined = false;

    let i = 0;
    let startA = 0;
    let startV = 0;
    while (i < 255) {
        const wildcardAllowed: boolean = (
            (startA === 0)
            && (startV === 0)
        );
        const nextDotA = a.indexOf(".", startA);
        const nextDotV = v.indexOf(".", startV);
        if (nextDotA === -1) {
            const labelA = a.slice(startA);
            const labelV = v.slice(startV);
            const labels = compareLabels(labelA, labelV, wildcardAllowed, flags);
            if (labels === undefined) {
                sawUndefined = true;
            } else if (!labels) {
                matched = false;
            }
            break;
        }
        const labelA = a.slice(startA, nextDotA);
        const labelV = v.slice(startV, nextDotV);
        const labels = compareLabels(labelA, labelV, wildcardAllowed, flags);
        if (labels !== true) {
            if (!constantTime) {
                return labels;
            }
            if (labels === undefined) {
                sawUndefined = true;
            } else {
                matched = false;
            }
        }
        startA = nextDotA + 1;
        startV = nextDotV === -1 ? v.length : nextDotV + 1;
        i++;
    }
    if (sawUndefined) {
        return undefined;
    }
    return matched;
}

dnsNameMatchTyped satisfies TypedEquationFunction<string>;

/**
 * `dnsNameMatch` as a `Matcher`.
 */
export
const dnsNameMatch: Matcher = createEqualityMatcher(
    (el) => prepareDnsAssertion(el.utf8String, el),
    dnsNameMatchTyped,
);

export default dnsNameMatch;
