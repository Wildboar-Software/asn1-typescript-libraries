import type { ASN1Element } from "@wildboar/asn1";
import { dnsNameMatchTyped, prepareDnsAssertion } from "./dnsNameMatch.mjs";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

export
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

function decodeJid (el: ASN1Element): JidParts {
    const parsed = parseJid(el.utf8String);
    if (!parsed) {
        throw new Error("jidMatch assertion is not a JID");
    }
    if (parsed.local !== undefined) {
        parsed.local = parsed.local.toLowerCase();
    }
    parsed.domain = prepareDnsAssertion(parsed.domain, el);
    return parsed;
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.9.4 `jidMatch`.
 *
 * Equality of `Jid` after IETF RFC 7622 normalization. Domain,
 * localpart (if both present), and resourcepart (if both present)
 * must be the same format and identical octet-by-octet. Presence of
 * localpart and resourcepart must agree on both values. The
 * resourcepart is case-sensitive (OpaqueString); the localpart is
 * compared case-insensitively (UsernameCaseMapped). An assertion
 * that is not a JID throws. A stored value that is not a JID is FALSE.
 *
 * @param assertion Presented JID, already parsed. The localpart is
 *  lower-case and the domain is prepared for `dnsNameMatch`.
 * @param value Stored JID, or that JID already decoded.
 */
export
function jidMatchTyped (
    assertion: JidParts,
    value: string | ASN1Element,
): boolean | undefined {
    const stored = typeof value === "string" ? value : value.utf8String;
    const v = parseJid(stored);
    if (!v) {
        return false;
    }
    if (Boolean(assertion.local) !== Boolean(v.local)) {
        return false;
    }
    if (Boolean(assertion.resource) !== Boolean(v.resource)) {
        return false;
    }
    const domains = dnsNameMatchTyped(assertion.domain, v.domain);
    if (domains !== true) {
        return domains;
    }
    if (
        (assertion.local !== undefined)
        && (assertion.local !== v.local!.toLowerCase())
    ) {
        return false;
    }
    if ((assertion.resource !== undefined) && (assertion.resource !== v.resource)) {
        return false;
    }
    return true;
}

jidMatchTyped satisfies TypedEquationFunction<JidParts>;

/**
 * `jidMatch` as a `Matcher`.
 */
export
const jidMatch: Matcher = createEqualityMatcher(
    decodeJid,
    jidMatchTyped,
);

export default jidMatch;
