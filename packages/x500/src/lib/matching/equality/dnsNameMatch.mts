import { ASN1CharactersError, type ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { domainToUnicode } from "node:url";
import { prepString } from "../../utils/prepString.mjs";
import { caseIgnoreMatchTyped } from "./caseIgnoreMatch.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_DEBUG,
    MATCH_FLAG_VALUE_NORMALIZED,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

const localDomainToUnicode = domainToUnicode;
const localCaseIgnoreMatchTyped = caseIgnoreMatchTyped;
const FLAG_VALUE_NORMALIZED = MATCH_FLAG_VALUE_NORMALIZED;
const FLAG_CONSTANT_TIME = MATCH_FLAG_CONSTANT_TIME;
const FLAG_DEBUG = MATCH_FLAG_DEBUG;

/**
 * @summary Whether a stored domain still needs `domainToUnicode`.
 * @description
 *
 * ASCII LDH names (`A–Z` / `a–z` / `0–9` / `-`, labels separated by
 * `.`) and a complete-label wildcard `*` already compare correctly
 * with `caseIgnoreMatch`. A-labels (`xn--…`), non-ASCII, spaces, and
 * other non-LDH characters still go through IDNA so U-labels and
 * invalid names keep their existing results.
 *
 * @param {string} domain Domain after `trim()`, before IDNA.
 * @returns {boolean} `true` iff `domainToUnicode` must still run.
 * @function
 * @author Cursor Grok 4.6
 */
export
function storedDnsNameNeedsIdna (domain: string): boolean {
    const len = domain.length;
    if (len === 0) {
        return true;
    }
    let labelStart = 0;
    for (let i = 0; i <= len; i++) {
        const c = (i === len) ? 46 : domain.charCodeAt(i);
        if (c === 46) {
            const labelLen = i - labelStart;
            if ((labelLen === 1) && (domain.charCodeAt(labelStart) === 42)) {
                labelStart = i + 1;
                continue;
            }
            if (labelLen >= 4) {
                const c0 = domain.charCodeAt(labelStart) | 32;
                const c1 = domain.charCodeAt(labelStart + 1) | 32;
                if (
                    (c0 === 120)
                    && (c1 === 110)
                    && (domain.charCodeAt(labelStart + 2) === 45)
                    && (domain.charCodeAt(labelStart + 3) === 45)
                ) {
                    return true;
                }
            }
            for (let j = labelStart; j < i; j++) {
                const cc = domain.charCodeAt(j);
                if (
                    !((cc >= 48) && (cc <= 57))
                    && !((cc >= 65) && (cc <= 90))
                    && !((cc >= 97) && (cc <= 122))
                    && (cc !== 45)
                ) {
                    return true;
                }
            }
            labelStart = i + 1;
            continue;
        }
        if (c > 127) {
            return true;
        }
    }
    return false;
}

/**
 * `domainToUnicode`, then prepare each label with `prepString`.
 * A leftmost `*` is kept so `dnsNameMatch` can still wildcard.
 * An empty name is `""`; a label that cannot be prepared throws.
 */
export
function prepareDnsAssertion (domain: string, el?: ASN1Element): string {
    const unicode = localDomainToUnicode(domain.trim());
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

/**
 * @summary Stored domain for label comparison.
 * @description
 *
 * `MATCH_FLAG_VALUE_NORMALIZED` keeps the stored string as-is.
 * Otherwise trim, then skip `domainToUnicode` for ASCII LDH / `*`.
 *
 * @param {string} stored Decoded stored domain.
 * @param {number} flags Match flags.
 * @returns {string} Domain to split into labels.
 * @function
 * @author Cursor Grok 4.6
 */
function storedDomainForMatch (stored: string, flags: number): string {
    if (flags & FLAG_VALUE_NORMALIZED) {
        return stored;
    }
    const trimmed = stored.trim();
    return storedDnsNameNeedsIdna(trimmed)
        ? localDomainToUnicode(trimmed)
        : trimmed;
}

function compareLabels (
    a: string,
    b: string,
    wildcardAllowed: boolean,
    flags: number = 0,
): boolean | undefined {
    if (a === "*" || b === "*") {
        return wildcardAllowed;
    }
    return localCaseIgnoreMatchTyped(a, b, undefined, flags);
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
 *  ASCII LDH names and a leftmost `*` skip `domainToUnicode`.
 *  `MATCH_FLAG_VALUE_NORMALIZED` skips IDNA on the stored value.
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
    const v = storedDomainForMatch(stored, flags);
    if (a === "" || v === "") {
        if (flags & FLAG_DEBUG) {
            console.error(
                "@wildboar/x500: debug: dnsNameMatch: empty or invalid domain name",
            );
        }
        return false;
    }
    const constantTime = Boolean(flags & FLAG_CONSTANT_TIME);
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
 * Decode the presented domain name without preparing it.
 */
export
function decodeDnsNameMatchAssertion (el: ASN1Element): string {
    return el.utf8String;
}

/**
 * Convert the presented domain name with `domainToUnicode` and prepare
 * each label, as described for `prepareDnsAssertion`.
 */
export
function normalizeDnsNameMatchAssertion (assertion: string, el?: ASN1Element): string {
    return prepareDnsAssertion(assertion, el);
}

/**
 * `dnsNameMatch` as a `Matcher`.
 * `MATCH_FLAG_ASSERTION_NORMALIZED` skips preparation of the assertion.
 */
export
const dnsNameMatch: Matcher = createEqualityMatcher(
    decodeDnsNameMatchAssertion,
    dnsNameMatchTyped,
    undefined,
    false,
    normalizeDnsNameMatchAssertion,
);

export default dnsNameMatch;
