import type { CharacterStringInput } from "../readValue.mjs";
import { readUTF8String } from "../readValue.mjs";
import { domainToUnicode } from "node:url";
import { caseIgnoreMatchTyped } from "./caseIgnoreMatch.mjs";

function compareLabels (a: string, b: string, wildcardAllowed: boolean): boolean {
    if (a === "*" || b === "*") {
        return wildcardAllowed;
    }
    return caseIgnoreMatchTyped(a, b);
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
 * Each argument may be an `ASN1Element` or a domain string.
 */
export
function dnsNameMatch (
    assertion: CharacterStringInput,
    value: CharacterStringInput,
): boolean {
    return dnsNameMatchTyped(readUTF8String(assertion), readUTF8String(value));
}

/**
 * `dnsNameMatch` on two domain names.
 *
 * @param assertion Presented domain.
 * @param value Stored domain.
 * @returns `true` when the labels match.
 */
export
function dnsNameMatchTyped (assertion: string, value: string): boolean {
    // I checked: this preserves asterisks and periods.
    const a = domainToUnicode(assertion.trim());
    const v = domainToUnicode(value.trim());
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
