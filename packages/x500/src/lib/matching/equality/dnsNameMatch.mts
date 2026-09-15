import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import { domainToASCII } from "node:url";

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
 */
export
const dnsNameMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    // We convert to ASCII because the correct DNS normalization is only
    // ASCII-lowercasing, not Unicode lowercasing.
    const a: string = domainToASCII(assertion.utf8String).toLowerCase();
    const v: string = domainToASCII(value.utf8String).toLowerCase();
    if (a === v) {
        return true;
    }
    if (!a.startsWith("*.") && !v.startsWith("*.")) {
        // The wildcard must be the leftmost label.
        // It is not clear, but I think the wildcard MUST be the whole label.
        return false;
    }
    const alabels = a.split(".").slice(1);
    const vlabels = v.split(".").slice(1);
    if (alabels.length !== vlabels.length) {
        return false;
    }
    const len = alabels.length;
    for (let i = 0; i < len; i++) {
        const alabel = alabels[i];
        const vlabel = vlabels[i];
        if (alabel !== vlabel) {
            return false;
        }
    }
    return true;
}

export default dnsNameMatch;
