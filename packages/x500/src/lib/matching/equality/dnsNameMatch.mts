import type { ASN1Element } from "@wildboar/asn1";
import { domainToUnicode } from "node:url";
import { _encode_UnboundedDirectoryString } from "packages/pki-stub/src/index.mjs";
import { _encodeUTF8String, BER } from "@wildboar/asn1/functional";
import caseIgnoreMatch from "./caseIgnoreMatch.mjs";
import type EqualityMatcher from "../../types/EqualityMatcher.mjs";

function compareLabels(a: string, b: string, wildcardAllowed: boolean): boolean {
    if (a === "*" || b === "*") {
        return wildcardAllowed;
    }
    const ads = _encodeUTF8String(a, BER);
    const bds = _encodeUTF8String(b, BER);
    return caseIgnoreMatch(ads, bds);
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
 */
export
const dnsNameMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    // I checked: this preserves asterisks and periods.
    const a = domainToUnicode(assertion.utf8String.trim());
    const v = domainToUnicode(value.utf8String.trim());
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
            if (!compareLabels(labelA, labelV, wildcardAllowed)) {
                return false;
            }
            break;
        }
        const labelA = a.slice(startA, nextDotA);
        const labelV = v.slice(startV, nextDotV);
        if (!compareLabels(labelA, labelV, wildcardAllowed)) {
            return false;
        }
        startA = nextDotA + 1;
        startV = nextDotV + 1;
        i++;
    }
    return true;
}

export default dnsNameMatch;
