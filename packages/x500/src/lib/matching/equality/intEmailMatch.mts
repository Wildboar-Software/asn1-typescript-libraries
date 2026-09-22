import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import { prepString } from "../../utils/prepString.mjs";
import { dnsNamesEqual } from "./dnsNameMatch.mjs";

function splitIntEmail (raw: string): { local: string; domain: string } | undefined {
    const trimmed = raw.trim();
    const at = trimmed.lastIndexOf("@");
    if ((at <= 0) || (at === trimmed.length - 1)) {
        return undefined;
    }
    if (trimmed.indexOf("@") !== at) {
        return undefined;
    }
    return {
        local: trimmed.slice(0, at),
        domain: trimmed.slice(at + 1),
    };
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.9.3 `intEmailMatch`.
 *
 * Equality of `IntEmail`: both local-part and domain-part must
 * match. The local-part uses `caseIgnoreMatch`; the domain-part
 * uses `dnsNameMatch` (clause 8.9.2).
 */
export
const intEmailMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    let aRaw: string;
    let vRaw: string;
    try {
        aRaw = assertion.utf8String;
        vRaw = value.utf8String;
    } catch {
        return false;
    }
    const a = splitIntEmail(aRaw);
    const v = splitIntEmail(vRaw);
    if (!a || !v) {
        return false;
    }
    const localA = prepString(a.local)?.toLowerCase();
    const localV = prepString(v.local)?.toLowerCase();
    if ((localA === undefined) || (localV === undefined) || (localA !== localV)) {
        return false;
    }
    return dnsNamesEqual(a.domain, v.domain);
}

export default intEmailMatch;
