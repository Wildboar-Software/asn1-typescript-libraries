import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import { dnsNamesEqual } from "./dnsNameMatch.mjs";

interface JidParts {
    local?: string;
    domain: string;
    resource?: string;
}

/**
 * Split a JID per IETF RFC 7622: `[ localpart "@" ] domainpart [ "/" resourcepart ]`.
 * The resourcepart may contain `/` and `@`; the domainpart is the last
 * component before any resource.
 */
function parseJid (raw: string): JidParts | undefined {
    const trimmed = raw.trim();
    if (!trimmed) {
        return undefined;
    }
    let rest = trimmed;
    let resource: string | undefined;
    const slash = rest.indexOf("/");
    if (slash >= 0) {
        resource = rest.slice(slash + 1);
        rest = rest.slice(0, slash);
        if (resource.length === 0) {
            return undefined;
        }
    }
    let local: string | undefined;
    const at = rest.lastIndexOf("@");
    if (at >= 0) {
        local = rest.slice(0, at);
        rest = rest.slice(at + 1);
        if (local.length === 0) {
            return undefined;
        }
    }
    if (!rest) {
        return undefined;
    }
    return { local, domain: rest, resource };
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.9.4 `jidMatch`.
 *
 * Equality of `Jid` after IETF RFC 7622 normalization. Domain,
 * localpart (if both present), and resourcepart (if both present)
 * must be the same format and identical octet-by-octet. Presence of
 * localpart and resourcepart must agree on both values. The
 * resourcepart is case-sensitive (OpaqueString); the localpart is
 * compared case-insensitively (UsernameCaseMapped). Invalid JIDs are
 * unequal rather than thrown.
 */
export
const jidMatch: EqualityMatcher = (
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
    const a = parseJid(aRaw);
    const v = parseJid(vRaw);
    if (!a || !v) {
        return false;
    }
    if (Boolean(a.local) !== Boolean(v.local)) {
        return false;
    }
    if (Boolean(a.resource) !== Boolean(v.resource)) {
        return false;
    }
    if (!dnsNamesEqual(a.domain, v.domain)) {
        return false;
    }
    if (
        (a.local !== undefined)
        && (a.local.toLowerCase() !== v.local!.toLowerCase())
    ) {
        return false;
    }
    if ((a.resource !== undefined) && (a.resource !== v.resource)) {
        return false;
    }
    return true;
}

export default jidMatch;
