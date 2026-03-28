import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import { domainToASCII } from "node:url";

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
