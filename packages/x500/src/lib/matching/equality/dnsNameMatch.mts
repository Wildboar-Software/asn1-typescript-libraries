import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import { domainToASCII } from "node:url";

interface ParsedDomain {
    labels: string[];
    wildcard: boolean;
}

function parseDomain (raw: string): ParsedDomain | undefined {
    const trimmed = raw.trim();
    if (!trimmed) {
        return undefined;
    }
    const withoutDot = trimmed.endsWith(".") ? trimmed.slice(0, -1) : trimmed;
    if (!withoutDot) {
        return undefined;
    }
    const labels = withoutDot.split(".");
    if (labels.some((label) => label.length === 0)) {
        return undefined;
    }
    const wildIndices = labels.flatMap((label, index) => (label === "*" ? [ index ] : []));
    if (wildIndices.length > 1) {
        return undefined;
    }
    if ((wildIndices.length === 1) && (wildIndices[0] !== 0)) {
        return undefined;
    }
    const ascii: string[] = [];
    for (const label of labels) {
        if (label === "*") {
            ascii.push("*");
            continue;
        }
        let converted: string;
        try {
            converted = domainToASCII(label);
        } catch {
            return undefined;
        }
        if (!converted) {
            return undefined;
        }
        ascii.push(converted.toLowerCase());
    }
    return {
        labels: ascii,
        wildcard: wildIndices.length === 1,
    };
}

function remainingLabels (parsed: ParsedDomain, otherHasWildcard: boolean): string[] {
    if (parsed.wildcard || otherHasWildcard) {
        return parsed.labels.slice(1);
    }
    return parsed.labels;
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.9.2 label-for-label DNS equality,
 * including a single leftmost wildcard. Invalid or multi-wildcard names
 * are unequal rather than thrown.
 */
export
function dnsNamesEqual (assertion: string, value: string): boolean {
    const a = parseDomain(assertion);
    const v = parseDomain(value);
    if (!a || !v) {
        return false;
    }
    const aRest = remainingLabels(a, v.wildcard);
    const vRest = remainingLabels(v, a.wildcard);
    if (aRest.length !== vRest.length) {
        return false;
    }
    return aRest.every((label, index) => label === vRest[index]);
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
 * `example.com`. More than one wildcard, or a wildcard that is not
 * the leftmost label, is FALSE even if both values are identical.
 */
export
const dnsNameMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    try {
        return dnsNamesEqual(assertion.utf8String, value.utf8String);
    } catch {
        return false;
    }
}

export default dnsNameMatch;
